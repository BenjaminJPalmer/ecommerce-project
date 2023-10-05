<?php

require_once 'templates/header.php';

?>

<div class="product-container">
  <div class="product-single">
    <div>
      <img src="" alt="" id="product-single__image" class="product-single__image">
    </div>
    <div class="product-single__info">
      <h2 id="product-single__title" class="product-single__title"></h2>
      <p id="product-single__description" class="product-single__description"></p>
      <p id="product-single__price" class="product-single__price"></p>
      <p id="product-single__weight" class="product-single__weight"></p>
      <p id="product-single__example" class="product-single__example"></p>
      <a id="product-single__mix" class="product-single__mix" href="/ecommerce-project/mix">Mix Here</a>
    </div>
  </div>
  <div class="no-product">
    <h2 id="no-product-message" class="no-product-message"></h2>
  </div>
</div>

<script src="public/js/product.js" type="module"></script>

<?php

require_once 'templates/footer.php';

?>