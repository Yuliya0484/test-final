document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".animate-on-scroll");

  const elementInView = (el, offset = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / offset
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  handleScrollAnimation();
});
////////////////////////////
// Tech Skils//
function findCommon(arr1, arr2) {
  const common = arr1.filter((num) => arr2.includes(num));

  return common;
}

console.log(findCommon([7, 8, 9], [9, 10, 11])); // [9]
console.log(findCommon([1, 2, 3], [2, 3, 4])); // [2, 3]
