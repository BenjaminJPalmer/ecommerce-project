<?php

require_once 'templates/header.php';

?>

<div class="checkout-container">
  <h2>Checkout</h2>
  <div id="checkout-details" class="checkout-details">
    <table>
      <thead>
        <tr>
          <th>Name</td>
          <th>Price per gram ( £ / g)</td>
          <th>Weight per sweet (g)</td>
          <th>Quantity</td>
          <th>Total Weight (g)</td>
          <th>Total Price (£)</td>
        </tr>
      </thead>
      <tbody id="checkout-body"></tbody>
      <tfoot>
        <tr>
          <th>Totals</th>
          <td></td>
          <td></td>
          <td id="checkout-total-quantity"></td>
          <td id="checkout-total-weight"></td>
          <td id="checkout-total-price"></td>
        </tr>
      </tfoot>
    </table>
    <div id="checkout-delivery" class="checkout-delivery">
      <h2>Delivery Details</h2>
      <h3>Delivery cost: <span id="checkout-delivery-cost"></span></p>
        <h3>Final cost: <span id="checkout-final-cost"></span></p>
    </div>
  </div>
</div>

<script src="public/js/checkout.js" type="module"></script>

<?php

require_once 'templates/footer.php';

?>