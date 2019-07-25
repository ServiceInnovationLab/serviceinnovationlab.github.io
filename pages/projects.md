---
title: Projects
permalink: /projects/
layout: primary
lead: Websites, applications, and strategies that help agencies provide excellent value to the public.
content_wide: true
content_focus: false
redirect_from:
  - /consulting/
banner_cta: true
gridless: true
---

<section class="nz-section background-gray">
<div class="nz-grid">
    <div class="nz-width-two-thirds">
      <h2 tabindex="0"> Projects </h2>
    </div>
</div>

<div class="nz-grid">
  <section class="nz-section">
    <div class="nz-section-bottom">
      <div class="nz-flex nz-flex-wrap">
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
</section>