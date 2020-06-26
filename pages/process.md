---
title: Process
permalink: /process/
layout: primary
lead: Websites, applications, and strategies that help agencies provide excellent value to the public.
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
  {% include tools-process-nav.html %}

  <div class="nz-grid">
    <h1 tabindex="0">Process</h1>
    <p>As a design and development lab working across government agencies, the Lab developed a process for its work to follow. Similar to other innovation processes, it creates space and time to better understand the issues before moving to ideation, development and testing.</p>
    <p>For each phase we have summarised its key features, reflections and tips from the Lab team - and links to ourtools and templates.</p>
  </div>

  <div class="nz-grid">
    <section class="nz-section">
      <div class="nz-section-bottom">
        <div class="nz-flex nz-flex-wrap">
          {% assign process_list = site | find_collection: 'process' | weighted_sort: 'process_weight', 'title' %}
          {% for process in process_list %}
            {% include card-process.html
            image_src=process.image
            image_alt=process.image_accessibility
            image_icon=process.image_icon
            agency=process.agency
            tagline=process.title
            description=process.excerpt
            link=process.permalink
            %}
          {% endfor %}
          <button id="scrollToTopBtn" title="Go to top">Back to Top</button>
        </div>
      </div>
    </section>
  </div>
</section>
