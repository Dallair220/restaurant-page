import './style.css';
import buildSetup from './pageSetup';
import buildHomePage from './home';
import buildMenuPage from './menu';
import buildAboutPage from './about';

const setup = buildSetup();
buildHomePage();

setup.btnHome.addEventListener('click', () => {
  console.log('btn clicked');
  buildSetup();
  buildHomePage();
});

setup.btnMenu.addEventListener('click', () => {
  console.log('btn clicked');
  buildSetup();
  buildMenuPage();
});

setup.btnAbout.addEventListener('click', () => {
  console.log('btn clicked');
  buildSetup();
  buildAboutPage();
});
