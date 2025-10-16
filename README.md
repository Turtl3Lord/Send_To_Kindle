# Send To Kindle  

A React Native mobile app that allows users to convert files to EPUB and send documents directly to their Kindle via SMTP email.  
The project follows the MVP (Model–View–Presenter) architecture pattern and integrates C++ native modules for file processing and conversion, focusing on performance and modularity.

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS-lightgrey)

---

## Overview

Send To Kindle provides a simple and efficient way to send e-books to Kindle devices.  
It currently supports the following input formats:

- TXT → EPUB  
- MOBI → EPUB  
- WORD (.docx) → EPUB  

After conversion, files can be automatically sent to the user’s Kindle email address configured through Amazon.

This project also serves as a technical portfolio demonstrating clean architecture and native integration.

---

## Architecture

The project follows the MVP pattern:

- **View (React Native):** user interface and navigation.  
- **Presenter (TypeScript):** communication between UI and business logic.  
- **Model (C++):** conversion modules for supported input formats.

This separation ensures scalability, maintainability, and testability.

---

## Features

| Feature | Status | Description |
|----------|---------|-------------|
| Initial app structure | ✅ Done | Configured with React Native and C++. |
| Navigation and main screens | ✅ Done | Tabs “Convert” and “Send” implemented. |
| MVP organization | ✅ Done | Layer separation completed. |
| Native File Picker | ✅ Done | Implemented using system file selector. |
| EPUB conversion (C++) | 🔄 In progress | Modules for TXT, MOBI, and DOCX conversion. |
| Kindle sending (SMTP) | 🔍 In analysis | Implementation under development. |
| Interface responsiveness | ⚙️ In progress | Visual refinements underway. |
| Multi-language support | 🧩 Planned | Initially available in Portuguese. |

---

## Roadmap

- [x] Project setup  
- [x] Screen creation and navigation  
- [x] MVP folder structure  
- [x] Native file picker implementation  
- [x] Style refactor  
- [x] Creation of `converters/` folder  
- [ ] Implement C++ conversion modules (TXT, MOBI, DOCX → EPUB)  
- [ ] Implement SMTP-based sending  
- [ ] Improve UI responsiveness  
- [ ] Add new file formats  
- [ ] Add automated tests  

---

## Technologies

- React Native (TypeScript)  
- C++ (Native Modules)  
- React Navigation  
- SMTP (Email Service)  
- Android / iOS  

---

## Running the project

```bash
# Clone this repository
git clone https://github.com/Turtl3Lord/Send_To_Kindle.git

# Enter the project folder
cd Send_To_Kindle

# Install dependencies
npm install

# Run on Android
npm run android

# Run on iOS
npm run ios
