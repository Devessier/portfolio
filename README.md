# portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/5590a821-cd8c-4557-8082-4690b9dcdea1/deploy-status)](https://app.netlify.com/sites/baptiste-devessier/deploys)

This is my portfolio. I used [Svelte](https://svelte.dev), [SvelteKit](https://kit.svelte.dev) and [TailwindCSS](https://tailwindcss.com) to build it 🎉.


It's a PWA ([Progressive Web Application](https://web.dev/what-are-pwas/)) that can be used offline :


![LightHouse results](https://raw.githubusercontent.com/Devessier/portfolio/master/lighthouse-results.png)

This website is also my personal blog.

## Drone

I created a [tool to help me automate some tasks](./drone.js). It can be run with the following command:

### Create an article

```bash
node drone generate-article 'The title of the blog post'
```

### Refresh article publication date

```bash
node drone update-article-datetime 'The title of the blog post'
```

### Create a note

```bash
node drone create-note
```
