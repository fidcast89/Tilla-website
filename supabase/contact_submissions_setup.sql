-- ============================================
-- Contact Submissions Table Setup
-- ============================================
-- This SQL creates the contact_submissions table
-- and sets up Row Level Security (RLS) policies
-- ============================================

-- 1. Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  subject VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  read BOOLEAN DEFAULT FALSE
);

-- 2. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
  ON contact_submissions(email);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS policies

-- Allow anyone to insert (for public contact form)
CREATE POLICY "Allow public inserts on contact_submissions"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Allow only authenticated users to read
CREATE POLICY "Allow authenticated users to read contact_submissions"
  ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Allow only authenticated users to update (mark as read)
CREATE POLICY "Allow authenticated users to update contact_submissions"
  ON contact_submissions
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- 5. Grant permissions
GRANT INSERT ON contact_submissions TO anon;
GRANT SELECT, UPDATE ON contact_submissions TO authenticated;

-- ============================================
-- Verification
-- ============================================
-- Run this to verify the table was created:
-- SELECT * FROM contact_submissions;
-- 
-- Run this to verify RLS policies:
-- SELECT * FROM pg_policies WHERE tablename = 'contact_submissions';
-- ============================================

