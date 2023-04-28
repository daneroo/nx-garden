# NxGarden

- This project was generated using [Nx](https://nx.dev).

I want to have:

- a nextjs site
- a nextra site for docs
- I want tailwindcss
- I want a deno cli app
- I want to dockerize the two sites
- I want e2e

## Setup

### Adding a Library

```bash
pnpm exec nx generate @nx/js:library is-even --unitTestRunner=vitest --bundler=vite --publishable --importPath=@nx-garden/is-even

pnpm exec nx generate @nx/js:library is-odd --unitTestRunner=vitest --bundler=vite --publishable --importPath=@nx-garden/is-odd
```

### Initial repo setup

Started using [Nx Integrated tutorial](https://nx.dev/tutorials/integrated-repo-tutorial)

Using [options from the docs](https://nx.dev/packages/nx/documents/create-nx-workspace)

```bash
npx create-nx-workspace@latest --allPrompts

✔ Choose what to create                 · integrated
✔ What to create in the new workspace   · ts
✔ Repository name                       · nx-garden
✔ Which package manager to use          · pnpm
✔ Main branch name                    · main
✔ Enable distributed caching to make your CI faster · Yes
✔ CI workflow file to generate?       · github

#  or checking all the options myself:
# --bundler seems to have had no impact on the generated project
npx create-nx-workspace@latest --bundler vite --ci github --defaultBase main --docker --packageManager pnpm --preset ts --skipGit nx-garden

```

## TODO

- Remove NxCloud token `nx.json/../accessToken`
- [Try Astro with Nx and TailwindCSS](https://leosvel.dev/blog/creating-my-personal-website-with-astro-tailwindcss-and-nx/)

## Usage

- Dev: `nx serve site`
- Test: `nx test site` to execute the unit tests via [Jest](https://jestjs.io).
- E2E: `nx e2e site-e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

## References

- [Tasilwindcss Docs](https://tailwindcss.com/docs/)
- [Tailwind CSS color matcher](https://moh-slimani.github.io/tailwind-css-color-matcher/)
- Extract SVG -> React component: <https://transform.tools/>
