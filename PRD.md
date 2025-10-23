# Planning Guide

Create a sophisticated, multi-page travel platform for TruTrip.in that communicates professionalism, global reach, and technological innovation across six distinct pages with persistent navigation and comprehensive footer.

**Experience Qualities**:
1. **Professional** - Enterprise-grade design that inspires confidence in corporate and leisure travelers alike
2. **Intuitive** - Clear navigation and information architecture that helps visitors quickly find what they need
3. **Trustworthy** - Comprehensive compliance information and credible presentation that establishes TruTrip.in as a reliable global travel partner

**Complexity Level**: Light Application (multiple features with basic state)
  - Multi-page website with client-side routing, persistent header/footer, active navigation states, and organized content across Home, About, Services, Corporate Solutions, Visa Support, and Contact pages.

## Essential Features

### Persistent Navigation Header
- **Functionality**: Fixed header with logo, navigation menu (Home, About, Services, Corporate Solutions, Visa Support, Contact), and "Book Travel" CTA
- **Purpose**: Provide consistent navigation across all pages
- **Trigger**: Present on all pages
- **Progression**: Click nav item → Route to new page → Header persists → Active state updates
- **Success criteria**: Users can navigate between any pages seamlessly

### Home Page - Service Overview
- **Functionality**: Hero section with value proposition, overview cards for all service categories, partner logos, quick links
- **Purpose**: Communicate comprehensive offering and build immediate credibility
- **Trigger**: Default landing page
- **Progression**: View hero → Scroll through service overviews → See partners → Click to detailed pages
- **Success criteria**: Visitors understand TruTrip.in's full scope within 30 seconds

### About Page - Company Information
- **Functionality**: Company background, mission, mother company details, sister companies, values presentation
- **Purpose**: Build trust through transparency and corporate structure
- **Trigger**: Navigate from header menu
- **Progression**: Read about company → Learn about values → Understand global structure → CTA to team/vision
- **Success criteria**: Visitors understand company credibility and scope

### Services Page - Detailed Service Catalog
- **Functionality**: Comprehensive list of all service offerings with descriptions: Corporate/Leisure travel, Ticketing, MICE, Visa, Insurance, Ground Transportation, Destination Management
- **Purpose**: Allow visitors to explore all available services in depth
- **Trigger**: Navigate from header or home page
- **Progression**: Browse service categories → Read details → Request custom quote
- **Success criteria**: All services are clearly described and actionable

### Corporate Solutions Page - Technology Platform
- **Functionality**: Showcase Travtek Travel Solutions, travel management platforms, API integration, CRM, dynamic pricing, TBuzz Media
- **Purpose**: Appeal to B2B clients and demonstrate technical sophistication
- **Trigger**: Navigate from header
- **Progression**: View technology offerings → Understand integration capabilities → Request demo
- **Success criteria**: Corporate clients understand technical value proposition

### Visa Support Page - Documentation Assistance
- **Functionality**: Country-specific visa guidance, documentation support, tracking services, insurance offerings
- **Purpose**: Demonstrate expertise in complex travel documentation
- **Trigger**: Navigate from header
- **Progression**: Learn about visa services → Understand process → Apply for assistance
- **Success criteria**: Users understand visa support offerings and how to engage

### Contact Page - Lead Capture
- **Functionality**: Contact form with validation, office addresses, support details including 24/7 helpline
- **Purpose**: Convert interest into leads and provide support access
- **Trigger**: Navigate from header or CTAs throughout site
- **Progression**: View contact options → Fill form → Submit inquiry → Confirmation feedback
- **Success criteria**: Visitors can easily reach out through multiple channels

### Comprehensive Footer
- **Functionality**: Three-tier footer with quick links, partners/affiliates, compliance statements including PCI, GDPR, WCAG, refund policies, visa disclaimers
- **Purpose**: Build trust through transparency and provide legal compliance
- **Trigger**: Bottom of every page
- **Progression**: Scroll to bottom → Access footer links → Read policies → Understand compliance
- **Success criteria**: All required compliance and policy information is accessible

## Edge Case Handling

- **Slow connections**: Progressive image loading with elegant placeholders, critical navigation loads first
- **Mobile devices**: Hamburger menu for navigation, touch-optimized interactions, stacked layouts
- **Form validation**: Real-time field validation on contact form with helpful error messages
- **Deep linking**: Support direct navigation to any page via URL
- **404 handling**: Graceful redirect to home page if invalid route accessed
- **Long content sections**: Back-to-top button, smooth scrolling between sections
- **Missing data**: Graceful fallbacks for images and content with placeholder states

## Design Direction

The design should feel premium, trustworthy, and globally sophisticated - drawing inspiration from luxury travel brands and enterprise SaaS platforms. It should balance aspiration (travel excitement) with professionalism (clear information, compliance transparency). A rich interface with thoughtful use of color, clear typography, and purposeful animations serves the multi-page structure better than stark minimalism.

