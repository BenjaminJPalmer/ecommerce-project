<?php
// Include the header template
require_once 'templates/header.php';
?>

<div class="intro">
	<h2 class="welcome-heading">Welcome to Ben's Sweets</h2>
	<p class="welcome-paragraph">At Ben's Sweets, sweet dreams become delicious realities. Step into a world of
		confectionery delight, where the aroma of freshly baked treats and the allure of mouthwatering candies enchant your
		senses. Our passion for crafting irresistible sweets knows no bounds, as we invite you to explore a symphony of
		flavors, from artisanal chocolates to whimsical candies and delectable pastries. At Ben's Sweets, every bite is a
		journey into a world of pure sweetness, where memories are made and cravings are satisfied. Join us on this
		delectable adventure and let your sweet tooth take the lead.
	</p>
</div>

<div class="feature-banner">
	<div class="overlay">
		<h3>Treat your <span>loved ones</span> to something from our new pick 'n' mix calculator!</h3>
		<a href="/ecommerce-project/mix">Mix Here</a>
	</div>
</div>

<div class="product-listing">
	<h3>Some of our sweets</h3>
	<div id="products-container" class="products-container"></div>
</div>

<div class="category-listing">
	<h3>Browse our product categories</h3>
	<div id="categories-container" class="categories-container"></div>
</div>

<script src="public/js/index.js" type="module"></script>

<?php
// Include the footer template
require_once 'templates/footer.php';
?>