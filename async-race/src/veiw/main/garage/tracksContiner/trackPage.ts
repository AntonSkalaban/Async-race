import { renderGarage } from './../../pageRenders';
import cratePageHeader from '../../../helpers/pageHeader';
import createPageFooter from '../../../helpers/pageFooter';
import createPageBody from '../../../helpers/pageBody';
import createElement from '../../../helpers/element';


const createTrackPage = () => {
  const trackPage = createElement('div', 'garage-page')
  const trackHeader = cratePageHeader('garage');
  const trackBody = createPageBody('garage');
  const trackFooter = createPageFooter('garage', renderGarage)

  trackPage.appendChild(trackHeader);
  trackPage.appendChild(trackBody);
  trackPage.appendChild(trackFooter);

  return trackPage;
}

export default createTrackPage;

