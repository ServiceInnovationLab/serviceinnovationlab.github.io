---
title: SIL UI style guide
subpage: Components
permalink: /styleguide/components/
parent_permalink: /styleguide/
subnav_items:
- text: Heading one
  permalink: /styleguide/components/#heading-one
- text: Heading two
  permalink: /styleguide/components/#heading-two
---

### Buttons

{% capture styleguide_buttons %}

#### Style on white

<section class="nz-grid">
  <button class="nz-button">Normal</button>
  <button class="nz-button-hover">Hover</button>
  <button class="nz-button-active">Active</button>
  <button class="nz-button-focus">Focus</button>
  <button class="nz-button-disabled">Disabled</button>
</section>

#### Style on dark

<section class="background-dark nz-grid">
  <button class="nz-button nz-button-secondary">Normal</button>
  <button class="nz-button-hover nz-button-secondary">Hover</button>
  <button class="nz-button-active nz-button-secondary">Active</button>
  <button class="nz-button-focus nz-button-secondary">Focus</button>
  <button class="nz-button-disabled nz-button-secondary">Disabled</button>
</section>

#### Using anchor tags instead of buttons

<a class="nz-button nz-button-secondary" href="{{ dead_end_link }}">Normal</a>
{% endcapture %}

{% include details-code.html
   title='buttons'
   description='Our button styles are.'
   content=styleguide_buttons
%}

---

### Breadcrumbs

The site breadcrumb can be used to establish a sense of place within the site. It is only included in the `primary` layout by default, but can be added to any layout or custom page as needed.

{% capture styleguide_breadcrumb %}{% raw %}

#### Specifying all attributes

{% include breadcrumb.html
  parent_permalink=page.parent_permalink
  parent_title=page.title
  page_title='Buttons'
  background_class='background-gray'
%}
#### Specifying only needed attributes

`parent_permalink` is set as a page attribute in this example, so it doesn't need to be directly included.
{% include breadcrumb.html
  parent_title=page.title
  page_title='Buttons'
  background_class='background-gray'
%}
{% endraw %}{% endcapture %}

{% capture breadcrumb_description %}
The breadcrumb include requires a few attributes to make it appear properly. They can be directly included in the include as variables or text, or left empty if those attributes are defined on the page itself.

* `parent_title`: Title of the parent page as it should appear on the breadcrumb link
* `parent_permalink`: This is the link that the parent page goes to
* `page_title`: Title of the page as it should appear on the breadcrumb
* `background_class`: The CSS class of the breadcrumb background color. It defaults to no background color

If the breadcrumb is being used as part of the `primary` layout, make sure to set `breadcrumb: true` in the page front matter.
The breadcrumb is included automatically on `project-tag-results` layout.

