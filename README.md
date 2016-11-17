_WORK IN PROGRESS, NOT READY FOR USE_

# The Ionic Super Starter 🎮

This is a batteries-included, all-you-can-eat, one-stop-shop, soup-to-nuts starter project for Ionic (Based on Ionic 2.x).

Get from zero to app store 1000x faster with pre-built pages and best practices for Ionic development.


## Pages

The Super Starter comes with a variety of ready-made pages. These pages help you assemble common building blocks for your app so you can focus on your unique features and branding.

We encourage you to pick the pages you wish to use and remove the ones you don't. If you'd rather start with a blank slate, we recommend using our `blank` starter instead.

Angular requires every page to be defined in the module for the app. To make this easy, all page configuration happens in `src/pages/pages.ts`. Here's an example of what this file looks like:

```typescript
import { TutorialPage } from './tutorial/tutorial';
export const Pages = [
  TutorialPage,
  LoginPage,
  SignupPage,
  TabsPage,
  // ...
]

export cost MainPage = TabsPage
```

Walking through this, we first import the page classes we are going to use in our app. Next, we put the class of each page in our `Pages` array, which the starter then adds to the Angular module for you. Finally, `MainPage` is a variable the refences the main page of the app. This is the page that users will spend most of their time in (for example, in Instagram this would be the tab layout page).

### Tutorial

The Tutorial 
