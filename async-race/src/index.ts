import { renderGarage } from './veiw/main/pageRenders';
import './styles.css';
import createApp from './veiw/app';

const root = document.querySelector('#root');
const app = createApp();

if (root) root.appendChild(app);

renderGarage('garage', 1);