const EXPANDED_CLASS = "aside-left--expanded"
const PINNDED_CLASS = "aside-left--pinned"
const OFFCANVAS_CLASS = "aside-left--offcanvas"

function doToggle(currentClass) {
  const element = document.getElementsByClassName("wrapper")[0]

  if (element.classList.contains(currentClass)) {
    element.classList.remove(currentClass)
    if (currentClass === EXPANDED_CLASS) {
      element.classList.add(PINNDED_CLASS)
    }
  } else {
    element.classList.add(currentClass)
    if (currentClass === EXPANDED_CLASS) {
      element.classList.remove(PINNDED_CLASS)
    }
  }
}

function closeOffcanvas() {
  const element = document.getElementsByClassName("wrapper")[0]

  if (element.classList.contains(OFFCANVAS_CLASS)) {
    element.classList.remove(OFFCANVAS_CLASS)
  }
}

function isExpanded() {
  const element = document.getElementsByClassName("wrapper")[0]

  return element.classList.contains(EXPANDED_CLASS)
}

export {
  EXPANDED_CLASS, PINNDED_CLASS, OFFCANVAS_CLASS, doToggle, closeOffcanvas, isExpanded,
}
