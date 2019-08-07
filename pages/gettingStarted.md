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

### Set up two-factor authentication (2FA)

_For a step-to-step guide on how to [set-up](https://help.github.com/en/articles/configuring-two-factor-authentication) 2FA_

- _Click on_ your profile icon (top right corner of page) -> **Settings** -> **Security** -> _scroll to_ **Two-factor authentication**,  _choose_ the appropriate method for you (& follow the steps).
- _Click on_ ![2FA](/assets/img/screenshot-instructions/2fa.png)
- _Download_ & _save_ your recovery codes so that you can recover your account if you lose your 2FA credentials.
- You'll then be re-directed to the next page where depending on the authentication method you have chosen you'll either need to fill in your mobile number (for sms) **OR** needing to scan the QR code (for app). Either way, once you receive the code after following the steps, enter it in the section (as shown below) & _click_ **Enable** when done:![Enable 2FA](/assets/img/screenshot-instructions/enable-2fa.png)
- _Contact_ one of the `Service Innovation Lab's` repository admins (ie. `Brenda` or `Jacob`) & they will add you to become a member of the repository. You'll be sent an email when approved. _Go to_ your email and accept the invite so that you can add to the repository.

---

## Adding your profile to the team page

### Adding a Photo

- _Navigate to_ the [Toolkit](https://github.com/ServiceInnovationLab/serviceinnovationlab.github.io)'s repository.
- Ensure that you are on the **dev** branch ![Dev branch](/assets/img/screenshot-instructions/dev-branch.png) , then _navigate to_ **assets/img/team**. _Click on_ **assets** -> **img** -> **team**. ![Folder path image](/assets/img/screenshot-instructions/folder-path.png)

- **Note:** Before adding your picture, you'll need to have it saved locally on your machine as `firstname-lastname` (please ensure that your picture is in jpg format).
- _Click on_ **Upload files** ![Upload files](/assets/img/screenshot-instructions/upload-files.png)**Note:** Currently, the _Edge_ web browser on DIA devices are not able to upload files. ![Choose files](/assets/img/screenshot-instructions/choose-files.png)
- _Scroll to_ the bottom of the page.
![Commit new file section](/assets/img/screenshot-instructions/commit-new-file.png)
- _Enter_ a **Commit message** (compulsory) saying what you did (eg. Added a profile picture for Jacob) & a further extended **Description** (optional) for your changes.
- Below that, _type in_ a meaningful name (eg. `added-profile-image-jacob`) for the branch which you are creating. **Note:** Branch names should be in lowercase & a hyphen should be used instead of spaces.
- _Click on_ the **Commit new file** button.
- You should then be re-directed to another page entitled **Open a pull request**.
- **See** [Creating a Pull Request](#PR).

---

### Creating your Team Profile <a name="TeamProfile"></a>

- _Navigate_ back to the [Toolkit](https://github.com/ServiceInnovationLab/serviceinnovationlab.github.io)'s repository.
- Ensure that you are on the **dev** branch, then _navigate to_ **_authors**.
- _Click on_ the **Create new file** button. In the **textfield** which appears (at top of page beside the file path breadcrumb), _type in_ your name in this format `firstname-lastname.md` (eg. jacob-ong.md). **Note:** File names should be in lowercase & a hyphen should be used instead of spaces.
- Then proceed to _fill in_ your details following this format:

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

- _Scroll to_ the bottom of the page.![Commit new file section](/assets/img/screenshot-instructions/commit-new-file.png)
- _Enter_ a **Commit message** (compulsory) saying what you did (eg. Added team profile for Jacob) & a further extended **Description** (optional) for your changes.
- Below that, _type in_ a meaningful name (eg. `adding-team-profile-jacob`) for the branch which you are creating. **Note:** Branch names should be in lowercase & a hyphen should be used instead of spaces.
- _Click on_ the **Commit new file** button.
- You should then be re-directed to another page entitled **Open a pull request**.
- **See** [Creating a Pull Request](#PR).

---

## Creating a Pull Request (PR)<a name="PR"></a>

You've added an image/some content. Now you'll need to create a **PR** to let the reviewers know that your image/content is ready for review.

- In the **Reviewers** section (right-hand side), _click on_ the **cog** & _select_ `JacOng17` & `gthurstonnz` from the list. Once done,  _click on_ the **Create pull request** (green button). **Note:** It is good practice to have at least 2 people to review your PR.
- Your Pull Request (PR) should be "sent" to the reviewers that you have chosen to review & once it's approved you should see your changes on the Live site.
- **For confirmation:** If you would like to track the status of your PR & see it in its queue, _click on_ the **Pull requests** tab & you can find it there.

[Creating your Team Profile](#TeamProfile)
