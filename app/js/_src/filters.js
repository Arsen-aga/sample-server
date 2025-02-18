const filters = document.querySelectorAll(".filters");

if (filters.length > 0) {
  filters.forEach((filter) => {
    const btns = filter.querySelectorAll(".filters-btn");
    const items = filter.querySelectorAll(".filters-item");
    const cursors = filter.querySelectorAll(".coursor");
    checkQuantity(btns, cursors[0], true);

    btns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        btns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");

        const keyWord = e.currentTarget.dataset.filter;

        items.forEach((item) => {
          if (item.classList.contains(keyWord)) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
          }
        });

        const activeItems = [...items].filter((item) =>
          item.classList.contains(keyWord)
        );
        checkQuantity(activeItems, cursors[1]);
      });
    });
  });
}

function checkQuantity(list, cursor, isBtns) {
  if (window.innerWidth > 991.8) return;
  if (list.length > 2 && isBtns) cursor.style.display = "flex";
  else if (list.length > 1 && !isBtns) cursor.style.display = "flex";
  else cursor.style.display = "none";
}
