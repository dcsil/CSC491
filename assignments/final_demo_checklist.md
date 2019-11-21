## High Level

- 25% of your grade
  - a 15 minute presentation makes up some of your grade
  - An analysis of your software makes up some of your grade here

## Problem and Solution (5 marks)

Make sure you re-introduce your problem and solution, this can be brief. You don't need to spend a ton of time on this.

This is your product scope right now ;)

## Vision (10 marks)

This is likely throughout much of your presentation in various parts,
but it is good to explicitly call out what your vision for this product is and reflect on its viability.

When we ask directed subject matter expertise questions, you should be able to answer many of them.

Explain your choices in your product. For example, if you aim to target medical insurance but you can't find that dataset, explain that automotive insurance is usable and doesn't impact the vision of your product (and why).

## Software (30 marks)

### The application (15 of 30 marks)

- [ ] The application runs
- [ ] The application does not throw exceptions on any standard path
  - Note, we recognize some non-standard paths in the code may cause some problems, but do your best to guard against exceptions
- [ ] The application has some sort of design system in place
  - This can be as easy as using a template, bootstrap, or some other CSS library
  - This can be as advanced as including a styleguide like https://primer.style
- [ ] The application has clearly progressed from A5, including new features, functionality, and less bugs
  - Note: This is not a part of the 15 marks. This is the "progress" section, part of the 25 mark section.

### Development (5 of 30 marks)

- [ ] Set up Continuous Integration (2.5 of 5 marks)

<details>

  I recommend [GitHub Actions CI](https://help.github.com/en/actions/automating-your-workflow-with-github-actions).

  #### Examples

  - [Javascript example for GitHub Actions CI](https://github.com/integrations/jira/pull/295)
  - [Ruby example for GitHub Actions CI](https://github.com/dcsil/team_app/blob/master/.github/workflows/ruby.yml)

</details>

- [ ] Development Setup Script (2.5 of 5 marks)
  - [ ] This should install dependencies if needed like Postgres, MySQL, Redis, etc
  - [ ] This should install any languages required
  - [ ] This should install any packages like Rubygems, Node Packages, etc

<details>

  Write a script named `script/bootstrap`, it should setup much of your system for you.

  It is fine if the script targets one operating system (mac, linux, or windows).
  
  Make note of this script in the README of your app. If you have a getting started guide, this can be in there but you should make sure that that guide is mentioned in the README.
  
  
  Docker and Docker Compose is a good option here

  #### Examples:

  - [Javascript and Node](https://github.com/integrations/jira/blob/master/script/bootstrap)
    - this uses `brew bundle`, which comes from https://brew.sh/
    - `brew bundle` installed everything from the [`Brewfile`](https://github.com/integrations/jira/blob/master/Brewfile)

</details>

### Production (7 of 30 marks)

- [ ] Deployed to a production environment (5 of 7 marks)

<details>

  You can deploy to Heroku really easily with Ruby, Javascript, Python, Go, PHP, and other languages.
    - You only need the hobby dyno
    - I would recommend Postgres as there is a free hobby database you can use
    - This is not good to host your machine learning experiments
    - It is included in your [GitHub Student Pack](https://education.github.com/pack)

  - [DigitalOcean](https://digitalocean.com), [Amazon AWS](https://aws.amazon.com/), and [Microsoft Azure](https://azure.microsoft.com/en-us/) are other options and also included

</details>

- [ ] Logging setup on Production (1 of 7 marks)

<details>

  - [LogDNA](https://logdna.com/) is included in your [GitHub Student Pack](https://education.github.com/pack)
  - There is also a Heroku add-on to make this really easy
  
  Logging services help you debug your application and know what's going on.
  Be careful not to send passwords, tokens, and other secure information here. Some places, like GitHub, even remove [personally identifiable information](https://en.wikipedia.org/wiki/Personal_data) from the logs.

</details>


- [ ] Exception tracking setup on Production (1 of 7 marks)

<details>

  - [Sentry](https://sentry.io/) is included in your student pack
  - There is also a Heroku add-on to make this really easy
  
  While logging services help you debug, they can't keep track of all the information you need when an exception or bug occurs.
  For that, you need exception tracking. This will capture information like the stack trace of the exception, the error class and name, and other metadata to help you pinpoint the issue.
  Be careful not to send passwords, tokens, and other secure information here. Some places, like GitHub, even remove [personally identifiable information](https://en.wikipedia.org/wiki/Personal_data) from the metadata.

</details>

---

_NOTE:_ if your application does not require deployment (is a mobile app, desktop app, offline, etc) then the marks in this section will be split up to other sections as follows: 

<details>

### Development (8 of 30 marks)

- [ ] Development Setup Script (4 of 8 marks)
- [ ] Set up Continuous Integration (4 of 8 marks)

### Documentation (7 of 30 marks)

- [ ] Documentation or Up to date README (5 of 7 marks)
- [ ] Top Level (to the code) YAML file (2 of 7 marks)

</details>

---

### Documentation (3 of 30 marks)

- [ ] Documentation or Up to date README (2 of 3 marks)

<details>

  This should include major documentation like architecture diagrams you've made, decisions should be recorded, and any other relevant docs about the app (debugging, development setup, etc).

</details>

- [ ] Top Level (to the code) YAML file (1 of 3 marks)

<details>

```yaml 
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

This should serve as an example. These kinds of files can help you debug, record links to docs, services, tools, and more.

While this is less useful with one app, in an organization with many apps this can be crucial to remembering and finding information.

</details>

## Reflection (15 marks)

- [ ] Includes an updated Build Plan (5 of 15 marks)
- [ ] Outline future plans (5 of 15 marks)
- [ ] Reflects on the problems and strengths (5 of 15 marks)

## Presentation (15 marks)

A presentation can be made up of many parts and serves to tell a story. In this case, the story is outlined by this assignment.

- When you choose to include presentations slides, they should have been made to lend themselves to telling the story.
- Slides aren't strictly required but are the easiest way to get visuals
- Tells a good story, includes human engagement. Story isn't elaborate and everything is concise.
- Uses a combionation of visuals and spoken word to tell the story
- Make sure to keep a good pace. You're all smart and knowledgeable, you don't need to be nervous and speak fast!
- Anything presented (visuals, graphs, etc) that aren't used in the story detract from the story. They will lose you points.
- Make sure your images don't overlap text and vice versa.
- If your have more than 1 person, divvy up the talking and demoing equally. We want to see you both know your stuff.
