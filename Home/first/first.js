function changeBackgroundImage() {
  var dropdown = document.getElementById("dropdown");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  var dropdownElement = document.getElementsByClassName("dropdown")[0];

  if (selectedOption === "option1") {
    dropdownElement.style.backgroundImage = "url('https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?t=st=1689057436~exp=1689061036~hmac=94355a387b3759060623daf8f4cb138a90068a4edca0806d8b880b4ac2afd87b&w=1060')";
  } else if (selectedOption === "option2") {
    dropdownElement.style.backgroundImage = "url('https://www.freepik.com/free-photos-vectors/hd-background')";
  } else if (selectedOption === "option3") {
    dropdownElement.style.backgroundImage = "url('https://www.freepik.com/free-photos-vectors/hd-background')";
  } else {
    dropdownElement.style.backgroundImage = "";
  }
}
