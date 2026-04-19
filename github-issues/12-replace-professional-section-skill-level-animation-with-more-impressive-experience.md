Title: Replace Professional section skill level animation with something actually impressive

## Problem
The current Professional section skill-level animation feels generic and low-signal. It does not communicate senior-level technical depth or create a memorable interaction.

## Goal
Design and implement a more compelling Professional section animation that feels polished, modern, and aligned with a senior engineer portfolio.

## Scope
- Replace the existing skill-level animation interaction in the Professional section
- Preserve existing content hierarchy and accessibility standards
- Ensure animation performance is smooth on desktop and mobile
- Keep implementation maintainable within current stack and style architecture

## Acceptance Criteria
- Professional section no longer uses the current skill-level animation
- New animation is visually stronger and clearly more deliberate than progress-bar style behavior
- Animation runs smoothly without noticeable jank on modern browsers
- Interaction remains accessible (keyboard/focus-safe, does not block content readability, respects reduced-motion preferences)
- No regressions to surrounding homepage layout or navigation
