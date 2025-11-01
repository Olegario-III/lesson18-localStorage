# localStorage Persistence React App

## Overview
This React app demonstrates **data persistence using `localStorage`**. Users can add and delete entries with name and email, and the data persists across page refreshes. It uses a smart `isLoaded` flag to prevent overwriting saved data on initial load.

## Features
- Add users via form with name and email.
- Delete users with a button.
- **Persist data** in `localStorage` — survives page reloads.
- **Smart saving**: Only saves after initial load using `isLoaded` flag.
- Simple, clean UI with list display.

## Technologies Used
- **React** + **React Hooks** (`useState`, `useEffect`)
- **JavaScript (ES6)**
- **HTML/CSS** (via `App.css`)
- **Browser `localStorage` API**

---

## Installation & Setup

### 1. Create a new React app
```bash
npx create-react-app localstorage-app
cd localstorage-app
