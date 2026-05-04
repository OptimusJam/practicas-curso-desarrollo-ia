# Agents Instructions

## Product overview
- This is a logistics management project for centers, orders, and assignment logic.
- It models center capacity, order types, and nearest compatible center assignment.
- The app includes a health endpoint and automated tests.

## Technical implementation

### Tech stack
- Language: **TypeScript 5.5**
- Framework: **Node.js with Express 4.19**
- Database: **In-memory / no external database defined**
- Security: **No dedicated security layer present**
- Testing: **Playwright Test 1.45**
- Logging: **Not explicitly configured**

### Development workflow
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build the project
npm run build

# Run tests
npm test

# Clean build artifacts
npm run clean
```

### Folder structure
```text
.                       # Project root
|-- AGENTS.md           # this file with instructions for AI agents
|-- Readme.md           # main documentation human file
|-- package.json        # project metadata and scripts
|-- tsconfig.json       # TypeScript compiler settings
|-- src/                # source code folder
|-- tests/              # automated tests
|-- playwright.config.ts# Playwright configuration
``` 

## Environment
- Code and documentation must be in English
- Chat responses must be in the language of the user prompt.
- Sacrifice grammar for conciseness in responses.
- This is a Windows environment using git bash terminal.
- My default branch is 'main'.
