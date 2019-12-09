---
title: Digital Identity Glossary
permalink: /digital-identity-glossary/
layout: no-wrapper
content_focus: false
---
<div class="glossary-buttons">
  <a class="btn btn-secondary btn-sm" role="button" href="/general-glossary">General Glossary</a>
  <a class="btn btn-secondary btn-sm" role="button" href="/techy-terms-glossary">Techy Terms Glossary</a>
  <a class="btn btn-secondary btn-sm" role="button" href="/digital-identity-glossary">Digital Identity</a>
  <a class="btn btn-secondary btn-sm" role="button" href="/digital-wallet-glossary">Digital Wallet</a>
</div>

<!-- Pulls from _data links -->
{% assign glossary = site.data.digital-identity.data %}
<!-- {% assign glossary = glossary | sort:"Name" %} -->

<div class="glossary">
  <h2>Digital Identity Glossary</h2>
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
</div>
