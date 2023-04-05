import './style.css';
import buildSetup from './pageSetup';
import buildHomePage from './home';
import buildMenuPage from './menu';
import buildAboutPage from './about';

const setup = buildSetup();
buildHomePage();

function removePageContent() {
  document.querySelector('.content')?.remove();
}

setup.btnHome.addEventListener('click', () => {
  removePageContent();
  buildHomePage();
});

setup.btnMenu.addEventListener('click', () => {
  removePageContent();
  buildMenuPage();
});

setup.btnAbout.addEventListener('click', () => {
  removePageContent();
  buildAboutPage();
});
