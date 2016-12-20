__WORK IN PROGRESS, NOT READY FOR USE__

# The Ionic Super Starter 🎮

<img src="super.png" width="200" />

This is a batteries-included starter project for Ionic 2.x apps complete with pre-built pages, data sources, and best practices for Ionic development.

The goal of the Super Starter is to get you from zero to app store faster than before, with a set of opinions from the Ionic team around page layout, data/user management, and project structure.

The way to use this starter is to pick and choose the various page types you want use, and remove the ones you don't. If you want a blank slate, this starter isn't for you (use the `blank` type instead). One of the big advances in Ionic 2 was turning from a route-based navigation system to a flexible push/pop navigation system modelled off common native SDKs. This enables you build a few page layouts and then navigate to them whever you like in the app. Page reuse is paramount to reducing workload and improving user experience.

## Table of Contents

1. [Pages](#pages)
2. [i18n](#i18n) (adding languages)


## Pages

The Super Starter comes with a variety of ready-made pages. These pages help you assemble common building blocks for your app so you can focus on your unique features and branding.

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

## i18n

Ionic Super Starter comes with internationalization (i18n) out of the box with [ng2-translate](https://github.com/ocombe/ng2-translate). This makes it easy to change the text used in the app by modifying only one file. 

By default, the only language strings provided are American English.

### Adding Languages

To add new languages, add new files to the `src/assets/i18n` directory, following the pattern of LANGCODE.json where LANGCODE is the language/locale code (ex: en/gb/de/es/etc.).

### Changing the Language

To change the language of the app, edit `src/app/app.component.ts` and modify `translate.use('en')` to use the LANGCODE from `src/assets/i18n/`
