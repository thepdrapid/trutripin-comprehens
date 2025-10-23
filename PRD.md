# Planning Guide

Create a modern, vibrant travel platform for TruTrip.in featuring a bright **Logo-Inspired Color Theme** with purple, pink, and blue gradients, elegant glass morphism effects, smooth animations, and an integrated search engine that creates a professional and delightful user experience.

**Experience Qualities**:
1. **Professional** - A clean, bright design with logo-inspired colors that conveys trust and modern sophistication with glass cards, subtle gradients, and polished interactions
2. **Vibrant** - Users feel energized by the colorful brand palette with purple-pink-blue gradients, animated elements, and floating background orbs
3. **Premium** - High-quality aesthetic with glass morphism, elevated cards with hover effects, gradient text, and micro-interactions that showcase attention to detail

**Complexity Level**: Complex Application (advanced functionality with modern visual design)
  - Multi-page website featuring gradient backgrounds with floating orbs, glass morphism effects, elevated card designs, animated gradient text, integrated search functionality, and smooth hover interactions that create a contemporary travel platform experience.

## Essential Features

### Logo-Inspired Color Theme
- **Functionality**: Brand color palette featuring purple, pink, and blue with gradient animations, applied consistently across all UI elements
- **Purpose**: Create a cohesive, recognizable brand identity inspired by the logo colors
- **Trigger**: Present on all pages throughout the entire interface
- **Progression**: Page loads → Brand colors visible → Gradients animate → Hover states reveal color transitions
- **Success criteria**: Colors feel harmonious, professional, and reflect the brand identity

### Modern Gradient Background System
- **Functionality**: Soft pastel gradient background with floating animated orbs in brand colors, subtle dot pattern overlay
- **Purpose**: Create a light, airy, modern atmosphere that doesn't overwhelm content
- **Trigger**: Present on all pages, continuously animates
- **Progression**: Page loads → Background gradients visible → Orbs float gently → Dot pattern adds texture
- **Success criteria**: Background is beautiful but subtle, doesn't distract from content

### Glass Morphism Navigation Header with Search
- **Functionality**: Glass card header with gradient logo, clean navigation, integrated search functionality, scroll-reactive styling
- **Purpose**: Provide navigation and search access with modern glass aesthetic
- **Trigger**: Sticky header on all pages, search toggles on click
- **Progression**: Scroll → Header glass effect enhances → Search opens → User types → Active states highlight
- **Success criteria**: Header feels modern and lightweight, search is easily accessible

### Hero Section
- **Functionality**: Large gradient text, glass badge, animated logo, gradient CTA buttons, smooth scroll indicator
- **Purpose**: Immediately communicate brand identity and value proposition
- **Trigger**: Landing page entrance
- **Progression**: Page loads → Logo and text animate in → Gradient colors shimmer → CTAs invite action
- **Success criteria**: Hero is impactful and clearly communicates the brand message

### Elevated Glass Cards
- **Functionality**: White elevated cards with subtle shadows, hover transforms, gradient accent colors, icon animations
- **Purpose**: Present services and content in clean, modern, interactive containers
- **Trigger**: Cards scroll into view with stagger animation
- **Progression**: Cards appear → Hover triggers elevation → Gradient accents appear → User engages
- **Success criteria**: Each card feels premium and interactive, hover effects are smooth

### Integrated Search Engine
- **Functionality**: Glass search input with clean styling, instant toggle in header, mobile-friendly
- **Purpose**: Enable destination and content discovery across the platform
- **Trigger**: Click search icon in header or mobile menu
- **Progression**: Click search → Input appears → User types → Border highlights → Search executes
- **Success criteria**: Search feels natural and integrated into the design

### Multi-Page Experience (Home, About, Services, Corporate, Visa, Contact)
- **Functionality**: All pages share the gradient background and glass design language with page-specific content
- **Purpose**: Comprehensive information architecture with consistent modern experience
- **Trigger**: Navigation between pages
- **Progression**: Click nav → Smooth transition → Background persists → Content updates
- **Success criteria**: All pages feel cohesive and professional, navigation is seamless

### Modern Glass Footer
- **Functionality**: Glass card footer with gradient branding, clean link layout, compliance information
- **Purpose**: Complete the professional experience while providing necessary information
- **Trigger**: Bottom of every page
- **Progression**: Scroll to bottom → Footer revealed → Links respond to hover
- **Success criteria**: Footer feels complete and matches the overall design quality

## Edge Case Handling

- **Performance**: Animations use CSS transforms and opacity for 60fps performance
- **Reduced motion**: Respect prefers-reduced-motion by simplifying animations
- **Mobile devices**: Responsive design with touch-optimized interactions, readable text sizes
- **Slow connections**: CSS-based effects work without external dependencies
- **Older browsers**: Graceful degradation of backdrop-filter and advanced CSS features
- **High contrast mode**: Ensure gradient text remains readable with fallback solid colors

