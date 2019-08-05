---
title: Getting Started
permalink: /gettingStarted/
layout: primary
---

## Getting Started

***NOTE:** These steps only apply to people involved with the Lab*

### Create a GitHub account

- _Go to_ [GitHub](https://github.com/)
- _Click on_ **Sign up** (& follow the steps). **Note:** _Choose_ the Free Subscription
- Remember to _verify_ your email address (in order to start using GitHub's features).

### Set up 2FA

- Go to **Settings** -> **Security** -> _scroll to_ **Two-factor authentication** & _choose_ the appropriate method for you (& follow the steps).
- Once done, _contact_ one of the Github repository admins & they will add you to become a member of the repo.

### Create a Pull Request (PR)

- _Navigate to_ the [Toolkit](https://github.com/ServiceInnovationLab/serviceinnovationlab.github.io)'s repo.

1. **To Add a Photo:** Ensure that you are on the **dev** branch, then _navigate to_ **assets/img/team**.

- _Click on_ the **Upload files** button & choose your preferred method (eg. Dragging the file OR _clicking on_ the **choose your files** link). **Note:** Your image should be saved as `firstName-lastName`.
- Once done, _scroll to_ the bottom of the page; _enter_ a **Commit message** & a **Description (optional)** for your changes.
- _Select_ the **Radio Button** corresponding to the text "Create a new branch for this commit and start a pull request.". You should then see a box appear. _Type in_ a name for the branch which you are creating, then _click on_ the **Propose file change** button.
- You should then be re-directed to another page entitled **Open a pull request** & the name for the branch that you created should appear in the **Title textfield**. _Enter_ a comment in the **textfield** describing what changes you have made.
- On the right-hand side, you should _see_ **Reviewers**. _Click on_ the **cog** & _select_ someone from the list that could approve the changes. Once done, _find_ the **Create pull request button** (green button) & _click it).
- Your Pull Request (PR) should be "sent" to the reviewer(s) that you have chosen to review & once it's approved you should see your changes on the Live site. **Note:** It is good practice to have at least 2 people to review your PR.

___
2. **To Add your details:** Ensure that you are on the **dev** branch, then _navigate to_ **_authors**.

- _Click on_ the **Create new file** button. In the **textfield** which appears, _type in_ your name in this format (in lowercase) `firstName-lastName.md` (eg. jacob-ong.md). Then proceed to _fill in_ your details following this format (shown below):

```yaml
---
name: jacob-ong
first_name: Jacob
last_name: Ong
full_name: Jacob Ong
role: Developer
image: "/assets/img/team/<firstName-lastName>.<imageFormat>"
status: active
# published: true [This is currently commented out, but when you have written a blog post, you should remove the # to uncomment.]
---

```

- Once done, _scroll to_ the bottom of the page; _enter_ a **Commit message** & a **Description (optional)** for your changes.
- _Select_ the **Radio Button** corresponding to the text "Create a new branch for this commit and start a pull request.". You should then see a box appear. _Type in_ a name for the branch which you are creating, then _click on_ the **Propose file change** button.
- You should then be re-directed to another page entitled **Open a pull request** & the name for the branch that you created should appear in the **Title textfield**. _Enter_ a comment in the **textfield** describing what changes you have made.
- On the right-hand side, you should _see_ **Reviewers**. _Click on_ the **cog** & _select_ someone from the list that could approve the changes. Once done, _find_ the **Create pull request button** (green button) & _click it).
- Your Pull Request (PR) should be "sent" to the reviewer(s) that you have chosen to review & once it's approved you should see your changes on the Live site. **Note:** It is good practice to have at least 2 people to review your PR.
