---
title: Tools
permalink: /tools/
layout: primary
lead: Websites, applications, and strategies that help agencies provide excellent value to the public.
content_wide: true
content_focus: false
gridless: true
---

<section class="nz-section background-gray">
  {% include tools-process-nav.html %}

  <div class="nz-grid">
    <div class="nz-width-two-thirds">
      <h2>Tools</h2>
      <a href="/sil-glossary">Glossary of Terms</a>
    </div>
  </div>

  <div class="nz-grid">
    <section class="nz-section">
      <div class="nz-section-bottom">
        <div class="nz-flex nz-flex-wrap">
          {% assign projects_list = site | find_collection: 'products_projects' | weighted_sort: 'project_weight', 'title' %}
          {% for project in projects_list %}
            {% include card_tools.html
            image_src=project.image
            image_alt=project.image_accessibility
            image_icon=project.image_icon
            agency=project.agency
            tagline=project.title
            description=project.excerpt
            link=project.permalink
            external_url=project.external_url
            external_link_title=project.external_link_title
            %}
          {% endfor %}
          <button id="scrollToTopBtn" title="Go to top">Back to Top</button>
        </div>
      </div>
    </section>
  </div>
</section>
