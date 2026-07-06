# Submission Notes

## What I built

I split the backend into small domain functions for the deterministic synchronous logic, such as cat-name formatting, order pricing, and free gift eligibility, so those rules could be tested directly and thoroughly. The comms service then stays focused on looking up the user and composing the final API response. The frontend is a Vite/React app with a typed fetch layer, loading/error handling, and a responsive delivery card built with shadcn-style UI primitives.

## Main choices

The domain helpers are pure and synchronous, which makes them easy to test without any Nest or HTTP setup. I used Zod at the JSON/API boundaries so both the backend data load and frontend API response parsing avoid unchecked casts. I kept the frontend in a separate `frontend/` folder, used Vite for a lightweight React setup, and used a local Vite proxy so the frontend can call relative `/comms/...` URLs in development.

## Thoughts on the test

I thought this was a good full-stack exercise, though it felt a little more frontend-heavy than backend-heavy once the API shape was in place. One improvement could be to add slightly more backend/domain complexity, or a few expected backend edge cases, so the logical/API side has as much room to be demonstrated as the page design.
