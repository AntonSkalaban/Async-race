import createButton from "./button";
import createElement from "./element"

const createPageFooter = (pageName: string, fn: (pageName: string, page: number) => void) => {
  const pageSwiper = createElement('div', 'page-swiper');
  const prevBtn = createButton('prev', `${pageName}-prev-btn`);
  const nextBtn = createButton('next', `${pageName}-next-btn`);

  let pageCounter = 1;

  const changePage = async (e: Event) => {
    if (e.target === nextBtn) pageCounter++
    else pageCounter--
    fn(pageName, pageCounter);
  }

  nextBtn.addEventListener('click', (e) => changePage(e));
  prevBtn.addEventListener('click', (e) => changePage(e));

  pageSwiper.appendChild(prevBtn);
  pageSwiper.appendChild(nextBtn);
  return pageSwiper;
}

export default createPageFooter;