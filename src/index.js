import './style.css';
import buildSetup from './pageSetup';
import buildHomePage from './home';
import buildMenuPage from './menu';
import buildAboutPage from './about';

const setup = buildSetup();
buildHomePage();

setup.btnHome.addEventListener('click', () => {
  buildHomePage();
});

setup.btnMenu.addEventListener('click', () => {
  buildMenuPage();
});

setup.btnAbout.addEventListener('click', () => {
  buildAboutPage();
});
