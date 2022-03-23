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

#### SVG Image Assets

