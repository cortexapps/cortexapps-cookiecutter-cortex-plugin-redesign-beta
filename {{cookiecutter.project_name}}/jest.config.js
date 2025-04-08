// jest.config.js
module.exports = {
  moduleNameMapper: {
    // map static asset imports to a stub file under the assumption they are not important to our tests
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    // map style asset imports to a stub file under the assumption they are not important to our tests
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "@cortexapps/plugin-core/components":
      "<rootDir>/node_modules/@cortexapps/plugin-core/dist/components.cjs.js",
    "@cortexapps/plugin-core":
      "<rootDir>/node_modules/@cortexapps/plugin-core/dist/index.cjs.js",
    "@cortexapps/react-plugin-ui":
      "<rootDir>/node_modules/@cortexapps/react-plugin-ui/dist/index.js",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    // @cortexapps/react-plugin-ui is ESM, transform it to CJS
    "/node_modules/(?!(?:@cortexapps/react-plugin-ui)/)"
  ],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
};
