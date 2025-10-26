import { createClient } from '@supabase/supabase-js'

export interface PricingPlan {
  id: string
  tier: string
  display_name: string
  description: string
  base_monthly_price: number | null
  base_yearly_price: number | null
  region: string | null
  regional_monthly_price: number | null
  regional_yearly_price: number | null
  currency_code: string
  features: string[]
  popular: boolean
  is_active: boolean
}

export interface PricingData {
  basePricing: PricingPlan[]
  regionalPricing: Record<string, PricingPlan[]>
}

class PricingService {
  private supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  )

  /**
   * Fetch all active pricing plans
   */
  async getAllPricingPlans(): Promise<PricingPlan[]> {
    try {
      const { data, error } = await this.supabase
        .from('marketing_pricing_plans')
        .select('*')
        .eq('is_active', true)
        .order('tier', { ascending: true })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching pricing plans:', error)
      return []
    }
  }

  /**
   * Fetch base pricing (USD) - Option A
   * Ordered: free, starter, growth, enterprise
   */
  async getBasePricing(): Promise<PricingPlan[]> {
    try {
      const { data, error } = await this.supabase
        .from('marketing_pricing_plans')
        .select('*')
        .is('region', null)
        .eq('is_active', true)

      if (error) throw error

      // Sort by tier order: free, starter, growth, enterprise
      const tierOrder = { free: 0, starter: 1, growth: 2, enterprise: 3 }
      return (data || []).sort((a, b) =>
        (tierOrder[a.tier as keyof typeof tierOrder] ?? 999) -
        (tierOrder[b.tier as keyof typeof tierOrder] ?? 999)
      )
    } catch (error) {
      console.error('Error fetching base pricing:', error)
      return []
    }
  }

  /**
   * Fetch regional pricing for a specific region - Option B
   */
  async getRegionalPricing(region: string): Promise<PricingPlan[]> {
    try {
      const { data, error } = await this.supabase
        .from('marketing_pricing_plans')
        .select('*')
        .eq('region', region)
        .eq('is_active', true)
        .order('tier', { ascending: true })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error(`Error fetching pricing for region ${region}:`, error)
      return []
    }
  }

  /**
   * Fetch pricing for a specific tier
   */
  async getPricingByTier(tier: string, region?: string): Promise<PricingPlan | null> {
    try {
      let query = this.supabase
        .from('marketing_pricing_plans')
        .select('*')
        .eq('tier', tier)
        .eq('is_active', true)

      if (region) {
        query = query.eq('region', region)
      } else {
        query = query.is('region', null)
      }

      const { data, error } = await query.single()

      if (error) throw error
      return data || null
    } catch (error) {
      console.error(`Error fetching pricing for tier ${tier}:`, error)
      return null
    }
  }

  /**
   * Fetch all pricing data (both base and regional)
   */
  async getAllPricingData(): Promise<PricingData> {
    try {
      const allPlans = await this.getAllPricingPlans()

      const basePricing = allPlans.filter(p => p.region === null)
      const regionalPricing: Record<string, PricingPlan[]> = {}

      // Group regional pricing by region
      allPlans.forEach(plan => {
        if (plan.region) {
          if (!regionalPricing[plan.region]) {
            regionalPricing[plan.region] = []
          }
          regionalPricing[plan.region].push(plan)
        }
      })

      return {
        basePricing,
        regionalPricing,
      }
    } catch (error) {
      console.error('Error fetching all pricing data:', error)
      return {
        basePricing: [],
        regionalPricing: {},
      }
    }
  }

  /**
   * Get pricing for a specific region, fallback to USD if not available
   */
  async getPricingForRegion(region: string): Promise<PricingPlan[]> {
    const regionalPricing = await this.getRegionalPricing(region)

    // If regional pricing exists, return it
    if (regionalPricing.length > 0) {
      return regionalPricing
    }

    // Otherwise, fallback to base pricing (USD)
    return this.getBasePricing()
  }

  /**
   * Get all features for comparison table grouped by category
   */
  async getAllFeaturesForComparison(): Promise<any[]> {
    try {
      const { data, error } = await this.supabase
        .from('comparison_features')
        .select('*')
        .order('sort_order', { ascending: true })

      if (error) throw error
      return data || []
    } catch (error) {
      console.error('Error fetching features for comparison:', error)
      return []
    }
  }

  /**
   * Get features grouped by category for better organization
   */
  async getFeaturesGroupedByCategory(): Promise<Record<string, any[]>> {
    try {
      const features = await this.getAllFeaturesForComparison()

      // Group features by category
      const grouped = features.reduce((acc, feature) => {
        const category = feature.feature_category
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(feature)
        return acc
      }, {} as Record<string, any[]>)

      return grouped
    } catch (error) {
      console.error('Error grouping features by category:', error)
      return {}
    }
  }
}

export const pricingService = new PricingService()

