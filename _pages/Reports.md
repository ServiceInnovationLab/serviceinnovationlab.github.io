---
title: Reports
layout: post
---

<h1 class="page-heading">Reports</h1>

<ul class="post-list">
  {% for post in site.posts %}
  <li>
    <!-- If you want to include DATE 
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span> -->
    <a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>