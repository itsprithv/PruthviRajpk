# PruthviRajpk — Cloud Engineer Portfolio

Portfolio website for **PruthviRaj P Karjagi** — Cloud Engineer (AWS, infrastructure, automation).

**Live site:** [https://itsprithv.github.io/PruthviRajpk/](https://itsprithv.github.io/PruthviRajpk/)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Deploy to GitHub Pages (free)

### 1. Create the repository on GitHub

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: **`PruthviRajpk`** (exactly this name)
3. Public repository
4. Do **not** add README, .gitignore, or license (we already have them)
5. Click **Create repository**

### 2. Push this project to GitHub

In PowerShell, from this folder:

```powershell
cd D:\aws\porfolio\portfolio
git init
git branch -M main
git add .
git commit -m "Deploy PruthviRajpk portfolio to GitHub Pages"
git remote add origin https://github.com/itsprithv/PruthviRajpk.git
git push -u origin main
```

Sign in to GitHub when prompted.

### 3. Enable GitHub Pages

1. Open [https://github.com/itsprithv/PruthviRajpk/settings/pages](https://github.com/itsprithv/PruthviRajpk/settings/pages)
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**
3. After the first push, go to **Actions** tab — the **Deploy PruthviRajpk to GitHub Pages** workflow will run
4. When it finishes (green check), your site is live at:

   **https://itsprithv.github.io/PruthviRajpk/**

### 4. Updates

After any change:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions rebuilds and redeploys automatically.

## Customize content

Edit `src/data/site.js` — name, email, projects, certificates, links.

## Tech stack

React · Vite · Tailwind CSS · React Router · GitHub Pages
