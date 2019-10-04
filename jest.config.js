module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/App/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/src/App/__mocks__/styleMock.js",
    "^App(.*)$": "<rootDir>/src/App/$1"
  },
  transform: { "^.+\\.(js|jsx|mjs)$": `<rootDir>/node_modules/babel-jest` },
  testEnvironment: `node`,
  testURL: `http://localhost`
};
