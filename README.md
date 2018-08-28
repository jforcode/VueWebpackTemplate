# Webpack + Vue Template

This is a basic template for VueJS app with webpack build. It has a web part and an api part, which is exposed on a express server.

In development, Webpack with dev config and --watch option is used to check for web code changes (view) and Nodemon is used to restart the express server.

It is meant for projects where both api and web will be used in the same project. Something which is meant as a quick poc, or a shorter scale project with quick configuration.

In case, it is required for projects where the project will handle only web (view) part or only api part:

## Web only
For web, just remove the api folder. Everything else is still alright, and nothing looks like in excess.
**Note**: One thing which may be desired is instead of running express in dev mode, we can use webpack-dev-server instead. The only effect this has is that reloading of browser is automatically done.

## Api only
For api, all web part has to be removed. So, something like:
- rm -rf config/webpack*
- rm -rf web
- remove everything in devDependencies except nodemon, and vue and body-parser from dependencies. (Subject to change)
- only two npm scripts are required
 - "dev": "nodemon app.js",
 - "prod": "node app.js"
- In <app.js>, remove app.use(express.static()) line

It's clear that this template is not suitable for an API only project.
It will be better to migrate the API part into a different project.

## Migrating into two projects, one for API, one for Web
In case, the project gets bigger, and we need to separate api and web part, the directory structure is simple enough. Just take out the api folder, and use it in a separate project meant for api development.

## Issues/Thoguhts
- The dev server in this config uses webpack watch to rebuild, and nodemon to restart server. It doesn't automatically reload the browser window. Right now, didn't find a way to do it.
  - Checking out Hot Module Replacement in webpack for that, and if something is available in nodemon for that. In other thoughts, it feels like a good thing.
  - Another option is to use webpack-dev-server for web, and express for api server. To do this, it kinda felt tricky:
    - Update npm scripts to use webpack-dev-server --open with dev config instead of webpack --watch.
    - In <app.js> get the webpack mode variable by process.env.NODE_ENV, and in dev mode remove putting /dist as static. (This is not required, but good to server web from only webpack-dev-server).
    - Since web and api are two different servers now, there ports will be different. This has to be managed in code wherever required. (This is where it gets messy and feels hacky)
  - For now, this looks OK, and still will be searching for a way to do restart cause just in case.
  - It's not a big deal to refresh the window when you are on it. And, sometimes it helps. You can open two windows, one with non-reloaded page, and one with the current page which helps in comparison. There may be other advantages and disadvantages.

- The webpack config doesn't support multiple pages as of now, like about us, blog, home as three separate pages with different endpoints. It's kind of an SPA. It can be done quite easily with webpack by just providing multiple entry points. Some stuff available online
  - https://webpack.js.org/concepts/entry-points/
  - https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points

- But in this config, I am using HTMLWebpackPlugin which generates like one html. There are some discussions around it which I am seeing to make it work with multiple entry points.
  - https://github.com/jantimon/html-webpack-plugin/issues/218

This is something which looks important to me as in I might be needing to use it soon enough, but as of now, I have not built something which needs multiple entry points. Anyway, I will be looking at this issue as well, and updating the config when a solution is found.

- There is no extra stuff like image loaders, font loaders, tests folder or scripts, linter, editor config etc. In essence, it is a basic webpack build with VueJS. Extra stuff may be added as required. The reason to not add here is that config depends and changes with the tools used. Image loaders and font loaders didn't look important enough as of now. If required, will add them as well.

## Disclaimer
This is a basic webpack build. Contains basic features which I felt necessary and sufficient for my projects. And this was done after a long battle with understanding webpack and it's config. This also means, that I have tried going through advanced features of webpack. Some I didn't find necessary at this initial stage, and some I honestly didn't understand. I am definitely less knowledgable and wrong in many of the places. If I find something like that, I will update ASAP.

Thanks to anyone who points out a mistake/improvement.

All ears to anyone who would like to take the time out to discuss/explain any topic.
