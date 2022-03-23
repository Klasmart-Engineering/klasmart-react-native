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



