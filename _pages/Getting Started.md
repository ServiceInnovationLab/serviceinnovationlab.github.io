---
title: Getting Started
layout: default
---

## Getting Started
1. Create a [Github](https://github.com/join) account.

2. A step-by-step guide to using [Git](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners) (incl. branches & pull requests).

3. Upload a profile picture to the `/assets/media/Team` directory. Find this line on the last entry
`<div class="col-md-12 section1">`. Change IMAGENAME; add a title; & and alt for your image
`<img src="/assets/media/Team/IMAGENAME.jpg" title="" alt="">`.	

4. In `Team_Members_Intro.yml`, fill in your Name; Job Position; & write a brief introduction of yourself. Take a note of your entry number.

5. Take a look at the __Our Team__ page & if all the rows are used, go to `OurTeam.md` and add a new row. Else, just find the last entry and change all 3 lines of the arrayNo `(...teamMembers[arrayNo]...)` to be your entry number - 1.

6. [Markdown](https://www.markdownguide.org/basic-syntax) guide (which you would utilise when using Jekyll).

7. To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-title.md` and includes the necessary front matter `title & layout:report`. You can refer [here](https://jekyllrb.com/docs/posts/) for more info.