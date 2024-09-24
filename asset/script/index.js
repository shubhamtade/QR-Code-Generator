const qrImg = document.querySelector("#qrImg");
const userInput = document.querySelector(".userInput");

const generateQR = () => {
  const apiURL =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
  const inputValue = userInput.value.trim(); // Trim any leading/trailing spaces

  if (inputValue) {
    qrImg.src = apiURL + inputValue;
    document.querySelector(".imgBox").style.display = "flex"; // Show the .imgBox
  } else {
    // Handle case when input is empty
    qrImg.src = ""; // Clear the image source
    document.querySelector(".imgBox").style.display = "none"; // Hide the .imgBox
  }
};
