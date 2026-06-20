<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/b0f6dfb5-b083-4a17-bab2-1e0aaae2ab0a

## Deploy to GitHub Pages

1. Create a new public GitHub repo named exactly `laer-norsk` (the name must match the `base` path set in `vite.config.ts`, or update that path to match whatever name you choose).
2. Push all the files in this folder to the `main` branch of that repo.
3. In the repo, go to **Settings → Pages**, and under "Build and deployment", set **Source** to **GitHub Actions**.
4. Push (or re-push) to `main` — this triggers the included workflow (`.github/workflows/deploy.yml`), which builds the app and publishes it automatically.
5. After the workflow finishes (check the **Actions** tab for progress), your live app will be at:
   `https://kumarmayank0990-netizen.github.io/laer-norsk/`

Every future push to `main` will redeploy automatically — no manual build step needed.

