<div align="center">

<img src="./src/assets/logo.svg" width="120" />

# 🎵 Bajaate Raho

### Personal Radio Streaming Experience

A modern React-based music player interface built for a lightweight personal radio streaming platform.

<br/>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Material UI](https://img.shields.io/badge/Material_UI-7-007FFF?style=for-the-badge&logo=mui)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)

</div>

---

## 🎧 Overview

**Bajaate Raho** is a personal radio experience where every song is a surprise.

The frontend provides a clean, immersive music interface focused on:

- Smooth radio playback
- Minimal UI distractions
- Responsive layouts
- Modern dark theme aesthetics
- Native browser audio streaming

---

## ✨ Features

### 📻 Radio Mode

- Start / Stop personal radio
- Automatic next song playback
- Live currently playing information
- Animated radio branding

### 🎵 Player Experience

- Play / Pause controls
- Volume control
- Responsive audio player
- Long title marquee animation
- Keyboard shortcut support

```
SPACE → Play / Pause
```

### 🎨 UI Experience

- AMOLED inspired dark interface
- Material UI based components
- Smooth transitions
- Desktop and mobile optimized layout

---

## 🖥️ Screens

### Desktop

```
+--------------------+       +--------------------+
|                    |       |                    |
|    Radio Card      |  -->  |    Audio Player    |
|                    |       |                    |
+--------------------+       +--------------------+
```

### Mobile

```
+----------------+
|   Radio Card   |
+----------------+

       ↓

+----------------+
| Audio Player   |
+----------------+
```

---

# 🛠️ Tech Stack

| Technology      | Purpose            |
| --------------- | ------------------ |
| React           | Frontend Framework |
| Material UI     | Component Library  |
| Axios           | API Communication  |
| HTML5 Audio API | Audio Playback     |
| CSS Animations  | UI Motion          |

---

# 📂 Project Structure

```
src
│
├── api
│   └── musicApi.js
│
├── assets
│   ├── logo.svg
│   └── logo-animated.svg
│
├── components
│   │
│   ├── layout
│   │   └── Header.jsx
│   │
│   ├── radio
│   │   └── RadioCard.jsx
│   │
│   └── player
│       ├── AudioPlayer.jsx
│       ├── PlayerControls.jsx
│       ├── SongInfo.jsx
│       ├── ProgressBar.jsx
│       └── VolumeControl.jsx
│
├── pages
│   └── Home.jsx
│
└── App.js
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/rishabh-147/bazaate-raho-UI.git
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm start
```

Application:

```
http://localhost:3000
```

---

# ⚙️ Environment Setup

Create:

```
.env.development
```

Add:

```env
REACT_APP_API_BASE_URL=http://localhost:8080
```

For local network streaming:

```env
REACT_APP_API_BASE_URL=http://YOUR_BACKEND_IP:8080
```

---

# 🏗️ Production Build

Create optimized build:

```bash
npm run build
```

Generated output:

```
build/
```

---

# 🔗 Backend

Frontend communicates with:

**Bajaate Raho Backend**

Spring Boot powered audio streaming service providing:

- Song metadata
- Random radio selection
- HTTP range streaming
- Browser compatible audio streams

---

# 🗺️ Future Roadmap

- [ ] Playlist support
- [ ] Search
- [ ] Favorites
- [ ] User library
- [ ] PWA support
- [ ] Mobile gestures

---

<div align="center">

Built with ❤️ and 🎵

**Rishabh Tiwari**

</div>
