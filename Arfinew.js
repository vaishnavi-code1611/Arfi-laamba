// Remove contenteditable from all elements on page load
document.addEventListener("DOMContentLoaded", function () {
  // Remove contenteditable attribute from all elements
  document.querySelectorAll("[contenteditable]").forEach((element) => {
    if (!element.matches("input, textarea")) {
      element.removeAttribute("contenteditable");
    }
  });

  // Force cursor styles
  document.body.style.cursor = "default";
});
