# React Native

React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.

React primitives render to native platfrom UI, meaning your app uses the same native platform APIs other apps do. React Native lets you create truly native apps and doesn't compromise on your users' experience. It provides a core set of platform agnostic native components like `View`, `Text`, and `Image` that map directly to the platform's native UI building blocks.

## React Native Apps are Hard Work!

- No or very little cross platform styling of components, so you have to style components on your own or use third party libraries
- Only a basic set of pre-built components(everything you need though). You will need to build components on your own or use third party libraries
- Tools to create responsive designs but no reponsiveness out of the box. Create reponsive designs on your own (check for device-size and OS)

## Debugging React Native Apps

- **Error Messages/App Crashes**
  - Syntax errors
  - Bugs in your code(e.g using undefined values, wrong types...)
  - Unavoidable errors e.g failing network requests
- **Logical Errors**
  - Undesired or unexpected app behaviour
  - Unexpected/unhandled user behavior
  - Sequence of steps leads to errors
- **Styling, Layout & UX**
  - Unexpected/wrong styling or layout
  - Inconsistent results on different devices
  - Layout doesn't work on certain devices or orientations

## How To Debug

- Read the error messages, often the message contains the solution or a pretty exact pointer at the problematic code line
- console.log() - get a feeling for the flow of your code(What happens when? Which value is used where?)
- Chrome Debugger (+Breakpoints) - Dive into the code in great detail and step byu step
