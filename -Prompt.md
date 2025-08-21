Platform limitation:
- Core Framework: React 19 with TypeScript.
- Styling: Tailwind CSS v3.
- Routing: React Router v7 (react-router-dom) using a HashRouter.
- State Management: React Context API.
- Build & Dependency Management: A buildless setup. Instead of a traditional bundler like Webpack or Vite, the app relies on:
a. ES Modules (ESM): The browser loads JavaScript modules directly.
b. Import Maps: Defined in index.html, this feature tells the browser where to find modules like react and react-router-dom when it sees an import statement. Dependencies are fetched directly from a CDN (esm.sh), simplifying the development environment significantly.

Build application with a modern frontend stack:
1. Max 100 lines / file, ensuring highly modularity and maintainability.
2. Extract theme in code into /themes with light.css and dark.css using Tailwind CSS v3. Use dropdown list in UI for theme selector.
3. In /theme add a new theme color /nature of light.css and dark.css using this color pallete:
#3E5902
#6E8C03
#324001
#C8D948
#595438
4. Use popular icons and popular libraries to build a complete, fully working robust sophisticated professional website using the one page HTML below as starting point.
5. Ensure no broken link. Every link must have complete working page.
6. Add internatiionalization or language selection (Englsih and Indonesian). Default: Indonesian.
7. Write this prompt (limitation and 1-6) inside -Prompt.md
8. Write the original code below into -Ori.md for later reference when needed:
