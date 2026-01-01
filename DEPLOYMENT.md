# Deployment Guide for Netlify

## Files Added for Deployment

### 1. `netlify.toml` (Root directory)
Configuration file for Netlify deployment with:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects for React Router

### 2. `public/_redirects`
Backup redirect rules for client-side routing

## Deployment Steps

### Option 1: Deploy via Netlify CLI

1. **Install Netlify CLI** (if not installed):
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**:
```bash
netlify login
```

3. **Build the project**:
```bash
npm run build
```

4. **Deploy to Netlify**:
```bash
netlify deploy --prod
```

### Option 2: Deploy via Netlify Dashboard

1. **Build the project locally** to ensure no errors:
```bash
npm run build
```

2. **Push your code to GitHub**:
```bash
git add .
git commit -m "Add deployment configuration"
git push origin main
```

3. **Go to [Netlify Dashboard](https://app.netlify.com/)**

4. **Click "Add new site" → "Import an existing project"**

5. **Connect to your Git provider** (GitHub, GitLab, or Bitbucket)

6. **Configure build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Branch to deploy**: `main` (or your default branch)

7. **Click "Deploy site"**

### Option 3: Manual Deploy (Drag & Drop)

1. **Build the project**:
```bash
npm run build
```

2. **Go to [Netlify Drop](https://app.netlify.com/drop)**

3. **Drag and drop** the `dist` folder to deploy

## Troubleshooting

### Issue: "Nothing is present" or blank page

**Possible causes and solutions:**

1. **Build failed on Netlify**:
   - Check the deploy logs in Netlify dashboard
   - Look for error messages during build

2. **Wrong publish directory**:
   - Ensure `netlify.toml` has `publish = "dist"`
   - Vite builds to `dist` folder by default

3. **Missing environment variables**:
   - If you have any `.env` files, add them in Netlify dashboard
   - Go to Site settings → Environment variables

4. **React Router not working**:
   - The `netlify.toml` and `_redirects` files handle this
   - Ensure they're committed to your repo

5. **CSS/Assets not loading**:
   - Check if there are path issues
   - Ensure `base` in `vite.config.ts` is correct (should be default)

### Common Fixes

**Clear build cache and redeploy**:
- In Netlify dashboard: Deploys → Trigger deploy → Clear cache and deploy site

**Check console errors**:
- Open browser DevTools (F12)
- Check Console tab for JavaScript errors
- Check Network tab for failed requests

**Verify build locally**:
```bash
npm run build
npm run preview
```
This runs the production build locally to test

## Build Output

After successful build, you should see:
- `dist/index.html` - Main HTML file
- `dist/assets/` - CSS and JS bundles
- `dist/favicon.ico`, `robots.txt`, etc.

## Expected Netlify Configuration

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All routes work (/, /flights, /hotels, /documents, /travelers)
- [ ] Images load correctly
- [ ] External links open properly
- [ ] Bottom navigation works
- [ ] No console errors in browser DevTools

## Need Help?

1. Check Netlify deploy logs
2. Look for build errors in the terminal
3. Test the build locally with `npm run build && npm run preview`
4. Check browser console for JavaScript errors

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

