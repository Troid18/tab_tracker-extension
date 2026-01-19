# Tab Tracker Project

This repository contains two implementations of a URL tracking tool: a **Chrome Browser Extension** and a **Web Application**. Both serve the purpose of helping you save and manage URLs, but they operate differently.

## Project Structure

```
tab_tracker-extension/
├── extension/         # Chrome Extension (LocalStorage)
│   ├── manifest.json
│   ├── index.html
│   ├── index.js
│   └── index.css
├── web-app/           # Web App (Firebase Realtime Database)
│   ├── app.html
│   ├── app.js
│   ├── app.css
│   └── config.js
└── README.md
```

---

## 1. Chrome Extension

Located in the `extension/` directory.

A lightweight Chrome browser extension that helps you save and manage URLs for later access within your browser.

### Features
- **Save URLs Manually**: Type or paste URLs directly.
- **Save Current Tab**: Instantly save the URL of your active browser tab.
- **Persistent Storage**: Uses the browser's `localStorage` API. Data stays in your browser.
- **Clickable Links**: Opens saved URLs in a new tab.
- **Quick Delete**: Double-click "DELETE ALL" to clear the list.

### Installation
1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" (top-right toggle).
4. Click "Load unpacked".
5. Select the `extension` folder from this repository.
6. The Tab Tracker icon will appear in your browser toolbar.

### Technical Details
- **Manifest Version**: 3
- **Permissions**: `tabs` (to access active tab URL)
- **Tech Stack**: HTML, CSS, JavaScript, LocalStorage

---

## 2. Web Application

Located in the `web-app/` directory.

A web-based version of the tracker that syncs data to the cloud using Firebase 12.8.0.

### Features
- **Cloud Sync**: Saves URLs to a Firebase Realtime Database ("Leads" node).
- **Cross-Device Access**: Access your saved links from any device running the web app (provided it shares the configuration).
- **Real-time Updates**: The list updates instantly when items are added or removed.

### Setup
1. Navigate to the `web-app` directory.
2. Ensure you have a valid `config.js` file exporting your `firebaseConfig` object.
   ```javascript
   // config.js example
   export const firebaseConfig = {
       apiKey: "...",
       authDomain: "...",
       databaseURL: "...",
       projectId: "...",
       storageBucket: "...",
       messagingSenderId: "...",
       appId: "..."
   };
   ```
3. Open `app.html` in a modern browser (or serve it using a local server like Live Server).

### Technical Details
- **Tech Stack**: HTML, CSS, JavaScript (ES Modules)
- **Backend Service**: Firebase Realtime Database
- **Dependencies**: Firebase JS SDK (imported via CDN)

---

## License

This project is open source and available for personal and educational use.