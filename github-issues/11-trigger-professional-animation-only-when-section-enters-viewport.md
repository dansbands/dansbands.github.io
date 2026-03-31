Title: Trigger Professional animation only when section enters viewport

## Problem
The Professional section animation starts on page load instead of waiting until the section is actually in view.

## Goal
Delay animation startup until the Professional section is on screen.

## Scope
- Update viewport observer logic for Professional section
- Ensure animation does not auto-fire before the user reaches the section
- Keep current visual styling and animation behavior once triggered

## Acceptance Criteria
- On initial homepage load, Professional animation is not visible/playing if the section is off screen
- When Professional section enters the viewport, animation becomes visible and runs
- No regression to other homepage sections or nav behavior
