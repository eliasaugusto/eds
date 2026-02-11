import { readKeyValueBlock, getText, setImage } from '../../scripts/utils.js';

export default function decorate(block) {
  const data = readKeyValueBlock(block);

  const imageUrl = getText(data.image);
  const title = getText(data.title);
  const description = getText(data.description);
  const themeRaw = getText(data.theme);
  const theme = (themeRaw || '').trim().toLowerCase();

  block.innerHTML = '';
  block.classList.add('banner');
  if (theme === 'dark') block.classList.add('banner--dark');

  const wrapper = document.createElement('div');
  wrapper.className = 'banner__inner';

  setImage(imageUrl, title, wrapper, 'banner__media');

  const content = document.createElement('div');
  content.className = 'banner__content';

  if (title) {
    const h2 = document.createElement('h2');
    h2.textContent = title;
    content.append(h2);
  }

  if (description) {
    const p = document.createElement('p');
    p.textContent = description;
    content.append(p);
  }

  wrapper.append(content);
  block.append(wrapper);
}
