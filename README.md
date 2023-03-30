# Next.js project template

This template includes preconfigured packages and is a skeleton for further development

## Included Packages

1. TailwindCSS
   - Included plugins
     - @tailwindcss/forms
     - @tailwindcss/typography
     - prettier-plugin-tailwindcss
   - Configured `tailwind.config.js`
2. HeadlessUI
3. Font Awesome Icons
   - Preconfigured `_app.tsx`
   - Icons included
     - Solid Icons
     - Regular Icons
     - Brands Icons

## How to use

Execute `create-next-app` with npm or Yarn to use the template

```
npx create-next-app {filename} --example
```

```
yarn create next-app {filename} --example
```

## Configuration

### MongoDB/Mongoose

#### 1. Get the connections string for your MongoDB server

In the case of MongoDB Atlas, it should be a string like this:

```
mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

#### 2. Set up environment variables

- Create a `.env` or `.env.local` file.
- Create a variable named `MONGODB_URI`.
- Paste the connection string from step 1.

Your `.env` fild should look like this

```
MONGODB_URI=mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```
