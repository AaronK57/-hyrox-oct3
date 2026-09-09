# HYROX Oct 3 Race Build

Mobile-first HYROX Mixed Doubles training dashboard for the build to race day on 3 October 2026.

## Hosting

This is a static site. For Netlify:

- Production branch: `main`
- Build command: leave blank
- Publish directory: `.`

Every commit to `main` can deploy automatically through Netlify continuous deployment.

## Progress data

Workout results are stored in browser `localStorage`, so updates to the website code do not overwrite logged results on the same device/domain.

Use the export button in the site to back up progress as JSON.

## ROXFIT

The site can copy the current workout in a ROXFIT/HYPE-friendly text format and open ROXFIT. Logged sessions can also store a ROXFIT result/share link.
