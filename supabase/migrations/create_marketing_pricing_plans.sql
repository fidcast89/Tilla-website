-- Create marketing_pricing_plans table for website pricing display
-- Supports both basic pricing (Option A) and regional pricing (Option B)

CREATE TABLE IF NOT EXISTS marketing_pricing_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Basic plan information
  tier VARCHAR(50) NOT NULL,
  display_name VARCHAR(100) NOT NULL,
  description TEXT,
  
  -- Base pricing in USD (Option A)
  base_monthly_price DECIMAL(10, 2),
  base_yearly_price DECIMAL(10, 2),
  
  -- Regional pricing (Option B)
  region VARCHAR(10), -- 'US', 'KE', 'UG', 'RW', etc. NULL for base pricing
  regional_monthly_price DECIMAL(10, 2),
  regional_yearly_price DECIMAL(10, 2),
  currency_code VARCHAR(3), -- 'USD', 'KES', 'UGX', 'RWF'
  
  -- Features and metadata
  features JSONB, -- Array of feature strings
  popular BOOLEAN DEFAULT false,
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true,
  
  -- Constraints
  CONSTRAINT valid_pricing CHECK (
    (region IS NULL AND (base_monthly_price IS NOT NULL OR base_yearly_price IS NOT NULL)) OR
    (region IS NOT NULL AND (regional_monthly_price IS NOT NULL OR regional_yearly_price IS NOT NULL)) OR
    (tier = 'enterprise' AND region IS NULL)
  )
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_marketing_pricing_plans_tier ON marketing_pricing_plans(tier);
CREATE INDEX IF NOT EXISTS idx_marketing_pricing_plans_region ON marketing_pricing_plans(region);
CREATE INDEX IF NOT EXISTS idx_marketing_pricing_plans_active ON marketing_pricing_plans(is_active);

-- Insert base pricing (USD) - Option A
INSERT INTO marketing_pricing_plans (
  tier, display_name, description, base_monthly_price, base_yearly_price, 
  currency_code, features, popular, is_active
) VALUES
  (
    'free',
    'Free',
    'Perfect for getting started',
    0,
    0,
    'USD',
    '["Up to 100 products", "Basic sales tracking", "1 user", "Email support"]'::jsonb,
    false,
    true
  ),
  (
    'starter',
    'Starter',
    'For small shops',
    9.99,
    99.99,
    'USD',
    '["Up to 1,000 products", "Advanced sales tracking", "Up to 3 users", "Inventory management", "Customer profiles", "Email & WhatsApp support"]'::jsonb,
    false,
    true
  ),
  (
    'growth',
    'Growth',
    'For growing businesses',
    24.99,
    249.99,
    'USD',
    '["Unlimited products", "Advanced analytics", "Up to 10 users", "Full inventory management", "Customer credit system", "Online sales", "Priority support"]'::jsonb,
    true,
    true
  ),
  (
    'enterprise',
    'Enterprise',
    'Custom solution for large teams',
    NULL,
    NULL,
    'USD',
    '["Everything in Growth", "Unlimited users", "Custom integrations", "Dedicated support", "Advanced reporting"]'::jsonb,
    false,
    true
  );

-- Insert regional pricing (Option B) - Kenya
INSERT INTO marketing_pricing_plans (
  tier, display_name, description, region, regional_monthly_price, regional_yearly_price,
  currency_code, features, popular, is_active
) VALUES
  (
    'starter',
    'Starter',
    'For small shops',
    'KE',
    1199,
    11999,
    'KES',
    '["Up to 1,000 products", "Advanced sales tracking", "Up to 3 users", "Inventory management", "Customer profiles", "Email & WhatsApp support"]'::jsonb,
    false,
    true
  ),
  (
    'growth',
    'Growth',
    'For growing businesses',
    'KE',
    2999,
    29999,
    'KES',
    '["Unlimited products", "Advanced analytics", "Up to 10 users", "Full inventory management", "Customer credit system", "Online sales", "Priority support"]'::jsonb,
    true,
    true
  );

-- Insert regional pricing (Option B) - Uganda
INSERT INTO marketing_pricing_plans (
  tier, display_name, description, region, regional_monthly_price, regional_yearly_price,
  currency_code, features, popular, is_active
) VALUES
  (
    'starter',
    'Starter',
    'For small shops',
    'UG',
    36999,
    369999,
    'UGX',
    '["Up to 1,000 products", "Advanced sales tracking", "Up to 3 users", "Inventory management", "Customer profiles", "Email & WhatsApp support"]'::jsonb,
    false,
    true
  ),
  (
    'growth',
    'Growth',
    'For growing businesses',
    'UG',
    91999,
    919999,
    'UGX',
    '["Unlimited products", "Advanced analytics", "Up to 10 users", "Full inventory management", "Customer credit system", "Online sales", "Priority support"]'::jsonb,
    true,
    true
  );

-- Insert regional pricing (Option B) - Rwanda
INSERT INTO marketing_pricing_plans (
  tier, display_name, description, region, regional_monthly_price, regional_yearly_price,
  currency_code, features, popular, is_active
) VALUES
  (
    'starter',
    'Starter',
    'For small shops',
    'RW',
    10999,
    109999,
    'RWF',
    '["Up to 1,000 products", "Advanced sales tracking", "Up to 3 users", "Inventory management", "Customer profiles", "Email & WhatsApp support"]'::jsonb,
    false,
    true
  ),
  (
    'growth',
    'Growth',
    'For growing businesses',
    'RW',
    27499,
    274999,
    'RWF',
    '["Unlimited products", "Advanced analytics", "Up to 10 users", "Full inventory management", "Customer credit system", "Online sales", "Priority support"]'::jsonb,
    true,
    true
  );

-- Enable RLS (Row Level Security)
ALTER TABLE marketing_pricing_plans ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
DROP POLICY IF EXISTS "Allow public read access" ON marketing_pricing_plans;
CREATE POLICY "Allow public read access" ON marketing_pricing_plans
  FOR SELECT USING (is_active = true);

