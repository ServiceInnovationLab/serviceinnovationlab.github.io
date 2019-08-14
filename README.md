# Toolkit

[![CircleCI](https://circleci.com/gh/ServiceInnovationLab/serviceinnovationlab.github.io/tree/dev.svg?style=svg)](https://circleci.com/gh/ServiceInnovationLab/serviceinnovationlab.github.io/tree/dev)
[![Maintainability](https://api.codeclimate.com/v1/badges/05a76407322970819c76/maintainability)](https://codeclimate.com/github/ServiceInnovationLab/serviceinnovationlab.github.io/maintainability)
[Project Board](https://github.com/orgs/ServiceInnovationLab/projects/2)

## Installation

Run each of the following steps to get the site up and running.

1. `git clone https://github.com/ServiceInnovationLab/serviceinnovationlab.github.io.git`
2. `cd serviceinnovationlab.github.io`
3. `bundle install`
4. `bundle exec jekyll serve --watch`

You should be able to see the site at: <http://127.0.0.1:4000/>

## Instructions for Adding Content

***NOTE:** These steps only apply to people involved with the Lab*

### Setting up a file for changes

- _Log in_ to GitHub.
- _Navigate to_ the [Toolkit](https://github.com/ServiceInnovationLab/serviceinnovationlab.github.io)'s repo.

### Adding content

1. **To Add Media:** Ensure that you are on the **dev** branch, then _navigate to_ **assets/media**.

- _Click on_ the **Upload files** button & choose your preferred method (eg. Dragging the file OR _clicking on_ the **choose your files** link). **Note:** Your image should be saved & named in an easily identifiable way.

    **OR**

1. **To Add content:** Ensure that you are on the **dev** branch, then _navigate to_ the appropriate part of the site that you want to add your content to. (ie. **_products_projects** for _Reusable Components_; **_services_projects** for _Stuff that we've done_; **pages** for _New pages_; & **_posts** for _Blog posts_)

- _Click on_ the **Create new file** button. In the **textfield** which appears, _type in_ the name of your file in this format (in lower case) (eg. `lower-case.md`) **EXCEPT** for **Blog posts** where the format should be (eg. `YYYY-MM-DD-this-is-a-blog-post.md`). Then proceed to _add_ your content.
**Note:** Refer to an existing file to see the how the format should be.

[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet)
___

- Once done, _scroll to_ the bottom of the page; _enter_ a **Commit message** & a **Description (optional)** for your changes.
- _Select_ the **Radio Button** corresponding to the text "Create a new branch for this commit and start a pull request.". You should then see a box appear. **Note:** Your branch name should start with `content/` if you are adding some sort of content. _Type in_ a name (in lowercase) for the branch which you are creating, then _click on_ the **Propose file change** button. **Example of how it might look like:** `/content/adding-some-content`.
- You should then be re-directed to another page entitled **Open a pull request** & the name for the branch that you created should appear in the **Title textfield**. _Enter_ a comment in the **textfield** describing what changes you have made. **Note:** It is good practice to have at least 2 people to review your PR.
- Your Pull Request (PR) should be "sent" to the reviewer(s) that you have chosen to review & once it's approved you should see your changes on the Live site.
- On the right-hand side, you should _see_ **Reviewers**. _Click on_ the **cog** & _select_ someone from the list that could approve the changes. Once done, _find_ the **Create pull request button** (green button) & _click it_).

___

## Approving Content

- _Click on_ the **Pull requests** tab (located near to the top of the page).
- _Click on_ the PR that you have been selected to review.
- To _review_ the changes, _click on_ the **Files changed** tab (located under the title of the PR).
- Once done, _click on_ the **Conversations** tab, then _click on_ the green **Add your review** button (within the yellow banner at the top of the page). You should then be re-directed to a page & a "pop-up" box will appear.
- _Fill in_ your comments for the PR & _select_ the appropriate **Radio button** (ie. **Comment**; **Approve**; or **Request Changes**) depending on what actions you see fit. **See:** [Dev Peer Review Workflow](https://serviceinnovationlab.github.io/devPeerReviewWorkflow/) _PR Feedback/Reviews_ & _Commit Messages_ sections for help.
- Once done, _click on_ the green **Submit review** button. And that's it, you have made your review!

___

## Skeleton templates for pages

**Note:** These are just an example. Please refer to the ones already created if unsure.

### Team page

```yaml
---
name: jacob-ong
first_name: Jacob
last_name: Ong
full_name: Jacob Ong
role: Developer
image:
active: true
# published: false (Delete the # if the team member becomes a publisher)
---
```

### Pages

```yaml
---
title: New Page
permalink: /newPage/ # In camelCase
layout: primary
lead: This is a new page.
---
```

## Projects/tools

(_Feel free to delete the ones you do not use_)

```yaml
---
agency: SIL
title: New Project
subtitle: Creating a new project.
permalink: /projects/new-project/
excerpt: Information for creating a new project.
image: /assets/img/projects/new-project.png
image_accessibility: New project.
expiration_date: YYYY-MM-DD
redirect_to: https://www.serviceinnovationlab.github.io/
project_url: "[New Project](https://www.serviceinnovationlab.github.io/projects/new-project/)"
external_url: https://github.com/ServiceInnovationLab/
external_link_title: Github
media:
resources:
quote:
---
```

## Blog posts

```yaml
---
title: Blog Post
date: YYYY-MM-DD
authors:
  - jacob-ong
tags:
  - blog post
  - open source
excerpt: ""
---
```

## Accessiblity Tests

We must meet the [New Zealand Government - Web Accessibility Standard 1.1](https://www.digital.govt.nz/standards-and-guidance/nz-government-web-standards/web-accessibility-standard-1-1/) on this toolkit.

We used automated testing to detect some in-accessible content. These tests are gatekeepers. When the content added doesn't comply, the PR will have a failed test. Receiving automated messages that your work didn't pass can be frustrating at first, but compliance is necessary and becomes easier with practice.

The tests will not catch every accessibility problem.  We still should spend time checking the toolkit, and generally keeping proficient accessibility standards.

## Git Branches

Jekyll config (including markdown, and layout html) are in the `dev` branch, which is also the default branch on github.

The static site is built by circle-ci. The deploy task runs on any change to the dev branch. (see `.circlci/config.yml`).

The status content (html, css, js, images) is then commited to the master branch. Github Pages is configured for this repo to serve from the master branch.

Note: Github Pages for organisaions must be served from the `master` branch. At this time the branch name if not configurable.
