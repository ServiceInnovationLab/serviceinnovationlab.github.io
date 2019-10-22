---
title:Recommendations Report 
date: 2019-08-02
authors:
  - Service Innovation Lab
tags:
  - blog post
  - open source
excerpt: "Following a successful Alpha phase in May and September 2018, the Rates Rebate beta trial was run in June and July 2019 by a team with members from Service Delivery and Operations team within DIA, Government Information Services, and the Service Innovation Lab. This was in collaboration with Tauranga City Council, Hutt City Council, and Kāpiti Coast District Council"
---
# Executive Summary
A Rates Rebate is a subsidy (currently up to $640) for low-income homeowners on the cost of their residential rates. The subsidy is delivered by Local Councils and is administered by Central Government (currently the Department of Internal Affairs (DIA)). The entitlement value is calculated by the cost of the rates, applicants income, and number of dependants. The maximum subsidy amount is reviewed yearly.

Following a successful (and [award winning](https://nzosa.org.nz/finalists2018/)) [Alpha](https://www.digital.govt.nz/blog/making-it-easier-the-rates-rebates-story-so-far/) phase in May and September 2018, the Rates Rebate beta trial was run in June and July 2019 by a team with members from Service Delivery and Operations team within DIA, Government Information Services, and the Service Innovation Lab. 

Three councils (Tauranga City Council, Hutt City Council, and Kāpiti Coast District Council) were invited to participate from a larger group that expressed interest. These councils each run a different IT system for processing applications, providing a good test of any proposed process changes, and a good indication of the challenges of rolling out the solution more widely.

Evidence gathered during the beta trial supported the observation during the Alpha phase that an optimised online application form takes just 4 minutes to complete on average, compared to 25 minutes for the paper form. Feedback from councils supported evidence gathered via observation that the online application was considered much easier for applicants to complete. 

The beta dramatically reduced per transaction costs for councils, completely eliminating the need to courier paper applications between councils and the DIA. Councils have communicated their intention to actively promote the online option (if it proceeds beyond beta) based on the improved experience for applicants (and lower processing costs).

The statutory declaration remains the single biggest barrier preventing large scale adoption of an online application process (as well as a significant barrier to those applying on paper). Removing the statutory declaration removes the requirement to visit a council to submit an application. A [paper](https://docs.google.com/document/d/11gccvNrVD4PnfvMZwgwHEO4M5UQmRvjbpTZjBVA1lD8/edit?usp=sharing) was written to support the case for this change during the beta phase. If the case for change is supported, this requirement could be removed by June 2020.

Together with the [Rates Rebate Beta Research Report](https://docs.google.com/document/d/1zDiJs8x2r9ABKa0hqCHkDZnK1B5iy-JlNSbtCZUoDuo/edit?usp=sharing), this report documents the key results of the trial, presents options for next steps, and makes a set of recommendations.

# High level recommendations 
A set of recommendations beyond beta are also included later in the document.

**Run a second trial with the existing three councils during a high application volume period and implement data export solutions**
1. A second trial should be run during a high volume period (e.g. August and September) to fully inform DIA and Council decisions about next steps. While running the beta in June meant that council staff were available to collaborate and co-design improvements to the application and process, it also meant that application volumes were lower for councils than they would have been in July and August. 
Evidence gathered during the Alpha (which ran through the busy period) suggests that uptake of the online option is high when it is promoted by councils (20% of the 800 recipients of a letter sent by Tauranga City Council promoting the online option opted to use it in 2018). 
The councils involved in the trial have enthusiastically requested that the trial be extended through a high volume period. 
1. The second trial should be limited to the same three councils who participated in June/July. This will enable valuable data to be gathered while keeping the cost of the extension minimal.
1. Delay the decision about whether to proceed beyond this extension until the end of this second trial. This will allow time for results from the first round to be validated against higher application volumes. 
1. Improvements should be made to how data is transferred between the online application solution and council core systems, and options explored to improve data transfer between council systems and eRMS. The high trust relationship built with the councils involved in the trial should be leveraged to (co)design and implement simple, low cost (but high value) solutions during the trial extension period

# Options to consider
Option 1 - **Close down the initiative**: inform Councils there will be no change to the current paper-based service from DIA. Decommission the service.
Option 2 - **Run a second trial with the existing three councils**. Continue to provide support, but limit other activity to keep costs minimal.
Option 3 - **Run a second trial with the existing three councils through a high application volume period and implement data export solutions (recommended)**: proceed as for option two, but also implement data export solution for councils (for import into their core systems). Investigate (and document a recommendation for) the best solution to improve data submission (reduce cost and reduce/eliminate data entry errors) from council core systems to eRMS.
Option 4 - **Extend the trial with the existing three councils until the end of June 2020**: continue to gradually evolve the service with these councils throughout this period. Use the high quality relationship built with councils to co-design the optimal online (and paper) application process ready for when the statutory declaration requirement is removed.
Option 5 - **Extend the trial until the end of June 2020 and allow another three councils to join**: continue to run the trial with Tauranga City Council, Kāpiti District Council, and Hutt City Council through to June 2020 and trial the service with an additional three councils. Aim to sign up councils that will best test whether the service is ready to be rolled out nationally.

# Background
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

## Current factors impacting customers using the service
- **Low income, and time poor**
The current application process is complex, takes a long time, and places an unjustified burden on many people by asking for more information than is necessary.
- **Issues affecting mobility and access**
The lack of an alternative, accessible way to make an application means many people who have a disability e.g. a vision impairment ([over 11% of those over 65](http://archive.stats.govt.nz/browse_for_stats/health/disabilities/DisabilitySurvey_HOTP2013/Commentary.aspx)) or a physical disability ([49% of those over 65](http://archive.stats.govt.nz/browse_for_stats/health/disabilities/DisabilitySurvey_HOTP2013/Commentary.aspx#impairtype) struggle to apply for help they are eligible to receive. 

Due to many (in the 2017/18 rating year 79% of all applicants were receiving New Zealand Superannuation) applicants being over 65 and/or living with a disability, the requirement to sign a Statutory Declaration in front of a witness impacts accessibility for the core customer group. 

**Note**: During the Beta trial, a separate paper Why remove the statutory declaration was written to support the case for its removal. This paper details the substantial benefits associated with removing the statutory declaration, when this is supported with adoption of an online application process.




