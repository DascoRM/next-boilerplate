This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Features

Easy experience, we have add a lot of plugins

    - [I18N](https://github.com/i18next/next-i18next#next-i18nextconfigjs) translation
    - ESlint
    - Pretier
    - [Husky](https://typicode.github.io/husky/) Modern native git hooks
    - [Vitest](https://vitest.dev) Unit testing with Vitest for Next library

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# I18N

[Check documentation](https://github.com/i18next/next-i18next#next-i18nextconfigjs)

### How to use

```
import { useTranslation } from 'next-i18next'
    const { t } = useTranslation('common')

<<<<<<< HEAD
    <h1>{ t('welcome') }</h1>
```

# Vitest

### How to use

```
$ npm run test
```

Write your test on _./tests_ folder
Exmple:

```
// exemple.test.tsx

import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Test from '../src/pages/test';

test('Page', () => {
  render(<Test />);
  expect(
    screen.getByRole('heading', { level: 1, name: 'welcome' })
  ).toBeDefined();
});

```

# Storybook

### Run story

```
$ npm run storybook
```

# Supabase

### Supabase container

Supabase run from Docker, the docker-compose file build and run supabase and database. This is a three container:

- Nextjs: => port 3000
- Supabase: => port 8000
- DB: => port 5432

Architecture:
/app

- Nextjs project
  /supabase
- Supabase project

Check documentation supabase for run this app and deploy:
[Here](https://supabase.com/docs/guides/self-hosting/docker)

# Docker

### For nextjs

#### Build

```
$ docker build -f Dockerfile.dev -t name_of_app .
```

```
$ docker run -p 3000:3000 name_of_app
```

```
$ sudo docker pull node:18-alpine
$ sudo docker compose up -d dev # or prod if you're in production mode
```
