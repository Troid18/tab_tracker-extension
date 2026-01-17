# Tab Tracker Extension

A lightweight Chrome browser extension that helps you save and manage URLs for later access. Whether you want to bookmark important links or save your current active tab, Tab Tracker makes it easy to organize and retrieve them.

## Features

- **Save URLs Manually**: Type or paste URLs directly into the input field and save them with the "SAVE INPUT" button
- **Save Current Tab**: Click "SAVE TAB" to instantly save the URL of your currently active browser tab
- **Persistent Storage**: All saved URLs are stored in your browser's local storage, so they persist between sessions
- **Clickable Links**: Each saved URL is displayed as a clickable link that opens in a new tab
- **Quick Delete**: Double-click the "DELETE ALL" button to clear all saved URLs at once
- **Clean Interface**: Simple and intuitive popup UI with a responsive design

## How to Use

1. **Save a Manual URL**: 
   - Enter a URL in the text input field
   - Click "SAVE INPUT"
   - The URL will appear in your list

2. **Save Current Tab**:
   - Click the "SAVE TAB" button
   - The active tab's URL is automatically saved to your list

3. **Access Saved URLs**:
   - Click any saved URL in the list to open it in a new tab

4. **Delete All URLs**:
   - Double-click "DELETE ALL" to clear the entire list

## Technical Details

- **Manifest Version**: 3 (Chrome Extension Manifest v3)
- **Permissions**: Requires `tabs` permission to access active tab information
- **Storage**: Uses browser's `localStorage` API for persistence
- **Technologies**: HTML5, CSS3, Vanilla JavaScript
- **Font**: Google Fonts (Roboto)

## Project Structure

```
tab_tracker-extension/
├── manifest.json      # Extension configuration
├── index.html         # Popup UI structure
├── index.css          # Styling
├── index.js           # Core functionality
├── README.md          # This file
└── icon.png           # Extension icon (referenced in manifest)
```

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (top-right toggle)
4. Click "Load unpacked"
5. Select the extension folder
6. The Tab Tracker icon will appear in your browser toolbar

## Version

Current Version: 1.0

## License

This project is open source and available for personal and educational use.