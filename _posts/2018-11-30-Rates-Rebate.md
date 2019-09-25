---
title: Rates Rebates (Te Whakamāmā i ngā Reiti)
date: 2018-11-30
authors:
- glen-thurston
- siobhan-mccarthy
tags:
- rates rebates
excerpt: ""
---
![RR logo](/assets/media/Rates-Rebates/RR1.png)

__Authored by:__ Siobhan McCarthy and Glen Thurston

## Contents

1. [Overview](#Go-to-Overview)
2. [Background](#Go-to-Background)
3. [The Discovery](#Go-to-The-Discovery)
4. [The Alpha](#Go-to-The-Alpha)
5. [Insights from Discovery and Alpha](#Go-to-Insights-Discovery-Alpha)
6. [Next Steps](#Go-to-Next-Steps)
7. [Appendix One - Service Blueprints](#Go-to-Appendix1)
8. [Appendix Two - Trend Analysis](#Go-to-Appendix2)
9. [Appendix Three - Comparison between the web app & current paper application](#Go-to-Appendix3)

A collaborative initiative between Department of Internal Affairs and Local Authorities supported by the Service Innovation Lab

## Overview<a name = "Go-to-Overview"></a>

['A Rates Rebates’](https://www.govt.nz/browse/housing-and-property/getting-help-with-housing/getting-a-rates-rebate/#who-can-apply) is a subsidy (up to $630) for low-income homeowners on the cost of their residential rates. The subsidy is delivered by Local Councils and is administered by Central Government (specifically the Department of Internal Affairs - DIA).

The entitlement value is calculated by the cost of the rates, applicants income, and number of dependants. The maximum subsidy amount is reviewed yearly.

The Service Innovation Working Group (SIWG) within the Digital Government Partnership supported by the GCDO, prioritised and approved an initiative to explore the design and delivery of a proactive service with the goal of being to create an automated service. Rates Rebates was identified as a service for this initiative based on research for the [becoming a senior life event](https://www.digital.govt.nz/blog/lab-our-integrated-services-design-approach-and-summary/).

This collaborative initiative was between DIA as the lead agency (ie business owner) and Local Authorities (ie Councils) supported by the Service Innovation Lab (the Lab) in the delivery of the work through the [Discovery](https://www.ict.govt.nz/guidance-and-resources/accelerate/discovery/) and [Alpha](https://www.ict.govt.nz/guidance-and-resources/accelerate/alpha/) phases.

Through a phase of work called a ‘discovery’ the Rates Rebates service was mapped and reviewed, internal and external stakeholders were interviewed, and potential methods of service delivery were explored.

The discovery revealed many opportunities at the system level to improve the experience for both the people applying for their entitlement and people delivering the service. [A minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product) (MVP) was designed and developed between March—May 2018 and an online service for rebate applications was trialled in Tauranga from 21 May—30 September 2018 with Tauranga City Council. This phase of work was called an ‘alpha’.

The alpha was focused on testing system changes. Tauranga City Council, Auckland Council was involved with assisting with the design and test of the alpha and numerous councils have been watching progress closely.

Both the discovery and the alpha identified that there is desirability to progress the alpha service to full production from both an applicant and local councils perspective and the Lab is currently supporting DIA to explore how to transition the alpha to a [Beta](https://www.ict.govt.nz/guidance-and-resources/accelerate/beta/) (ie first live production).

This report incompasses all the work the collaborative team (ie DIA, local authorities and the Lab) has been involved with to date with Rates Rebates. It contains background about the Rates Rebates scheme, insights found during both the discovery and alpha,  a description about the recent alpha work and the discovery that underpinned the work. Combined, this provides a complete picture of how we (ie the collaborative team) did the work, what we learned and our recommendations for making rates rebate an automated service that could could form part an integrated service for specific life events (eg Becoming a Senior, Needing Financial Assistance).

## Background<a name = "Go-to-Background"></a>

### Why was this brought to the Service Innovation Lab

The Rates Rebates entitlement was identified as a proactive entitlement for the Service Innovation Lab to explore by the Service Innovation Working Group.

Because of the large number of applicants who are Superannuitants, this is also a service that is considered to play a part in the “Becoming a Senior” life event.

### Who has been involved?<a name = "Go-to-Involved"></a>

__Discovery Phase__
Department of Internal Affairs, Tauranga City Council, Auckland Council, Wellington City Council, Ministry of Social Development, Inland Revenue, Assurity,  Service Innovation Lab.

__Alpha Phase__
Tauranga City Council, Department of Internal Affairs, Auckland Council, Service Innovation Lab,

### The entitlement in numbers<a name = "Go-to-Numbers"></a>

In the 2016/2017 rating year __97,947__ rebates were granted, of those __80,486__ were the full $610.
> The maximum subsidy amount is reviewed yearly - for 2016/17 the maximum was $610. In 2017/18 the maximum is $620. In 2018/19 its $630.

The trend shows the number of rebates granted each year going down. This is a well known trend and is mostly due to the income threshold not keeping in pace with the rise in superannuation payments year to year, leading to those on the couples super especially, gradually dropping out of eligibility. Other factors include housing affordability and lowering home ownership rates - [Appendix Two](#Go-to-Appendix2)[^1] contains more information on this trend and causal factors.

[^1]:The maximum subsidy amount is reviewed yearly - for 2016/17 the maximum was $610. In 2017/18 the maximum is $620. In 2018/19 its $630.

There is not enough data available at this time for us to know:

- How many apply and are rejected due to inconsistent implementation processes across council
- How many people are eligible across Aotearoa New Zealand
- How many know their eligibility or that the entitlement exists, and
How many choose to apply or not.

| Rating year | Maximum rebate | Rebates granted | Value (inc GST) | Average Rebate | Full (maximum) rebates granted | Average rebate granted < maximum |
| --- | --- | --- | --- | --- | --- |  --- |
| 2010-11 |  $570 | 112,181 | $59,131,590 | $527.11 | 91,941 | $332.27 |
| 2011-12 | $580 | 115,187 | $62,340,668 | $541.21 | 95,988 | $347.29 |
| 2012-13 | $590 | 111,021 | $60,231,307 | $542.52 | 90,857 | $328.59 |
2013-14 | $595 | 106,416 | $58,086,259 | $545.84 | 87,209 | $322.64 |
| 2014-15 | $605 | 104,410 | $58,092,996 | $556.39 | 86,047 | $328.63 |
| 2015-16  | $610 | 102,208 | $57,102,376 | $558.69 | 83,737 | $326.07 |
| 2016-17 | $610 | 97,947 | $54,655,977 | $570.23 | 80,486 | $318.40 |
| 2017-18 | $620 | 97,609 | $55,496,610 | $568.56 | 80,810 | $321.00|

### Rebate amendment<a name = "Go-to-Amendment"></a>

In February 2018 the Rates Rebate Amendment Act 2018 was passed that grants those who live in retirement villages eligibility to receive Rates Rebates, expanding the number of eligible by approximately 25,000.

Data from last year suggests 36,618 people currently live in retirement villages, these are comprised of 28,168 units. Some of these units were already eligible to apply under the old legislation if they were rated separately and in the name of the resident. We don’t have numbers for this but it’s a minority of units, most units are newly covered by the recent legislation.

High level estimate of units newly eligible to apply is around 25,000. The number actually eligible to receive a rebate will be much lower due to income levels and value of rates. For example, most couples aren’t eligible as the couples superannuation income, together with having relatively low rates precludes a lot of them.

### Our key stakeholders<a name = "Go-to-Stakeholders"></a>

__Ratepayers__
Those eligible for a rebate are people who own and live in their home with an income level below a formula determined by their rates.

__Local Government__
Application forms are accepted by Local Government, who do initial processing of the entitlement and apply it to applicants residential property rating accounts.

__Department of Internal Affairs (DIA)__
DIA administer the rebate, are responsible for the paper forms, which they deliver to councils, and are responsible for the payments of rebates to be made to local councils.

### Pain points for applicants and system<a name = "Go-to-Painpoints"></a>

During the discovery and the alpha phases we explored all aspects of the rates rebate experience from the perspectives of the users or applicants who apply for their entitlement and the people who are involved in the system of facilitating, checking and approving the applications.

#### Applicants

- __The complexity of application__ creates a poor customer experience
- __Lack of awareness of rebate entitlement__ for potential applicants and in social security support systems
- __Citizen time__
The current system is estimated to cost $1m in citizen time alone[^2].

[^2]:Based on Treasury CBAx Cost Benefit Analysis calculator

- __Issues affecting mobility and access__
Due to many applicants being over 65 and/or with disabilities, the impact of the requirement of Statutory Declaration in front of a witness impacts accessibility for the core customer group.

#### System

- The process is very __manual__ and involves __costly double handling__. Applicants must fill in the same information and apply every year even when their information does not change.
- Preventable __cost of implementation to councils__ and wait times for payments back to councils from DIA
- __Prescriptive legislation__ preventing an end-to-end digital experience

## The discovery<a name = "Go-to-The-Discovery"></a>

In​ ​September​ 2017 ​the ​team​ ​kicked​ ​off​ ​a​ ​three-week​ ​discovery​ ​sprint,​ ​exploring​ ​how​ ​subsidies​ ​are provided​ ​to​ ​New​ ​Zealanders​ ​and​ ​what​ ​ ​that​ ​could look​ ​like​ ​in​ ​the​ ​future,​ ​with​ ​a​ ​focus​ ​on​ ​Rates Rebates.​ ​Rates​ ​Rebates​ ​are​ ​an​ ​entitlement​ ​that​ ​has​ ​been​ ​identified​ ​as​ ​a​ ​key​ ​pain​ ​point​ ​for​ ​applicants (low-income​ ​property​ ​owners​ ​for​ ​primary​ ​residences),​ ​as​ ​well​ ​as​ ​for​ ​Local​ ​and​ ​Central​ ​Government.

The discovery sprint included service designers, user researchers and subject matter experts from the Department of Internal Affairs (the Service Innovation team as well as the Rates Rebates team), Auckland Council, Tauranga Council, Wellington Council, the Ministry for Social Development and the Inland Revenue Department with support from Assurity.

## Week One - Kick off

### Focus points

The team identified the following focus points for the three week sprint.

- __Understand​ ​and​ ​Complement​__ - Previous Rates Rebates insights focused on the process from an applicant perspective, our team will collect and analyse insight from multiple perspectives including Central and Local Government agencies. We are also looking for additional applicant types that have not been spoken to before and understand the size and demographics of the eligibility groups.

- __Local​ ​and​ ​Global​ ​Picture__​ - We are exploring the local and global community and identifying similar concepts, prototypes and entitlement models that we can factor into our concept development.

- __Data​ ​Path​__ - Exploring the data path of the process, data ownership, authority and declaration and what this could mean for implementation of any automated concepts.

- __Thinking​ ​Big/Parallel​ ​Value​__ - How could this be applied across all of government services.

## Week Two - Customer research and journey mapping

### Service blueprint

Service Map The Rates Rebates Process touches many agencies. We mapped the journey to see touch points for rebates customers, front stage (agency work visible to the rebate customer), and backstage (agency work not visible to the rebate customer). It showed a very complex picture with a lot of pain across users, Councils and Central government agencies. Considering this entitlement is a maximum of $610 per year, it requires a lot of cost and time from all participants in the process to administer.
![Service Blueprint](/assets/media/Rates-Rebates/RR2.png)

To view the journey in more detail, please use this link: [https://docs.google.com/drawings/d/1G3cs66o7u-xwJWr2FT46cd5UivJ-HojpcS3I-Q5bSOY/edit?usp=sharing](https://docs.google.com/drawings/d/1G3cs66o7u-xwJWr2FT46cd5UivJ-HojpcS3I-Q5bSOY/edit?usp=sharing)

## Personas

We created the following personas based on the customer groups identified to compliment the personas made in the previous discovery work.

### Working mother

Hannah lives in Southland, looking after her three kids and doing some freelance work in her spare time. She is very capable, but going into town can be a bother – she borrows a car from her neighbour and it’s not always available. Because she lives rurally, she likes to do more things online. She’s short on time and money is always tight. She has found out about the Rates Rebates and wants to get it – but she’s also short on time and not sure if the bother is worth it.

![Working Mother](/assets/media/Rates-Rebates/RR3.png)

### Superannuant

Jennifer is a retiree living in a block of flats in Wellington city. She doesn’t drive anymore, but manages to get around fine on public transport. She thinks of herself as pretty independent, but sometimes she needs to help with her finances and paperwork – she’s not as good at reading the fine print anymore. She uses an iPad to look at FaceBook and the news – but doesn’t do much else online and doesn’t like the idea of her personal details being somewhere out there. She’s a repeat applicant for the Rates Rebates, and considers it a nice bonus.

![Superannuant](/assets/media/Rates-Rebates/RR4.png)

### Supported Living dependant

George lives in a suburb in Tauranga. He suffers from a physical disability, and depends heavily on his support person for any physical activity. Money is tight and he budgets carefully – allocating all of the money that comes in. When there is a delay, it’s a real issue. He has lots of interaction with government to claim various benefits and he is comfortable with doing things online - but he doesn't have his own computer.

![Supported Living Dependant](/assets/media/Rates-Rebates/RR5.png)

## Week 3 - Concept development and testing

We tested 3 concepts, hypothetical ways the process of rebates might work, based on data sharing between agencies, to help make the process easier and efficient. We tested the concepts with those we interviewed to find out their thoughts and opinions.

We spoke to 17 ratepayers that covered different demographics to map their experience and pain points. A large portion of them were women and retired, building on previous research from Internal Affairs.

![Assisted automation opt-in](/assets/media/Rates-Rebates/RR6.png)

### Option 1 - Assisted automation opt-in

There were varied reactions to this option. Some said they saw issues with it being online, mentioning they know a lot of people in their circles who get rebates and do not have computers or feel comfortable using them. Others liked this but often said they preferred option 3 after they had seen all options. Some suggested that they liked the idea of the service being provided by phone, and suggested that there may be a way for them to make a verbal declaration in place of Statutory Declaration.

![Automatically apply rebate](/assets/media/Rates-Rebates/RR7.png)

### Option 2 - Automatically apply rebate

This option was usually popular, until option 3 was shown and then they decided that this was something they did not actually want. As they were unsure what this would mean if the information was wrong or felt uncomfortable for the govt to be talking about them and deciding things without their knowledge. Many felt that this option was a bit “big brother.”

![Auto populate data](/assets/media/Rates-Rebates/RR8.png)

### Option 3 - Auto populate data

Option 3 was the most popular. People were usually most comfortable with this option as they felt that it still let them be in control, but also made the complex process less work for them. Some felt uncomfortable about their data being shared without their permission and knowledge, and didn’t like the idea of the government ‘talking about me’ as they did not trust the government completely. Many users had the attitude of ‘they already do this/know this information anyway’.

## The Alpha<a name = "Go-to-The-Alpha"></a>

### The Future of the Rates Rebates Service

In the [Discovery phase](https://www.digital.govt.nz/blog/labplus-rates-rebates-discovery-report/) there were a number of opportunities identified for service improvement. We also identified barriers from the prescriptive legislation, an Act written in 1973, that impacts what is possible for digital service delivery in 2018.

Of the three concepts tested, based on data sharing between agencies to help make the process easier and efficient, option 3 (auto-populate data) was the most popular. People were most comfortable with this option as they felt that it still let them have control, while also making the complex process less work. There are some issues with the legislation around the witnessing of forms, this could prove to be a barrier to this option being easily implemented.

Taking these findings we were able to set a goal of what would be possible to achieve for a minimum viable product (MVP), that would support a better Rates Rebates service to be brought into the [Alpha stage](https://www.digital.govt.nz/standards-and-guidance/strategy-and-planning/digital-lifecycle/) of testing. This Alpha service has been designed to make it easier for people to identify their eligibility and then apply for the rebate with less effort and stress. It was also designed to simplify service delivery for the council from the current very manual and paper heavy process to a simple, faster and digital service.

In the Discovery, the collaborative team tested concepts with ratepayers showing different levels of proactive delivery. The majority of those we spoke to preferred the concept that had some [proactive delivery](https://www.digital.govt.nz/blog/lab-potential-future-states-for-government-service-delivery/), but had a process of consenting, to ensure that they retained control of the situation, rather than having the rebate automatically applied. This was an important factor in an MVP design, moving into the Alpha stage, for Rates Rebates. As it doesn’t assume a fully proactive delivery in order to meet user expectations of maintaining control throughout the process.

We knew that we wanted to improve the service for people, and some constraints from the Rates Rebate Act meant we weren’t able to completely flip the process on its head. The Rates Rebate Act requires the applicant to submit a form, which is then signed and witnessed by an authorised person, usually a service centre staff member at the council when an application is submitted, similar to a statutory declaration.

With this knowledge, and knowledge of digital best practice, we were able to set our goals for an MVP.  We assembled a team of subject matter experts from the initial discovery team, and brought on developers to help make this digital service a reality. This includes [Auckland Council](https://www.aucklandcouncil.govt.nz/Pages/default.aspx), [Tauranga City Council](https://www.tauranga.govt.nz/), [Department of Internal Affairs](https://www.dia.govt.nz/), supported by the Service Innovation Lab team.

### Criteria for alpha to test - our scope

Both Councils clearly articulated the need to address the signature/witness legislative barrier to enable a fully digital streamlined service and this has been addressed by DIA Legal advice. Through discussion, the Council then outlined the following specific areas where the proposed Alpha could create immediate value which would be used as success criteria for Alpha and beyond:

- An __increase in uptake__ of the rebate and __decreased time, effort and stress__ for users that use Alpha.
- A __proportional drop in the refused applications__, and we can measure web analytics of how many users roughly started the process and how many applications were completed.
- If Alpha involves only digital forms, then there would be a __decrease in time and cost of processing payment from DIA__, however, if the Alpha involves both paper and digital, this success criteria is not relevant to Alpha.
- Moving to a digital signature of a digital form, even if done in person, should dramatically __reduce the resources and courier costs__ in administering this rebate for Councils, and should reduce effort for DIA.
- Through user research we will test current state against Alpha and should see an __improved satisfaction level__ from ratepayers who use the services.
- Adding the collection of email address within the service would __improve the ability to digitally deliver__ other services for Council.

### Additional success criteria after Alpha (would require integration with Tauranga City Council systems once Alpha proves successful)

- To reduce the manual processes for helpdesk filling in and doing data entry of the application forms should __improve the speed of delivery at help desk__, creating a small improvement both in the users experience and in help desk productivity.
- By simplifying and digitising the process, we hope to see an __improvement in the turnaround time of batches sent to DIA and faster payments made to Council__.

### Other desirable components for project to investigate

- Encourage __consistency of messaging__ across councils and agencies for Rates Rebates.
- Help __address user perceptions__, that ‘the entitlement is being made purposely hard to prevent people getting it’, by __making it easier to find, assess and apply for__.

## Further research - diving deeper

We dived even deeper into understanding the service delivery and what is possible. By examining legislation, technology systems used to run the current service, and modes of delivery we created detailed service blueprints of the current and future states, testing them against each other and our goals for the service improvement.

We looked into how data was being submitted by ratepayers in their paper applications, and what forms this data took when digitised, transported, and processed. We looked over the form and worked on how the language could be improved for plain English, and how form fields could be made easier to complete. For example, when asking an applicant's income, we could provide an option to press a button to state that they are receiving NZ Superannuation, rather than asking them what dollar amount that is, as we already know the figure limits for superannuation.

[Appendix One](#Go-to-Appendix1) contains service blueprints that describe how the current service works, the alpha used in the Tauranga pilot and a potential future state of a fully automated proactive service future state.

## How the alpha works - user interface design

### Making it easy

<img src="/assets/media/Rates-Rebates/RR9.png" width="425px" alt="ipad device running the rates rebate application">

To make it easy we built a web application (web app) for the ratepayer applicants to use as the basis of the alpha. Applicants can learn if they were eligible for a Rates Rebate in the current year by entering their address. We created a widget where the applicant only types their address, which is auto-completed for them, and their Rates appear - it uses publicly available data which we obtained in collaboration with the Tauranga City Council. Once the applicant enters their income and number of dependants, they get an indication of their Rates Rebate. If they provide accurate information, they will get an accurate calculation - it’s all in one place,  the user interface design guides people through the process giving them the information needed to help them make a decision whether its worthwhile for them to apply or not.

If the applicant calculated they are eligible and chooses to apply, they are then presented with more information to ensure they understand the definitions of income and dependants. We were able to eliminate the need for paper in this process.

Once an application is submitted online, the applicant then must visit the Tauranga City Council service centre, where they then make their statutory declaration on a touchscreen iPad using a stylus. The signature is saved and can be sent digitally to DIA. We could not avoid asking the applicant to travel to a city council service centre, because the legislation requires a witnessed declaration.

The web application frontend was built in ReactJS, with a jsonapi.org server created with JSONAPI Suite on Ruby on Rails. Signatures were captured using “signature_pad” npm module. The web app was built in five weeks. All components used were open source, and available on github.com for other agencies to use.

### Eligibility calculator

Our research told us people applying for the rates rebate often don’t know how much they earn. As many are on Superannuation or Work and Income benefits we can ask if they’re on one of these income sources, as the amounts are known.

We also found that there was some embarrassment about income and about asking for any form of help which was a barrier to applying, so we designed an anonymous calculation step at the beginning of the service so people don’t have to go through a full application before they find out if they are eligible for anything (which is the current process). We found users that had gone through days of effort to apply, only to discover they were entitled to 30 cents.

![User journey for pilot digital application](/assets/media/Rates-Rebates/RR10.png)
(Above: an example of the user journey when using the pilot digital application)

### User Interface/User Experience development

The user interface, online eligibility calculator and web app went through testing with citizens, Tauranga City Council Service and Support Centre staff, as well as with DIA Rates Rebates staff throughout development. Testing with prototypes built in Atomic, a web based mockup tool, meant that we were able to make changes on the fly while testing and getting feedback.

To read more on this prototyping and see some of the work in progress prototypes go to [https://www.digital.govt.nz/blog/labplus-rates-rebates-prototyping/](https://www.digital.govt.nz/blog/labplus-rates-rebates-prototyping/)

Feedback on the prototypes was very positive. There were many iterations of language style used and testing helped us find language that we felt was appropriate, and read as the plainest English.

### Feedback from digital pilot users in Tauranga

> “I didn’t know government things could be like this”
>   <ol>- User testing</ol>

> “I’m partially blind, so if things are on a computer I can zoom in and read them”
>    <ol>- First applicant on Tauranga pilot</ol>

> “That was easy, wasn’t it!”
>    <ol>- Pilot applicant</ol>

> “I would do it online next time”
>   <ol>- Pilot applicant</ol>

> “That was easier than I thought!”
>   <ol>- Pilot applicant </ol>

### Opportunities for digitising the application

By making the application digital we were able to show where improvements could be made to the system and processes of the service. There are opportunities for integration with Rating Information Databases from local councils, local council information management systems, as well as central government systems.

Other benefits of a digital service are that changes to the entitlement can be implemented in a shorter period of time, such as the income threshold and maximum entitlement, which are reviewed every year and often changed.

Investing in a creating a digital application channel and changing legislation to remove the need for a statutory declaration would mean a lower cost of implementation to citizens, councils, and central government (ie DIA, IRD and MSD) due to reduced processing times and cost of printing and moving paper forms.

The application process was entirely digital[^3] and removed the need for paper, as well as considerably reducing the time for customers and processing time for Councils. The estimated time for an applicant to complete the paper form is 25 minutes, with the digital application taking roughly 4 minutes[^4]. Councils also found this reduced time of processing, as they could copy and paste applicant information into their systems instead of typing out by hand, as well as time saved from applications being unable to be submitted with gaps or incomplete sections in the digital form, which is common for paper forms.

[^3]:There was still a need for the applicant to come into the Council office to sign and get their application witnessed however this was also done digitally - no paper needed.

[^4]:This does not take into account the time and effort to go into the Council office and sign the digitally Understanding how long that this could take depends on each applicant’s circumstances.

[Appendix 3](#Go-to-Appendix3) shows a physical comparison of the web app vs the current paper application.

## Insights from discovery and alpha <a name = "Go-to-Insights-Discovery-Alpha"></a>

### Applicants insights

#### Customer segmentation

The majority of current applicants are retired, around 80% of applicants receive New Zealand Superannuation. There is a misconception that Rates Rebates require you to be on NZ Superannuation to be eligible.

Supported Living payment recipients and solo parents are another significant demographic of applicants, although more research is needed to confirm demographics due to the lack of information collected on applicants.

#### Lack of awareness

We believe that there are many ratepayers who are eligible but do not know about the entitlement. Council rebates and contact centre staff are worried that __there are a lot of people out there that need a rebate, but do not know about it__.

Our research showed that many people __find out about the entitlement via word of mouth__. – almost by accident, rather than from direct messaging from Local or Central Government.
Examples from our research include one ratepayer who had experienced a change in their financial situation after being diagnosed with a serious illness, who was informed about the entitlement from a friend who had learnt about Rates Rebates from the doctor.

When rates are not paid, this is a __trigger for the Council to proactively reach out__ to applicants about applying for a rebate. This can often be the way a ratepayer finds out that Rates Rebates exist and that they are entitled to one.

#### Complexity

Customers do not find completing the application easy or enjoyable. Collating their information and obtaining evidence from other agencies have been identified as a pain point.

It was often said that __you have to know the system to get the entitlement__, and the application is quite difficult and complex.

Comments from citizens interviewed include:
> “Doesn’t the government know all this stuff about me anyway?”

> “If this is what I have to do to get some money do I really want to do it?”

> “People won’t take the money if the value of the trade is too low” [e.g. time, giving up their personal information]

#### Accessibility

Both council staff and ratepayers commented that at peak application time, the service centres become very busy with rebate applicants and described scenes where the lines were long, with many in the lines being elderly and council staff bringing out chairs for those who struggle to stand for too long.

Some said it __“feels like a hospital waiting room”__ and others worry about how they will complete their Rates Rebates applications when they are older and less able-bodied and/or able-minded.

The __requirement and logistics of needing to have the application witnessed__ is a big pain point - especially for those with low mobility.

There is also a user perception that there needs to be options for service delivery other than Digital - __“What if they don’t have a computer?”__
Applicants asked: __“Why can't you just do it over the phone?”__

#### Cultural expectations

A common perception from successful applicants was that __there are a lot of people worse off than them__ who are more deserving to get a rebate.

Some applicants expressed that rebates made them __feel as if they begging for money__ now that their main source of income was NZ Superannuation.

Quotes from applicants interviewed include:
> “If I’m entitled to something just give it to me”

> “It felt like a cross-examination”

> “It feels like airing your underwear”

> Since becoming a Superannuitant “I am a second class citizen”

> “It’s embarrassing having to ask [for a rebate] but you are entitled”

#### Trust in digital and government

A single poor experience with computers or automated systems can colour how much trust a customer has around automation. Many ratepayers we interviewed mentioned either themselves or someone they know who’d had a bad experience such as either being scammed or having had a poor customer experience with a company with an online component.

Customers often find __correspondence from government threatening__ when it’s addressed to them as an individual.  This can lead to communications about entitlements either being missed or misunderstood, as citizens feel that they will not be contacted by the government unless there is a problem.

### System and process insights

#### Inefficient process

The process is very manual and involves __costly double handling__. Applicants must fill in the same information and apply every year even when their information does not change. Applicants often submit incomplete and incorrect forms which compounds problems further.

__Ratepayers find the application confusing__, leading to forms often completed wrongly , or required fields left blank. If this happens, the applicant must be contacted and then the application re-submitted, __delaying when the rebate can be granted__ which is often at a time when it’s needed most. This results in more double handling.

#### Cost to council

Councils can be left waiting for DIA payments to come through after they have discounted customers rates. Many councils are also unhappy with the cost of implementing the facilitating and checking of an entitlement application which cost them staff that could be better used in more high value contacts with their ratepayers.

### Peak times are hard to staff and manage

The majority of applications come at the start of the rating year in August. Due to the number of applications, compared to other months of the year, councils often hire temporary staff for a number of months to help process rebate forms, and DIA have similar issues related to staffing  (ie staff are moved from other areas to help out) during this busy period.

### Service centre support and success of applications

__Council representatives are an important part of the process__ and are seen as visible evidence that something is being done to progress their application. For some customers, Council representatives make it worry free and take the stress out of it. Councils often receive thank you cards and calls from customers who have gotten a rebate.

The council representatives __knowledge and willingness to help__ make the difference to the experience and success of applications. If there wasn't this level of assistance, then it is less likely to be a positive experience. But this great customer experience comes at a cost for work that is considered low value compared to more complex ratepayer queries.

> “Wouldn’t it be great to not need a 50 page handbook” Council staff on understanding Rates Rebate Act (1973) and DIA rules

#### Inconsistent messaging from councils

There are __inconsistencies across councils on implementation__, e.g. when applicants are asked to provide proof, and what information that they give to customers. We mapped information provided on council websites about Rates Rebates and found a large variation in amount and types of information to inform ratepayers about rebates.

#### Prescriptive legislation

The legislation is very prescriptive, making it impossible to create an end-to-end digital service. This is impacting the customer experience. The requirement for a statutory declaration has been identified as a key issue.

## Next Steps<a name = "Go-to-Next-Steps"></a>

Both the discovery and the alpha identified that there is desirability to progress the alpha service to full production from both an applicant and local councils perspective and the Lab is currently supporting DIA to explore how to transition the alpha to a [Beta](https://www.ict.govt.nz/guidance-and-resources/accelerate/beta/).  A beta is developing a service to meet demands of a live environment, including understanding how to build and scale the service while continuously meeting user needs.

This transition work involves understanding the viability of the service from a business owner perspective (ie development, implementation and ongoing costs) and the feasibility from a technology perspective of implementing the alpha into production. The goal being to identify a range of options that could be applied to deliver a production version of the service for DIA leadership consideration.

Next steps will consist of:

- a workshop to explore the collective goals we have for the service and initial options that could be explored in more detail post workshop
- Detailed exploration of the initial options and identification of other if appropriate
- Recommendation and decision by DIA to stop or commit to a roadmap for delivery that could include engaging with more Councils, more user testing and research, more development or full development.

DIA as custodian of the Rates Rebates will ultimately make a decision based on the work done and their own priorities on whether or not to continue the development to full production.

The New Zealand Society of Local Government Managers (SOLGM) has made a submission for the Local Government Regulatory Systems Amendment Bill, to better support online applications for rates rebate by removing the requirement for an officer of the council (or anyone) to witness the statutory declaration. This would make the implementation of a truly online application process possible.

The alpha identified in practice how the statutory declaration is out of step with digital service delivery. This issue is being referred to the required Policy teams to investigate if statutory declarations could be replaced for other services as well as the Rates Rebates.

### Recommendations if approved to production

If the alpha is developed further to production we recommend exploring these areas for service improvements:

- Work with Inland Revenue and Ministry of Social Development to allow for __consented income testing__ to make it easier for applicants to prove their income.

- Work with other agencies such as Ministry of Social Development to __integrate the rates rebate application into applications for other services__, such as applying for Jobseekers, Supported Living, NZ Superannuation etc.

- __Consistent messaging across agencies__ - After discovering the inconsistent messages about rebates across councils and agencies, there is potential for work to improve consistency across councils on messaging regarding Rates Rebates. We mapped the information across councils with large variations found:
[https://docs.google.com/spreadsheets/d/1uHktpWj03FKFX0F0Hn7GK9pg1sMxBKaaPfjA8Gd_ra8/edit#gid=0](https://docs.google.com/spreadsheets/d/1uHktpWj03FKFX0F0Hn7GK9pg1sMxBKaaPfjA8Gd_ra8/edit#gid=0)

- __Potential for greater link with Superannuation__ - A large portion of rebate receivers are retired and on superannuation. There is potential to use this as a vehicle to help either gain awareness of the entitlement and/or to use this to make application easier. Many councils do not verify income if the applicant is on super, as many on super do not know their gross income and are on the same amount.

- __Engage more user groups__ - On testing, we suggest more engagement with a range of user groups who require additional relationship building then the short time that the sprint process allowed. It would also benefit system improvement to invest in understanding cultural attitudes around receiving money/help to improve uptake of the entitlement. This came up in research as an issue, but due to limited timeframes and scope was not able to be investigated deeper.

- __Translation to other languages__ - Councils identified that they had applicants who had low levels of fluency in English and found applying difficult. It was common for the council teams to find a workmate who spoke the language deal with these applications, and also for these staff to move on leaving the teams unable to deal with applicants with low English. Having a digital application would allow for pages to translated and easily switched to languages such as Samoan, Hindi and Mandarin.

## Appendix One - Service Blueprints<a name = "Go-to-Appendix1"></a>

__DIA Rates rebates completed forms processing: Current state__
This blueprint helped us to see where manual handling was in place once forms were sent to DIA, and where opportunities for cost/time saving through digitisation could be found.
![Current state](/assets/media/Rates-Rebates/RR11.png)

__Rates rebates Alpha Blueprint__
This blueprint shows how the Rates Rebates pilot in Tauranga service structured, and helps show what needed to be built and what existing systems could be used without changes required.
![Alpha blueprint](/assets/media/Rates-Rebates/RR12.png)

__Future State Blueprint__
This blueprint shows a potential future where information sharing between agencies is used to provide proactive delivery of the rebates entitlement.
![Future state blueprint](/assets/media/Rates-Rebates/RR13.png)

## Appendix Two - Trends analysis<a name = "Go-to-Appendix2"></a>

The following charts describe the number of claims made for the last three years and the timings of when the applications are made to the Councils. The majority of applications are made in August each year and to mitigate the high workload on existing council staff, temporary staff are brought in to help process these. DIA audit these applications and their busy time falls between Aug and Oct when they verify the claims.
![Volume by claimed, refused, cancelled per year](/assets/media/Rates-Rebates/RR14.png)

Reasons why claims are refused and cancelled include:

- The applicant earned more income than
- The application was incorrectly completed
- The applicant didn’t live at the location advised
- The applicant had an undeclared partner

There is anecdotal evidence from this study most are due to misunderstandings of the form and the application process.

![Tauranga Ciy Council Applications processed per month & year](/assets/media/Rates-Rebates/RR15.png)

__Dropping number of rebates claimed each year__
The number of Rates Rebates claimed each year has been dropping. This is a well known trend and is mostly due to the income threshold not keeping in pace with the rise in superannuation payments year to year, leading to those on the couples super especially, gradually dropping out of eligibility. There are some other factors that are potentially affecting this, including rates of homeownership and other factors.

- __Home Ownership rates lowest in 66 years__
    In 2017 homeownership rates in New Zealand were at the lowest they had been for 66 years at 63.2 percent of people today live in a home they owned, the lowest rate of ownership since the 1951 Census with rates recorded at 61.2 percent[^5].
- __Awareness of Rates Rebates__
    There is anecdotal evidence that suggests that awareness of the entitlement is low. Due to current measurement practices we don’t know how many people are eligible and what are the reasons that they don’t apply (eg they choose not to, the application process is seen as complicated and confusing). The later point is consistent problem with most government services or any services for that matter - why does someone not use your service? To answer this question for Rates Rebates would require data analysis and user research.

[^5]:Home ownership rates lowest in 66 years according to Statistics NZ - New Zealand Herald <https://www.nzherald.co.nz/business/news/article.cfm?c_id=3&objectid=11779664>

- __Cost of housing increasing__
    Stats NZ data shows an upwards trend in the cost of housing since 2007. There has been an 8.0 percent increase in the weekly cost of housing from 2014/2014 to 2015/2016. Stats NZ say that this increase was mostly due to households spending more on mortgage payments (up 12.8 percent) and property rates (up 9.6 percent). In comparison, renting costs over the same period increased by 1.8 percent[^6].
![Housing costs as a percentage of total household income](/assets/media/Rates-Rebates/RR16.png)

[^6]:Household expenditure statistics: Year ended June 2016 – corrected, Stats NZ <https://www.stats.govt.nz/information-releases/household-expenditure-statistics-year-ended-june-2016>

![Average weekly household expenditure](/assets/media/Rates-Rebates/RR17.png)

- __New Zealand’s access to the internet__
    Internet NZ reports that approximately connection[^7]. This has an impact on people’s ability to find out about their entitlements with most service providers moving to digital channels. It also put more emphasis on designing for mobile as this will be the preferred channel that people will access internet in the future. Continuing development of the rates rebate alpha will need to keep in mind both of these points.

[^7]:State of the Internet 2017 Report- Internet NZ

## Appendix Three - Comparison between the web app and current paper application<a name = "Go-to-Appendix3"></a>

Here is a physical comparison of the web app vs the current paper application.

### The length of the web app process

![The length of the web app process](/assets/media/Rates-Rebates/RR18.png)

### The current 4 page paper form

![Page 1](/assets/media/Rates-Rebates/RR19.png)
![Page 2](/assets/media/Rates-Rebates/RR20.png)
![Page 3](/assets/media/Rates-Rebates/RR21.png)
![Page 4](/assets/media/Rates-Rebates/RR22.png)
