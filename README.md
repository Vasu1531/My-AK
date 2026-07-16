# Akhilesh Singhal – Portfolio

A modern, fully responsive portfolio website built with plain **HTML, CSS and JavaScript** — no build step required.

## Project structure

```
.
├── index.html          Main HTML page
├── style.css           All styles (dark theme, responsive, animations)
├── script.js           Typing effect, scroll-reveal, lightbox, nav, back-to-top
├── images/
│   ├── profile.jpg     Hero image (round)
│   └── about.jpg       About-section image
├── resume/
│   └── resume.pdf      Downloadable resume (linked from the hero)
└── README.md
```

> The site gracefully falls back to auto-generated avatars if `images/profile.jpg` or `images/about.jpg` are missing, so it will still render before you add your photos.

## Add your assets

1. Place your two photos inside the `images/` folder using **exactly** these names:
   - `images/profile.jpg`
   - `images/about.jpg`
2. Place your resume PDF inside the `resume/` folder as:
   - `resume/resume.pdf`

Any other filenames will not be picked up unless you update `index.html`.

## Run locally

Just open `index.html` in a browser, or serve it with any static server:

```powershell
# Option 1: Python (if installed)
python -m http.server 8080

# Option 2: Node
npx serve .
```

Then browse to <http://localhost:8080>.

## Deploy

The site is 100% static, so it deploys to any static host with zero configuration.

### GitHub Pages
1. Push the folder to a GitHub repo (e.g. `portfolio`).
2. In the repo, open **Settings → Pages**.
3. Under *Build and deployment* choose **Deploy from a branch**, select `main` and folder `/ (root)`, then **Save**.
4. Your site will be live at `https://<username>.github.io/<repo>/` in a minute.

```powershell
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Akkhi-akgec/portfolio.git
git push -u origin main
```

### Netlify (drag & drop)
1. Go to <https://app.netlify.com/drop>.
2. Drag the entire project folder onto the page.
3. Done — you'll get a `https://<name>.netlify.app` URL instantly.

### Vercel
```powershell
npm i -g vercel
vercel
```
Follow the prompts; pick **Other** as framework.

### Cloudflare Pages / Surge / Firebase Hosting
All three work the same way — point them at this folder as the publish directory. No build command is needed.

## Customising

- **Colors** — edit the accent colors `#06B6D4` (cyan) and `#8B5CF6` (purple) in `style.css`.
- **Typing phrases** — edit the `phrases` array near the top of `script.js`.
- **Sections / content** — everything lives in `index.html` and is clearly commented.

---

© Akhilesh Singhal
