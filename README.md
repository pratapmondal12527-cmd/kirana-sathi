# 🛒 Kirana Sathi (কিরানা সাথী) — Full-Stack Grocery E-Commerce Platform

> **"সব কিছু এক ছাদের নিচে"** (Everything Under One Roof)  
> A modern, production-grade, full-stack grocery e-commerce platform built for local Indian grocery businesses. It merges the discovery convenience of Amazon/Flipkart with the rapid local fulfillment of Zepto, designed with an authentic, family-friendly Indian grocery aesthetic.

---

## 🌿 Brand Identity & Design System
- **Brand Name**: Kirana Sathi / কিরানা সাথী
- **Tagline**: *"সব কিছু এক ছাদের নিচে"*
- **Colors**:
  - Primary: Deep Grocery Green (`#087A45`)
  - Secondary: Fresh Green (`#2EAD65`)
  - Accent: Warm Yellow / Mustard (`#FFC83D`)
  - Background: Clean White & Soft Mist Gray (`#F8FAF8`)
- **Localization**: Full Bilingual Bengali (বাংলা) and English (EN) with live language toggle.
- **Currency**: Indian Rupees (₹ - INR) stored safely in integer minor units (paise).
- **Default Country & Hub**: Kolkata, West Bengal, India.

---

## 🚀 Key Features

### 1. Customer Storefront
- **Header & Navigation**: Sticky navigation with live PIN code selector, search bar with real-time product autocomplete, language switcher, cart badge counter, and user profile drawer.
- **Location & PIN Code Validation**: Real-time serviceability check for local PIN codes (e.g. Salt Lake 700064, Sector V 700091, New Town 700156, Dum Dum 700028, BBD Bagh 700001, Howrah 712201).
- **Hero & Promotional Banners**: Banners for fresh morning Mandi produce, pantry staples, and same-day delivery.
- **Curated Grocery Sections**:
  - Farm Fresh Vegetables & Fruits (Potatoes, Onions, Tomatoes)
  - Rice, Dal, Atta & Daily Staples (Daawat Basmati, Bengal Miniket, Aashirvaad Atta, Sona Moong Dal, Tata Salt, Madhur Sugar)
  - Pure Cooking Oils & Spices (Engine Kachi Ghani Mustard Oil, Fortune Sunflower, Sunrise Turmeric & Chilli)
  - Tea, Biscuits & Snacks (Tata Tea Gold, Britannia Marie Gold)
  - Household & Cleaning (Surf Excel Easy Wash, Vim Gel)
  - Kirana Sathi Originals (Artisan Homemade Mango Pickles & Bengal Spices)
- **Product Details**: Image gallery, variant weight selectors (500 g, 1 kg, 5 kg), stock level indicators, customer ratings & reviews, doorstep return policies, and related items.
- **Cart & Free Delivery Meter**: Real-time progress meter towards the configurable **₹399 free delivery threshold** (e.g., *"Add ₹129 more for FREE Delivery!"*), coupon application (`WELCOME50`, `KIRANA10`, `FREEDEL`), and authoritative server-side price verification.
- **Checkout**: Delivery address form with Indian fields (House/Building, Street/Colony, Landmark, City, State, PIN), time slot selection (Morning, Mid-Day, Afternoon, Evening Express), delivery instructions, and payment methods (Cash on Delivery or Razorpay).
- **Order Tracking**: 6-stage live timeline (Placed ➔ Confirmed ➔ Preparing ➔ Ready for dispatch ➔ Out for delivery ➔ Delivered) with delivery partner contact, cancellation and inventory release logic.

### 2. Admin Management Dashboard (`/admin`)
- **Role-Based Authorization**: Server-enforced protection ensuring only `ADMIN` users can access metrics and controls.
- **Store Overview**: Daily sales KPIs, total revenue, average order value (AOV), pending packing orders, and sales trends.
- **Product Management**: Full CRUD, bilingual product naming, SKU tracking, category mapping, price & MRP configuration, variants, and CSV export.
- **Inventory & Stock Movements**: Transactional stock adjustments with reason tracking, intake logging, and low-stock alerts.
- **Order Dispatch Management**: Filter orders by status, advance fulfillment stages, and assign orders to delivery personnel.
- **Business Rules & Runtime Settings**: Dynamic configuration for free delivery thresholds (₹399), standard delivery charges (₹30), minimum basket amounts (₹100), and operating hours without code redeployment.
- **Financial Reports**: Gross revenue, estimated gross profits based on intake cost prices, and current warehouse valuation.

