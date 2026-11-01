# Admin sign-in: Cloudflare setup

The server code is `_worker.js`; `_routes.json` invokes it only for `/api/*`. Images and the public timeline remain static. `admin-auth.js` uses the same-origin `/api/auth` endpoint. No actual credential values belong in GitHub.

In **Cloudflare → Workers & Pages → ipicoltimeline → Settings → Variables and Secrets**, select **Production** and add these as **encrypted Secrets**, not plain text variables:

1. `ADMIN_PASSWORD`: enter the requested admin password privately.
2. `SESSION_SECRET`: use a password manager to generate a separate random value of at least 32 characters. Do not reuse the admin password. This value signs session cookies; it is not something administrators type when signing in.

The username is `admin`. Redeploy after adding or changing secrets. Both values are required; without them, sign-in fails closed and visitors can still browse. Preview deployments should not receive production credentials.

## Behaviour

- Password verification runs on Cloudflare; the password is not embedded in HTML or client scripts.
- Sessions expire after four hours. Cookies are Secure, HttpOnly, SameSite=Strict and host-bound.
- Login and logout reject cross-origin requests. Responses are not cached. Login input is size-limited.
- Five failed attempts per IP trigger a 15-minute **per-isolate** throttle. This is basic abuse control, not a globally coordinated rate limit; add Cloudflare WAF/Turnstile for stronger protection before production.
- Changing either secret invalidates existing sessions. Sign-out clears this browser's cookie; copied cookies remain valid until expiry or a secret rotation.
- On the Cloudflare site there is no unauthenticated admin-preview button. Offline HTML still has an explicitly labelled demonstration. GitHub Pages has no authentication backend and directs administrators to Cloudflare.

## Important scope

This adds server-verified sign-in, **not a shared CMS**. All timeline data are already public. Editing tools still act on the visitor's browser-local data and photo storage; they do not publish changes for others. Since local browser state belongs to its user, it is not a server-side security boundary and a technical user can modify their own copy. Future shared write endpoints must independently validate the session before accepting changes.

Never treat client-side hiding of editing buttons as protection for shared or sensitive data.
