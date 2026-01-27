# Good Company - Project Context

## Overview
This is a Next.js application with TypeScript, Apollo Client, and GraphQL.

## Tech Stack
- **Framework**: Next.js 16.x (latest)
- **Language**: TypeScript 5.x
- **UI**: React 19.x
- **Data Layer**: Apollo Client 4.x + GraphQL 16.x
- **Styling**: Tailwind CSS 4.x
- **Testing**: Jest 30.x, Cypress 15.x, Storybook 8.x
- **Code Quality**: ESLint 9.x, Prettier

## Recent Major Upgrades (2026-01)

All packages have been upgraded to their latest versions. Key breaking changes:

### Apollo Client 3 → 4
- `ApolloProvider` moved to `@apollo/client/react`
- Client initialization now requires `HttpLink` explicitly
- Example:
  ```ts
  import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
  import { ApolloProvider } from '@apollo/client/react';

  const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://...' }),
    cache: new InMemoryCache(),
  });
  ```

### Tailwind CSS 3 → 4
- PostCSS plugin moved to separate package `@tailwindcss/postcss`
- Update [postcss.config.js](postcss.config.js) to use `'@tailwindcss/postcss'` instead of `'tailwindcss'`

### Storybook 6 → 8
- Commands changed: `storybook dev` and `storybook build`
- Use `@storybook/nextjs` for Next.js integration
- Removed deprecated packages: `@storybook/addon-postcss`, `@storybook/builder-webpack5`, `@storybook/manager-webpack5`

### React 18 → 19
- Minor breaking changes, most code compatible
- Updated testing library to v16 for React 19 support

### ESLint 8 → 9
- Flat config format now default
- Using `--legacy-peer-deps` for some peer dependency conflicts

### Other Notable Upgrades
- TypeScript ESLint 5 → 8
- Jest 29 → 30
- Cypress 12 → 15
- Next.js 13 → 16
- GraphQL Codegen 2 → 6

## Setup & Development

### Initial Setup
```bash
npm install
npm run generate:types  # Generate GraphQL types
```

### Development Commands
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server

### Code Generation
- `npm run generate:types` - Generate TypeScript types from GraphQL schema
- `npm run generate:types:watch` - Watch mode for type generation

### Testing
- `npm run test:unit` - Run Jest unit tests in watch mode
- `npm run test:e2e:dev` - Run Cypress E2E tests
- `npm run cypress:open` - Open Cypress test runner

### Storybook
- `npm run storybook` - Start Storybook on port 6006
- `npm run build:storybook` - Build static Storybook

### Code Quality
- `npm run lint` - Run ESLint

## Project Structure
- `/pages` - Next.js pages and API routes
- `/components` - React components
- `/graphql` - GraphQL queries, mutations, and generated types

## Notes
- GraphQL codegen configuration should be in `codegen.yml` or `codegen.ts`
- Environment variables should be in `.env.local`
