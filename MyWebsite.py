"""
Personal Website Project Setup and Deployment Guide
====================================================

This file documents the complete setup process for the personal portfolio website.

## Project Overview
- Frontend-only React application
- Styled with Tailwind CSS
- Dark, graffiti-style theme
- Deployed to GitHub Pages

## Project Structure
personal-website/
├── public/
├── src/
│   ├── assets/
│   │   ├── home/
│   │   │   └── 496408853_9978422018847321_3776776443857767059_n.jpg
│   │   └── highlights/
│   │       ├── harmonica/
│   │       │   ├── 496149851_9978421775514012_8001185684869434258_n.jpg
│   │       │   ├── 497432623_9978422092180647_7205994780320195985_n.jpg
│   │       │   └── 537353857_24491144467218050_2216417837504638031_n.jpg
│   │       └── research/
│   │           ├── 0770e4b8-35fd-4ae9-b7f8-6433855f0adb.jpg
│   │           ├── 3772ba8f-afc2-4841-91f2-9bbbd6d5d170.jpg
│   │           ├── LINE_ALBUM_1130613成發_240613_94.jpg
│   │           └── 螢幕擷取畫面 2025-12-24 232325.png
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Timeline.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Highlights.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md

## Installation Steps

1. Install Node.js (if not already installed)
   - Download from: https://nodejs.org/
   - Recommended version: 18.x or higher

2. Navigate to project directory
   cd "c:\\Users\\1\\Desktop\\Pythonfile\\personal website"

3. Install dependencies
   npm install

4. Run development server
   npm run dev
   
   The site will be available at: http://localhost:5173

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to GitHub (https://github.com)
2. Create a new repository named "personal-website"
3. Do NOT initialize with README (we already have one)

### Step 2: Initialize Git and Push Code
cd "c:\\Users\\1\\Desktop\\Pythonfile\\personal website"
git init
git add .
git commit -m "Initial commit: Personal portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git
git push -u origin main

### Step 3: Update Configuration
Before deploying, make sure to update the following files with your GitHub username:

1. vite.config.js - Update the base path:
   base: '/personal-website/'

2. src/main.jsx - Update the basename:
   <BrowserRouter basename="/personal-website">

### Step 4: Deploy to GitHub Pages
npm run deploy

This command will:
- Build the production version
- Create a gh-pages branch
- Push the built files to GitHub

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" section
4. Under "Source", select "gh-pages" branch
5. Click "Save"

Your website will be live at:
https://YOUR_USERNAME.github.io/personal-website/

## Features Implemented

### Home Page
- Full-screen hero image background
- Animated welcome message with graffiti-style text
- Navigation buttons to About and Highlights
- Contact email in footer

### About Page
- Self-introduction content
- Graffiti-style card design
- Animated emoji decorations

### Highlights Page
- Tabbed interface for two sections:
  1. 專題研究 (Research Projects)
  2. 口琴二三事 (Harmonica Journey)
- Timeline layout for both sections
- Images displayed with each timeline entry
- Smooth transitions and hover effects

### Design Features
- Dark theme with graffiti aesthetic
- Custom color palette:
  - graffiti-dark: #0a0a0a
  - graffiti-gray: #1a1a1a
  - graffiti-accent: #ff6b6b
  - graffiti-yellow: #ffd93d
  - graffiti-blue: #6bcfff
  - graffiti-purple: #a78bfa
- Custom fonts:
  - Permanent Marker (graffiti headings)
  - Patrick Hand (casual text)
  - Noto Sans TC (Chinese content)
- Animations:
  - Floating elements
  - Glowing text effects
  - Hover transitions
  - Scale and rotation effects

## Content Sources

All content was sourced from the provided materials:
- About text: 2.about/自我介紹.txt
- Harmonica timeline: 3.highlights/口琴/口琴時間線文字內容.txt
- Research timeline: 3.highlights/專題/專題時間線文字內容.txt
- Images: Copied from respective folders

## Technologies Used

- React 18.3.1
- React Router DOM 6.22.0
- Tailwind CSS 3.4.17
- Vite 5.4.11
- gh-pages 6.1.1

## Troubleshooting

### Issue: Images not loading
- Check that images are in src/assets/ directory
- Verify import paths in component files
- Run npm run build to test production build

### Issue: Routing not working on GitHub Pages
- Ensure basename is set correctly in main.jsx
- Verify base path in vite.config.js matches repository name

### Issue: Styles not applying
- Run npm install to ensure Tailwind is installed
- Check that index.css imports are present in main.jsx
- Verify tailwind.config.js content paths

## Contact
Email: kevinkuo2k@gmail.com

## Notes
- Website link is documented in README.md
- All text files were verified to be readable without encoding issues
- The website is fully responsive and works on mobile devices
"""
