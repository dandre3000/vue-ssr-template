# vue-template
Node app template that uses webpack configured for separate frontend and backend bundles.
- *Webpack* configured to build separate frontend and backend bundles
- *webpack-dev-middleware* and *webpack-hot-middleware* for hot module reloading
- *Node.js* backend with *Express* server
- *Babel* compiler
- *ESLint* linter
## Installation
Fork/copy the repository then install dependencies.
```bash
npm i
```
## Development setup
Build development server and watch files.
```bash
npm run build-dev-server
```
Start dev-server with hot module reloading for client. Restart on every server build.
```bash
npm run nodemon
```
## Production setup
Build then start server.
```bash
npm run build
npm start
```
