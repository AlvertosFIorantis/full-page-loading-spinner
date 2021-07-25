const modal = document.getElementById("modal");
const savingButton = document.getElementById("SavingButton");
const modalBox = document.getElementById("modalBox");
const LoadingText = document.getElementById("loading");
const LoadingSpinnerDot = document.getElementById("loadingSpinner");

const savingFunctionalityFunction = async () => {
  // use the modal
  modal.style.display = "block";
  modalBox.style.display = "block";
  LoadingSpinnerDot.style.display = "block";
  document.documentElement.style.setProperty("--beforeElementBorder", "3px");
  LoadingSpinnerDot.style.display = "block";
  LoadingText.innerHTML = `loading`;

  // wait for 5 sec with the helper async function
  await asyncDelay(5000);

  // make the loading spinner border disappear
  // i cant access the pseaudo element so i will change the css variable instaed so i make the border of the pseudo element 0 so the border disappear
  document.documentElement.style.setProperty("--beforeElementBorder", "0px");
  // Make the loading spinner dot disappear
  LoadingSpinnerDot.style.display = "none";
  // change the text from Loading to Saved successfully
  LoadingText.innerHTML = `Saved successfully`;

  // wait another 1 sec
  await asyncDelay(2000);

  // remove the modal
  modal.style.display = "none";
  modalBox.style.display = "none";
};

// helper function to create async set timeout function
const asyncDelay = (ms) => new Promise((res) => setTimeout(res, ms));

savingButton.addEventListener("click", savingFunctionalityFunction);
