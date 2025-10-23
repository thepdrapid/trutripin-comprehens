# Planning Guide

Create a next-generation, immersive travel platform for TruTrip.in that pushes the boundaries of web design with a stunning glassmorphic dark theme, animated particle systems, and cutting-edge visual effects that make users say "wow" while maintaining professionalism and usability.

**Experience Qualities**:
1. **Futuristic** - A design that feels like it's from the future with immersive backgrounds, animated particles, and glassmorphic surfaces that create depth
2. **Immersive** - Users should feel transported into a digital travel experience with dynamic backgrounds, glowing effects, and smooth transitions
3. **Premium** - Ultra-modern aesthetic with gradient accents, subtle animations, and polished micro-interactions that exceed market standards

**Complexity Level**: Complex Application (advanced functionality with state-of-the-art visual design)
  - Multi-page website featuring animated particle systems, dynamic glassmorphic components, gradient-based design language, and immersive background effects that set a new standard for travel platforms.

## Essential Features

### Immersive Background System
- **Functionality**: Animated particle network with connecting lines, gradient orbs with blur effects, layered background animations
- **Purpose**: Create an immersive, futuristic atmosphere that differentiates TruTrip.in from all competitors
- **Trigger**: Present on all pages, animates continuously
- **Progression**: Page loads → Particles animate → Lines connect → Gradient orbs pulse → Continuous ambient animation
- **Success criteria**: Users are visually impressed and feel they're experiencing something unique

### Glassmorphic Navigation Header
- **Functionality**: Semi-transparent header with backdrop blur, gradient text effects, animated gradient buttons, scroll-reactive opacity
- **Purpose**: Maintain navigation access while contributing to the futuristic aesthetic
- **Trigger**: Sticky header on all pages
- **Progression**: Scroll → Header becomes more opaque → Gradient effects intensify → Active states glow
- **Success criteria**: Header is both functional and visually stunning

### Next-Gen Home Page Hero
- **Functionality**: Large gradient text, animated logo with glow effects, floating particles, gradient buttons with hover animations, animated scroll indicator
- **Purpose**: Immediately capture attention and communicate innovation
- **Trigger**: Landing page entrance
- **Progression**: Page loads → Text fades in → Logo glows → Particles float → User is captivated → CTA draws attention
- **Success criteria**: Users pause to appreciate the design before scrolling

### Glassmorphic Service Cards
- **Functionality**: Semi-transparent cards with backdrop blur, gradient borders, icon animations, glow effects on hover, gradient overlays
- **Purpose**: Present services in a premium, interactive way
- **Trigger**: Services section scroll into view
- **Progression**: Cards animate in → Hover triggers glow → Icon animates → Gradient overlay appears → User engages
- **Success criteria**: Each card feels like a premium interactive element

### Multi-Page Experience (Home, About, Services, Corporate, Visa, Contact)
- **Functionality**: All pages share the immersive background and glassmorphic design language with page-specific content
- **Purpose**: Comprehensive information architecture with consistent premium experience
- **Trigger**: Navigation between pages
- **Progression**: Click nav → Smooth transition → Background persists → Content animates in
- **Success criteria**: All pages feel cohesive and equally impressive

### Enhanced Footer
- **Functionality**: Glassmorphic footer with gradient accents, animated social icons, gradient dividers
- **Purpose**: Complete the premium experience while providing necessary information
- **Trigger**: Bottom of every page
- **Progression**: Scroll to bottom → Footer revealed → Icons animate on hover
- **Success criteria**: Even the footer feels special and polished

## Edge Case Handling

- **Performance**: Particle animations use requestAnimationFrame and are optimized for smooth 60fps performance
- **Reduced motion**: Respect prefers-reduced-motion for accessibility
- **Mobile devices**: Scaled down particle count, optimized animations, touch-optimized interactions
- **Slow connections**: Background images load progressively, animations work without external dependencies
- **Older browsers**: Graceful degradation of backdrop-filter and blur effects
- **High contrast mode**: Ensure content remains readable with increased contrast

## Design Direction

The design should feel like stepping into the future of travel - immersive, premium, and unlike anything currently in the market. Think cyberpunk aesthetics meets luxury brands, with glassmorphism, animated particles, and gradient-heavy design. Users should feel they're experiencing cutting-edge technology. The interface should be rich with subtle animations, glowing effects, and depth created through layering and blur.

## Color Selection

Custom triadic palette with cyan, magenta, and amber creating a futuristic, high-tech atmosphere with depth through dark backgrounds.

