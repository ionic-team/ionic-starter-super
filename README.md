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
// Other imports...

export const Pages = [
  TutorialPage,
  WelcomePage,
  LoginPage,
  SignupPage,
  TabsPage,
  MapsPage
  // ...
]

export const MainPage = TabsPage
```

Walking through this, we first import the page classes we are going to use in our app. Next, we put the class of each page in our `Pages` array, which the starter then adds to the Angular module for you. Finally, `MainPage` is a variable the refences the main page of the app. This is the page that users will spend most of their time in (for example, in Instagram this would be the tab layout page).

### Tutorial

The Tutorial page is a slider that walks the user through an introduction to your app.

### Login

The Login page is a simple login/signin form

### Signup

The Signup page is a simple signup/create account form

### Welcome

The Welcome page is a "splash" page that directs the user to login or signup, or whatever else you like to display to the user as a welcome message.

Many users will prefer showing the login or signup page first, and not using the splash. YMMV.

### Tabs

For apps that wish to utilize a tabbed layout, the Tabs page starts with a default of four tabs and uses some of the other content pages as the default tab root pages.

### List Master

For those that wish to use a master-detail style page. This is the Master list view that lets you render a selection of items with an optional search, edit/swipe items, and push to the List Detail page.

### List Detail

The List Detail page is `pushed` to by the List Master, to view or edit a specific item (for example, a Contact).

### Map

The Map page renders a Map, (currently Google maps), using either the JS maps or native Google Maps if desired.

## Providers

The Super Starter comes with some basic implementations of common providers.

### User

The `User` provider is used to authenticate users through its `login(accountInfo)` and `signup(accountInfo)` methods, which perform `POST` requests to an API endpoint that you will need to configure.
