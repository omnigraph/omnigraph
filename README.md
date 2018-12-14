# Omnigraph
Social Media Management & Marketing Platform

## Quick Overview
- Installation
- Packages
- Directory Structure


### Packages
- Frontend
  - [React](https://github.com/facebook/react)
  - [NPM](https://github.com/npm/cli)
  - [WebPack](https://github.com/webpack)
  - [Sass](https://github.com/sass/sass)
  - [TypeScript](https://github.com/Microsoft/TypeScript)
- Backend
  - [PHP](https://github.com/php)
  - [Composer](https://github.com/composer/composer)
  - SDKS
  - Facebook
    -[Graph API](https://github.com/facebook/php-graph-sdk)
    -[Business API](https://github.com/facebook/facebook-php-business-sdk)

### Directory Structure
understanding how to navigation the directory structure.

├──omnigraph
    ├── package.json (webpack configuration)
    ├── tsconfig.json (typescript configuration)
    ├── tslint.json (lint configuration)
    ├── composer.json (composer package manager configuration)
    │
    ├── .git (source code version control)
    │   └── config (contains git configuration)
    │   
    ├── backend (backend directory)
    │   ├── api (contains api)
    │   ├── core (contains reusable code used
    │   └── config (contains system constructs)
    │
    └── frontend (frontend directory)
        └── app
        │   ├── index.html (bootloader target)
        │   └── index.scss (global stylesheet)
        │
        ├── core (reusable code directory)
        │
        └── environments (contains build changes, related to the environment)
             ├── environment.dev.ts (development enviroment)
             └── environment.prod.ts (production enviroment)

