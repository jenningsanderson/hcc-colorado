---
layout: page
title : Courses
tagline: in Human Centered Computing at CU
group: navigation
permalink: /courses/
scroller:
  Undergraduate : undergrad
  Graduate : graduate
js: courses.js
css: courses.css
---
<ul id="courses-slider">
  {% for image in site.data.hcc_photos.course %}
  <li>
    <img src="{{ image.url }}" title="{{image.title}}" description="{{image.description}}">
  </li>
{% endfor %}
</ul>

<a class="anchor" name="undergrad"> </a>

###Undergraduate Courses

<ul class="undergraduate-course course-list">

{% for course in site.data.undergraduate %}
  <li>
	<div class="course-box">
  		<h4 style="display:inline">{{ course.number }} {{course.name}}</h4>
  	</div>
  	</a>
  	<div class="course-box-expand">
  		<h3>{{ course.number }} </h3><h3 >{{course.name}}</h3>
  		<p>{{course.description}}</p>
  	</div>
  </li>
{% endfor %}
</ul>



<a class="anchor" name="graduate"> </a>

###Graduate Courses

<ul class="graduate-course course-list">

{% for course in site.data.graduate %}
  <li>
  <div class="course-box">
      <h4 style="display:inline">{{ course.number }} {{course.name}}</h4>
    </div>
    </a>
    <div class="course-box-expand">
      <h3>{{ course.number }} </h3><h3 >{{course.name}}</h3>
      <p>{{course.description}}</p>
    </div>
  </li>
{% endfor %}
</ul>
