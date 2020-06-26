---
title: Insights
permalink: /insights/
layout: primary
content_wide: true
content_focus: false
gridless: true
---

<section class="background-medium project">
  <div class="nz-grid-full nz-flex banner">
    <div class="nz-grid nz-width-one-whole hero-callout-full hero-callout-no_button">
      <h1 class="page-title" style="padding-top: 3rem">
        {{ page.title }}
      </h1>
    </div>
  </div>
</section>

<section class="nz-section">
   <div class="nz-grid">
    <h1 tabindex="0">Overview</h1>
      <p>Since early 2017 the team gained experience and insight into developing an innovation lab inside government. In this section are some key points around system level pattern the team observed plus some practical tips on running a Lab.</p>
      <p>A key part of the Lab's story has been its evolution over time. The principles have remained the same but how the Lab operated evolved based on learning and context. What's shared here reflects a snapshot of the team's experience and where relevant points to learning and insights from other innovation labs and teams.</p>
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
