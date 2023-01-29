document.addEventListener('DOMContentLoaded', () => {
  /** 
   * Adding an event listener to the element with the id of `footer-scroll-top` and when that element is clicked it will scroll to the top of the page.
  */
  document.getElementById('footer-scroll-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
});