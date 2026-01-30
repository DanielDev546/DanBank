function sendMoney() {
  const bank = document.getElementById("bankSelect").value;
  const name = document.getElementById("recipientName").value.trim();
  const reason = document.getElementById("transferReason").value.trim();
  const amount = Number(document.getElementById("sendAmount").value);

  // VALIDATION
  if (!bank) return alert("Please select a bank");
  if (!name) return alert("Please enter recipient name");
  if (!amount || amount <= 0 || amount > balance) return alert("Invalid amount");

  // Deduct balance
  balance -= amount;
  updateBalanceUI();
  localStorage.setItem("balance", balance);

  // Add transaction
  const transactionText = `Sent ₦${amount.toLocaleString()} to ${name} (${bank})` + (reason ? ` - ${reason}` : "");
  addTransaction("sent", amount);

  // Notification
  addNotification(transactionText);

  // Clear inputs
  document.getElementById("bankSelect").value = "";
  document.getElementById("recipientName").value = "";
  document.getElementById("transferReason").value = "";
  document.getElementById("sendAmount").value = "";

  renderChart();
}
