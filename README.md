## Color Palette Assignment Details:

Color plays one of the most important roles in the design of Stack. It is not only the expression of style, but rather it’s used to communicate the meaning.

In the upcoming version of Stack, users will be able to personalize their Spaces individually with custom color themes

(Space is the collection of cards grouped by meaning. Work, Personal Finance, Shopping, etc.)

In order to achieve consistency in the design, we would like to create a library that generates various color palettes based on the input colors.(such as background color, accent color, etc)

## Follow Below Instructions to Run Color Palette App:

## Available Scripts

In the project directory, you can run:

### `npm install` or `yarn install`

- Install all the dependcies for the app.

### `npm start` or `yarn start`

- Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- Enter the `Background` and `Accent` HEX code into the input field.

- You need to add HEX code in both input fields to enable `Generate Shades` button.

- Click the `Generate Shades` button to generate the all shaded for background and accent.

- The 10 different shades are generated from dark to light for background and accent.

- If you hover it shades below, so there is a `Copy` icon visible.

- If you click on `Copy` icon to copy the exact Hex-code for that color

- Click the `Reset` button to use it again and generate new shades.

- App also works in responsive mode with proper alignments.

- App does not have any redux/context & routing because app is too small.

### Known Issues:
- When you go to the shades for copy the hex code you will not recongnise is code copied or not. So for that we need to integrate some functionality by that user can understand if the code copied. 

- When you go the dark shades the copy icon on hover is not getting displayed properly. For that we need to add some styles to display copy icon propely on dark shades.


### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
