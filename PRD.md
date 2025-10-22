# Planning Guide

Create a sophisticated, trust-building landing page for TruTrip.in that communicates professionalism, global reach, and technological innovation in the travel industry.

**Experience Qualities**:
1. **Professional** - Enterprise-grade design that inspires confidence in corporate and leisure travelers alike
2. **Inspiring** - Beautiful imagery and smooth interactions that evoke wanderlust and excitement about travel possibilities
3. **Trustworthy** - Clear information architecture and credible presentation that establishes TruTrip.in as a reliable global travel partner

**Complexity Level**: Content Showcase (information-focused)
  - The landing page focuses on presenting comprehensive information about TruTrip.in's services, vision, and capabilities with elegant organization and visual hierarchy to guide visitors through the value proposition.

## Essential Features

### Hero Section with Value Proposition
- **Functionality**: Full-viewport hero with tagline "Travel in Style" and primary CTA
- **Purpose**: Immediately communicate brand identity and core value proposition
- **Trigger**: Page load
- **Progression**: Animated entrance → Engaging hero visual → Clear CTA button → Smooth scroll to content
- **Success criteria**: Visitor understands TruTrip.in's purpose within 3 seconds

### Service Categories Grid
- **Functionality**: Visual grid showcasing 6 core service areas (Flights, Hotels, Transport, Visa, Insurance, Packages)
- **Purpose**: Allow visitors to quickly understand the breadth of services offered
- **Trigger**: Scroll into view
- **Progression**: Scroll → Fade-in animation → Hover reveals details → Click expands information
- **Success criteria**: All service categories are scannable and understandable

### Vision & Mission Statement
- **Functionality**: Prominent section highlighting TruTrip.in's vision and commitment
- **Purpose**: Build emotional connection and establish brand values
- **Trigger**: Scroll into view
- **Progression**: Scroll → Content reveals → Key phrases emphasized visually
- **Success criteria**: Visitor understands company values and differentiators

### Corporate & Leisure Solutions
- **Functionality**: Two-column comparison or tabbed interface showing both business and leisure offerings
- **Purpose**: Appeal to both B2B and B2C audiences
- **Trigger**: Scroll or tab interaction
- **Progression**: View → Select audience type → See relevant benefits → Understand value
- **Success criteria**: Both corporate and leisure travelers see relevant information

### Technology & Integration Highlights
- **Functionality**: Visual showcase of technology partnerships (GDS systems, AI capabilities)
- **Purpose**: Establish credibility through technical capabilities and partnerships
- **Trigger**: Scroll into view
- **Progression**: Scroll → Logo grid appears → Hover shows partnership details
- **Success criteria**: Technical sophistication is communicated clearly

### Global Network & Support
- **Functionality**: Section highlighting 24/7 support, global presence, and sister companies
- **Purpose**: Build trust through demonstrated reach and reliability
- **Trigger**: Scroll into view
- **Progression**: View → See global map or network visualization → Understand support availability
- **Success criteria**: Visitor feels confident in global coverage and support

### Contact CTA Section
- **Functionality**: Final call-to-action for inquiries or booking consultation
- **Purpose**: Convert interested visitors into leads
- **Trigger**: Scroll to bottom
- **Progression**: View CTA → Click → Contact form or external link
- **Success criteria**: Clear path to next action

## Edge Case Handling

- **Slow connections**: Progressive image loading with elegant placeholders, critical content loads first
- **Mobile devices**: Touch-optimized interactions, collapsed navigation, stacked layouts for readability
- **Long content sections**: Smooth scrolling with progress indicators, back-to-top button appears after scrolling
- **Missing images**: Graceful fallbacks with gradient backgrounds and icons
- **Small screens**: Responsive typography scaling, collapsible sections for dense information

## Design Direction

The design should feel premium, trustworthy, and globally sophisticated - drawing inspiration from luxury travel brands and enterprise SaaS platforms. It should balance aspiration (beautiful travel imagery) with professionalism (clean layouts, clear information). A rich interface with thoughtful use of imagery, subtle animations, and layered depth serves the purpose better than stark minimalism.

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
  - Card: Service showcases with hover states and subtle shadows
  - Button: Primary CTAs with accent color, secondary with outline style
  - Tabs: For Corporate vs Leisure sections
  - Badge: Technology partner logos and certifications
  - Separator: Elegant dividers between major sections
  - Scroll-area: For any content-heavy sections if needed
- **Customizations**: 
  - Hero section with full-height background and gradient overlays
  - Service cards with icon integration from Phosphor
  - Animated counter components for statistics (if included)
  - Custom logo grid for partners and sister companies
- **States**: 
  - Buttons: Subtle scale on hover (1.02), shadow elevation, smooth color transitions
  - Cards: Lift effect on hover with shadow expansion, border highlight
  - Links: Underline animation from center, color shift
- **Icon Selection**: 
  - Airplane, Globe, Buildings for services
  - Shield, Clock for support features
  - ChartLine, Lightning for technology
  - Users, Briefcase for corporate/leisure
  - Use colored icons for primary features, monochrome for supporting elements
- **Spacing**: 
  - Section padding: py-24 on desktop, py-16 on mobile
  - Card gaps: gap-8 on desktop, gap-6 on mobile
  - Content max-width: max-w-7xl centered
  - Consistent 4-point grid system (4, 8, 12, 16, 24, 32, 48, 64px)
- **Mobile**: 
  - Hero height reduces to 70vh on mobile
  - Service grid: 2 columns on tablet, 1 column on mobile
  - Navigation collapses to hamburger menu
  - Font sizes scale down 15-20% on mobile
  - Touch targets minimum 44x44px for all interactive elements
  - Sticky CTA button appears on scroll for mobile users
