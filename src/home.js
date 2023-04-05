export default function buildHomePage() {
  // new page content div
  const content = document.createElement('div');
  content.className = 'content';

  const headline = document.createElement('h1');
  headline.textContent = 'HOME';
  content.appendChild(headline);

  const copy = document.createElement('p');
  copy.textContent =
    'Experience the taste of Italy with Ristorante Incredibile. Every dish is made with the freshest, highest-quality ingredients to bring you a modern twist on traditional Italian cuisine. Join us for an unforgettable dining experience. Buon appetito!';
  content.appendChild(copy);

  // add page content to html
  document.querySelector('.container').appendChild(content);
}
