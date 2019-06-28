---
layout: plain
title: Authors
permalink: /authors/
---
# Authors
<ul>
{% for a in site.authors %}
  <li><a href="{{ a.url }}">{{ a.title }}</a></li>
{% endfor %}
</ul>
