# Migrating KidsLoop Cordova -> React Native
This document is a worklog for the evaluation of how hard it is to migrate KidsLoop application code from Cordova to React Native.

The starting point of this document is a clean `react-native-template-typescript` project and as work is progressing more pages, components, and libraries will be added from the `KidsLoop Cordova` project.

## Migrating Landing Page
The first challenge and test will be to migrate or replicate the KidsLoop landing page from the `Cordova` Project to the `React Native` project.

The landing page in Cordova application is composed of an image background with a button to continue to the sign in page. This is a very simple case with almost no business logic.

### Dependencies
The `landingPage.tsx` file without modifications have some dependencies to other libraries. Some of these libraries might be compatible with `React Native` but some might not be. I will be trying to research compatibility or alternatives using sources online, or by manually testing.

In some cases there migh be dependencies we can use instead sharing the same API/interface which could make migration faster.

* material-ui
* react-intl
* react-router-dom
* recoil

Additionally the `landingPage.tsx` page also have some references to files within the `Cordova` project. These references I will remove or comment away for this migration test. The references is there mostly for the parental lock function.

* completeParentalGate (../../model/appModel)
* DialogParentalLock (@/app/components/ParentalLock)
* dialogsState (@/app/model/appModel)

Finally `landingPage.tsx` references some image assets (`.svg` format). These images I will try to include and display within the `React Native` application.

* KidsLoopTextLogo (@/assets/img/kidsloop_logo.svg)
* BackgroundCloudsBalloon (@/assets/img/landing/background_clouds_balloon.svg)
* BackgroundGreenGrass (@/assets/img/landing/background_green_grass.svg)

#### Material UI
Based on research online it seems like a `Material UI` library with similar syntax exists for `React Native`. My first attempt will be to try using that to preferably avoid having to change too much layout or UI related code within each component.

```sh
npm install react-native-paper
```

`useMediaQuery` doesn't exist in `React Native`. There's libraries adding limited support for it but I think the better option is to not use it. Media queries is a very web specific function and should not be needed in a `React Native` application.

`makeStyles` is not available in `React Native`. Instead there's `StyleSheet.create` which have almost the same behavior. I will replace any `makeStyles` with `StyleSheet.create`. `StyleSheet` in `React Native` try to simulate CSS for the web, naturally not all features or directives is available, so the style definition must be modified to be compatible.

It seems out of the box React Native doesn't support `Themes`, to achieve feature parity we have to support dark and light themes. There's libraries providing this and I will try installing the `react-native-theme` library to facilitate that. Additionally this library will pull in `react-native-extended-stylesheet` library.

I will create a new file where the themes can be defined, trying to replicate the granularity of themes and color palettes we have in the `Cordova` application.

```sh
npm install @dokuhero/react-native-theme
```

`Grid` component doesn't come included with `React Native` there is however a library `react-native-grid-component` we can add to include it. I will try using the `Grid` component from that library.

```sh
npm install react-native-grid-component
```

`react-native-grid-component` doesn't include Typescript type definition. We would have to generate our own type definitions or use a different library if we want to keep using the `Grid` component with type safety. Based on this information I think the best option might be to move away from `Grid` based layouts, this of course would severely reduce our ability to simply reuse UI components from the `Cordova` app. Even if we were able to find a good `Grid` component library, the way `Grid` would work in `React Native` would most likely be different from `Cordova`.

Layouts in React Native work similar to CSS flexbox. It's defined using the `View` component which can be specified using similar attributes as web. Most UI layout in the Cordova application is defined using the Material UI `Grid` component. It seems the best approach will be do redo layout using the `View` component.

My assessment based on these previous points about various components for UI layout used in the `Cordova` application is that we'll have to reimplement most of the frontend design in `React Native`. This will be faster than doing it natively since it's similar but not the same to regular React. Having the `Cordova` application UI to use as a reference will also help speed this up, both being able to look at it visually and being able to look at the code.

#### SVG Image Assets

To support SVG image assets in react native we have to instal a couple of libraries: `react-native-svg` and `react-native-svg-transformer`

```sh
npm install react-native-svg react-native-svg-transformer
```

