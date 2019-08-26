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

- In the upper-right corner of any page, _click on_ your profile photo -> **Settings** -> **Security** -> _scroll to_ **Two-factor authentication**,  _choose_ the appropriate method for you (& follow the steps).
- _Click on_ ![2FA](/assets/img/screenshot-instructions/2fa.png)
- On the Two-factor authentication page, either _click on_ **Set up using an app** OR _click on_ **Set up using SMS**.
- _Download_ & _save_ your recovery codes in a safe place so that you can recover your account if you lose your 2FA credentials.
- You'll then be re-directed to the next page where depending on the authentication method you have chosen you'll either need to fill in your mobile number (for sms) **OR** needing to scan the QR code (for app). Either way, once you receive the code after following the steps, enter it in the section (as shown below) & _click_ **Enable** when done:![Enable 2FA](/assets/img/screenshot-instructions/enable-2fa.png)
- _Contact_ one of the `Service Innovation Lab's` repository admins (ie. `Brenda` or `Jacob`) & they will add you to the team on github. You'll receive an invitation by email. _Go to_ your email and accept the invitation.

---

[Glossary of GitHub terms used](https://help.github.com/en/articles/github-glossary)

## Adding your picture & profile to the team page

### Adding a Photo

- _Navigate to_ the [Toolkit](https://github.com/ServiceInnovationLab/serviceinnovationlab.github.io)'s repository. (_Open_ the link in a new tab/window)
- _Scroll down_ the repository list & _click on_ `serviceinnovationlab.github.io`.
- Ensure that you are on the **dev** branch ![Dev branch](/assets/img/screenshot-instructions/dev-branch.png) , then _navigate to_ **assets/img/team**.
_Click on_ **assets**->**img**->**team**.![Folder path image](/assets/img/screenshot-instructions/folder-path.png)

**Note:** Before adding your picture, you'll need to have it saved locally on your machine as `firstname-lastname` (please ensure that your picture is in jpg format).

- _Click on_ **Upload files**![Upload files](/assets/img/screenshot-instructions/upload-files.png) **Note:** Currently, the _Edge_ web browser on DIA devices are not able to upload files. ![Choose files](/assets/img/screenshot-instructions/choose-files.png)
- _Scroll to_ the bottom of the page.
- _Enter_ a **Commit message** (compulsory) briefly saying what you did (eg. Added a profile picture for Jacob).![Commit message](/assets/img/screenshot-instructions/commit-message.png)
- _Enter_ a further extended **Description** (optional) for your changes. ![Description message](/assets/img/screenshot-instructions/description-message.png)
- Below that, _type in_ a meaningful name (eg. `added-profile-image-jacob`) for the branch which you are creating. **Note:** Branch names should be in lowercase & a hyphen should be used instead of spaces.
![Branch name](/assets/img/screenshot-instructions/branch-name.png)
- _Click on_ ![Commit new file button](/assets/img/screenshot-instructions/commit-new-file.png)
- You should then be re-directed to another page entitled **Open a pull request**.
- **See** [Creating a Pull Request](#PR) (at bottom of page).

---

### Creating your Team Profile <a name="TeamProfile"></a>

- _Navigate_ back to the [Toolkit](https://github.com/ServiceInnovationLab/serviceinnovationlab.github.io)'s repository. (_Open_ the link in a new tab/window)
- Ensure that you are on the **dev** branch, then _navigate to_ **_authors**.
- _Click on_ the **Create new file** button. In the **textfield** which appears (at top of page beside the file path breadcrumb), _type in_ your name in this format `firstname-lastname.md` (eg. jacob-ong.md). **Note:** File names should be in lowercase & a hyphen should be used instead of spaces.
- _Copy_ the below code & _paste_ it in the textfield in your file (_change the details to yours_):

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
- _Enter_ a **Commit message** (compulsory) saying what you did (eg. Added team profile for Jacob).![Commit message](/assets/img/screenshot-instructions/commit-message.png)
- _Enter_ a further extended **Description** (optional) for your changes. ![Description message](/assets/img/screenshot-instructions/description-message.png)
- Below that, _type in_ a meaningful name (eg. `adding-team-profile-jacob`) for the branch which you are creating. **Note:** Branch names should be in lowercase & a hyphen should be used instead of spaces.![Branch name](/assets/img/screenshot-instructions/branch-name.png)
- _Click on_ ![Commit new file button](/assets/img/screenshot-instructions/commit-new-file.png)
- You should then be re-directed to another page entitled **Open a pull request**.
- **See** [Creating a Pull Request](#PR) (at bottom of page).

---

## Creating a Pull Request (PR)<a name="PR"></a>

_You've added an image/some content. Now you'll need to create a **PR** to let the reviewers know that your image/content is ready for review._

- You should see your **commit message** & **description** carried across & appearing in the text fields.
- _Click on_ ![Reviewers section](/assets/img/screenshot-instructions/reviewers.png) & _select_ `JacOng17` & `gthurstonnz` from the list. **Note:** It is good practice to have at least 2 people to review your PR. Once done,  _click on_ the **Create pull request** (green button).
- You will then be redirected to the page showing your PR.
![Created PR](/assets/img/screenshot-instructions/created-pr.png)

Your Pull Request (PR) should be "sent" to the reviewers that you have chosen to review (_once it's approved you should see your changes on the [Live](https://serviceinnovationlab.github.io) site_).

If you navigate away from that page & would later like to track your PR's status, _click on_ the **Pull requests** tab & you can find it there.

**Note:** Before your PR can be merged into the main branch, it **will have to pass**:

**1.** The automated checks

Example of an **unsuccessful check:**
![Unsuccessful checks](/assets/img/screenshot-instructions/unsuccessful-checks.png)

Example of a **successful check:**
![Successful checks](/assets/img/screenshot-instructions/successful-checks.png)
**2.** The reviewers' approval.
![Approved PR](/assets/img/screenshot-instructions/reviewer-approval.png)

When Steps **1** & **2** have passed, you should see something similar to this:
![Approved PR](/assets/img/screenshot-instructions/approved-pr.png)

**Note:** The person creating the PR has the responsibility of:

- Checking/following-up on the status of the review;
- Fixing any changes to be made before approval;
- And _clicking on_ ![Merge PR button](/assets/img/screenshot-instructions/merge-pr.png) & ensuring that no errors occur (eg. warning message, etc...)

### Checking if your changes have been deployed

- _Navigate to_ the [Toolkit](https://github.com/ServiceInnovationLab/serviceinnovationlab.github.io)'s repository. (_Open_ the link in a new tab/window)
- _Scroll down_ to the **README.md** section & _look_ for the **CircleCi** badge.
- If the build **Passed** ![Passed CircleCi build](/assets/img/screenshot-instructions/passed-logo.png), _navigate_ to the [Live](https://serviceinnovationlab.github.io) site (open link in a new tab/window) & _check_ that your content has been published.
- If the build **Failed** ![Failed CircleCi build](/assets/img/screenshot-instructions/failed-logo.png), _contact_ either `Brenda` or `Jacob`.

If something does "break"/error occurs & you're unsure of how to fix it, _contact_ either `Brenda` or `Jacob` & they should be able to help you out.

---

**Back to:** [Creating your Team Profile](#TeamProfile)