### 3. Mobile Delivery Staff Panel (`/delivery`)
- **Role-Based Access**: Restricted to `DELIVERY` and `ADMIN` personnel.
- **Active Task List**: Shows assigned delivery addresses, contact numbers with click-to-call actions, order items summary, and special customer instructions.
- **Action Triggers**: "Mark Picked Up from Hub", "Start Route (Out for Delivery)", and "Mark Delivered".
- **Cash on Delivery Collection**: Captures COD amounts collected and updates payment records in real time.
- **Failed Delivery Handling**: Records specific failure reasons (e.g., customer unreachable, address incorrect).

### 4. Razorpay Test Mode & Interactive Sandbox Simulation
- Implements a payment-provider abstraction with HMAC-SHA256 signature verification.
- In demo/test mode, provides a high-fidelity payment modal simulating UPI (GPay, PhonePe, Paytm), Cards (RuPay, Visa, Mastercard), and Netbanking, generating verified cryptographic signatures.

---

## 🛠️ Technology Stack
- **Framework**: Next.js 14 (App Router, Server Actions, API Route Handlers)
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS
- **Database & ORM**: PostgreSQL / SQLite with Prisma ORM
- **Authentication**: Secure JWT sessions with HTTP-only cookies and bcrypt password hashing
- **Payments**: Razorpay SDK abstraction with interactive sandbox simulation
- **Testing**: Vitest unit & integration test suite
- **Icons**: Lucide React
- **Animations & Effects**: Canvas Confetti

---

## 📦 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone <repo-url>
cd kirana-sathi
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Default `.env` settings:
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="kirana-sathi-secure-jwt-secret-key-32chars-min-2026"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_STORE_NAME="Kirana Sathi"
NEXT_PUBLIC_STORE_NAME_BN="কিরানা সাথী"
NEXT_PUBLIC_STORE_TAGLINE="সব কিছু এক ছাদের নিচে"
NEXT_PUBLIC_SUPPORT_PHONE="+91 98765 43210"
NEXT_PUBLIC_WHATSAPP_PHONE="919876543210"
RAZORPAY_KEY_ID="rzp_test_kirana_sandbox"
RAZORPAY_KEY_SECRET="rzp_test_secret_sandbox"
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_kirana_sandbox"
DEMO_MODE="true"
```

### 3. Initialize Database & Seed Sample Data
```bash
# Push Prisma schema to SQLite database
npx prisma db push

# Seed realistic Bengali & Indian grocery products, categories, coupons, and demo accounts
npm run seed
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Run Test Suite
```bash
npm run test
```

### 6. Build for Production
```bash
npm run build
npm run start
```

---

## 🔑 Demo Accounts (Pre-Seeded)

| Role | Email | Password | Access Area |
| :--- | :--- | :--- | :--- |
| **Customer** | `customer@kiranasathi.com` | `customer123` | Storefront, Cart, Checkout, Order Tracking, Account |
| **Store Admin** | `admin@kiranasathi.com` | `admin123` | Full Storefront + `/admin` Management Dashboard |
| **Delivery Agent** | `delivery@kiranasathi.com` | `delivery123` | Full Storefront + `/delivery` Mobile Rider Panel |

*Tip: The Sign In popup on the storefront includes a **1-Click Demo Login** button for all three roles for instant testing!*

---

## 🧪 Test Suite Coverage
The automated test suite runs via Vitest (`npm run test`):
1. **Pricing & Currency**: `src/__tests__/pricing.test.ts`
   - Formats paise to INR currency display
   - Converts between rupees and paise without floating point inaccuracy
   - Calculates discount percentages
   - Validates the ₹399 free delivery threshold rule
2. **Authentication & Authorization**: `src/__tests__/auth.test.ts`
   - Hashes and verifies passwords via bcrypt
   - Generates and verifies JWT claims with role enforcement (`CUSTOMER`, `ADMIN`, `DELIVERY`)
   - Rejects forged or tampered tokens
3. **Checkout & Payments**: `src/__tests__/checkout-order.test.ts`
   - Verifies Razorpay HMAC-SHA256 signatures
   - Validates coupon eligibility, minimum order rules, and discount caps
   - Enforces coupon expiry dates

---

## 🌐 External Credentials & Production Deployment Guide
To take this platform into live production:
1. **Database**: Replace `DATABASE_URL` with a managed PostgreSQL connection string (Supabase, Neon, or AWS RDS). Rename `prisma/schema.postgresql.prisma` to `prisma/schema.prisma` and run `npx prisma db push`.
2. **Razorpay Live Mode**: Set `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` with your verified Merchant credentials from [Razorpay Dashboard](https://dashboard.razorpay.com). Set `DEMO_MODE="false"`.
3. **WhatsApp Business Cloud API**: Configure `NEXT_PUBLIC_WHATSAPP_PHONE` with your registered WhatsApp Business number.
4. **Cloud Object Storage**: Product images can be hosted on AWS S3, Cloudinary, or Cloudflare R2 by setting image URLs in the admin panel or CSV import.

---

## 📄 License
MIT License. Built with ❤️ for local Indian grocery commerce.
