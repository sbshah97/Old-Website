---
layout: default
title: Tags
---

<h2>Tags</h2>
{% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}
<ul class="tag-post-list" id="{{ t | downcase }}">
<a class="tag pink-text" href="#{{ t | downcase }}"><b>{{ t | downcase }}</b></a>
{% for post in posts %}
  {% if post.tags contains t %}
  <li>
    <span class="post-meta">{{ post.date | date: "%B %-d, %Y"  }}</span>
    <a href="{{ post.url }}"><h5>{{ post.title }}</h5></a>
  </li>
  {% endif %}
{% endfor %}
</ul>
{% endfor %}