## Design Direction

The design should feel like a modern, professional travel platform with bright, vibrant brand colors that inspire confidence and excitement. Think contemporary SaaS aesthetics meets travel industry - clean, minimal, with purposeful use of gradients and glass effects. The interface should be bright and welcoming while maintaining premium quality through attention to detail in spacing, typography, and micro-interactions.

## Color Selection

Logo-inspired palette with purple, pink, and blue creating a vibrant, modern atmosphere against light backgrounds.

- **Primary Color**: Brand Purple (oklch(0.58 0.24 260)) - Main brand color for primary actions and key elements; professional and distinctive
- **Secondary Colors**: Brand Pink (oklch(0.65 0.22 330)) - Supporting color for variety and visual interest in gradients
- **Accent Color**: Brand Blue (oklch(0.62 0.26 200)) - Fresh accent for CTAs and highlights, completes the color triad
- **Background**: Light Neutral (oklch(0.99 0.005 280)) - Clean, bright background that makes colors pop
- **Foreground/Background Pairings**:
  - Background (Light Neutral oklch(0.99 0.005 280)): Dark text (oklch(0.20 0.02 260)) - Ratio 16.5:1 ✓
  - Card (White oklch(1 0 0)): Dark text (oklch(0.20 0.02 260)) - Ratio 18.2:1 ✓
  - Primary (Brand Purple oklch(0.58 0.24 260)): White text (oklch(0.99 0.005 280)) - Ratio 5.1:1 ✓
  - Secondary (Brand Pink oklch(0.65 0.22 330)): White text (oklch(0.99 0.005 280)) - Ratio 4.8:1 ✓
  - Accent (Brand Blue oklch(0.62 0.26 200)): White text (oklch(0.99 0.005 280)) - Ratio 4.9:1 ✓
  - Muted (Light Gray oklch(0.96 0.01 260)): Medium text (oklch(0.50 0.02 260)) - Ratio 7.2:1 ✓

## Font Selection

Modern, professional typography that's highly readable - Poppins for headings creates impact, Inter for body ensures clarity.

- **Typographic Hierarchy**:
  - H1 (Hero title): Poppins Bold/72-80px/tight letter spacing (-0.02em) - Maximum impact with gradient effect
  - H2 (Section headers): Poppins Bold/56-64px/tight letter spacing (-0.02em) - Clear section hierarchy
  - H3 (Card titles): Poppins SemiBold/24px/tight spacing (-0.01em) - Clean subsection headers
  - Body (Primary content): Inter Regular/16-18px/1.6 line height - Comfortable reading
  - Small (Supporting text): Inter Regular/14px/1.5 line height - Clear secondary information
  - CTA Buttons: Poppins SemiBold/16px/normal spacing - Clear, confident calls to action

## Animations

Animations enhance the experience with smooth, purposeful motion that feels modern without being distracting.

- **Purposeful Meaning**: Floating orbs create ambient life; gradient shifts suggest dynamism; hover elevations reward exploration; fade-ins provide polish; shimmer effects suggest premium quality
- **Hierarchy of Movement**: Floating orbs (slow constant) → Gradient animations (medium pace) → Scroll reveals (smooth fade) → Card hover effects (instant responsive) → Button interactions (quick rewarding feedback)

## Component Selection

- **Components**: 
  - Card: Elevated white cards with subtle shadows and hover transforms
  - Button: Gradient backgrounds with shimmer effects, solid outline variants
  - Input: Clean borders with focus states, glass styling for search
  - Badge: Glass styling with gradient text
  - Sheet: Glass mobile menu with clean layout
  - Toast (Sonner): Themed to match glass aesthetic
- **Customizations**: 
  - Gradient background system with floating orbs
  - Animated gradient text effects
  - Elevated card hover effects
  - Glass morphism styling
  - Shimmer overlay effects
  - Dot pattern backgrounds
  - Smooth floating animations
- **States**: 
  - Navigation: Active state with gradient underline, hover with background tint
  - Buttons: Gradient backgrounds with shimmer, hover with scale transform
  - Cards: Elevation on hover (translateY -4px), subtle shadow expansion
  - Inputs: Border color shift to primary on focus
  - Links: Subtle translate-x on hover
- **Icon Selection**: 
  - Phosphor Icons with duotone weight for visual interest
  - Animated on hover with scale effects
  - Colored with brand palette to match context
- **Spacing**: 
  - Section padding: py-20 to py-24 for generous breathing room
  - Card gaps: gap-6 for clear separation
  - Moderate radius: 1rem for modern, friendly feel
  - Generous whitespace to showcase clean design
- **Mobile**: 
  - Fully responsive with mobile-first approach
  - Touch-optimized tap targets (min 44px)
  - Maintained glass effects with optimized performance
  - Responsive text sizing
  - Stacked layouts with full-width cards
  - Search integrated into mobile menu
