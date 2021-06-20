module.exports = {
  setupFilesAfterEnv: ['./setupTests'],
  collectCoverageFrom : ['src/**/*.js'],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  },
}