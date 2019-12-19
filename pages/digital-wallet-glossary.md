---
title: Digital Wallet Glossary
permalink: /digital-wallet-glossary/
layout: no-wrapper
content_focus: false
---
{% include glossary-nav.html %}

<!-- Pulls from _data links -->
{% assign glossary = site.data.glossary.digital-wallet.data %}

<h2>Digital Wallet Glossary</h2>
<table class="glossary-table">
  <thead>
    <tr>
      <th>Word or Term</th>
      <th>Short Definition</th>
      <th>Long Definition</th>
      <th>Example</th>
      <th>Reference</th>
    </tr>
  </thead>
  <tbody>
    {% for row in glossary %}
      <tr>
        <td><strong>{{ row.word_or_term }}</strong></td>
        <td>{{ row.short_definition }}</td>
        <td>{{ row.long_definition }}</td>
        <td>{{ row.example }}</td>
        <td>{{ row.reference }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
