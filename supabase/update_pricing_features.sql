-- Update marketing_pricing_plans with accurate features from Flutter app
-- Based on subscription_providers.dart feature gating logic
-- NOTE: These are KEY DIFFERENTIATING features for pricing cards only
-- Complete feature list is in the compare section

-- Update Free tier features (key differentiators)
UPDATE marketing_pricing_plans
SET features = '[
  "Up to 50 products",
  "1 user account",
  "Basic inventory",
  "Community support"
]'::jsonb
WHERE tier = 'free' AND region IS NULL;

-- Update Starter tier features (key differentiators)
UPDATE marketing_pricing_plans
SET features = '[
  "Up to 500 products",
  "2 user accounts",
  "AI product creation",
  "Analytics access",
  "Email support"
]'::jsonb
WHERE tier = 'starter' AND region IS NULL;

-- Update Growth tier features (key differentiators)
UPDATE marketing_pricing_plans
SET features = '[
  "Up to 2,000 products",
  "5 user accounts",
  "Unlimited branches",
  "Suppliers management",
  "Income statements",
  "Advanced reports",
  "Priority support"
]'::jsonb
WHERE tier = 'growth' AND region IS NULL;

-- Update Enterprise tier features and price (key differentiators)
UPDATE marketing_pricing_plans
SET
  features = '[
    "Unlimited products",
    "Unlimited users",
    "Unlimited branches",
    "White-label options",
    "Custom integrations",
    "Dedicated account manager",
    "Competition insights"
  ]'::jsonb,
  base_monthly_price = 49.99,
  base_yearly_price = 499.99
WHERE tier = 'enterprise' AND region IS NULL;

-- Drop old table if it exists
DROP TABLE IF EXISTS comparison_features CASCADE;

-- Create comparison_features table with flexible value storage
-- Instead of boolean, we store actual values (e.g., "50", "500", "Unlimited", "Yes", "No", etc.)
CREATE TABLE comparison_features (
  feature_name VARCHAR(255) NOT NULL PRIMARY KEY,
  feature_category VARCHAR(100) NOT NULL,
  free_value VARCHAR(255),
  starter_value VARCHAR(255),
  growth_value VARCHAR(255),
  enterprise_value VARCHAR(255),
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- CATEGORY: Product Management
INSERT INTO comparison_features (feature_name, feature_category, free_value, starter_value, growth_value, enterprise_value, sort_order) VALUES
('Product Limit', 'Product Management', '50', '500', '2,000', 'Unlimited', 1),
('Inventory Tracking', 'Product Management', '—', 'Basic', 'Advanced', 'Advanced', 2),
('Suppliers Management', 'Product Management', '—', '—', '✓', '✓', 3),
('AI Product Creation', 'Product Management', '—', '✓', '✓', '✓', 4);

-- CATEGORY: User & Access Management
INSERT INTO comparison_features (feature_name, feature_category, free_value, starter_value, growth_value, enterprise_value, sort_order) VALUES
('User Accounts', 'User & Access Management', '1', '2', '5', 'Unlimited', 10),
('Branches/Locations', 'User & Access Management', '1', '1', 'Unlimited', 'Unlimited', 11),
('Multi-Branch Support', 'User & Access Management', '—', '—', '✓', '✓', 12),
('Dedicated Account Manager', 'User & Access Management', '—', '—', '—', '✓', 13),
('White-Label Options', 'User & Access Management', '—', '—', '—', '✓', 14),
('Custom Integrations', 'User & Access Management', '—', '—', '—', '✓', 15);

-- CATEGORY: Sales & Transactions
INSERT INTO comparison_features (feature_name, feature_category, free_value, starter_value, growth_value, enterprise_value, sort_order) VALUES
('Basic Sales Tracking', 'Sales & Transactions', '✓', '✓', '✓', '✓', 20),
('Credit Sales Tracking', 'Sales & Transactions', '—', '✓', '✓', '✓', 21),
('Social Media Posting', 'Sales & Transactions', '—', '—', '✓', '✓', 22);

-- CATEGORY: Analytics & Reporting
INSERT INTO comparison_features (feature_name, feature_category, free_value, starter_value, growth_value, enterprise_value, sort_order) VALUES
('Basic Reports', 'Analytics & Reporting', '✓', '✓', '✓', '✓', 30),
('Analytics Access', 'Analytics & Reporting', '—', '✓', '✓', '✓', 31),
('Advanced Reports', 'Analytics & Reporting', '—', '—', '✓', '✓', 32),
('Export Reports', 'Analytics & Reporting', '—', '—', '✓', '✓', 33),
('Income Statements', 'Analytics & Reporting', '—', '—', '✓', '✓', 34),
('Competition Insights', 'Analytics & Reporting', '—', '—', '—', '✓', 35);

-- CATEGORY: Support & Infrastructure
INSERT INTO comparison_features (feature_name, feature_category, free_value, starter_value, growth_value, enterprise_value, sort_order) VALUES
('Support Type', 'Support & Infrastructure', 'Community', 'Email', 'Priority', 'Priority', 40),
('Offline Functionality', 'Support & Infrastructure', '✓', '✓', '✓', '✓', 41),
('Customer Database', 'Support & Infrastructure', '✓', '✓', '✓', '✓', 42);

-- Verify the updates
SELECT tier, display_name, features FROM marketing_pricing_plans WHERE region IS NULL ORDER BY tier;

