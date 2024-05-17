import { h } from '../../../core/h';

export function renderResume() {
  return h(
    'div',
    {
      class: 'container'
    },
    [
      h('div', {}, [
        h('h1', {}, 'Resume'),
        h(
          'img',
          {
            src: 'assets/images/photo.png',
            alt: 'photo',
            class: 'mb-2'
          },
          []
        ),
        h('div', {}, [
          h('p', {}, 'Contacts: '),
          h('ul', {}, [h('li', {}, 'email'), h('li', {}, 'phone')])
        ]),
        h('div', {}, [
          h('p', {}, 'Skils: '),
          h('ul', {}, [h('li', {}, 'JS'), h('li', {}, 'React')])
        ])
      ])
    ]
  );
}
