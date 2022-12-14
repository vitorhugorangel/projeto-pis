const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './e2e/**/*.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://127.0.0.1:5500/front-end/app/index.html',
      show: true,
      browser: 'chromium',
      restart: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'front-end'
}