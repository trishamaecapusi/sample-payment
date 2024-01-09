// payment-component.js
function createPaymentOptionsComponent(container) {
  const componentHTML = `
    <main>
      <div class="payment-option" onclick="showPaymentForm('bankTransfer')">
        <h2>Bank Transfer</h2>
        <i class="payment-icon fas fa-university"></i>
      </div>

      <div class="payment-form" id="bankTransferForm">
        <h2>Bank Transfer Details</h2>
        <form action="/processBankTransfer" method="post">
          <label for="bankTransferAmount">Amount:</label>
          <input type="text" id="bankTransferAmount" name="amount" required>
          <br>
          <label for="bankTransferAccount">Account Number:</label>
          <input type="text" id="bankTransferAccount" name="accountNumber" required>
        </form>
      </div>

      <div class="payment-option" onclick="showPaymentForm('quickPay')">
        <h2>Quick Pay</h2>
        <i class="payment-icon fas fa-credit-card"></i>
      </div>

      <div class="payment-form" id="quickPayForm">
        <h2>Quick Pay Details</h2>
        <form action="/processQuickPay" method="post">
          <label for="quickPayAmount">Amount:</label>
          <input type="text" id="quickPayAmount" name="amount" required>
          <br>
          <label for="quickPayCardNumber">Card Number:</label>
          <input type="text" id="quickPayCardNumber" name="cardNumber" required>
        </form>
      </div>

      <div class="payment-option" onclick="showPaymentForm('qrPay')">
        <h2>QR Pay</h2>
        <i class="payment-icon fas fa-qrcode"></i>
      </div>

      <div class="payment-form" id="qrPayForm">
        <h2>QR Pay Details</h2>
        <form action="/processQRPay" method="post">
          <label for="qrPayAmount">Amount:</label>
          <input type="text" id="qrPayAmount" name="amount" required>
          <br>
          <label for="qrPayScan">Scan QR Code:</label>
          <input type="file" id="qrPayScan" accept="image/*" capture="camera" required>
        </form>
      </div>

      <div class="submit-section">
        <button type="submit">Submit</button>
      </div>
    </main>
  `;

  container.innerHTML = componentHTML;
}

function showPaymentForm(paymentType) {
  // Hide all payment forms
  document.querySelectorAll('.payment-form').forEach(form => {
    form.style.display = 'none';
  });

  // Show the selected payment form
  document.getElementById(`${paymentType}Form`).style.display = 'block';
}

// Example Usage:
const containerElement = document.getElementById('paymentComponentContainer');
createPaymentOptionsComponent(containerElement);