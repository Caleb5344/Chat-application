document.getElementById("send").addEventListener("click", function () {
  var message = document.getElementById("message").value; // Get the input value
  if (message.trim() == "") return; // Don't send an empty message

  var output = document.getElementById("output");
  var newMessage = document.createElement("p");
  newMessage.textContent = message;
  output.appendChild(newMessage); // Add the new message to chat

  document.getElementById("message").value = ""; // Clear the input field
});