## Color Selection

Complementary color scheme - combining trust-building blue with energetic warm accents that evoke travel excitement.

- **Primary Color**: Deep professional blue (oklch(0.45 0.15 250)) - Communicates trust, reliability, and corporate professionalism while maintaining visual appeal
- **Secondary Colors**: 
  - Lighter blue (oklch(0.85 0.05 250)) for backgrounds and secondary elements
  - Navy (oklch(0.25 0.12 250)) for headers and emphasis
- **Accent Color**: Coral/sunset orange (oklch(0.68 0.18 35)) - Evokes travel, adventure, and warmth; used for CTAs and highlights
- **Foreground/Background Pairings**:
  - Background (Light blue-tinted white oklch(0.98 0.01 250)): Dark navy text (oklch(0.2 0.08 250)) - Ratio 12.3:1 ✓
  - Card (Pure white oklch(1 0 0)): Dark navy text (oklch(0.2 0.08 250)) - Ratio 15.8:1 ✓
  - Primary (Deep blue oklch(0.45 0.15 250)): White text (oklch(1 0 0)) - Ratio 7.2:1 ✓
  - Secondary (Light blue oklch(0.85 0.05 250)): Dark navy text (oklch(0.2 0.08 250)) - Ratio 11.5:1 ✓
  - Accent (Coral oklch(0.68 0.18 35)): Dark navy text (oklch(0.2 0.08 250)) - Ratio 5.8:1 ✓
  - Muted (Soft gray-blue oklch(0.92 0.01 250)): Medium gray text (oklch(0.5 0.02 250)) - Ratio 6.1:1 ✓

## Font Selection

Typography should convey modern professionalism with excellent readability across all devices - geometric sans-serifs for headings to communicate innovation, paired with humanist sans-serifs for body text to ensure approachability and readability.

- **Typographic Hierarchy**:
  - H1 (Hero title): Outfit Bold/52px/tight letter spacing (-0.02em) - Strong, modern presence
  - H2 (Section headers): Outfit SemiBold/36px/tight letter spacing (-0.01em) - Clear hierarchy
  - H3 (Subsections): Outfit Medium/24px/normal spacing - Organized structure
  - Body (Primary content): Inter Regular/16px/1.6 line height - Maximum readability
  - Small (Captions, labels): Inter Medium/14px/1.5 line height - Clear supporting text
  - CTA Buttons: Outfit SemiBold/16px/0.02em letter spacing - Confident action

## Animations

Animations should feel polished and purposeful, enhancing the premium brand perception while guiding user attention through the content journey without creating impatience.

- **Purposeful Meaning**: Smooth scroll-triggered reveals communicate progression through the story; subtle hover states suggest interactivity; gentle parallax effects add depth and sophistication
- **Hierarchy of Movement**: Hero section gets most prominent animation (fade + slide up), service cards animate in sequence, CTAs have micro-interactions on hover, background elements use subtle parallax

## Component Selection

- **Components**: 
  - Card: For service showcases and information blocks
  - Button: Primary CTAs with accent color, secondary with outline style
  - Badge: For partner logos and feature highlights
  - Separator: Elegant dividers between sections
  - Form components: Input, Textarea, Label for contact form
  - Sheet: Mobile navigation menu
  - Toast (Sonner): Form submission feedback
- **Customizations**: 
  - Responsive navigation header with mobile drawer
  - Page routing system with active nav states
  - Three-tier footer with organized link sections
  - Service cards with icon integration from Phosphor
  - Contact form with validation and submission handling
- **States**: 
  - Navigation links: Active state shows current page, hover with subtle color shift
  - Buttons: Scale on hover (1.02), shadow elevation, smooth transitions
  - Cards: Lift effect on hover with shadow expansion
  - Form inputs: Focus states with ring, error states with red border
- **Icon Selection**: 
  - Airplane, Globe, Buildings for navigation and services
  - Shield, Clock for support features
  - ChartLine, Sparkle for technology
  - Users, Briefcase for corporate
  - FileText, MapPin for visa services
  - Phone, Envelope for contact
- **Spacing**: 
  - Section padding: py-20 on desktop, py-12 on mobile
  - Card gaps: gap-6 on desktop, gap-4 on mobile
  - Content max-width: max-w-7xl centered
  - Footer sections: Hierarchical spacing with py-12 top, py-8 middle, py-6 bottom
- **Mobile**: 
  - Hamburger menu navigation in Sheet component
  - Hero height adapts to content on mobile
  - Service grids: 2 columns on tablet, 1 column on mobile
  - Font sizes scale appropriately
  - Touch targets minimum 44x44px
  - Footer stacks vertically with clear section separation
