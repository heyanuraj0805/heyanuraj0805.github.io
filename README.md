# Anuraj Bhawarlal Jangid - Premium Dual-Look Portfolio Website

Welcome to your premium, interactive dual-themed portfolio website! This project is custom-designed based on your resume and incorporates a highly responsive **Dimension Switcher** shifting between a quantitative **Trading Terminal** and a fantasy **Anime RPG Guild Board**.

---

## 🌟 Interactive Core Features

1. **Dimension Shifter**: A custom particle-wipe switch in the sticky navigation header that instantly changes layouts, color themes, CSS variables, and all page vocabularies.
2. **Live Candlestick Simulator**: An interactive HTML5 Canvas chart that generates real-time green/bullish and red/bearish candlesticks, trendline graphs, moving averages, and crosshair tools.
3. **Sorcery Sigil Circle**: In Anime mode, the canvas morphs into a glowing, rotating magical summoning circle with dynamic vector nodes that float and attract to the user's cursor.
4. **Market Capitalization / Spell Power Mini-Game**:
   - In Trading Mode: A clicker widget to "Buy $ANURAJ Tokens" which triggers cash flyouts and expands the valuation.
   - In Anime Mode: A mana condenser tap button to power up and emit custom magic flower energy particle bursts.
5. **Dynamic Ticker Tape**: Standard marquee sliding header bar detailing skill statistics in quantitative tickers or RPG world events.
6. **Fully Validated Transaction Order Sheet**: Styled client contract forms with instant feedback notifications.
7. **Premium Glassmorphic Aesthetics**: Modern grid layout, typography, glows, animations, and custom mouse followers.

---

## 📂 File Architecture

All files are located in the main directory:
* [index.html](index.html) - Structured semantic markup containing base components and dynamic slot attributes.
* [style.css](style.css) - Flexible design system featuring HSL color schemes, layouts, keyframe animations, and custom themes.
* [app.js](app.js) - Script engine executing theme swaps, canvas animations, mini-game parameters, particles, audio nodes, and tracking.

---

## 💻 Local Testing

You can run this project locally in two simple ways:

1. **Double Click**: Simply navigate to the directory and double-click [index.html](index.html) to open it directly in any web browser.
2. **VS Code Live Server / Local Node Host**:
   If you have a local server tool installed (like VS Code extension Live Server or Python `http.server`), run:
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   Open `http://localhost:8000` in your browser.

---

## 🚀 Step-by-Step GitHub Pages Deployment

To deploy this portfolio website to **GitHub Pages** (making it live at `https://<your-username>.github.io/`), follow these commands in your terminal or PowerShell inside the directory:

### 1. Initialize Git Repository
```powershell
# Open terminal inside: c:\Users\HP\Desktop\project_git
git init
```

### 2. Stage and Commit All Files
```powershell
git add .
git commit -m "Initialize premium dual-themed trading and anime portfolio website"
```

### 3. Create a GitHub Repository
* Go to [GitHub](https://github.com/) and log in.
* Create a **new public repository**.
* Name it precisely `heyanuraj0805.github.io` (recommended, as GitHub will host it instantly at `https://heyanuraj0805.github.io/`) or simply name it `portfolio`.

### 4. Link and Push to GitHub
Copy the remote repository link from GitHub and execute:
```powershell
# Replace with your actual repo link if named differently
git remote add origin https://github.com/heyanuraj0805/heyanuraj0805.github.io.git
git branch -M main
git push -u origin main
```

### 5. Verify Online
* If you named the repository `heyanuraj0805.github.io`, it will be live immediately! Visit **`https://heyanuraj0805.github.io/`**.
* If you named the repository `portfolio` (or another name):
  1. Open your repository on GitHub.
  2. Go to **Settings** -> **Pages** (under Code and automation).
  3. Under **Build and deployment**, set the source to **Deploy from a branch**.
  4. Select `main` branch and `/root` folder, then click **Save**.
  5. Your website will be live in a few minutes at `https://heyanuraj0805.github.io/portfolio/`.

---
*Created with 💖 for Anuraj Bhawarlal Jangid. Let the dual dimensions begin!*
