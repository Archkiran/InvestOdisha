# Invest Odisha — Events & Milestones

Static viewing prototype containing 161 events, optimised gallery photographs and lightweight timeline previews.

## GitHub Pages

Publish the `main` branch from `/ (root)` in **Settings → Pages**. The site entry point is `index.html`, which opens `Invest_Odisha_Admin.html`.

No build step, paid hosting or server is required. Keep the image folders, `thumbnails`, scripts and fonts together with the HTML.

## Editing and sign-in

The site opens in visitor mode. **Admin sign in** currently shows a clearly labelled demonstration, not authentication or access control. No passwords are collected. Editing tools save changes only in that browser; edits do not update this repository or other visitors. A real administration backend can be connected later.

The published version contains the bundled event data. Browser-local edits/uploads made in the offline version are not automatically transferred to this website.

## Images

Gallery filenames and source links are retained. Timeline cards use `image-thumbnails.js` and the `thumbnails` folder; event viewers use the larger gallery images. Original-image backups and delivery ZIPs are intentionally excluded from this repository.

Escape closes an event view. If a photo viewer is open, Escape closes the photo first, then the event.
