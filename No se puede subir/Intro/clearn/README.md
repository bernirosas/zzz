# Clearn

A frontend application for coding courses

![Badge for production](https://img.shields.io/website?down_color=red&down_message=offline&label=production&logo=vercel&style=plastic&up_color=green&up_message=online&url=https%3A%2F%2Fclearn-production.vercel.app)
![Badge for staging](https://img.shields.io/website?down_color=red&down_message=offline&label=staging&logo=vercel&style=plastic&up_color=green&up_message=online&url=https%3A%2F%2Fclearn-staging.vercel.app)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.


## Environment variables


Copy the example environment file:

```shell
cp example.env .env
```

Then, follow the instructions commented in the file.

## How to document components

You should document components with [TSDocs](https://tsdoc.org/)
/ [TypeDoc](https://typedoc.org/) comments. For example:

```tsx
// Note: Props should be exported
export type ElementProps = {
  /** The user name that will be displayed */
  name: string
}

/** Displays a welcome message */
const Element = ({ name }: ElementProps) => {
  return <div>Hello {name}!</div>
}

export default Element
```


## Learn More

To learn more about Next.js and Tailwind CSS, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS](https://tailwindcss.com/docs/utility-first)
