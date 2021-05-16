## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment
1. Login to firebase
```
firebase login
```
2. Deploy to preview channel or production
```shell
# Deploy to preview channel
npm run preview

# Deploy to production
npm run deploy
```

## Configuring Module Path Alias
https://nextjs.org/docs/advanced-features/module-path-aliases

## Conventions
- In the `pages` directory, file names should match path
- File should not contain logic
  - Logic should be abstracted away in `modules` directory so that it can facilitate testing