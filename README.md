# Next.js project template

This template includes preconfigured packages and is a skeleton for further development

## Included Packages

1. Mongoose (for MongoDB)
   - Included `dbConnect.ts` file
   - Only require environment variable for `MONGODB_URI`
2. TailwindCSS
   - Included plugins
     - @tailwindcss/forms
     - @tailwindcss/typography
     - prettier-plugin-tailwindcss
   - Configured `tailwind.config.js`
3. HeadlessUI
4. Font Awesome Icons
   - Preconfigured `_app.tsx`
   - Icons included
     - Solid Icons
     - Regular Icons
     - Brands Icons

## How to use

Execute `create-next-app` with npm or Yarn to use the template

```bash
npx create-next-app <directory> -e https://github.com/muhammadarifftaha/nextjs-project-template.git --ts --eslint
```

```bash
yarn create next-app <directory> -e https://github.com/muhammadarifftaha/nextjs-project-template.git --ts --eslint
```

## Configuration

Follow instructions below to configure the template :

### Next.js

`next.config.js` file includes remote patterns for Cloudinary. Replace `<cloud-name>` in `pathname` value with your Cloudinary cloud name found on your Cloudinary Dashboard.

```ts
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/<cloud-name>/image/upload/**/**",
      },
    ],
  },
};
```

### MongoDB/Mongoose

#### 1. Get the connections string for your MongoDB server

In the case of MongoDB Atlas, it should be a string like this:

```
mongodb+srv://<username>:<password>@project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

#### 2. Set up environment variables

- Create a copy of the `.env.example` file and rename it to `.env` or `.env.local`.

```bash
cp .env.example .env
```

- Paste the connection string from step 1 inside the `.env` file for the `MONGODB_URI` variable.

Your `.env` file should contain this line

```
MONGODB_URI=mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

---

### HeadlessUI

HeadlessUI React components are included. Visit the [official documentation](https://headlessui.com/) for more info.

### TailwindCSS

#### Plugins

All Plugins can be configured in the `tailwind.config.js` file. Refer to TailwindCSS documentation for more info.

[TailwindCSS Plugins](https://tailwindcss.com/docs/plugins)

### FontAwesome

FontAwesome has been preconfigure using the defaults from the [FontAwesome + Next.js](https://fontawesome.com/docs/web/use-with/react/use-with) documentation.
