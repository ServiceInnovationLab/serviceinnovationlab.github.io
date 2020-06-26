---
title: Approach
permalink: /approach/
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
    <h1 tabindex="0">Our Approach</h1>
      <p>The Service Innovation Lab was an interdisciplinary team with backgrounds in agile, design, policy and technology. It used evidence-based decision making and design thinking to help improve government service experiences.</p>
      <img src="{{ site.baseurl }}/assets/img/mbie-showcase.png" alt="Visualisation of the lab's approach" class="appproach-page-image">
      <p>Set out below are key elements of the lab's approach. It includes principles and mindsets, an approach to joined-up working across government plus practical reflections on running an innovation lab.</p>
      <p>What's shared captures the team's experience and links are provided to wider reading and resources on developing innovation labs.</p>
  </div>

  <div class="nz-grid">
    <section class="nz-section">
      <div class="nz-section-bottom">
        <div class="nz-flex nz-flex-wrap">
          {% assign approach_list = site | find_collection: 'approach' | weighted_sort: 'approach_weight', 'title' %}
          {% for approach in approach_list %}
            {% include card-approach.html
            image_src=approach.image
            image_alt=approach.image_accessibility
            image_icon=approach.image_icon
            agency=approach.agency
            tagline=approach.title
            description=approach.excerpt
            link=approach.permalink
            %}
          {% endfor %}
          <button id="scrollToTopBtn" title="Go to top">Back to Top</button>
        </div>
      </div>
    </section>
  </div>
</section>
