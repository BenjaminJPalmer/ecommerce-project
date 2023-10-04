<?php
// Include the header template
require_once 'templates/header.php';
?>

<div class="mix-container">
  <div class="mix-selector">
    <div id="current-product-container" class="current-product-container">
      <img id="current-image" class="current-image" src="public/images/blank.png" alt="">
      <div id="quantity-container" class="quantity-container">
        <button id="minus-button" class="quantity-button minus-button">-</button>
        <input type="number" id="quantity-input" class="quantity-input" value="0" min="0">
        <button id="plus-button" class="quantity-button plus-button">+</button>
      </div>
      <div id="cart-view" class="cart-view">
        <button id="show-sidebar" class="show-sidebar">View cart</button>
      </div>
    </div>
    <div class="mix-info">
      <h2>Choose your pick 'n' mix</h2>
      <p>The minimum order size is 40 grams. Delivery cost is based on the total weight of your order.</p>
      <table>
        <thead>
          <tr>
            <th>Weight (g)</th>
            <th>Delivery cost (£)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>40-250</td>
            <td>1.50</td>
          </tr>
          <tr>
            <td>251-500</td>
            <td>2.00</td>
          </tr>
          <tr>
            <td>501+</td>
            <td>2.50</td>
          </tr>
        </tbody>
      </table>
      <div id="mix-products" class="mix-products"></div>
    </div>
  </div>
</div>

<script src="public/js/mix.js" type="module"></script>

<?php
// Include the footer template
require_once 'templates/footer.php';
?>