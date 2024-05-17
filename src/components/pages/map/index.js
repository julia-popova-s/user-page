import { h } from '../../../core/h';

export function renderMap(map) {
  console.log(map);
  return h(
    'div',
    {
      class: 'container'
    },
    [
      h('details', {}, [
        h('summary', {}, 'Basic map'),
        h(
          'div',
          {
            id: 'map',
            style: 'width: 600px; height: 300px'
          },
          []
        ),
        h('div', {}, 'Basic map')
      ])
    ]
  );
}
