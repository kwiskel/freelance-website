# Freelance Website

## Overview

Freelance website for [Placeholder](placeholder)

### Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Folder Structure

This is a [Next.js](https://nextjs.org/) project which is organized as follows:

- `/node_modules`: Contains all the dependencies of the project.
- `/public`: Contains all the static files of the project.
- `/app`: Contains all the routes, components, and logic of the project.
  - `/fonts`: Contains all the fonts of the project.
  - `/ui`: Contains all the components of the project.
  - `/lib`: Contains all the utility functions of the project.
  - `layout.tsx`: Defines the root layout of the project (can include shared components like header and footer).
  - `page.tsx`: The main page of the project.
  - `page.module.css`: The styles for the main page.
  - `global.css`: The global styles for the project.

## Development Setup

### Helpful VSCode Extensions

- ESLint
- Github Copilot
- Github Copilot Chat
- Code Spell Checker
- AWS Toolkit
- Markdown All in One
- Path Intellisense

### Add the following to VS Code Workspace Settings
```zsh
{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnType": false, // required
  "editor.formatOnPaste": true, // optional
  "editor.formatOnSave": true, // optional
  "editor.formatOnSaveMode": "file", // required to format on save
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "files.autoSave": "onFocusChange", // optional but recommended
  "[typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  }
}
```


### Node Version

Uses the version of node specified in .nvmrc

```zsh
nvm use
```

### Install Dependencies

```zsh
npm install
```

### Run Development Server

```zsh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployment

This project is deployed on [Vercel](https://vercel.com/). The deployment is triggered automatically when changes are pushed to the `main` branch.
