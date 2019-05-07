---
title: Dev Peer Review Workflow
permalink: /devPeerReviewWorkflow/
layout: primary
---

# Dev Peer Review Workflow

## Pull Request Workflow

Our code is written by humans. This will remain true until the robotic apocalypse finally occurs. Humans learn. Humans make mistakes. This peer-review based workflow is used by our team to foster a welcoming environment where we all are lifelong learners, and we support each other as a team to do the best we can, which includes not making mistakes.

## Peer review

We do not work alone. All work has at least two developers involved in any changes.

## Pull Requests

Any dev can propose a code change (a PR).

Propose the PR on GitHub, as a proposed change to the `develop` branch. See "[Branch Naming](#BranchNaming)" later in this document.

A PR description must include what has changed, but also why it needs to change. (a business or user need).

One other dev must approve the PR before it can be merged.

Approving a PR means you agree the code works as described and meets our quality levels. For most PRs this will require running the code yourself. Mention on the PR if you didn’t.

If there is an associated Trello story, or GitHub issue, provide some details and link to it. If there is no associated story, explain why briefly.

## PR Feedback / Reviews

As a team, we attempt to give at least one comment/feedback on each PR. This normalises asking questions. It should be unusual for a PR to have zero feedback. Feedback should be something that could be better. "I love this" isn't enough.

Feedback is given in a form of "Have you considered…" or otherwise doesn’t assume the author didn’t already attempt your alternative approach. "Do it this other way" is not feedback.

Comments can be "blocking" meaning the author wants a response to their feedback, or they can be a suggestion only, leaving the decision to the PR author. Indicate this using emoji. Elephant `:elephant` = suggestion only.

As a reviewer, you can approve a PR using the "Approve" option on Github. Request changes to a PR using the "Request changes" option.

## Merging

PR branches need to be "up to date", and continuous integration via Travis-ci must run and pass before merging. New code must have tests, and minimum code coverage levels need to be met and maintained.

Merges into the `develop` branch need only one approval to merge but give all active team members reasonable chance to review unless the change is trivial.

The dev who proposed the PR presses the merge button on a PR once all the above passes & it is approved. That dev is responsible for merging in a way that does not "break the build" or cause unplanned outages.

Press the "Delete Branch" on Github after merging. This keeps the repo tidy.

## Commit Messages

Commit messages should describe the reason for the changes being committed, so that anyone viewing the commit can know what has changed and why.

Good messages:

- Updating Travis config to include dependency installation

Bad messages:

- Updating Travis

Really bad commit messages:

- Fixing stuff so it works
- Please let it work this time
- Commit
- Hello

## Branch Naming<a name="BranchNaming"></a>

Branch naming in a consistent manner is good for keeping things tidy, and add context to any commit messages for commits against the branch. Branch names should be descriptive and their meanings clear. Additionally, branch names can contain `/` characters, so a good way to keep types of branches separate is to "namespace" them - for example, any branches whose main purpose is to add a new feature to the application should have the prefix "feature". Branches for fixing bugs should be prefixed with "bugfix", while a branch for something urgent that is going to go to production asap should be prefixed with "hotfix".

Here are some examples:

    feature/automated_dishwasher_emptying
    fix/ui_disabled_for_anon_users
    hotfix/offline_jobs_errors

## Continuous Deployment

Our code deploys automatically after a git merge into special branches.

`develop` branch deploys to staging.

`master` branch deploys to production.