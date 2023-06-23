# Online control of a stock counter (websocket)
## About
This is an application with a backend in NodeJS/Typescript and a frontend in React/Typescript. 
Front and backend communicate using websockets. 
The backend controls a stock counter, the current count  displays on the frontend.
Both the backend (by setting an interval ) and the frontend can update the counter (using the button 'Update').

The solution consists of two part:a  frontend  NextJS/Typescript and a backend script NodeJS.

## Getting Started frontend  part (Next)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploy backend script NodeJS
```bash
npm run ws:start 
```
