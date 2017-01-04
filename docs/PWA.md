The following was copied from the September 13, 2016 Ionic blog post.

As you know, we’re huge fans of [progressive web apps](http://blog.ionic.io/navigating-the-world-of-progressive-web-apps-with-ionic-2/), which are distributed with just a URL, offer an app-like experience using modern web APIs, and allow users of your app to get instant access to your app’s functionality, all without having to download your app from an app store. It’s been a top priority of ours to make [PWAs](http://blog.ionic.io/what-is-a-progressive-web-app/) a first-class citizen right out of the box, and we are happy to let you know that the first iteration of that is now available when you create a new Ionic 1 or Ionic 2 app!

## Building a PWA with Ionic
The two key pieces that are needed for a web app to become a progressive web app are a manifest and a service worker. Ionic now offers both of these by default with every new app that gets created!

The [manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest) gives the browser metadata about your app, so that when the user chooses to add your PWA to their home screen, it knows what icon to use, how the PWA should be displayed, the PWA’s name, and more. Normally, you’d have to add this yourself, but Ionic now provides a default manifest that’s already linked to the index.html and ready to go. You’ll find it in the `www` folder of your Ionic project.

A [service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) is a script that allows you to control how your PWA uses the network. [Service workers](http://blog.ionic.io/service-workers-revolution-against-the-network/) allow you to give your PWA functionality such as the ability to work offline, send push notifications, background sync, and more! For this first iteration of built-in PWA support in Ionic 1 and 2, we’re providing users with a blank canvas on which to build their service worker. The service worker that we now provide by default for every Ionic app is very minimal and simply adds placeholders for the appropriate events that a standard service worker emits. The goal of this is to see what the Ionic community thinks are some of the best uses for service workers, so we can use that to improve our service worker support in the near future.

We also provide the service worker registration code in your index.html file.

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
          .then(() => console.log('service worker installed'))
          .catch(err => console.log('Error', err));
    }

To enable the service worker, you can simply uncomment that registration code, and you’ll be ready to go! You’ll find the `service-worker.js` file in the `www` folder of your Ionic project.

For examples of service workers, check out the [ServiceWorker Cookbook](https://serviceworke.rs/) by Mozilla and the Google Chrome team’s [repo of example service workers](https://github.com/GoogleChrome/samples/tree/gh-pages/service-worker).

We’re very excited to start supporting PWA’s out of the box with Ionic and plan on steadily improving this support in the future. We are currently considering support for server-side rendering to get a blazing-fast first render and convenient hosting with the Ionic Cloud. Our service worker support will also be evolving in the near future to allow for automatic configuration of service workers. This will give your PWA offline support right out of the box, without you having to write any code. We cannot wait to see the awesome PWAs that you build! Stay tuned to our blog and our [docs](http://ionicframework.com/docs/) for updates!