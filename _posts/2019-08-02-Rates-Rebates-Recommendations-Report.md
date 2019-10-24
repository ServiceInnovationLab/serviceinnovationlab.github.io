---
title: Recommendations Report
date: 2019-08-02
authors:
  - glen-thurston
tags:
  - blog post
  - open source
  - rates rebates
  - Te Whakamāmā i ngā Reiti
excerpt: "Following a successful Alpha phase in May and September 2018, the Rates Rebate beta trial was run in June and July 2019 by a team with members from Service Delivery and Operations team within DIA, Government Information Services, and the Service Innovation Lab. This was in collaboration with Tauranga City Council, Hutt City Council, and Kāpiti Coast District Council"
---
## Executive Summary

A Rates Rebate is a subsidy (currently up to $640) for low-income homeowners on the cost of their residential rates. The subsidy is delivered by Local Councils and is administered by Central Government (currently the Department of Internal Affairs (DIA)). The entitlement value is calculated by the cost of the rates, applicants income, and number of dependants. The maximum subsidy amount is reviewed yearly.

Following a successful (and [award winning](https://nzosa.org.nz/finalists2018/)) [Alpha](https://www.digital.govt.nz/blog/making-it-easier-the-rates-rebates-story-so-far/) phase in May and September 2018, the Rates Rebate beta trial was run in June and July 2019 by a team with members from Service Delivery and Operations team within DIA, Government Information Services, and the Service Innovation Lab.

The Service Innovation Lab invited three councils (Tauranga City Council, Hutt City Council, and Kāpiti Coast District Council) to participate from a larger group that expressed interest. The three councils each run a different IT system for processing applications, providing a good test of any proposed process changes, and a good indication of the challenges of rolling out the solution more widely.

Evidence gathered during the beta trial supported the observation during the Alpha phase that an optimised online application form takes just 4 minutes to complete on average, compared to 25 minutes for the paper form. Feedback from councils supported evidence gathered via observation that the online application was considered much easier for applicants to complete.

The beta dramatically reduced per transaction costs for councils, completely eliminating the need to courier paper applications between councils and the DIA. Councils have communicated their intention to actively promote the online option (if it proceeds beyond beta) based on the improved experience for applicants (and lower processing costs).

The statutory declaration remains the single biggest barrier preventing large scale adoption of an online application process (as well as a significant barrier to those applying on paper). Removing the statutory declaration removes the requirement to visit a council to submit an application. A [paper](https://docs.google.com/document/d/11gccvNrVD4PnfvMZwgwHEO4M5UQmRvjbpTZjBVA1lD8/edit?usp=sharing) was written to support the case for this change during the beta phase. If the case for change is supported, this requirement could be removed by June 2020.

Together with the [Rates Rebate Beta Research Report](https://docs.google.com/document/d/1zDiJs8x2r9ABKa0hqCHkDZnK1B5iy-JlNSbtCZUoDuo/edit?usp=sharing), this report documents the key results of the trial, presents options for next steps, and makes a set of recommendations.

## High-level recommendations

A set of recommendations beyond beta are also included later in the document.

### Run a second trial with the existing three councils during a high application volume period and implement data export solutions

1. A second trial should be run during a high volume period (e.g. August and September) to fully inform DIA and Council decisions about next steps. While running the beta in June meant that council staff were available to collaborate and co-design improvements to the application and process, it also meant that application volumes were lower for councils than they would have been in July and August.
Evidence gathered during the Alpha (which ran through the busy period) suggests that uptake of the online option is high when it is promoted by councils (20% of the 800 recipients of a letter sent by Tauranga City Council promoting the online option opted to use it in 2018).
The councils involved in the trial have enthusiastically requested that the trial be extended through a high volume period.
1. The second trial should be limited to the same three councils who participated in June/July. This will enable valuable data to be gathered while keeping the cost of the extension minimal.
1. Delay the decision about whether to proceed beyond this extension until the end of this second trial. This will allow time for results from the first round to be validated against higher application volumes.
1. Improvements should be made to how data is transferred between the online application solution and council core systems, and options explored to improve data transfer between council systems and eRMS. The high trust relationship built with the councils involved in the trial should be leveraged to (co)design and implement simple, low cost (but high value) solutions during the trial extension period

## Options to consider

- Option 1 - **Close down the initiative**: inform Councils there will be no change to the current paper-based service from DIA. Decommission the service.
- Option 2 - **Run a second trial with the existing three councils**. Continue to provide support, but limit other activity to keep costs minimal.
- Option 3 - **Run a second trial with the existing three councils through a high application volume period and implement data export solutions (recommended)**: proceed as for option two, but also implement data export solution for councils (for import into their core systems). Investigate (and document a recommendation for) the best solution to improve data submission (reduce cost and reduce/eliminate data entry errors) from council core systems to eRMS.
- Option 4 - **Extend the trial with the existing three councils until the end of June 2020**: continue to gradually evolve the service with these councils throughout this period. Use the high quality relationship built with councils to co-design the optimal online (and paper) application process ready for when the statutory declaration requirement is removed.
- Option 5 - **Extend the trial until the end of June 2020 and allow another three councils to join**: continue to run the trial with Tauranga City Council, Kāpiti District Council, and Hutt City Council through to June 2020 and trial the service with an additional three councils. Aim to sign up councils that will best test whether the service is ready to be rolled out nationally.

## Background

The Rates Rebates Online Beta was designed to meet the needs of ratepayers, Councils, and the DIA Rates Rebates team. It was built based on the findings of a Discovery and Alpha phase.

In the Discovery phase the Rates Rebates service was mapped and reviewed, internal and external stakeholders were interviewed, and potential methods of service delivery were explored. The discovery revealed many opportunities at the system level to improve the experience for both the people applying for their entitlement and people delivering the service.

In the Alpha phase, a minimum viable product (MVP) was designed and developed, and trialled in Tauranga from 21 May—30 September 2018 with Tauranga City Council. The alpha was focused on testing system changes. Tauranga City Council, Auckland Council were involved with assisting with the design and test of the alpha and numerous other councils watched progress closely. The Alpha proved to be of high value to ratepayers and Councils, and successfully tested a fully digital and user centred end to end rates rebate process. The solution was developed using open source software, and the project won the Award for Open Source Use in Government for 2018.

The Beta phase was focused on further refining the service based on further user research and feedback from ratepayers and councils. An emphasis in this phase was on ensuring it is was set up to be a live, fully functional, and sustainable system. This included:

- Learning how the service can scale to more than one council
- Moving the alpha solution to sustainable production infrastructure and technology
- Ensuring accessibility, privacy, security issue standards for public services are fully adhered to
- Gathering feedback from beyond a wider range of councils, beyond just the single council involved in the alpha
- Building a case for further investment and rule changes
- Exploring options for future ownership of the service to ensure it will be well managed and continue to evolve if it progresses beyond beta

Following research into current user behaviour, the online rates rebate application form was implemented within govt.nz (which is recognised as the authority on rates rebates by major search engines, and referenced by council websites).

User acceptance testing (UAT) for the Rates Rebate Beta began on Tuesday 21 May. The Beta trial with ratepayers started on Wednesday 5 June and ended on Monday 1 July. Councils continued to process online applications up to 1 August 2019.

Funding for the Beta was approved by the Service Innovation Working Group (SIWG) within the Digital Government Partnership supported by the Government Chief Digital Officer (GCDO). To deliver the Beta, a virtual team was created with support and participation from the Service Delivery and Operations (SDO) team (who continue to provide advice and subject matter expertise), and the Government Information Services (GIS) team (who made a significant contribution to the initiative by contributing two developers at high capacity for an extended period). At this stage there has been no funding approved to proceed beyond Beta.

### Current factors impacting customers using the service

- **Low income, and time poor**
The current application process is complex, takes a long time, and places an unjustified burden on many people by asking for more information than is necessary.
- **Issues affecting mobility and access**
The lack of an alternative, accessible way to make an application means many people who have a disability e.g. a vision impairment ([over 11% of those over 65](http://archive.stats.govt.nz/browse_for_stats/health/disabilities/DisabilitySurvey_HOTP2013/Commentary.aspx)) or a physical disability ([49% of those over 65](http://archive.stats.govt.nz/browse_for_stats/health/disabilities/DisabilitySurvey_HOTP2013/Commentary.aspx#impairtype) struggle to apply for help they are eligible to receive.

Due to many (in the 2017/18 rating year 79% of all applicants were receiving New Zealand Superannuation) applicants being over 65 and/or living with a disability, the requirement to sign a Statutory Declaration in front of a witness impacts accessibility for the core customer group.

**Note**: During the Beta trial, a separate paper Why remove the statutory declaration was written to support the case for its removal. This paper details the substantial benefits associated with removing the statutory declaration, when this is supported with adoption of an online application process.

## Applications submitted during the trial

The beta was run during the quiet June period directly following the normal “reminder” sent out by councils before the end of the financial year. Council’s indicated that this timing would work well because staff would be available to collaborate, co-design, and test improvements to the application and process. This worked well, with the design team able to work closely with both frontline and back office staff to observe processes and current practice. Council staff were also available during a two week period of user acceptance testing, which was important (we had received feedback from Tauranga that insufficient time had been allowed for user acceptance testing in the Alpha).

Running the trial in the June period also meant that only a low number of applications were expected to be received and processed (this turned out to be the case).

- A total of 101 applications were submitted.
- 46 of the 101 applications were signed and fully processed.
  - 12 were processed by Tauranga City Council
  - 8 were processed by Hutt City Council
  - 26 were processed by Kāpiti District Council
- 5 of the 101 were submitted, but never signed.
- 50 of the 101 applications were declined.
  - The most common reason supplied by councils for declining applications was “income too high”. However, there were also a significant number of applications from ratepayers who had already applied in the 18/19 year.
  - The ability to “decline” an application (and supply a reason) was added to the beta, and we believe this feature could provide useful data for analysis (see “Recommendations beyond beta” section later in the document for more about this).

## Expected benefits

The Rates Rebate Beta was designed to help people to identify their eligibility and then apply for the rebate with less effort and stress. It was also designed to simplify service delivery for the council from [the current very manual and paper heavy process](https://www.digital.govt.nz/blog/rates-rebates-discovery-week-2-mapping-pain-points/) to a significantly simpler, faster (and digital) service.

The trial also further explored how uptake of the scheme could increased. The need to raise awareness of the scheme was identified in the Discovery and Alpha phase, and had recently prompted the DIA to write to the Royal New Zealand Returned and Services Association, Grey Power and the Citizens Advice Bureau in about eligibility and how to apply.

While integration between council and DIA systems was known to be a pain point, it was agreed with Service Delivery and Operations that this was not in scope for the trial.

In particular, the beta was designed to:

1. Increase the uptake of the Rates Rebate
1. Improve customer experience and satisfaction levels
1. Decrease the cost of processing applications for councils
1. Improve the ability to digitally deliver this and other services to councils
1. Support the case to remove the statutory declaration (witnessed signature requirement)
1. Produce insights informing other use cases with a similar customer profile

## Evidence supporting expected benefits

### 1. Increase the uptake of the Rates Rebate**

- The removal of the statutory declaration requirement for an online application has been clearly identified as the key change needed to increase application volume. Removing the statutory declaration removes the barrier of having to visit a council to submit an application. A paper was written to support the case for this change during the beta phase. If successful, this requirement could be removed by June 2020. All three councils involved in the trial are convinced enabling applications to be completed online will result in a major increase in applications both received and processed.
- [Improvements were made to Rates Rebate content on govt.nz and the calculator](https://www.digital.govt.nz/blog/rates-rebate-content-changes-lead-to-better-experience-more-users/) based on the analysis of analytics data. These improvements resulted in a significant increase in the number of application form (PDF) downloads. The improvements also resulted in an increase in the number of people receiving an estimate when visiting the calculator (from 47% to 58%).
- The online application form was optimised to work on mobiles, tablets, and other common devices. The low volume of applications submitted during the trial meant that no meaningful conclusions can be drawn from analysis of analytics data (e.g. percentage of applicants using mobile devices - or, for example, when during the day these applications were filled in). A second trial during a high volume period is recommended to gather more data.
- The online application form was designed to be a lot simpler than the paper version, which (based on observations by the team and councils) substantially reduced the effort required to complete an application. There is no baseline to compare this to because this isn’t tracked for paper applications (they may be simply discarded). At this stage analytics data measuring conversion hasn’t been processed given the low volumes of applications received during the trial. This will be completed if a further trial is run during a higher volume period. Improvements to the form included:
  - questions reworded
  - questions reordered
  - unnecessary questions and repetition removed
  - in-context help content provided
- The online application form is much faster to complete, it took on average 4 minutes for customers to complete, versus 25 minutes for the paper form. Again, [research indicated](https://docs.google.com/document/d/1zDiJs8x2r9ABKa0hqCHkDZnK1B5iy-JlNSbtCZUoDuo/edit?usp=sharing) this resulted in greater completion rates, but there is no baseline established for paper application forms.
- Councils are aware that an online application is much faster to complete than a paper application (and much faster for them to process) and they intend to promote this option as a result (if the trial proceeds beyond beta).
- A great deal of care was taken to ensure the application form is accessible for those with disabilities. This work has been completed with GIS accessibility expert Jason Kiss. With approximately 11% of the target audience vision impaired, and 59% with a disability of some kind, this should not be considered an optional extra (as highlighted in the recently published [Digital Inclusion Blueprint](https://www.digital.govt.nz/digital-government/digital-transformation/digital-inclusion/digital-inclusion-blueprint/)).

> “I’m partially blind, so if things are on a computer I can zoom in and read them”

> “Sorry, my fingers don’t work very well”

> “Trouble is I can’t walk very far now. My knees and my ankles have packed up. I can’t drive ...because my shoulder’s packed”

- There was evidence gathered during the trial that even when applicants need to switch channels to apply online, they will do so. Tauranga sent out 800 final reminder letters and had 20% online.
- As part of the beta trial, email addresses were requested from applicants so that a confirmation email could be sent to confirm their application had been received. These email addresses provide an opportunity to remind applicants to apply in subsequent years.

### 2. Improve customer experience and satisfaction levels - decrease time, effort and stress**

- The online application form takes on average **4 minutes to complete, versus 25 minutes for the paper form.** This improvement was observed during the Alpha, and supported by observations and analytics during the beta trial. This is a huge improvement which we believe had a huge influence on the overwhelming positive customer feedback gathered by councils (who set up surveys in their offices using existing kiosks, and interviewed applicants).

*“The people that came in to complete the online process thought it was really good. Clearly an easier process for them”*
**Moira Aplin (Rates Officer, Hutt City Council)**

- While there may be no accepted way of calculating the dollar value of saving 19 minutes for every application filled out, this is a significant time saving for people who we know (from our user research) are time poor - especially if/when it can be realised for a large proportion of the over 95,000 applications submitted annually.
- We know from user research that ratepayers find the current paper application form confusing. This leads to forms often being completed incorrectly, or required fields left blank.
- We also know that when this happens, and the problems aren’t picked up at the counter, the applicant must be contacted and the application re-submitted.
- This delays when the rebate is granted at a time when it’s needed most. Feedback from councils indicated that they experienced fewer of these problems with the application forms they received online.
- There is still plenty of room for improvement however. The ability to move applications into a “Declined” state (and state a reason) was added based on feedback from councils. A much higher number of applications were moved into this declined state than expected. The most common reasons for declining applications were “applicant had already applied that year” and “applicants income was too high”. This suggests that there is confusion about when to apply. It also suggests (and this was supported by feedback from Tauranga City Council in particular) that there wasn’t enough done in the application process to warn applicants that they may not be eligible based on the information they have supplied before they make the trip to sign their application at a council office. There is more about this in “Recommendations beyond beta” later in this document.

### 3. Decrease the cost of processing applications for councils

- Bigger councils currently spend hundreds of thousands of dollars on serving and administering the rebate for rate payers (e.g. Tauranga City Council estimate it costs them $200,000 annually to process 4,500 applications).
- Even smaller councils like Carterton District Council process 2,000-3,000 applications each year. Councils in the Wairarapa told us they work nights and weekends during the busy period to meet demand - and they believe they currently have very low uptake. They said that “anything to make the experience better” would be a massive help.
- The Beta has dramatically reduced the cost per transaction costs by:
  - Validating all required fields are filled in
  - Providing guidance and validation messages to ensure the fields are filled in correctly
  - Improving the quality of addresses by suggesting addresses from council rates data
  - Removing the need to manage and review evidence of income documentation
  - Removing the need to review dependant details
  - Automatically filling in rates values and valuation IDs based on council data
  - Removing the need to key in applications from hand-written paper application forms
  - Reducing the time that the double signature step takes by automatically filling in the council staff name, date, and the applicant's occupation - and capturing signatures digitally
  - Improving the back-office workflow by supporting the ability to easily mark applications as “Processed” and “Batched”
  - Completely removing the need to collate and courier paper applications to DIA
- Feedback from councils on the improvements made during the beta include:

*"I can't emphasise how much better the experience is … the experience is smooth and the QR code is a bit special."*
**Jeremy Glass (Team Leader: Service Centre, Tauranga City Council)**

*"The speed of the transaction is really noticeable. For example, removing the need for ratepayers to provide evidence of income has made a huge difference."*
**Jeremy Glass (Team Leader: Service Centre, Tauranga City Council)**

*"Signing of the applications and the processing has all gone smoothly... I’ve really enjoyed not having lots of paperwork on my desk - not having to work out which bits of paper go with which bits of paper… I would love to see this system go ahead."*
**Moira Aplin (Rates Officer, Hutt City Council)**

*“The look up fields for address worked well and the annual rates amount pulled through to the Council view, so that's great!"*
**Council back office team**

*“I was buzzing after yesterday’s conference call… [you] have achieved big wins in this phase... Awesome. You have taken the administration of the act back as was originally intended. Not needing proof or collecting unnecessary information is huge for us, and presumably the back office in the rebate team.”*
**Jim Taylor (Manager Transactional Services, Tauranga City Council)**

*“R% said even the signature part is great. She has had applications returned that she signed but had not printed her name, valueless bureaucracy. I love that you are implementing transformational change rather than plastering over the cracks”*
**Jim Taylor (Manager Transactional Services, Tauranga City Council)**

- Based on their experience to date in the Beta trial, Tauranga City Council provided scenarios for the cost savings associated with moving applications online. These scenarios **do not** include the savings they believe will be realised if/when the statutory declaration requirement is removed.
Cost to process:
  - **Current state**: 4,500 paper applications = $200,000
  - **Approx 45% online**: 2,500 paper + 2,000 online applications = $125,000
  - **All online**: 4,500 online applications = $75,000
- If we assume that the cost per application reduces as the number of applications increases for a given council, then taking Tauranga’s cost per paper application (one of the larger councils) is likely to be conservative = 200,000/4,500 = **$44**
- In Tauranga’s scenario where 45% of applications are completed online, they estimate savings of over $35 per application.
- Tauranga have also reported that when they sent out 800 reminder letters, they had 20% of applications completed online.
- If we assume...
  - we can shift 20% of all applications online
  - save $30 in processing cost per application completed online
  - there were many more applications submitted and processed in some way than the 97,510 that were successful in 2017/2018 (as shown in the trial many applications are declined, are duplicates etc)
- ..then we can conclude that the total savings for all councils nationwide in the first year would be substantially greater than $35 × 97,510 × 20% = **$682,570**.
- This number would be expected to increase as the proportion of applicants applying online increases.

### 4. Improve the ability to digitally deliver this and other services to councils

- One of the most important questions that the Beta phase set out to answer was “will councils even agree to participate in a beta trial”, given their participation involved a significant amount of time and effort on their part. The response we received from the councils we invited/pitched to participate was overwhelmingly positive. In fact, demand to participate in the Beta trial far exceeded expectations, and some councils were informed that they would need to wait to see if there was a subsequent Beta phase.
- Representatives from all three councils are so enthusiastic about the results of the trial that they are keen to get an opportunity to personally (face to face) provide their feedback on the trial to Rates Rebate decision makers.
- A high trust relationship has been built with the councils involved in the trial, with really positive feedback from all three councils (see #3 above).
- As part of the trial, digital tools such as Trello and Slack were introduced to council staff. These tools enabled transparent and swift communication throughout the trial, and also encouraged communication between councils.
- The trial involved the council experiencing rapid cycles of development and feedback which could from the basis for other similar engagements with those councils.
- The virtual team model where a team was formed from SDO, GIS, and the Service Innovation Lab proved to be a highly effective mechanism to rapidly improve a service. The combination of subject (service) matter expertise, digital channel expertise (and access + control of the channel/platform), and service design meant implementation was extremely efficient.

### 5. Support the case to remove the statutory declaration (witnessed signature requirement)

- A paper was written to support the case for this change during the beta phase. A summary of the key points is included here.
- Applying for a rates rebate currently involves making a statutory declaration. The requirement to have applicants have their signature witnessed to complete a rates rebate application means that they are unable to submit an application without travelling either to a council office, or organising an alternative witness, such as a JP.
- The need to travel necessitated by the statutory declaration has been identified as the biggest single barrier preventing large scale adoption of an online application process. It is also considered the biggest hurdle for those submitting paper based applications.
- While this step may seem a minor inconvenience for those who live or work close to a council office, and who are mobile, it is a major barrier for those in more remote locations, or those who are less mobile, such as the disabled and the elderly. It is likely that these are some of the most disadvantaged in our communities.
- Removal of the statutory declaration, and adoption of the online application process will…
  - remove a substantial cost and inconvenience barrier for those who don’t live near a council office
  - enable people who are actually unable to travel to council offices to still apply for a rebate
  - allow the process to scale beyond the availability and capacity of council staff to witness signatures and support paper based applications
- significantly reduce the costs of administering the scheme through the removal of manual tasks
- support improvements to privacy within the application process. It is not practical to control or record who views information provided on paper. When applications are made online, there are opportunities to remove and/or audit council staff access to private information supplied in the application.

### 6. Produce insights informing other use cases with a similar customer profile

- The Beta phase was focused on further refining the Alpha service based on further user research and feedback from ratepayers and three councils. The Rates Rebate Research Report documents insights from research based on a combination of customer interviews, council and stakeholder observations and conversations, online surveys and analytics analysis.
- The key insights from this report are:
  1. The system is too complex and multiple errors are occuring
  1. Seniors are more digitally capable than many assume
  1. Applicants are relinquishing control over to the council and authorities
  1. The current process is not accessible to people with disabilities
  1. Retirement village residents were well supported and have wrap around services
  1. There is a significant appetite for various forms of automation
  1. Eligible applicants are not applying because their personal data is not private
  1. The statutory declaration is a significant barrier to the completion of the process
  1. There is a need for human contact and support
  1. Newly bereaved need additional help with the application process
  1. Leverage the best channels for awareness and support
- Many of these insights inform other use cases with a similar customer profiles. Rates Rebate is just one example of a service used by seniors. Two examples of insights which inform services beyond Rates Rebate are:
  - **Seniors are more digitally capable than many assume**
Many superannuitants are using websites and apps to achieve a wide range of tasks. Three quarters of the superannuitants interviewed are interacting online and are digitally savvy. Facebook, Skype and emails are commonly used to connect friends and family. A large proportion use these applications for video calling, sharing photos, and sending messages.
  - **The current process is not accessible to people with disabilities**
The applicants interviewed all used reading glasses and struggled to read the smaller text on the paper application form. If the application form is accessed as a downloadable pdf, it’s possible to enlarge the text, but the content doesn’t reflow into the screen, therefore comprehension is compromised. The downloadable pdf hasn’t been tagged with appropriate markup labels, therefore is not accessible to those using screen reader technology.

## Recommendations beyond beta

Based on what was learned during the beta trial, we recommend the following areas be explored further:

1. **Consider a substantial redesign of the paper application form and/or alternative ways to apply.** Ratepayers find the current paper application form confusing. This leads to forms often being completed incorrectly, or required fields left blank. Applicants often perceive the ‘rates’ and ‘income’ step as easy, yet will frequently get this information wrong. Accessibility is also a real problem. All of the applicants interviewed during or research used reading glasses and struggled to read the smaller text on the paper application form.
There is more information about this in the Rates Rebate Beta Research Report (key insight #1 and #4 - with detail in Appendix 2).
1. **Ensure councils understand their role in the application process, in particular with respect to the declaration and income.** Research conducted during the beta trial found there is a lack of clarity around the role council staff have in authenticating the proof of income. This can mean that the responsibility of verification frequently falls to the council staff member, rather than the ownership of the declaration staying with the applicant.
The beta trial tested the removal of the need to supply evidence of income. This reduced the level of effort required by councils to process some applications. It also made it very clear whose responsibility it was to ensure the declaration of income was correct. We saw evidence during the trial which suggested that application details (including) were regularly being updated after declarations were being signed. This is clearly not good practice.
There is more information about this in the Rates Rebate Beta Research Report (key insight #3).
1. **Explore how the application forms might be pre-filled based on previous applications.** Results from surveys (29 of 33 respondents) and interviews indicate that the majority of applicants would prefer to have the form prefilled based on their previous application. Eligible ratepayers are surprised that they are required to fill in the form manually every year. This perplexes a lot of people as they find repeating the process of getting the information from separate government authorities inefficient and a waste of time. People’s circumstances don’t generally change each year, yet the same information is required every rating year.
There is more information about this in the Rates Rebate Beta Research Report (key insight #6).
1. **Conduct further research during the 19/20 rating year into how well the application process is working for retirement village residents.** Our research found that the experience of village residents who had applied in 18/19 was very positive, but we believe this is because local councils provided a high level of support in the first year, which is unlikely to be the case from the second year onwards.
There is more information about this in the Rates Rebate Beta Research Report (key insight #5).
1. **Leverage the high trust relationship built with the three councils involved in the trial to (co)design and implement simple, low cost (but high value) solutions.** These include:
 a. **Providing data exports for online applications which can be imported into council systems.** During the trial a basic example was implemented to solicit feedback from councils, but there wasn’t sufficient time to refine the solution.
 b. **Explore how to best extend the solution to support applicants who live in retirement villages.** A decision was made during the beta to focus on optimising the process for the majority of applicants, and not attempt to support retirement villages. A solution for retirement village residents (and in particular providing a solution to allow village administrators to submit the additional supplementary information) was explored during the trial, and is not expected to be particularly hard to fully design and implement.
 c. **Design a solution which provides guidance about the rebate the applicant can expect as part of the application process (rather than requiring applicants to use the calculator first).** An estimated value of the rebate likely to be received was removed from the alpha after feedback from councils suggested that the majority of applicants entered either their rates or their income values incorrectly, and may be put off completing their application if they saw an incorrect estimate displayed. Tauranga believe that this led to a number of unnecessary visits by applicants who were not eligible. We believe it is possible to design a solution which carefully communicates the rebate is an estimate - not putting off those struggling to get the figures correct from seeking help, but also preventing unnecessary trips by those clearly not eligible.
 d. Explore other small changes which will reduce back office processing effort for councils. Kāpiti were unable to process online applications together with paper applications during the trial which required additional management effort.

1. **Improve the “Decline” feature in the application which allows applications to be put in “declined” state (and stores a reason why the application was declined).** This simple feature could be easily enhanced to suggest a list of common reasons applications are rejected when councils reject applications. This would then facilitate easy analysis of this data by SDO.
1. **Explore the value that could be provided by implementing a simple dashboard that gives senior council staff an overview of how many applications are at which stage of the workflow. Also explore whether providing this information to DIA, and an additional view across all councils would be valuable.** During the beta there was evidence to suggest that many problems occured in the paper process when applications were not processed in a timely fashion. The ability to monitor the workflow was highlighted by both councils and SDO as a desirable feature.
1. **Implement improvements to the layout of the application batch files provided for DIA by the beta application.** While there were a number of refinements made to the batch file format based on feedback from the Service Delivery and Operations team, there are a simple improvements (such as better support for double sided printing) which could be easily implemented and make a big difference.
1. **Replace the need to print and file paper copies of applications for 7 years with a digital alternative.** In the beta trial a solution was implemented which created application batch files which could be printed by Service Delivery and Operations direct from the secure application. This achieved the goal of avoiding the need for councils to print and then courier these batch files, while minimising any impact on the SDO team. There is an opportunity to explore existing digital solutions within DIA/government which meet the 7 year requirement for storage.
1. **Implement a solution that supports the rejection of applications which have already been lodged in eRMS.** The process for paper applications currently involves rejecting a claim in eRMS, and then returning the form to the council to have the application amended, resigned, and submitted in a new batch. The equivalent process has not yet been implemented in the beta.
1. **Explore whether introducing rules-based auditing (in addition to the current audit process) would make the process more robust.** In the beta applicants weren’t required to supply evidence of income. If they declared income under $5,000 they were asked to supply a reason. Rules/triggers (e.g. declared less than $5,000 income) which prompt further information to be requested in certain cases may be an opportunity to make the process more robust while keeping most applications lean.
1. **Measure the improvements to the DIA part of the process as a result of a move from paper on online applications. Explore further opportunities to reduce costs.** Improvements to data quality through the elimination of errors when interpreting handwriting, and during keying in applications, will reduce issues for DIA as well as councils. Reducing the number of applications couriered should also reduce effort. Greater visibility of council workflows is likely to increase the ability to capacity plan, and reduce peaks and troughs. This value should be measured, and optimised.
1. **Work with Inland Revenue and Ministry of Social Development to allow for consented income testing to make it easier for applicants to prove their income.** Despite applicants often perceiving the ‘rates’ and ‘income’ step as easy, it is known that they frequently get this information wrong. The beta used rates information supplied by councils to remove errors with rates information, this left income as the major pain point.
1. **Work with other agencies such as Ministry of Social Development to integrate the rates rebate application into applications for other services.** The product owner of MyMSD was engaged during the beta trial and there was interest in working together to paper prototype potential solutions.
1. **Translate the online application form into other languages, and provide the option online to choose a language.** Councils identified that they had applicants who had low levels of fluency in English and found applying difficult. It was common for the council teams to find a workmate who spoke the language and could deal with these applications, and also for these staff to move on leaving the teams unable to deal with applicants with low English fluency.