For more on includes, check out the [Jekyll documentation](https://jekyllrb.com/docs/includes/).
{% endcapture %}

{% include details-code.html
   title='breadcrumb'
   lang='markdown'
   description=breadcrumb_description
   content=styleguide_breadcrumb
%}

---

### Project cards

The card component is used as a preview for project pages, but could be adapted to meet additional needs if necessary.

{% capture styleguide_card %}{% raw %}
<div class="nz-grid-full">
  <section class="nz-flex nz-flex-wrap">
    {% include card-project.html project='open-fisca-aotearoa' %}
  </section>
</div>
{% endraw %}{% endcapture %}

{% capture card_description %}
To use cards, reference the file path slug in the `projects directory`. Use another project as a template to fill in all of the necessary fields.

Each project card has a number of properties. The only required properties are:

* `image_src`: the project `image` field, and is the image portion of the card
* `image_alt`: the project `image_accessibility` field. Will be used to set the `alt` attribute on the provided image
* `agency`: the project `agency` field. This will be the uppercase text
* `tagline`: the project `subtitle` field and what appears to be the title of the card
* `description` the project `excerpt` and what appears as the body of the card
* `link`: the project `permalink`. This is where clicking on the card will take you
* `columns`: How many columns the cards should occupy. The only valid options are `2` and `3`. If nothing is specified, the cards will default to `3` columns
{% endcapture %}
{% include details-code.html
   title='cards'
   description=card_description
   content=styleguide_card
%}

---

### Sticky subnavigation

The sticky subnavigation is a pattern that is used frequently throughout the site to make larger bodies of content easier to navigate. The [About page]({{ site.baseurl }}/about/) is good example of the sticky subnavigation in the live site.

#### What is it?

* A secondary navigation field that exists on the left side of a page, adjacent to a corresponding field of content.
* It is "sticky", which means that its [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) isn't absolute or static, but is both, depending on the user's location on the page.
* It provides a sense of location by updating the active section of content that the user is viewing.

---

{% capture sticky_codeblock %}{% raw %}
<div class="nz-grid-full">
  <aside class="nz-width-one-third sticky sticky-subnav sticky-subnav-styleguide">
    {% include navigation.html subnav=true %}
  </aside>
  <section class="nz-width-two-thirds">
    <h3 id="heading-one">Heading one</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <h3 id="heading-two">Heading two</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </section>
</div>
{% endraw %}{% endcapture %}

{% capture sticky_description %}

#### How to use

1. Add the classes `sticky` and `sticky-subnav` to the element that you want to be sticky.
2. Make sure that [sticky.js]({{ site.baseurl }}/assets/js/sticky.js) is included in the page. If you are working on the SIL site, it is included on every page by default.
3. Make sure that the element that is receiving `position: sticky` is a child of an element with a greater height. If it is not, it will never appear to be stuck.

#### Use of the Design System

There are a few classes that we are using for the sticky subnavigation on the SIL site:

* The `nz-sidenav-list` class, in conjunction with the `nz-current` class. This is mostly taken wholesale from the Design System, but does contain slight overrides to better fit with the SIL Brand.
* The `nz-accordion` class and accompanying accordion styles. We have added to this set of styles with a `nav-accordion` class that more accurately reflects the look and feel of the site.
* The `nz-width-one-third` grid class to define the width of our navigaton field. This isn't necessary, but is a convention throughout the site.

#### What to add where

To add items to the subnavigation define the subnavigation items directly within page [frontmatter](https://jekyllrb.com/docs/frontmatter/), as a set of `nav_items`:
  
  ```yml
  subnav_items:
    - text: Heading one
      permalink: /styleguide/sticky-subnavigation/#heading-one
    - text: Heading two
      permalink: /styleguide/sticky-subnavigation/#heading-two
  ```

{% endcapture %}

{% include details-code.html
   title='sticky'
   content=sticky_codeblock
   lang="html"
   description=sticky_description
%}

---

### Testimonials and fun facts

Testimonials and fun facts are used throughout the site to highlight the impact SIL has made with our partner agencies. You can find the styling used on the home page, how we work, and various project pages.

{% capture testimonial_codeblock %}{% raw %}

<div class="testimonial-blockquote">
  SIL has helped us [build something] that lead to [improved thing] resulting in [impact] within our agency.
    <span>- [name], [position], [agency]</span>
</div>

<div class="funfact-blockquote">
  The day [platform] launched, [x-number]organizations were already using the data and API to enhance existing tools or build new products to better serve their customers.
</div>

{% endraw %}{% endcapture %}

{% capture testimonial_description %}

#### How to use?

* For a testimonial: Add the class `testimonial-blockquote` to the element (ex. `div`) that holds the quote. This will place the large quote mark before the content. Place the name, position, and agency within the `<span>` tag. This bolds, adds color, and removes italics to the text.
* For a fun fact: Add the class `funfact-blockquote` to the element (ex. `div`) that holds the information. This has similar styling to a testimonial but adjusted for just text.

{% endcapture %}

{% include details-code.html
   title='testimonial'
   content=testimonial_codeblock
   lang="html"
   description=testimonial_description
%}
