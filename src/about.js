export default function buildAboutPage() {
  // new page content div
  const content = document.createElement('div');
  content.className = 'content';

  const headline = document.createElement('h1');
  headline.textContent = 'ABOUT';
  content.appendChild(headline);

  const copy = document.createElement('p');
  copy.textContent =
    'Welcome to Ristorante Incredibile! We are a family-owned Italian restaurant with a passion for bringing the flavors of Italy to your table. Our commitment to using only the freshest, highest-quality ingredients ensures that every dish is a masterpiece. Come and enjoy our modern twist on traditional Italian cuisine today!';
  content.appendChild(copy);

  // add page content to html
  document.querySelector('.container').appendChild(content);
}
