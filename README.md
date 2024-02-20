# React Native Boilerplate Template

##### This is a boilerplate template for kickstarting React Native projects. It provides a solid foundation for building robust and scalable mobile applications. :rocket:


## ✨Features

- **TypeScript:** TypeScript support for type safety and improved development experience.
- **Internationalization (i18n):** Integration with i18next and react-i18next for easy translations and localization.
- **Generic Theming:** Easily customize fonts, colors, and spacing to maintain consistent styling across your app.
- **Server State Management:** Utilize react-query for efficient server state management and data fetching.
- **Client State Management:** Integrated redux toolkit for client-side state management with typed useDispatch and useSelector hooks for easy access throughout the app.
- **Linting and Prettier:** Enforce common coding style and formatting rules for seamless collaborative efforts.
- **Husky Precommit Hooks:** Enforce code style and run linting and formatting checks before committing changes.
- **Shared Components and Absolute Imports:** Organize shared components and utilize absolute imports for cleaner code structure.
- **React Native SVG Support:** Support for SVG files in React Native applications.
- **Fast Local Storage:** Integration with react-native-mmkv for high-performance local storage, significantly faster than AsyncStorage.
- **Navigation:** Included support for react-navigation for easy navigation setup.

The boilerplate provides a solid foundation that can be easily modified according to your specific requirements. Feel free to use this template and start coding!
For Creating a tempelate press -> "use this template"->"Create new repository"


##### Happy coding! If you find this template helpful, don't forget to star✨ the repository.

# Getting Started


>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!
   
   
###If you are using nvm, you might want to create a file called .huskyrc in your home directory and add the following lines of code to it:

```bash
~/.huskyrc

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```


## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:
