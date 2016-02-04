---
layout: default
---
<section id="accommodation">
  <div class="container">
    <div class="section-title-container">
      <h1 class="section-title">Alojamento</h1>
    </div>
    <div class="accommodation-list">
      {% for hotel in site.data.hoteis %}
      <div class="accommodation-list-cell">

        <div class="hote-pic">
          {% image 'hotels/{{hotel.pic}}' class:'hotelpic' %}
        </div>

        <span class="hotel-name">{{ hotel.name }}</span>
        <span class="hotel-mail"><a href="{{ hotel.web }}"> <i class="fa fa-globe fa-2x"></i></a></span>
      </br>
      <span class="hotel-contact">{{ hotel.number }}</span>

    </div>
    {% endfor %}
  </div>
</div>
</section>
