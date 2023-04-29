# NxGarden

- This project was generated using [Nx](https://nx.dev).

I want to have:

- a nextjs site to test things like libraries
- a nextra site for docs
- I want tailwindcss
- I want a deno cli app
- I want to dockerize the two sites
- I want e2e
- I want to deploy to vercel (2 sites)

## Usage

- `pnpm test`: `nx run-many -t test --all`
- `pnpm lint`: `nx run-many -t lint --all`
- `pnpm format:check`: `nx run-many -t format:check --all`
- `pnpm format:write`: `nx run-many -t format:write --all`

And when we have site and docs:

- Dev: `nx serve site-garden`
- Test: `nx test site-garden` to execute the unit tests via [Jest](https://jestjs.io).
- E2E: `nx e2e site-garden-e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

## Setup

### Adding a Next.js App

```bash
pnpm install --save-dev @nx/next # once only

pnpm exec nx generate @nx/next:application site-garden
pnpm exec nx generate @nx/next:application site-docs

pnpm exec nx generate @nx/next:library shared-next
```

### Adding a libraries, with dependents

```bash
pnpm exec nx generate @nx/js:library is-even --importPath=@nx-garden/is-even

pnpm exec nx generate @nx/js:library is-odd --importPath=@nx-garden/is-odd
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

- [ ] Add a next.js app <https://nx.dev/packages/next>
- [ ] Remove NxCloud token `nx.json/../accessToken`
- [ ] [Try Astro with Nx and TailwindCSS](https://leosvel.dev/blog/creating-my-personal-website-with-astro-tailwindcss-and-nx/)

## References

- [Next+Tailwind 2021](https://blog.nrwl.io/setup-next-js-to-use-tailwind-with-nx-849b7e21d8d0)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/)
- [Tailwind CSS color matcher](https://moh-slimani.github.io/tailwind-css-color-matcher/)
- Extract SVG -> React component: <https://transform.tools/>
