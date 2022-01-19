---
marp: true
---

# Site Reliability Engineering, Operations, and Production Engineering

## CSC491, University of Toronto

---

# We will talk about:

- What is SRE? Production Engineering? Operations?
   - What is the difference?
- infrastructure and hosting

---

# Site Reliability Engineering (SRE)

---

# What is Site Reliability Engineering (SRE)?

> SRE is what you get when you treat operations as if it’s a software problem.

This is a phrase that was coined by Google: https://landing.google.com/sre/

---

# What is Site Reliability Engineering (SRE)?

> "Site Reliability Engineering seeks to balance the risk of unavailability with the goals of rapid innovation and efficient service operations, so that users’ overall happiness—with features, service, and performance—is optimized."

> - Marc Alvidrez, Site Reliability Engineer, Mountain View

---

# What is Site Reliability Engineering (SRE)?

> "Here’s what you do when someone breaks something or finds something very difficult to debug: You say thank you. Thank you for finding this edge case. Thank you for highlighting this overcomplicated part of our system. Thank you for pointing out this gap in our docs. And then you go make it so nobody can break it the same way again."

> Tanya Reilly, Google SRE 2005 - 2018

---

# What is Site Reliability Engineering (SRE)?

- Fundamentally, SRE is a practice in which the running of your systems is managed via configuration software.
- In the last lecture on technologies, we quickly touched on "orchestration" software. Typically one of these will be in use
- SRE outlines some core tenets as well, such as:
  - a blameless culture
  - psychological safety to move and work around in production

---

# Production Engineering

---

# What is Production Engineering?

> Production engineering is a combination of manufacturing technology, engineering sciences with management science. A production engineer typically has a wide knowledge of engineering practices and is aware of the management challenges related to production.

- originally a classic engineering term (mechanical, civil, etc) with regards to factories
- the goal is to accomplish the production process in the smoothest, most-judicious and most-economic way

---

# What is Production Engineering?

- **Scale and integrate resources.** Usually required to consider physical, human and financial resources at high efficiency and low cost, yet considering the possibility of continuous further improvement
- **Make proper use of math and statistics** to model production systems during decision making process
- **Design, implement and refine products, services, processes and systems** taking in consideration that constraints and particularities of the related communities

---

# What is Production Engineering?

- **Predict and analyse the demand** Select among scientific and technological appropriate knowledge in order to design, redesign or improve product/service functionality
- **Incorporate concepts and quality techniques** along all the productive system. Deploy organizational standards for control proceedings and auditing
- **Stay up-to-date with technological developments**, enabling them to enterprises and society

---

# What is Production Engineering?

- **Understand the relation between production systems and the environment**. This relates to the use of scarce resources, production rejects and sustainability
- **Manage and optimize flow** (information and production flow)

---

# Operations

---

# What is Operations?

This is a more traditional model of running hardware and servers.

In this model, you have a person or a team who are in charge of running servers on which to host software. Often they will be the ones handling deploys as well.

---

# What is Operations?

This generally scales poorly as you must employ an increasing number of operations people to manage an increasing load, instead of automating it with software

---

# My Opinion of Operations

Personally, I'm not a fan of operations-style management of production systems. It doesn't scale very well and it requires people to do things that servers are better, and less error-prone, at - click and type configuration.

This may be easier at the beginning though. Hiring a contractor or part time person who's job it is to keep the servers running is much easier. When you have few servers this is a very isolatable role from the rest of your product team and lets you focus on your product.

---

# Production Engineering vs. SRE

---

# Production Engineering vs. SRE

Honestly, the systems are very similar. There are shared concepts and each system has pros and cons.

---

# Production Engineering vs. SRE

I'm going to use an example from a Quora answer from a lead recruiter at Facebook. I'll supplement it with my experience as a Production Engineer at Shopify.

