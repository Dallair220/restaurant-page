export default function buildMenuPage() {
  // new page content div
  const content = document.createElement('div');
  content.className = 'content';

  const headline = document.createElement('h1');
  headline.textContent = 'MENU';
  content.appendChild(headline);

  const copy = document.createElement('p');
  copy.textContent =
    "Check out our delicious menu! From traditional Italian dishes like pasta and pizza, to fresh seafood and savory meats, we've got something for everyone. Come in and try our dishes made with the freshest, highest quality ingredients.";
  content.appendChild(copy);

  // add page content to html
  document.querySelector('.container').appendChild(content);
}
