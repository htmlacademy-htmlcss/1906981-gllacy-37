/* SLIDER ANIMATION */

const prevButton = document.querySelector(".slider-button-prev");
const nextButton = document.querySelector(".slider-button-next");
const bulletsList = document.querySelector(".bullets-list");
const bullets = document.querySelectorAll(".bullets-button");
const screens = document.querySelectorAll(".slider-item");

if (screens) {
  const bulletsArray = Array.from(bullets);
  const screensArray = Array.from(screens);

  const model = [true, false, false];


  const getCurrentElement = () => model.findIndex((index) => index);

  const updateModel = (index) => {
    model.forEach((item, i) => {
      model[i] = i === index;
    });
  };

  const renderActiveBullet = () => {
    const currentIndex = getCurrentElement();
    document.querySelector(".bullets-button-current").classList.remove("bullets-button-current");
    bulletsArray[currentIndex].classList.add("bullets-button-current");
  };

  const renderActiveScreen = () => {
    const currentIndex = getCurrentElement();
    document.querySelector(".slider-item-active").classList.remove("slider-item-active");
    screensArray[currentIndex].classList.add("slider-item-active");

    screensArray.slice(currentIndex).forEach((item, i) => {
      item.style.order = i;
    });

    screensArray.slice(0, currentIndex).forEach((item, i) => {
      item.style.order = screensArray.length - currentIndex + i;
    });

    document.body.classList = [];
    document.body.classList.add(`bg-${currentIndex + 1}`);
  }


  const getPrevIndex = () => {
    let current = getCurrentElement();
    return current - 1 >= 0 ? current - 1 : model.length - 1;
  };

  const getNextIndex = () => {
    let current = getCurrentElement();
    return current + 1 <= model.length - 1 ? current + 1 : 0;
  };

  prevButton.addEventListener("click", () => {
    let index = getPrevIndex();
    updateModel(index);
    renderActiveScreen();
    renderActiveBullet();
  });

  nextButton.addEventListener("click", () => {
    let index = getNextIndex();
    updateModel(index);
    renderActiveScreen();
    renderActiveBullet();
  });

  bulletsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("bullets-button")) {
      let clickedButtonIndex = bulletsArray.indexOf(e.target);
      updateModel(clickedButtonIndex);
      renderActiveScreen();
      renderActiveBullet();
    };
  });
}

/* MODAL */
const modal = document.querySelector(".modal-container");
const contactsButton = document.querySelector(".contacts-button");
const modalCloseButton = document.querySelector(".modal-close-button");

contactsButton.addEventListener("click", () => {
  modal.classList.remove("modal-container-close")
});

modalCloseButton.addEventListener("click", () => {
  modal.classList.add("modal-container-close")
});
