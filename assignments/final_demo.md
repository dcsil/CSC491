Final Demo
---

Your final *live* demo will be to the entire class. You should present a functional demo of the product you built over the last few months. You will give a *live demo* of the product in class to the instructor & TA and take questions from everyone.

The goals of the demo are:

- present to everyone the problem you are solving
- give everyone a sense of the progress you've made
- demonstrate your progress on what you've built so far
- show you're making progress towards your MVP
- show *real working software*
- some content can be mockups to give extra context, the focus should be on the software

---

- [Initial Requirements](#initial-requirements)
- [Submission](#submission)
- [Questions or Concerns](#questions-or-concerns)
- [Rubric](#rubric)

---

# Initial Requirements

The demo should include the following:

- Description of the problem you are trying to solve and your solution
- Live demo of the main flows you think are relevant to the solution
- Describe your build plan. Did you stay on schedule? If not, why? (This is fine as long as it's not _months_ behind schedule)
- Pain points and unexpected problems

### It is okay if...

- some features are partially implemented
- there are minor bugs

### How is this different from A3?

- You should be further along
- There should be less bugs
- You shouldn't have much that is unimplemented in your main flows
- You shouldn't have to show us much from the command line, unit tests, etc (some may still be ok!)

# Submission

You will demo this in class to everyone.

You must also [create a release](https://help.github.com/en/articles/creating-releases) on your repo where the code is located.
This will give us a snapshot in time and allow us to grade it.

The release does not need to include pull requests or commits from every member. The body does not even need any content, just ensure it is there and appropriately labeled.

It is suggested to use a folder and multiple files, just like this CSC491 repo, to contain this assignment.


# What is "Real Working Software" for the final demo?

This is a course designed to make a startup. When you're running a startup, you need all the help you can get. This means your software should be adequately automated. We will be looking for the following when determining if your software is "real" and "working".

## Dev Ops

These requirements makes sure it is easy to onboard new developers and quoting a local founder "gives you free invisible hands" (with regards to CI and linting).

- There is a test suite
   - There is some decent amount of [coverage](https://en.wikipedia.org/wiki/Code_coverage). We're not going to be specifying a percent coverage, other to say that anything under 50% coverage likely means you aren't testing enough and [100% means your tests are probably not very good](https://itnext.io/the-myth-of-100-code-coverage-c7d4c789700d)
   - I'm only counting tests for app code here, but I _do_ recommend trying to test other scripts in your app where possible
- You've set up some sort of linter for whatever language you are using, if possible
- There is a CI system setup
   - [GitHub's CI](https://github.blog/2019-08-08-github-actions-now-supports-ci-cd/) can be used
   - [GitHub Student Pack](https://education.github.com/pack) also includes access to [Travis CI](https://travis-ci.com/)
- There is a single script I can call to set up the entire project. This is often `script/bootstrap`.
  - Explain this in a getting started guide / README
  - This should install dependencies if needed like Postgres, MySQL, Redis, etc
  - This should install any languages required
  - This should install any packages like Rubygems, Node Packages, etc
  - Docker and Docker Compose is a good option here

## The Application

- The application runs
- The application does not throw exceptions on any standard path
  - Note, we recognize some non-standard paths in the code may cause some problems, but do your best to guard against exceptions
- The application has some sort of design system in place
- The application has clearly progressed from A5, including new features, functionality, and less bugs

## Production

- It is deployed somewhere that can be access from outside your laptop (if required).
  - [Heroku](https://www.heroku.com) is a simple and quick way to accomplish this. It is included in your [GitHub Student Pack](https://education.github.com/pack)
  - [DigitalOcean](https://digitalocean.com), [Amazon AWS](https://aws.amazon.com/), and [Microsoft Azure](https://azure.microsoft.com/en-us/) are also included in your student pack.
- There is some sort of logging service set up
  - [LogDNA](https://logdna.com/) is included in your [GitHub Student Pack](https://education.github.com/pack)
- Exception tracking is set up
  - [Sentry](https://sentry.io/) is included in your student pack

## The Repo
  
- The README has been kept up to date
   - The README has been split up into a `docs` folder if it gets too big

### The YAML file

For all tools, please include a file labelled `service.yml` using the following **sample** file:

```yml
tools:
  exceptions: https://...
  logging: https://...

services:
  production: https://... (link to the dashboard, not the running app)
  staging: ...

docs:
  getting_started: https://...
  
commands:
  bootstrap: script/bootstrap
  database:
    create: bin/rails db:create
    migrate: bin/rails db:migrate
  server: bin/rails server
```

Fill it out as necessary, include at minimum a `tools`, `services`, `docs`, and `commands` section. In those sections, include, at minimum, the requirements listed above. Be creative and keep track of your app details here.

This will help keep things in one consolidated location and will be used to help grade.

# Questions or Concerns?

- I don't like part of this assignment
 - File an issue on this repo
- I need to clarify something about this assignment
 - File an issue on this repo
- I need to clarify a question or ask something in private
 - Email the course instructor or email the professor via the email on the homepage / README

# Rubric
 
| Area | Description| Weight |
| --- | --- | --- |
| Problem and Solution | Gives a concise explanation of the problem and solution | 5.0 |
| Progress | Has clearly progressed from Assignment 3 and addressed any feedback`*` | 25.0 |
| Vision | Shows a better understanding of the problem from A3, explains the vision of the product, does not leave questions unanswered`**` | 10.0 |
| Software | Has working code that runs and delivers a demo. Does not need to use command line (unless that is the main product UI!), code, unit tests, or other mockups to show the main flow  | 30.0 |
| Reflection | Thoughtfully reflects on the build plan and problems faced. Outlines plans into the future. | 15.0 |
| Presentation | Engaging presentation, ensures only relevant parts are shown and does not sugar-coat | 15.0 |
| | **Total** | 100.0 |

`*` If a lot of progress has already been made from [Assignment 4](https://github.com/dcsil/CSC491/edit/master/assignments/a4.md) then
the marking will take that into account; however, there should be some attempt to improve upon the MVP after some ad-hoc user feedback.

`**` It is ok to say "I'm not sure, thank you for brining that up. I'll research it and get back to you" as long as it's not a large portion of the questions

## Rating Scale

This scale is used for each line of the rubric above.

| Rating | Result |
| --- | --- |
| Outstanding, Thoughtful and thorough | 100% of pts | 
| Strong, Provides some thought | 80% of pts |
| Acceptable, Simple explanation | 60% of pts |
| Insufficient, Little effort was made to give explanations | 40% of pts |
| Unacceptable, No effort was made or the section was missing | 0% of pts |
