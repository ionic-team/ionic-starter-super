__WORK IN PROGRESS, NOT READY FOR USE__

# The Ionic Super Starter 🎮

<img src="super2.png" width="400" />

The Ionic Super Starter is a batteries-included starter project for Ionic 2.x apps complete with pre-built pages, providers, , and best practices for Ionic development.

The goal of the Super Starter is to get you from zero to app store faster than before, with a set of opinions from the Ionic team around page layout, data/user management, and project structure.

The way to use this starter is to pick and choose the various page types you want use, and remove the ones you don't. If you want a blank slate, this starter isn't for you (use the `blank` type instead).

One of the big advances in Ionic 2 was moving from a rigid route-based navigation system to a flexible push/pop navigation system modeled off common native SDKs. We've embraced this pattern to provide a set of reusable pages that can be navigated to anywhere in the app. Take a look at the [Settings page](https://github.com/driftyco/ionic-starter-super/blob/master/src/pages/settings/settings.html#L38) for a cool example of a page navigating to itself to provide a different UI without duplicating code.

## Table of Contents

1. [Pages](#pages)
2. [i18n](#i18n) (adding languages)


## Pages

The Super Starter comes with a variety of ready-made pages. These pages help you assemble common building blocks for your app so you can focus on your unique features and branding.

The app loads with the `FirstRunPage` set to `TutorialPage` as the default. If the user has already gone through this page once, it will be skipped the next time they load the app.

If the tutorial is skipped but the user hasn't logged in yet, the Welcome page will be displayed which is a "splash" prompting the user to log in or create an account.

Once the user is authenticated, the app will load with the `MainPage` which is set to be the `TabsPage` as the default.

The entry and main pages can be configured easily by updating the corresponding variables in [src/pages/pages.ts](https://github.com/driftyco/ionic-starter-super/blob/master/src/pages/pages.ts).

Please read the [Pages](https://github.com/driftyco/ionic-starter-super/wiki/Pages) section of the Wiki for more documentation on each page.

## Providers

The Super Starter comes with some basic implementations of common providers.

Please read the [Providers](https://github.com/driftyco/ionic-starter-super/wiki/Providers) section of the Wiki for more documentation on each provider.

## i18n

Ionic Super Starter comes with internationalization (i18n) out of the box with [ng2-translate](https://github.com/ocombe/ng2-translate). This makes it easy to change the text used in the app by modifying only one file.

By default, the only language strings provided are American English.

Please read the [i18n](https://github.com/driftyco/ionic-starter-super/wiki/i18n) section of the Wiki for more documentation on configuring i18n.
