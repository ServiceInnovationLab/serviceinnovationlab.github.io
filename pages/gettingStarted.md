---
title: Getting Started
permalink: /gettingStarted/
layout: primary
---

## Getting Started

***NOTE:** These steps only apply to people involved with the Lab. For the first time adding content & getting set-up, it will take longer than usual.*

### Create a GitHub account

- _Go to_ [GitHub](https://github.com/)
- _Click on_ **Sign up** (& follow the steps). **Note:** _Choose_ the Free Subscription.
- Remember to _verify_ your email address (in order to start using GitHub's features).

### Set up 2FA

- Go to **Settings** (icon on top right-hand corner of page) -> **Security** -> _scroll to_ **Two-factor authentication**,  _choose_ the appropriate method for you (& follow the steps).
- _Download_ your recovery codes so that you can recover your account if you lose your 2FA credentials.
- Once done, _contact_ one of the Github repository admins & they will add you to become a member of the repository. Only if you are approved as a member, then you add content to the repository. When approved, _go to_ your email and accept the invite.

## Adding content to the team page

- _Navigate to_ the [Toolkit](https://github.com/ServiceInnovationLab/serviceinnovationlab.github.io)'s repository.
https://github.com/ServiceInnovationLab/serviceinnovationlab.github.io

1. **How to Add a Photo:** Ensure that you are on the **dev** branch ![Dev branch](/assets/img/screenshot-instructions/dev-branch.png) , then _navigate to_ **assets/img/team**. ![Team folder image](/assets/img/screenshot-instructions/team-folder.png).

- **Note:** Before adding your picture, you'll need to have it saved locally on your machine as `firstName-lastName` (the file extension depends on what format your picture is in).
- _Click on_ **Upload files** ![Upload files](/assets/img/screenshot-instructions/upload-files.png) & choose your preferred method. ![Choose files](/assets/img/screenshot-instructions/choose-files.png).
- Once done, _scroll to_ the bottom of the page (and you should see this).
![Commit changes area](/assets/img/screenshot-instructions/commit-changes.png)
- _Enter_ a **Commit message** (Compulsory) saying what you did & a further extended **Description (optional)** for your changes.
- The **Radio Button** corresponding to the text "Create a new branch for this commit and start a pull request." should be _selected_.
- You should also see a textbox below that (should be automatically filled-in with a custom name), _delete_ that text & _type in_ a meaningful name (eg. `creating-new-file`) instead for the branch which you are creating, then _click on_ the **Commit new file** button.
- You should then be re-directed to another page entitled **Open a pull request**.
- **See** below on [Creating a Pull Request](#PR).

  **AND**

2. **How To Create A Team Profile:**

- _Navigate_ back to the [Toolkit](https://github.com/ServiceInnovationLab/serviceinnovationlab.github.io)'s repository.
https://github.com/ServiceInnovationLab/serviceinnovationlab.github.io
- Ensure that you are on the **dev** branch, then _navigate to_ **_authors**.
- _Click on_ the **Create new file** button. In the **textfield** which appears, _type in_ your name in this format (in lowercase) `firstName-lastName.md` (eg. jacob-ong.md). Then proceed to _fill in_ your details following this format (shown below):

```yaml
---
name: jacob-ong
first_name: Jacob
last_name: Ong
full_name: Jacob Ong
role: Developer
image: "/assets/img/team/jacob-ong.jpg"
active: true
---
```

- Once done, _scroll to_ the bottom of the page; _enter_ a **Commit message** (Compulsory) saying what yoou did & a further extended **Description (optional)** for your changes.
- The **Radio Button** corresponding to the text "Create a new branch for this commit and start a pull request." should be _selected_. Below that,_Type in_ a meaningful name (eg. `creating-new-file`) for the branch which you are creating, then _click on_ the **Commit new file** button.
- **See** below on [Creating a Pull Request](#PR).

---

## Creating a Pull Request (PR)<a name="PR"></a>

- In the **Reviewers** section (right-hand side), _click on_ the **cog** & _select_ `JacOng17` & `gthurstonnz` from the list. Once done,  _click on_ the **Create pull request** (green button). **Note:** It is good practice to have at least 2 people to review your PR.
- Your Pull Request (PR) should be "sent" to the reviewer(s) that you have chosen to review & once it's approved you should see your changes on the Live site.
- **For confirmation:** If you would like to track the status of your PR & see it in its queue, _click on_ the **Pull requests** tab & you can find it there.
