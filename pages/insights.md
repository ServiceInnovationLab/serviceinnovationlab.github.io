---
title: Insights
permalink: /insights/
layout: primary
content_wide: true
content_focus: false
gridless: true
---

<section class="nz-section background-gray">
   <div class="nz-grid">
    <h2 tabindex="0">Overview</h2>
      <p>Since early 2017 the team have gained experience and insight into developing an innonvation lab inside government. In this section we have set out some key points around system level pattern the team observed plus some practical tips on running a lab.</p>
      <p>A key part of the lab's story has been it's evolution over time. The principles have remained the same but how the lab operated evolved based on learning and contenxt. What's shared here reflects a snapshot of the team's experience and where relevant we've pointed to the learning and insights from other innovation labs and teams.</p>
  </div>

  <div class="nz-grid">
    <section class="nz-section">
      <div class="nz-section-bottom">
        <div class="nz-flex nz-flex-wrap">
          {% assign insights_list = site | find_collection: 'insights' | weighted_sort: 'insights_weight', 'title' %}
          {% for insights in insights_list %}
            {% include card.html
            image_src=insights.image
            image_alt=insights.image_accessibility
            image_icon=insights.image_icon
            agency=insights.agency
            tagline=insights.title
            description=insights.excerpt
            link=insights.permalink
            %}
          {% endfor %}
        </div>
      </div>
    </section>
  </div>
</section>
