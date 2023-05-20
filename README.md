# About

My React Template with TypeScript, Redux, Tailwind, ESLint, Prettier, Husky, Commit-lint and Atomic Design for components.

# Structure

## Tailwind

Check `tailwind.config.js` for the design system with pre-defined values for colors.

## Source

In the src folder, a few folder contains special functions:

- @types: special type definitions for working with Vite, environment variables...
- assets: project assets such as icons, images...
- common: components, hooks, layouts, page, etc. that can be shared between modules

The rest is organized by modules, and then separated by functions, each with its own components, pages, service and redux slice.
The common folder contains components that can be shared between functions.

- components: parts of pages, organized by atomic convention
- pages: the whole screens for the modules
- models: the definitions for module entities & dtos
- redux: a slice of the redux state to be connected to the global reducer
- services: define the connection with the back-end server.

# Config

Rename .env.example and .env.production.sample to provide the necessary environment variables.
Remember to update _src/@types/env.d.ts_ for code completion inside your IDE.

# Running the code

Install the dependencies. Then start the server by `npm run start`.

# Building for production

Use `npm run build:prod` to build the code. Then deploy to your hosting of choice.

# Linting

Pre-configured with prettier and eslint. Automatic import sorting with [simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort/).

# Shorthands

_@_ is mapped to the _src_ folder for imports.

# License

Released under MIT License. Feel free to change and use in your own project.

# Credits

Modified from [jvidalv's vital React template](https://github.com/jvidalv/vital)
