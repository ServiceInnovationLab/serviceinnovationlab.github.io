---
title: Testing our Toolkit
date: 2019-07-31
authors:
  - brenda-wallace
tags:
  - tech
excerpt: ""
---

## Tests we run

This toolkit is built using an open-source tool called Jekyll. We write content in markdown format, which is then parsed by Jekyll which produces a static HTML website that we host on Github pages.

Content and other changes are proposed by team members using the pull requests on Github. There are a bunch of automated tests the proposed change must satisfy to be accepted (as well as manual testing). The automated tests are fast and means the pull request is in good shape by the time a team member begins their peer review. The tests catch many of our mistakes, as well as being an easy way to learn about standards we adhere.

![Flow diagrame of our tests](/assets/media/testing.png)

### Our Tests

We use a continuous integration service called CircleCI to run out tests. CircleCI is an open-source tool and is available to us for free because our projects are also Open Source (as per NZGOAL).

#### yamllint

YAML is a standard format for configuration files (and also the name of Brenda's cat). Jekyll uses YAML, so we use a linter to inspect our files.
`yamllint` is a python tool available on pip. It catches any strange/incorrect indenting with better and more helpful errors messages than the tool that reads those YAML.

#### build

CI builds the static content on every pull request to ensure that once your change it merged into mainline (the dev branch) it can be successfully built for deployment

### markdownlint

A linter that checks you have followed our style guide for markdown files. The linter catches when you're using __bold__ instead of headers. It fails your pull request if you don't put descriptions on images if it's not clear which are the header cells on a table, and if your header nesting doesn't make sense in a tree structure.

### percy

Percy is a service that takes screenshots of every page and compares them to the previous screenshot. If there are differences (i.e. you've modified a page on the toolkit) you'll need to go to Percy and then view and approve the changes. If you've broken the display on a page, you'll see it in the screenshots (and of course if you've broken a page, don't approve it!)

### accessibility

The accessibility check uses a tool called pa11y-ci to check we adhere to WCAG21 standard. The [New Zealand Government - Web Accessibility Standard 1.1](https://www.digital.govt.nz/standards-and-guidance/nz-government-web-standards/web-accessibility-standard-1-1/) is based on WCAG21. This linter is configured by a file named `.pa11yci.json`.

## Conclusions

Automated tests catch common mistakes quickly, and more thoroughly than our manual testing. A linter can give quick feedback on proposed changes before the author asks another team member for their peer review. With automated content testing, we can get better quality markup on our toolkit pages, and with a quicker publishing turnaround.
