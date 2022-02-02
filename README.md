# Portfolio site | Mica Molder

## Accessibility

In my experience, accessibility is something that can be in constant flux when working in a larger org. It's important to prioritize, rather than doing the bare minimum. My opinion is that we should be building sites with a11y in mind from the start.

Here's the process I'm using to build my portfolio:

1. [Coolors palettes, tagged contrast](https://coolors.co/palettes/popular/contrast)
2. [Add a pallete, then check its combinations for the preferred aethetic, based on tge a11y ratings.](http://a11yrocks.com/colorPalette/)
 
I'm going for WCAG 2.1 for now, but that may change in the future. While I'm writing this, WCAG 3 isn't quite ready, and AAA rating is tough without a solid foundation in a11y.

Things to look out for when you're looking to create a new site:

- Hover and focus contrast
- Hover and focus states:
    - Does it tab well?
    - Is a screen-reader telling to consumer what you intend?

## Contextual info

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The site itself uses Tailwind utilities (at the moment) to style its elements.

## Getting Started

Clone and pull the latest version of the project, then install the dependencies

``` bash
git clone #insert-ssh-here && git pull
npm i
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### On the docket

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Plans to improve

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel, if not Netlify

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
