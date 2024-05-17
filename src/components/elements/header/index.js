import { h } from '../../../core/h';

function renderNavBar(items) {
  return items.map(({ name, href, src, alt }) => {
    return h('li', { class: 'nav-item' }, [
      h('a', { href, class: 'nav-link' }, [
        h('div', { class: 'd-flex flex-row align-items-center gap-2' }, [
          h('img', { src, alt }, []),
          h('div', {}, name)
        ])
      ])
    ]);
  });
}

const items = [
  {
    name: 'Map',
    href: '#map',
    src: './assets/icons/location.svg',
    alt: 'map'
  },
  {
    name: 'Resume',
    href: '#resume',
    src: './assets/icons/menu.svg',
    alt: 'resume'
  },
  {
    name: 'Time',
    href: '#time',
    src: './assets/icons/time.svg',
    alt: 'time'
  },
  {
    name: 'Activity',
    href: '#activity',
    src: './assets/icons/menu.svg',
    alt: 'activity'
  }
];

export function renderHeader() {
  const navbar = renderNavBar(items);
  return h('nav', { class: 'container' }, [
    h('ul', { class: 'nav nav-pills mb-3' }, navbar)
  ]);
}
