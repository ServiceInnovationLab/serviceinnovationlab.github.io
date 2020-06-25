---
agency: Ministry for Youth Development
title: Getting government listening to youth voices Project ‘Bagel’
subtitle: Exploring how to give young people more say in government policy - and getting government to listen.
permalink: /projects/youth-voice/
redirect_from: /projects/youth-voice/
excerpt: Exploring how to give young people more say in government policy - and getting government to listen.
image: /assets/img/projects/bagel-box.png
image_accessibility: Website
github_repo:
  - "[bagel-box](https://github.com/ServiceInnovationLab/bagel-box)"
  - "[bagel-eater](https://github.com/ServiceInnovationLab/bagel-eater)"
  - "[bagel-jam](https://github.com/ServiceInnovationLab/bagel-jam)"
report:
media:
    - "[Smart Policy Analysis Tools](https://serviceinnovationlab.github.io/bagel-box/)"
    - "[The Hive](https://www.the-hive.nz/)"
categories:
  - Integrated-Services
  - Tech
  - Partnerships
---

Project Bagel was a project a Department of Internal Affairs team undertook in collaboration with the Ministry of Youth Development (MYD) late in 2019. Its aim was to help government listen to what young people wanted.

*Anonymising project names – such as ‘bagel’, ‘feijoa’, ‘croissant’ – ensures those working on them are more likely to come without pre-conceived ideas of a solution.*

The MYD team had already co-designed, with young people, a tool to seek input and feedback on government policy:[The Hive](https://www.the-hive.nz/). The aim of Project Bagel was to ensure those voices would be genuinely considered in the development of government policy.

The initial expectations for Bagel were that we would use sentiment analysis to capture the voice of youth, which could then be used by policy makers. Sentiment analysis is the use of machine learning tools to estimate how positive or negative the feeling in a piece of text is.

We tested our initial assumptions behind this with user-centred methods, including talking to policy practitioners across government and rapid prototyping. We learned that many of these initial assumptions were wrong, or could benefit from some redirection.
Through the process of research, discovery, design and prototyping, we identified opportunities to improve how policy practitioners analyse feedback on government policy and legislation. The stakes in this area are huge — the health of our democracy, honouring Te Tiriti, and the quality of policy and legislation across the board.

The formal outputs of the project were:

- [an introduction to machine learning for policy practitioners](https://serviceinnovationlab.github.io/bagel-box/intro/)
- [a list of digital tools for analysing policy feedback and submissions](https://serviceinnovationlab.github.io/bagel-box/matrix/)
- [a guide to communicating back to constituents who have made submissions](https://serviceinnovationlab.github.io/bagel-box/feedback-loop/).

### Insights

#### 1. Sentiment analysis is great for finding a heartbeat in a deluge of data, but not reliably accurate enough for lasting analysis

We tested feedback from New Zealanders on the Zero Carbon Bill on sentiment analysis tools like VaDER as well as cloud tools from Amazon, Google and Microsoft. The results [(available on GitHub)](https://github.com/ServiceInnovationLab/bagel-jam) were just not accurate enough to inform policy.

#### 2. If an agency wants to know how people feel about an issue, they can ask that directly

Agencies often run surveys to get feedback on policy questions, when they could just request free-text submissions. That said, if they want to know how favourably people feel about something specific, they’ll get a much more accurate response if they ask directly, rather than run sentiment analysis over free text.

#### 3. The sentiment of a submission doesn’t always reflect its content

Someone may be broadly supportive, but spend far more of the text pointing out problems with a policy. The general sentiment of a submission does not indicate what a person does or does not support.

#### 4. Generically-trained natural language processing tools don’t have the subject area knowledge to detect specific areas of policy or legislative feedback

Machine learning tools are a product of the data they have been trained with, and without specific training on the subject area their usefulness is limited.

#### 5. There are many issues with aggregating social media posts to inform policy making

There are ethical concerns around privacy and consent from scraping social media posts without peoples’ knowledge or consent. It may also not be possible to sort the concerns of New Zealand constituents out from the wider global conversation or the activity of coordinated bot attacks - and when presenting only aggregated and processed data, it runs the risk of laundering unrepresentative views.

#### 6. Policymakers aren’t familiar with the abilities and limitations of machine learning tools

Policymakers may believe these tools are more powerful than they really are, giving the output more weight than is appropriate – or they may be sceptical that they have any value.

### Avenues for further work

#### There is potential for topic modelling and clustering before manual analysis of submissions

Natural language processing technology can be used on a first pass of submissions, finding patterns that would take humans much longer to identify. Theme extraction (also known as topic modelling) can help to identify unexpected patterns before the categories for further analysis are set. Clustering documents into groups that share themes could assist with assigning documents for further analysis.

#### There is potential for better analysis to lead into better two-way communication with people who engage with government

Communication back to people who submit to consultations is often limited. If we have a better understanding of what people have said and how it fits in with what everyone else has said, we can relay that back to them, get feedback on whether we’ve heard them accurately, and let them know how their views fit into the wider community.

#### There is a need for more flexible and easier-to-use tagging and theming tools that allow for cross-agency use and for data to be exported and analysed further

Many of the tools used for tagging and theming submissions make it difficult to collaborate or analyse data further, limiting their usefulness.

#### There is a need for better cross-agency (and intra-agency) sharing of data analysis skills and tools

Data analysis is a powerful part of the policymaker’s toolkit – but those skills aren’t universal, and the tools aren’t always easy to access or use. Those who are well-equipped for this may be in data science rather than policy roles, and collaboration is infrequent.

### What else is happening in the AI /machine learning space that links to this project?

The [Strategy for a Digital Public Service](https://www.digital.govt.nz/digital-government/strategy/strategy-summary/) identifies the need to establish strong digital foundations that can be used across the public sector. This includes, for example, determining appropriate policy and regulatory requirements for emerging technologies, such as AI. This will ensure new technologies are adopted lawfully, safely, transparently, and with the continued support of the public.

There is no legal framework that is explicitly for AI, but a range of legal protections around accuracy, privacy, security, freedom and discrimination already apply in New Zealand. Before using AI/machine learning for policy applications, you should consider the  [Principles for safe and effective use of data and analytics](https://www.stats.govt.nz/about-us/data-leadership/#principles)  that were developed by the Privacy Commissioner and Stats NZ.

There is emerging work on potential ways to introduce greater regulation of how government uses of AI technologies. This includes, for example, the development of the  [Algorithm Charter](https://data.govt.nz/use-data/analyse-data/government-algorithm-transparency-and-accountability/draft-algorithm-charter/) by Stats NZ, and New Zealand is partnering with the World Economic Forum on the [Reimagining regulation in the age of AI project](https://www.digital.govt.nz/blog/reimagining-regulation-in-the-age-of-artificial-intelligence/) on how governments, business and society can work together to meet the challenge of regulating AI.
