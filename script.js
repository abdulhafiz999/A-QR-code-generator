document.addEventListener("DOMContentLoaded", function () { // Ensures DOM is fully loaded
  let qrImage = document.getElementById("qrImage");
  let qrText = document.getElementById("qrText");
  let generateBtn = document.getElementById("generateBtn"); // Targeting the button

  generateBtn.addEventListener("click", function() { // Adding event listener to button
    if (qrText.value.trim() === "") {
      alert("Please enter a valid text or URL!"); // Check for empty input
      return;
    }

    let qrURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
    qrImage.src = qrURL;
    console.log("QR code generated with URL:", qrURL); // Debugging output
  });
});
