This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Features

Easy experience, we have add a lot of plugins

    - [I18N](https://github.com/i18next/next-i18next#next-i18nextconfigjs) translation
    - ESlint
    - Pretier
    - [Husky](https://typicode.github.io/husky/) Modern native git hooks
    - 


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
=======
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# I18N
[Check documentation](https://github.com/i18next/next-i18next#next-i18nextconfigjs)
### How to use
```
import { useTranslation } from 'next-i18next'
    const { t } = useTranslation('common')

    <h1>{ t('welcome') }</h1>
```
>>>>>>> aea2431 (feat: first commit)
