# Portfolio

A macOS-desktop style portfolio: projects are folders on the desktop, clicking one opens a window, and the dock holds About / Projects / Contact plus social links.

## Edit your content
Everything personal lives in **`data.js`**: name, role, bio, skills, experience, social links and projects.

- **Hero photo:** drop an image in `assets/` and set `heroImage: "assets/hero.jpg"`. It's shown full-screen in grayscale. Leave it `""` to show your name in large type instead.
- **Project images:** set `thumb` and `images` to paths like `"assets/project1.jpg"`. CSS gradients also work as placeholders.
- **Folder positions:** `x` / `y` are percentages of the screen. Visitors can also drag folders around.

## Run locally
Open `index.html` in a browser, or run `npx serve .`.

## Deploy
Plain static files, so it works on GitHub Pages, Netlify or Vercel with no build step.
