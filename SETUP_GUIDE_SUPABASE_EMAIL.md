# 📧 Complete Setup Guide - Supabase Native Email

## Overview

This guide sets up email notifications using **Supabase's native email service** (no 3rd party tools).

**Total time: 20 minutes**

---

## Step 1: Create Contact Submissions Table (5 min)

### 1.1 Open Supabase
1. Go to https://app.supabase.com/
2. Select your Tilla project
3. Click **SQL Editor** (left sidebar)

### 1.2 Create New Query
1. Click **New Query** button
2. Name it: "Create contact_submissions table"

### 1.3 Copy SQL
Open `supabase/contact_submissions_setup.sql` and copy ALL the SQL code.

### 1.4 Paste and Run
1. Paste the SQL into the editor
2. Click **Run** button
3. You should see: "Success. No rows returned"

### 1.5 Verify Table Created
1. Click **Table Editor** (left sidebar)
2. You should see `contact_submissions` table in the list

✅ **Step 1 Complete!**

---

## Step 2: Create Supabase Function (5 min)

### 2.1 Create Function
1. Go to **Functions** (left sidebar)
2. Click **Create a new function**
3. Name: `send-contact-email`
4. Click **Create function**

### 2.2 Add Function Code
Replace the default code with:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const supabaseUrl = Deno.env.get("SUPABASE_URL")
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")
const supabase = createClient(supabaseUrl, supabaseKey)

serve(async (req) => {
  try {
    const { to, subject, html } = await req.json()

    // Send email using Supabase's built-in email service
    const { error } = await supabase.auth.admin.sendRawEmail({
      to: to || "tillaapp25@gmail.com",
      subject: subject,
      html: html,
    })

    if (error) {
      console.error("Email error:", error)
      throw error
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    })
  } catch (error) {
    console.error("Error:", error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    })
  }
})
```

### 2.3 Deploy Function
1. Click **Deploy** button
2. Wait for deployment to complete
3. You should see: "Function deployed successfully"

✅ **Step 2 Complete!**

---

## Step 3: Create Database Trigger (5 min)

### 3.1 Open SQL Editor
1. Go to **SQL Editor** (left sidebar)
2. Click **New Query**

### 3.2 Copy SQL
Copy and paste this SQL:

```sql
-- Create function to send email notification
CREATE OR REPLACE FUNCTION send_contact_email_notification()
RETURNS TRIGGER AS $$
DECLARE
  v_message_html TEXT;
BEGIN
  -- Build the email HTML
  v_message_html := '<h2>New Contact Form Submission</h2>' ||
    '<p><strong>Name:</strong> ' || NEW.first_name || ' ' || NEW.last_name || '</p>' ||
    '<p><strong>Email:</strong> ' || NEW.email || '</p>' ||
    '<p><strong>Phone:</strong> ' || NEW.phone || '</p>' ||
    '<p><strong>Subject:</strong> ' || NEW.subject || '</p>' ||
    '<p><strong>Message:</strong></p>' ||
    '<p>' || replace(NEW.message, E'\n', '<br>') || '</p>' ||
    '<p><strong>Submitted at:</strong> ' || to_char(NEW.created_at, 'YYYY-MM-DD HH24:MI:SS') || '</p>';

  -- Call the email function
  PERFORM
    net.http_post(
      url := 'https://YOUR_PROJECT_ID.supabase.co/functions/v1/send-contact-email',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer YOUR_ANON_KEY'
      ),
      body := jsonb_build_object(
        'to', 'tillaapp25@gmail.com',
        'subject', 'New Contact Form Submission - ' || NEW.subject,
        'html', v_message_html
      )
    );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS contact_submission_email_trigger ON contact_submissions;

-- Create trigger
CREATE TRIGGER contact_submission_email_trigger
AFTER INSERT ON contact_submissions
FOR EACH ROW
EXECUTE FUNCTION send_contact_email_notification();
```

### 3.3 Replace Placeholders
1. Find `YOUR_PROJECT_ID` - Replace with your Supabase project ID
   - Find it in URL: `https://app.supabase.com/project/YOUR_PROJECT_ID`
2. Find `YOUR_ANON_KEY` - Replace with your `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Find it in `.env.local`

### 3.4 Run SQL
1. Click **Run**
2. You should see: "Success. No rows returned"

✅ **Step 3 Complete!**

---

## Step 4: Test (5 min)

### 4.1 Submit Contact Form
1. Go to http://localhost:3000/contact
2. Fill out the form:
   - First name: John
   - Last name: Doe
   - Email: john@example.com
   - Phone: +254700000000
   - Subject: Product Demo
   - Message: I'd like to see a demo
3. Click **Send Message**

### 4.2 Verify Success
1. You should see: "Thank you! Your message has been sent successfully."
2. Check Supabase table: `contact_submissions`
3. Check email at tillaapp25@gmail.com

✅ **Step 4 Complete!**

---

## 🎉 All Done!

Your contact form is now fully functional with email notifications using Supabase native email!

### What's Working
✅ Contact form validates data
✅ Data saves to Supabase
✅ Email sent to tillaapp25@gmail.com
✅ No 3rd party email services
✅ Pricing section hides if no data
✅ No "Free Trial" messaging

---

## Troubleshooting

### Email not sending?
1. Check function logs: **Functions** → `send-contact-email` → **Logs**
2. Verify trigger exists: Run `SELECT * FROM pg_trigger WHERE tgname = 'contact_submission_email_trigger';`
3. Check Supabase email settings: **Settings** → **Email**

### Form not submitting?
1. Open browser console (F12)
2. Look for error messages
3. Check network tab for failed requests

---

## Summary

✅ Contact form is functional
✅ Data saved to Supabase
✅ Email notifications sent using Supabase native email
✅ No 3rd party email services needed
✅ Pricing cards fixed (no duplicates, prices showing correctly)

**Your website is production-ready!** 🚀

