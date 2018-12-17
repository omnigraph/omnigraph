# Omnigraph
Social Media Management & Marketing Platform

## Quick Overview
- Installation
  - [OSX](#installation)
- [Packages](#packages)
- [Directory Structure](#directory-structure)

### Installation


### Packages
- Frontend
  - [React](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces
  - [NPM](https://github.com/npm/cli) - a package manager for JavaScript
  - [WebPack](https://github.com/webpack) - A bundler for javascript
  - [Sass](https://github.com/sass/sass) - CSS Preprocessor
  - [TypeScript](https://github.com/Microsoft/TypeScript) - adds optional types to JavaScript that support tools for large-scale JavaScript applications
- Backend
  - [PHP](https://github.com/php)
  - [Composer](https://github.com/composer/composer)
  - [Facebook](https://github.com/facebook?utf8=%E2%9C%93&q=&type=&language=php)
    - [Graph API](https://github.com/facebook/php-graph-sdk)
    - [Business API](https://github.com/facebook/facebook-php-business-sdk)
   - [Icobucci](https://github.com/lcobucci/jwt)
  - [Apache](https://github.com/apache/httpd)


### Directory Structure
Understanding how to navigation the directory structure.

```
└── /omnigraph
    ├── package.json (npm package configuration)
    ├── tsconfig.json (typescript configuration)
    ├── tslint.json (lint configuration)
    ├── composer.json (composer package manager configuration)
    ├── /.git (source code version control)
    │    └── config (contains git configuration)
    ├── /config (contains webpack configuration files)
    ├── /backend (backend directory)
    │    ├── api (contains api)
    │    ├── core (contains reusable code used
    │    └──config (contains system constructs)
    ├── frontend (frontend directory)
    │    ├── app
    │    ├── index.html (bootloader target)
    │    ├── index.scss (global stylesheet)
    │    └── core (reusable code directory)
    └── environments (contains build changes, related to the environment)
         ├── environment.dev.ts (development enviroment)
         └── environment.prod.ts (production enviroment)
 ```

