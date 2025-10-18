import React from "react";
import "./articles.css";

function Articles() {
  return (
    <article id="articles">
      <div class="articles-header width-alignment">
        <div class="articles-header-left">
          <h5>WAYS TO SUPPORT</h5>
          <h1>Support Acme Outdoors.</h1>
        </div>
        <p class="articles-header-right">
          COVID-19 has forced us to close our retail space, but we need support
          from patrons like yourself now more than ever. Below, we’ve listed the
          best ways to help us through this season.
        </p>
      </div>
      <div class="articles-body width-alignment">
        <div class="articles-card">
          <div class="articles-card-body">
            <h1>01</h1>
            <h1>SHOP PRODUCTS</h1>
            <img src="/images/shape-1.svg" alt="shape" />
          </div>
          <p>
            Our full product line is still available online here on our site!
            Getting outside and hiking is still something you can do. Get your
            gear now!
          </p>
        </div>
        <div class="articles-card">
          <div class="articles-card-body">
            <h1>02</h1>
            <h1>DONATE</h1>
            <img src="/images/shape-2.svg" alt="shape" />
          </div>
          <p>
            Since we've changed the way we operate to online only, and to ensure
            your safety, not all our staff is working. Donate to keep them
            afloat.
          </p>
        </div>
        <div class="articles-card">
          <div class="articles-card-body">
            <h1>03</h1>
            <h1>BUY GIFT CARDS</h1>
            <img src="/images/shape-3.svg" alt="shape" />
          </div>
          <p>
            Have all the outdoor gear you need for now? Buy a gift card and use
            it later or share it with friends and family.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Articles;
