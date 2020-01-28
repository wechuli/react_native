# React Native

- Getting started
- React Native Basics
- Debugging
- Real Apps, Styling, Components
- Responsive and Adaptive Apps

- A collection of "special" React components
- Components compiled to Native Widgets
- Native Platform APIs exposed to JavaScript
- Connects JavaScript and Native Platform Code

React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.

React primitives render to native platfrom UI, meaning your app uses the same native platform APIs other apps do. React Native lets you create truly native apps and doesn't compromise on your users' experience. It provides a core set of platform agnostic native components like `View`, `Text`, and `Image` that map directly to the platform's native UI building blocks.

The UI components compile to Native UI widgets while the JavaScript Logic is run by a Virtual JavaScript core with a Bridge that is able to access Native Platform Modules/API.

## Expo CLI/Tool Vs React Native CLI

### Expo CLI/Tool

- Third-Party Service (Free)
- "Managed App Development"
- Lots of convenience and utility features: simplifies development
- But you are limited to the Expo Ecosystem

### React Native CLI

- By React Native Team/Community
- Bare-bone Development (only a basic setup)
- Almost no convenience or utility features

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
