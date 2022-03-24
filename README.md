# kidsloop-react-native
This repository contains the source code for KidsLoop application built using React Native.

## Running on Android
Ensure the Android device is connected to `adb` over USB or WiFi.

The status of connected devices can be confirmed using the following command:
```sh
adb devices
```

Next step is starting the `react-native` development server. This will facilitate hot reloading changes and debugging:
```sh
npx react-native start
```

Finally build and install the application on the device:
```sh
npx react-native run-android
```