We also have to update the `metro.config.js` file to instruct `React Native` to transform any `.svg` assets using the `react-native-svg-transformer` library.

There is also additional work to be done to supprt using `.svg` assets within `Jest` unit tests. A full [guide](https://medium.com/mtholla/react-native-how-to-use-svgs-193e384e1d1b) can be used as a reference.

*TODO* After following the previous guide to support `.svg` image assets it seems the editor doesn't properly understand `.svg` images is valid to import. So we'll have to spend some time to understand and fix that issue.

#### Localization / Lokalise
*TODO*

#### Screen Orientation
In the KidsLoop Cordova aplication screen orientation is locked to Portrait when user is on certain pages.

*TODO* Figure out how to conventiently control the screen orientation from certain pages.

### Conclusion
I spent roughly 4-5 hours migrating the visual design and layout of the landing page. This was including researching but *not* implementing support for themes and localization. It's the first time I've worked with React Native so the time might be shorter once used to the workflow and API's.

The landing page has a very simple layout and design with a couple of images, text, and a button. This might have contributed to being able to migrate it quickly. Other pages with more complex layout will most likely take longer time (e.g. scroll views and lists). 


## Client Side Libraries
We would be able to save a lot of time if we can reuse some of the client side libraries developed for web and cordova application. These libraries help us communicate with out backend services and API's.

### CMS API Client

#### Dependencies
Installing and investigating the dependencies of `CMS API Client` uncovers some dependencies which might cause issues. Listed below is the list of all dependencies the library requires.

*Dependencies*
* axios
* react-query

*Peer Dependencies*
* axios
* react
* react-dom
* react-query

The biggest risk of these dependencies is `react-query`. It seems React Native should be supported reading the documentation, except for the developer tools widget. Here's a link to the documentation page for reference: [React Query Documentation](https://react-query.tanstack.com/react-native). We would have to implement some events manually when using React Native. 

*Events*
* Online Status Management
* Refetch on App Focus
* Refetch on Screen Focus

#### Implementation

I've implemented basic unit tests to test if the `cms-api-client` library could be installed correctly in the React Native project. I'm also making components for testing the library running on actual device within the React Native build.

#### Conclusion
Both the unit tests and the component running inside of application is able to perform the network requests as expected. This indicated we should be able to use this library in React Native application without modification.

### User Service
There's no client side library for the `User Service` but the code interacting with `User Service` in the Cordova application is well separated. I will move that code to the React Native project and try implementing some tests.

#### Dependencies
* recoil
* recoil-persist
* @apollo/client

Based on online research the `recoil` library is not supporting React Native yet. It's only used for persistent state and should be easily replaced by something else.

The `node` runtime doesn't include `fetch` function when running unit tests. There seems to be multiple workarounds for this issue and the one I'm going to try doing is using `jest-fetch-mock` library.

Upon trying to use `@apollo/client` I ran into an error:

```
Error: While trying to resolve module `@apollo/client` ...
```

After researching online it seemed possible to solve this by modifying the metro configuraton. This issue was solved by adding resolver matching for `cjs` files to `metro.config.js`

Another issue occuring in the native logs is this one:
```
ReactContextBaseJavaModule: Unhandled SoftException
    java.lang.RuntimeException: Catalyst Instance has already disappeared: requested by WebSocketModule
```

Exact side effect of this error is unknown so far. It's a risk if we can't find any solution for it. Up until this point I haven't found any noticable degradation of app functions because of it.

Here's a github issue with other people experiencing the same problem:
https://github.com/facebook/react-native/issues/28992

#### Implementation
Deleting the `atom.ts` file part of user service client code because of the unsupported `recoil` library. Additionally installing the `@apollo/client` library as it should be fully suported in React Native. Finally removing the code referencing internal state from the Cordova appliation, specifically related to region selection and user authentication token.

To test the user service / graphql support in React Native I will take the same approach as with `CMS Api Client`, making basic integration tests and a component for running within the app build.

#### Conclusion
The code and `GraphQL` connection seems to be working as intended with the limited unauthenticated request tested so far. The unresolved issue is a risk and we may have to spend some time resolving that problem if it turns out to cause any issues degrading performance or functions of the application.

### Live State
The `kidsloop-live-state` library is responsible for signalling with `SFU2` service and in the future the communication with live server. Evaluating compatibility with this library is important because it would determine how much code we would have to write to connect with SFU.

```sh
npm install @kl-engineering/kidsloop-live-state
```

#### Dependencies
* reduxjs/toolkit
* eventemitter3
* immer
* nanoid
* react-async-hook
* redux
* redux-immutable

On initial inspection none of these libraries seem to have any reported issues with React Native.

After installing the `kidsloop-live-state` library the metro development server is reporting errors, this is likely due to configuration error within the library itself and not because of React Native.

```
warn Package @kl-engineering/kidsloop-live-state has been ignored because it contains invalid configuration. Reason: Package subpath './package.json' is not defined by "exports" in /home/axel/Projects/kidsloop-react-native/node_modules/@kl-engineering/kidsloop-live-state/package.json
```

There's an issue reported about this in the `react-native-community/cli` repository. It seems it can be easily fixed by updating `package.json` file within the library.

[Issue Link](https://github.com/react-native-community/cli/issues/1168)

After making some local modifications to the `package.json` file within `kidsloop-live-state` I was able to import it properly. This all seems very odd so I will do some more testing later on in case it was just metro bundler or `npm` acting up.

#### Implementation
For this library I will create test components but not integration tests. This is because the things to test will:

1. Require authentication to function
2. Utilize camera and/or microphone

TODO

#### Conclusion
TODO

### WebRTC
We use the WebRTC standard to enumerate and use the device camera and microphone. This standard is built into most web browsers but not built into mobile apps by default, including React Native. There is a library for React Native `react-native-webrtc` adding this functionality.

#### Implementation
The `react-native-webrtc` library is missing type definitions for some API's. This makes working with the library very hard; especially with Typescript. Because of this issue we have to create some custom type definitions. This in itself is not a huge issue, but it can't be considered a stable contract between our application code and `react-native-webrtc`. We have no guarantees the ABI (for lack of a better term) doesn't change over time.

The `react-native-webrtc` library will not ask for permissions automatically before trying to access camera or microphone resources. We have to implement the permissions checking ourselves. This might be different between Android and iOS since iOS usually doesn't require explicit permission requests, instead the iOS OS will ask for permissions automatically before trying to use any sensitive resources.

I had to set the `minSdkVersion` to `24` for `react-native-webrtc` library to work, without it the application crash on startup.

The `react-native-webrtc` library seems to be heavily geared towards selecting camera based on facing as opposed to selecting by ID's. This might make it more tricky for us to have the dropdown menus from current KidsLoop application to select the camera device. I don't think this would be a problem on mobile since it's very common to just provide front/back toggle regardless.

The type information for camera track constraints doesn't seem to match the documentation. This will delay developers working with this and might cause some confusions.

#### Conclusion
So far I've been able to retrieve a camera stream and display it on screen. This only partly tests the `WebRTC` compatibility and I think we would need to estimate extra time in case anything goes wrong or doesn't work as expected. This is a high risk feature and it would be good to spend time and dig deeper to find possible limitations for both iOS and Android.

### IAM AzureB2c
AzureB2C is the chosen authentication system for kidsloop. It requires a certain amount of setup within AzureB2C in order for kidsloop Users can use our mobile app and be redirected back to the app once they have authenticated.
#### Implementation
AzureB2C requires that an AzureB2C application be set up for each application in code. We currently have a 'KidsLoop Mobile App' setup in the Alpha environment for the previous NextGen app but more research is needed to understand how we integrate it into a react-native app. The AzureB2C app currently redirects to `live.kidsloop.sso.kidsloop-android://oauth/redirect`. It seems that we should be able to use Deep Links to have the app receive traffic to this endpoint.

We will also need to have the AzureB2C application implemented in higher environments { stage, Prod }. At present these 
applications are setup manually which isn't a big deal but is worth bearing in mind. A more dynamic approach with Terraform has been prototyped but there is significant complexity in setting up AzureB2C. 

Another factor to bear in mind is that although we can create native interfaces Azure has a strong preference for managing the HTML used in signin/signup/password reset pages. This means that we're almost certainly tied to using a WebView for browser pages in the authentication process.