The link to the Quora answer can be found [here](https://www.quora.com/How-does-being-a-production-engineer-at-Facebook-compare-to-being-a-site-reliability-engineer-at-Google)

---

## The fundamental differences

- At Google, SRE’s are supporting SWE’s (software engineer) in a “throw it over the fence” model.
  - This means that software engineers build the software and someone else runs it
- Production Engineering at Facebook is more of an embedded model 
  - This means that production engineers are embedded on the teams or work alongside the teams to help them run their own services
- Shopify had a little bit of both: Some things were run more like an SRE team (databases, caching, core servers) and some things were more a production engineering focus (developers and SREs worked together) like smaller app servers

---

## The fundamental differences

Both are driven by engineering decisions, not hardware-related ones. A good example of this is a system that Facebook built to automate 300 sysadmins work to find, test, and restart servers in production autonomously.

Software is good at detecting repeatable patterns, performing tedious tasks, and completing these 24/7.

---

## Tooling and Automation

SRE and Production Engineering both require heavy amounts of automatic and autonomously functioning tooling and detection.
You'll find that both areas tend to invest heavily in orchestration software (Packer, Chef, Kubernetes, etc), monitoring and alerting (observability), and all things tooling/automation.

When you can save everyone a second a day, but have 1000 developers... you've actually saved 17 minutes. Or about 68 hours (1.5 weeks!) of developer time.

---

# Teams and Focuses

---

# Teams and Focuses

This section will focus on teams and skillsets I've experienced while working at Shopify, consulting, and working with various companies.

---

## Teams

- Datastores
  - Databases
  - Caching
  - Queueing
- Networking
  - "The Edge" (where a request leaves <the internet> and enters your infrastructure)
  - Emails
  - Internal Intranet

---

## Teams cont.

- Cloud (AWS, Google Cloud, Azure)
- Continuous Integration + Deployment
- Developer Tooling
- Regulated Systems (PCI Compliance, SOX compliance, etc)
- Observability (Logging and Monitoring)
- Language and Platform

---

## Datastores

- **Databases**: Typically handles MySQL, Postgres, etc.
- **Caching**: Typically handles Redis, Memcache, and other Cache systems.
- **Queueing**: Typically handles Redis (as a queue), RabbitMQ, and other queue systems.
- For each of these systems, the respective team will manage scaling it, making it easily available where it needs to be, and ensuring that apps don't abuse limits.

---

## Networking

- **"The Edge"**: Where a request leaves <the internet> and enters your infrastructure. This will typically include load balancers, BGP routers and announcements, Points of Presence for TLS termination
- **Emails**: Handling email equipment, scaling that for the organization and ensuring IP address you use will not be listed as spam
- **Internal Intranet**: Handles internal network routing between systems. Handles databases connecting to app servers, cache and queues connecting, etc. Often includes manual operations-like work unless you're in a cloud. Can use BGP for this.

---

## Cloud (AWS, Google Cloud, Azure)

Manage integration with services on the cloud, often using orchestration software.

---

## Continuous Integration + Deployment

Manages scaling CI systems for testing infrastructure, decreasing time spend on test runs, and manages quick/easy deployment to production

---

## Developer Tooling

- Manages creating and developing tooling to get a software project up and running on a computer for development.
  - Includes installing languages, datastores, project dependencies etc locally.
- Often uses some form of orchestration software
- Has to be able to handle a system in any state as developers may change settings at random

---

## Regulated Systems (PCI Compliance, SOX compliance, etc)

I've seen regulated systems (e.g. PCI compliance for Credit Card Processing) be managed by separate teams. This is to reduce the number of people that have access to sensitive systems.

---

## Observability (Logging and Monitoring)

Logging and Monitoring may not seem like a big problem to solve, but each request to a system will often send out dozens of different telemetry metrics and dozens of logs. This means that those systems need to handle a large load.

This team ensures that logging and monitoring can keep up with data thrown at it and ensures it can respond quickly to people who need to use that data.

---

## Language and Platform

Sometimes when your company gets big enough, it starts to drive the full feature development of a framework or language.

Both GitHub and Shopify employ core contributors to Ruby and Rails teams. This allows them to remove painful parts that reduce productivity of their own engineers, but also give it back to the world through open source.

A recent example can be seen in Rails 6. GitHub has a multi-database configuration, Rails did not support this. GitHub's engineer, Eileen, worked tirelessly with her team to integrate this functionality in the Rails framework. Now everyone gets to use this feature for free and GitHub doesn't have to maintain something that only they use. 

---

# Resources

- [How does being a production engineer at Facebook compare to being a site reliability engineer at Google? by Sief Khafagi](https://www.quora.com/How-does-being-a-production-engineer-at-Facebook-compare-to-being-a-site-reliability-engineer-at-Google)
- [How to get started with Site Reliability Engineering by Nikki McDonald](https://www.oreilly.com/ideas/how-to-get-started-with-site-reliability-engineering-sre)
- [Production engineering Wikipedia Page](https://en.wikipedia.org/wiki/Production_engineering)
