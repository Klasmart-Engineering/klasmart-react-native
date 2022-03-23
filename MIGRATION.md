# Migrating KidsLoop Cordova -> React Native
This document is a worklog for the evaluation of how hard it is to migrate KidsLoop application code from Cordova to React Native.

The starting point of this document is a clean `react-native-template-typescript` project and as work is progressing more pages, components, and libraries will be added from the `KidsLoop Cordova` project.

## Migrating Landing Page
The first challenge and test will be to migrate or replicate the KidsLoop landing page from the `Cordova` Project to the `React Native` project.

The landing page in Cordova application is composed of an image background with a button to continue to the sign in page. This is a very simple case with almost no business logic.