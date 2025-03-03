if (document.querySelector(".filters-select")) {
  const filter = document.querySelector(".filters-select");
  const activeItem = filter.querySelector(".filters-select__item");
  const modal = filter.querySelector(".filters-select__list");
  const inputs = filter.querySelectorAll(".filters-select__list-item input");
  const content = document.querySelectorAll(".section-20__inner");

  activeItem.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.add('active');
  })
  
  inputs.forEach((input) => input.addEventListener("change", (e) => {
    const text = e.target.value;
    const key = e.target.id;
    activeItem.textContent = text;
    modal.classList.remove('active');

    content.forEach(item => {
      item.classList.contains(key)
        ? item.classList.remove("hidden")
        : item.classList.add("hidden");
    })
  }));
}
