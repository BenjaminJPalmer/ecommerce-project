<?php

require_once 'templates/header.php';

?>

<div class="category-container">
  <div class="category-single">
    <div>
      <img src="" alt="" id="category-single__image" class="category-single__image">
    </div>
    <div class="category-single__info">
      <h2 id="category-single__title" class="category-single__title"></h2>
      <p id="category-single__description" class="category-single__description"></p>
      <a id="category-single__mix" class="category-single__mix" href="/ecommerce-project/mix">Mix Here</a>
    </div>
  </div>
  <div class="no-category">
    <h2 id="no-category-message" class="no-category-message"></h2>
  </div>
</div>

<script src="public/js/category.js" type="module"></script>

<?php

require_once 'templates/footer.php';

?>