- **Primary Color**: Electric Cyan (oklch(0.75 0.19 195)) - Communicates innovation, technology, and forward-thinking; creates striking contrast against dark background
- **Secondary Colors**: Vibrant Magenta (oklch(0.70 0.22 310)) - Adds energy and creates beautiful gradient combinations with cyan
- **Accent Color**: Warm Amber (oklch(0.80 0.25 35)) - Provides warmth and draws attention to key actions, completes the triadic harmony
- **Background**: Deep Space Blue (oklch(0.10 0.05 270)) - Rich dark background that makes colors pop and creates depth
- **Foreground/Background Pairings**:
  - Background (Deep Space oklch(0.10 0.05 270)): Near-white text (oklch(0.98 0.01 270)) - Ratio 14.2:1 ✓
  - Card (Semi-transparent glass oklch(0.14 0.04 275 / 0.6)): Near-white text (oklch(0.98 0.01 270)) - Ratio 12.8:1 ✓
  - Primary (Electric Cyan oklch(0.75 0.19 195)): Dark background text (oklch(0.10 0.05 270)) - Ratio 11.4:1 ✓
  - Secondary (Vibrant Magenta oklch(0.70 0.22 310)): Near-white text (oklch(0.98 0.01 270)) - Ratio 9.2:1 ✓
  - Accent (Warm Amber oklch(0.80 0.25 35)): Dark background text (oklch(0.10 0.05 270)) - Ratio 12.7:1 ✓
  - Muted (Translucent gray oklch(0.18 0.03 275 / 0.4)): Muted text (oklch(0.65 0.02 270)) - Ratio 4.8:1 ✓

## Font Selection

Modern, tech-forward typography that communicates innovation while maintaining readability - Outfit for headings creates a distinctive geometric look, Inter for body ensures clarity.

- **Typographic Hierarchy**:
  - H1 (Hero title): Outfit Bold/80px/extra tight letter spacing (-0.02em) - Maximum impact with gradient text
  - H2 (Section headers): Outfit Bold/56px/tight letter spacing (-0.02em) - Strong hierarchy with gradient effects
  - H3 (Card titles): Outfit SemiBold/28px/tight spacing (-0.01em) - Clear categorization
  - Body (Primary content): Inter Regular/18px/1.7 line height - Comfortable reading with enhanced line height
  - Small (Supporting text): Inter Regular/16px/1.6 line height - Clear secondary information
  - CTA Buttons: Outfit SemiBold/18px/normal spacing - Confident, clickable

## Animations

Animations are central to the experience - they create the futuristic, immersive feeling that makes users say "wow" while remaining purposeful and smooth.

- **Purposeful Meaning**: Particle animations create ambient life; gradient pulses suggest energy flow; hover effects reward exploration; page transitions maintain spatial continuity; glow effects emphasize interactivity
- **Hierarchy of Movement**: Background particles (constant subtle motion) → Section reveals (scroll-triggered) → Card animations (sequence on view) → Hover micro-interactions (instant feedback) → Button effects (rewarding clicks)

## Component Selection

- **Components**: 
  - Card: Glassmorphic style with backdrop-blur-xl, semi-transparent backgrounds, gradient borders
  - Button: Gradient backgrounds from primary to secondary, glow effects, scale transforms
  - Custom ImmersiveBackground: Canvas-based particle system with connecting lines
  - Sheet: Glassmorphic mobile menu with backdrop blur
  - Toast (Sonner): Themed to match glassmorphic aesthetic
- **Customizations**: 
  - Particle animation system with canvas rendering
  - Gradient orbs with pulsing blur animations
  - Glassmorphic cards with hover-triggered gradient overlays
  - Animated navigation with scroll-reactive opacity
  - Gradient text effects throughout
  - Icon containers with glow effects
  - Scroll-triggered reveal animations
- **States**: 
  - Navigation: Gradient background on active, glow effect on hover
  - Buttons: Scale 1.05 on hover, gradient shift, shadow intensification, glow expansion
  - Cards: Lift effect (translateY -8px), gradient overlay appears, border color shifts, glow shadow
  - Inputs: Glow ring on focus matching theme colors
- **Icon Selection**: 
  - Phosphor Icons with duotone weight for depth
  - Animated on hover with scale and rotate transforms
  - Wrapped in gradient containers with blur effects
  - Social icons in footer with interactive glow states
- **Spacing**: 
  - Section padding: py-24 for breathing room
  - Card gaps: gap-6 for clear separation
  - Large radius: 1rem for modern, soft feel
  - Generous whitespace to let glassmorphic effects shine
- **Mobile**: 
  - Reduced particle count for performance
  - Maintained glassmorphic effects with optimized blur
  - Touch-optimized hover states
  - Responsive gradient text sizing
  - Stacked layouts with full-width cards
  - Optimized animations for mobile performance
