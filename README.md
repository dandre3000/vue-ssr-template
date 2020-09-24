# vue-template
Vue app template with server side rendering.
- *Webpack* configured to build separate frontend and backend bundles
- *webpack-dev-middleware* and *webpack-hot-middleware* for hot module reloading
- *Node.js* backend with *Express* server
- *Vue.js* gui framework for client and server
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
