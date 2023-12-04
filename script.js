// Get all anchor elements inside the navigation
var navigationLinks = document
  .getElementById("navigation")
  .getElementsByTagName("a");

// Loop through each anchor element and add click event listener
for (var i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function (e) {
    e.preventDefault();

    // Get the href attribute of the clicked anchor
    var targetId = this.getAttribute("href").substring(1);
    var targetSection = document.getElementById(targetId);

    // Smooth scroll to the target section
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
}
