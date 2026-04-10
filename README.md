# Portfolio Website

A modern, elegant DevOps Engineer portfolio built with Next.js and TypeScript.

## Setup

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

The static output will be in the `out` folder.

## Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push the code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. Update `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name"
   ```

4. Build and deploy:
   ```bash
   npm run build
   ```

5. Go to GitHub reposiroty Settings > Pages > Source, and select the `out` folder as the deploy source.

Or use GitHub Actions - a workflow file will be created automatically when you deploy.

## Customization

Edit `src/data/portfolio.ts` to update your personal information.