import { createClient } from '@supabase/supabase-js'

export interface ContactSubmission {
  first_name: string
  last_name: string
  email: string
  phone: string
  subject: string
  message: string
}

class ContactService {
  private supabase: ReturnType<typeof createClient> | null = null

  private getSupabase() {
    if (!this.supabase) {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!url || !key) {
        throw new Error('Supabase environment variables are not configured')
      }

      this.supabase = createClient(url, key)
    }
    return this.supabase
  }

  /**
   * Submit a contact form
   */
  async submitContactForm(data: ContactSubmission): Promise<{ success: boolean; error?: string }> {
    try {
      // Validate required fields
      if (!data.first_name?.trim()) {
        return { success: false, error: 'First name is required' }
      }
      if (!data.last_name?.trim()) {
        return { success: false, error: 'Last name is required' }
      }
      if (!data.email?.trim()) {
        return { success: false, error: 'Email is required' }
      }
      if (!data.phone?.trim()) {
        return { success: false, error: 'Phone number is required' }
      }
      if (!data.subject?.trim()) {
        return { success: false, error: 'Subject is required' }
      }
      if (!data.message?.trim()) {
        return { success: false, error: 'Message is required' }
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        return { success: false, error: 'Please enter a valid email address' }
      }

      // Insert into Supabase
      const { error } = await this.getSupabase()
        .from('contact_submissions')
        .insert([
          {
            first_name: data.first_name.trim(),
            last_name: data.last_name.trim(),
            email: data.email.trim(),
            phone: data.phone.trim(),
            subject: data.subject.trim(),
            message: data.message.trim(),
            created_at: new Date().toISOString(),
          },
        ])

      if (error) {
        console.error('Error submitting contact form:', error)
        return { success: false, error: 'Failed to submit form. Please try again.' }
      }

      return { success: true }
    } catch (error) {
      console.error('Error submitting contact form:', error)
      return { success: false, error: 'An unexpected error occurred. Please try again.' }
    }
  }
}

export const contactService = new ContactService()

