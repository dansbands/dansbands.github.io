Title: Fix homepage anchor scroll when navigating back from resume or portfolio

## Problem
Homepage nav links for `PROFESSIONAL`, `RECENT WORK`, and `CONTACT` rely on direct scroll behavior. When a user is on `/resume` or `/portfolio` and clicks one of those links, the app returns to `/` but does not scroll to the requested section on the first click.

## Goal
Ensure anchor navigation works on the first click, including when triggered from non-home routes.

## Scope
- Update global nav anchor-link behavior to support cross-route navigation
- Ensure smooth scroll still works when already on homepage
- Keep behavior consistent for desktop and mobile drawer navigation

## Acceptance Criteria
- From `/resume` or `/portfolio`, clicking `PROFESSIONAL` scrolls to `#professional` on first click
- From `/resume` or `/portfolio`, clicking `RECENT WORK` scrolls to `#recent-work` on first click
- From `/resume` or `/portfolio`, clicking `CONTACT` scrolls to `#contact` on first click
- Existing homepage in-page smooth scrolling remains intact
