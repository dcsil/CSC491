# Introduction

Code coverage is required for all applications. The minimum "accepted" code coverage is 65%, but remember that 100% code coverage is a myth.

In the following language guides, replace `<URL>` and `<TOKEN>` with the URL/TOKEN you get from repo page on the DCSIL Team App.

# Languages

### Javascript

1. Add the `nyc` package with `npm install --save-dev nyc`
2. Use the `json-summary` reporter: `./node_modules/.bin/nyc --reporter=json-summary`
3. Follow the guide specific to your test reporter [in this guide](https://istanbul.js.org/docs/tutorials/).
4. When you run your tests, upload the results.

The JSON Formatter will put a summary in `coverage/coverage-summary.json`, we need to POST that file to the DCSIL Team App.

```sh
npm test
curl -X POST -H "Content-Type: application/json" -H "Authorization: token <TOKEN>" -H "X-App-Type: Node" -d @coverage/coverage-summary.json <URL>
```

### Python

**TODO**

### Ruby

1. Add the `simplecov` and `simplecov-json` gem to your Gemfile under the `test` group:

```ruby
gem 'simplecov', require: false, group: :test
gem 'simplecov-json', require: false, group: :test
```

Run `bundle install`

2. At the top of your `test_helper.rb` or main test entry point, add:

```ruby
require 'simplecov-json'
require 'simplecov-json'

SimpleCov.start # Use `SimpleCov.start "Rails"` oif this is Ruby on Rails
SimpleCov.formatter = SimpleCov::Formatter::JSONFormatter
```

3. When you run your tests, upload the results.

The JSON Formatter will put a summary in `coverage/coverage.json`, we need to POST that file to the DCSIL Team App.

```sh
bin/rails test
curl -X POST -H "Content-Type: application/json" -H "Authorization: token <TOKEN>" -H "X-App-Type: Ruby" -d @coverage/coverage.json <URL>
```