# Pull Request Workflow

`dev` is our main branch. Propose PRS into here.

`gh-pages` is where our built jekyll html is.

## Pull Requests

Any dev can propose a code change (a PR).

Propose the PR using github, as a proposed change into the `dev` branch. See "Branch Naming" later in this document.

A PR description must include what has changed, but also why it needs to change. (a business or user need).

One other dev must approve the PR before it can be merged.

Approving a PR means you agree the code works as described and meets our quality levels. For most PRs this will require running the code yourself. Mention on the PR if you didn’t.

If there is an associated Trello story, or github issue (waffle), provide some details and link to it. If there is no associated story, explain why briefly.

## PR Feedback / Reviews

As a team, we attempt to give at least one comment/feedback on each PR. This normalises asking questions. It should be unusual for a PR to have zero feedback. Feedback should be about something that "could be better". "I love this" isn't enough.

Feedback is given in a form of "Have you considered..." or otherwise doesn’t assume the author didn’t already attempt your alternative approach. "Do it this other way" is not feedback.

Comments can be "blocking" meaning the author wants a response to their feedback, or they can be suggestion only, leaving the decision to the PR author. Indicate this using emoji. Elephant :elephant = suggestion only.

As a reviewer, you can approve a PR using the "Approve" option on github. Request changes to a PR using the "Request changes" option.

## Quality

Code needs to pass code linters (we use codeclimate).

Markup generated for webpages must pass accessibility checkers.

## Merging

PR branches need to be "up to date", and continuous integration via Travis-ci must run and pass before merging. New code must have tests, and minimum code coverage levels need to be met and maintained.

Merges into the `dev` branch need only one approval to merge, but give all active team members reasonable chance to review unless the change is trivial.

The dev who proposed the PR presses the merge button on a PR once it is approved, and all the above passes. That dev is responsible for merging in a way that does not "break the build" or cause unplanned outages.

Press the "Delete Branch" on github after merging. This keeps the repo tidy.

## Commit Messages

Commit messages should describe the reason for the changes being commited, so that anyone viewing the commit can know what has changed and why.

Good messages:

* Updating travis config to include dependency installation

Bad messages

* Updating travis

Really bad commit messages

* fixing stuff so it works
* please let it work this time
* commit
* hello

## Branch Naming

Branch naming in a consistent manner is good for keeping things tidy and add context to any commit messages for commits against the branch. Branch names should be descriptive and their meanings clear. Additionally, branch names can contain `/` characters, so a good way to keep types of branches seperate is to "namespace" them - for example, any branches whose main purpose is to add a new feature to the application should have the prefix "feature". Branches for fixing bugs should be prefixed with "bugfix", while a branch for something urgent that is going to go to production asap should be prefixed with "hotfix".

Here are some examples:

    feature/automated-dishwasher-emptying
    bugfix/ui-disabled-for-anon-users
    hotfix/offline-jobs-errors

## Deploying

Use `bin/deploy-to-gh-pages` to manually deploy. (automation coming soon). This builds from origin/dev and deploys to `origin/gh-pages`.
