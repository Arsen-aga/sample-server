const accordionsHeader = document.querySelectorAll(".accordion-header");
if (accordionsHeader) {
  accordionsHeader.forEach(function (header) {
    header.addEventListener("click", function () {
      const content = this.parentElement;

      content.classList.toggle("active");

      const item = document.querySelectorAll(".accordion-item");
      item.forEach(function (otherContent) {
        if (otherContent !== content) {
          otherContent.classList.remove("active");
        }
      });
    });
  });
}
