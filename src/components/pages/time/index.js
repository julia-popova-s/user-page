import { h } from '../../../core/h';

export function renderTime(time) {
  return h('div', { class: 'container' }, [
    h('div', { class: 'nav-link' }, time.toString())
  ]);
}
