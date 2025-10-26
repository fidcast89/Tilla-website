# Feature Mapping - Flutter App to Marketing Website

## Source
Features extracted from Flutter app codebase:
- `lib/core/providers/subscription_providers.dart` - Feature gating logic
- `lib/features/subscription/screens/modern_upgrade_screen.dart` - UI display

---

## 📌 Important: Two Feature Lists

### 1. **Pricing Card Features** (Key Differentiators Only)
Shown on the pricing cards to highlight what makes each plan unique.

### 2. **Comparison Features** (Progressive Feature List)
Shown in the "Compare plans in detail" section. Features are **progressive** - if a feature is in Free, it's in all higher tiers. Each tier adds new capabilities.

---

## 🎯 Pricing Card Features (Key Differentiators)

### Free
- Up to 50 products
- 1 user account
- Basic inventory
- Community support

### Starter
- Up to 500 products
- 2 user accounts
- AI product creation
- Analytics access
- Email support

### Growth
- Up to 2,000 products
- 5 user accounts
- Unlimited branches
- Suppliers management
- Income statements
- Advanced reports
- Priority support

### Enterprise
- Unlimited products
- Unlimited users
- Unlimited branches
- White-label options
- Custom integrations
- Dedicated account manager
- Competition insights

---

## 📊 Comparison Features (Actual Values, Not Just True/False)

Features show **actual values** instead of just checkmarks. This makes it clear what each tier offers.

### Product Management
| Feature | Free | Starter | Growth | Enterprise |
|---------|------|---------|--------|------------|
| Product Limit | 50 | 500 | 2,000 | Unlimited |
| Inventory Tracking | — | Basic | Advanced | Advanced |
| Suppliers Management | — | — | ✓ | ✓ |
| AI Product Creation | — | ✓ | ✓ | ✓ |

### User & Access Management
| Feature | Free | Starter | Growth | Enterprise |
|---------|------|---------|--------|------------|
| User Accounts | 1 | 2 | 5 | Unlimited |
| Branches/Locations | 1 | 1 | Unlimited | Unlimited |
| Multi-Branch Support | — | — | ✓ | ✓ |
| Dedicated Account Manager | — | — | — | ✓ |
| White-Label Options | — | — | — | ✓ |
| Custom Integrations | — | — | — | ✓ |

### Sales & Transactions
| Feature | Free | Starter | Growth | Enterprise |
|---------|------|---------|--------|------------|
| Basic Sales Tracking | ✓ | ✓ | ✓ | ✓ |
| Credit Sales Tracking | — | ✓ | ✓ | ✓ |
| Social Media Posting | — | — | ✓ | ✓ |

### Analytics & Reporting
| Feature | Free | Starter | Growth | Enterprise |
|---------|------|---------|--------|------------|
| Basic Reports | ✓ | ✓ | ✓ | ✓ |
| Analytics Access | — | ✓ | ✓ | ✓ |
| Advanced Reports | — | — | ✓ | ✓ |
| Export Reports | — | — | ✓ | ✓ |
| Income Statements | — | — | ✓ | ✓ |
| Competition Insights | — | — | — | ✓ |

### Support & Infrastructure
| Feature | Free | Starter | Growth | Enterprise |
|---------|------|---------|--------|------------|
| Support Type | Community | Email | Priority | Priority |
| Offline Functionality | ✓ | ✓ | ✓ | ✓ |
| Customer Database | ✓ | ✓ | ✓ | ✓ |

---

## 📋 Tier Details

### 🆓 Free Tier

**Limits:**
- Products: 50 max
- Users: 1 max
- Branches: 1 max
- Monthly Sales: 50 max

**All Features:**
- Up to 50 products
- 1 user account
- 1 branch/location
- Basic inventory tracking
- Basic sales tracking
- Offline functionality
- Customer database
- Community support

---

## 🚀 Starter Tier

**Limits:**
- Products: 500 max
- Users: 2 max
- Branches: 1 max
- Monthly Sales: 500 max

**All Features:**
- Up to 500 products
- 2 user accounts
- 1 branch/location
- Basic inventory management
- Basic sales tracking
- Offline functionality
- Customer database
- Credit sales tracking
- Basic reports
- Analytics access
- AI product creation
- Email support

---

## 📈 Growth Tier

**Limits:**
- Products: 2,000 max
- Users: 5 max
- Branches: Unlimited
- Monthly Sales: Unlimited

**All Features:**
- Up to 2,000 products
- 5 user accounts
- Unlimited branches/locations
- Advanced inventory management
- Basic sales tracking
- Offline functionality
- Customer database
- Credit sales tracking
- Basic reports
- Analytics access
- AI product creation
- Suppliers management
- Income statements
- Multi-branch support
- Advanced reports
- Export reports
- Social media posting
- Priority support

---

## 🏢 Enterprise Tier

**Price:** $49.99/month (or $499.99/year)

**Limits:**
- Products: Unlimited
- Users: Unlimited
- Branches: Unlimited
- Monthly Sales: Unlimited

**All Features:**
- Unlimited products
- Unlimited user accounts
- Unlimited branches/locations
- Advanced inventory management
- Basic sales tracking
- Offline functionality
- Customer database
- Credit sales tracking
- Basic reports
- Analytics access
- AI product creation
- Suppliers management
- Income statements
- Multi-branch support
- Advanced reports
- Export reports
- Social media posting
- Priority support
- White-label options
- Custom integrations
- Dedicated account manager
- **Competition insights** ✨

---

## How to Apply

1. Go to Supabase dashboard
2. SQL Editor → New Query
3. Copy content from `supabase/update_pricing_features.sql`
4. Run the query
5. Refresh website to see updated features in comparison table

**Done!** ✅ All features now match the Flutter app exactly.

