## Polls

A single page application that lets users vote through the Polls API

**Demo**: https://pedantic-poitras-60ab7e.netlify.com

<img width="1275" alt="Screen Shot 2019-06-23 at 20 44 44" src="https://user-images.githubusercontent.com/9251327/59980620-a7bb2a80-95f8-11e9-8757-d426c281587d.png">

## Usage

**To run the project locally clone the repository:**

```bash
$ git clone https://github.com/alexandr-g/polls.git
```

**Install project dependencies:**

```bash
$ yarn
```

**Build and start project in development mode:**

```bash
$ yarn start
```

This opens `http://localhost:8080` in your default browser that will serve webpack output with a running app

**Build production js bundle:**

```bash
$ yarn build
```

#### Testing

Run tests using Jest:

```bash
$ yarn test
```

## Project Structure

    ├── src                             - All the source code
    │   ├── components                  - React UI components
    │   ├── api                         - API
    │   └── index.js                    - JS entry point
    │   ├── index.html                  - HTML entry point
    ├── .babelrc                        - Babel config to transpile ES6
    ├── .gitignore                      - Ignore files for source control (node_modules, test coverage)
    ├── package.json                    - List of dependencies, npm scripts, author etc.
    ├── README.md                       - Project Overview and instruction how to run and test
    ├── webpack.config.js               - Custom webpack config
    ├── yarn.lock                       - Locked project dependencies
