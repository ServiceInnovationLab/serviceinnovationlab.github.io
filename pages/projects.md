---
title: Projects
permalink: /projects/
layout: primary
lead: Websites, applications, and strategies that help agencies provide excellent value to the public.
content_wide: true
content_focus: false
redirect_from:
  - /consulting/
  - /what-we-deliver/military-onesource/
banner_cta: true
gridless: true
---
<div class="usa-grid">
  <section class="usa-section">
    <div class="usa-width-two-thirds">
      <h3> Projects </h3>
      <p>We are federal employees that partner with other federal agencies to build, buy, and share digital services. With help from 18F, agencies have moved paper processes online, increased data access, saved millions on cloud hosting, and implemented new acquisition techniques. Here are a few examples:</p>
    </div>
  </section>
</div>

<div class="usa-grid">
  <section class="usa-section">
    <div class="usa-section-bottom">
      <div class="usa-flex usa-flex-wrap">
        {% assign projects_list = site | find_collection: 'services_projects' | weighted_sort: 'project_weight', 'title' %}
        {% for project in projects_list %}
          {% include card.html
           image_src=project.image
           image_alt=project.image_accessibility
           image_icon=project.image_icon
           agency=project.agency
           tagline=project.title
           description=project.excerpt
           link=project.permalink
          %}
        {% endfor %}
      </div>
    </div>
  </section>
</div>