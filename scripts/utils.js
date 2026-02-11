function normalizeKey(text) {
  return (text || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-');
}

function readKeyValueBlock(block) {
  const data = {};
  [...block.children].forEach((row) => {
    const keyEl = row.children?.[0];
    const valueEl = row.children?.[1];

    const key = normalizeKey(keyEl?.textContent);
    if (!key || !valueEl) return;

    data[key] = valueEl;
  });
  return data;
}

function getText(el) {
  return el?.textContent?.trim() || '';
}

const setImage = (imgUrl, imgAlt, wrapEl, wrapClass) => {
  if (!imgUrl) { return; }

  const media = document.createElement('div');
  media.className = wrapClass;

  const img = document.createElement('img');
  img.src = imgUrl;
  img.alt = imgAlt || '';
  img.loading = 'lazy';
  img.decoding = 'async';

  media.append(img);
  wrapEl.append(media);
};

export {
  readKeyValueBlock,
  getText,
  setImage,
};
