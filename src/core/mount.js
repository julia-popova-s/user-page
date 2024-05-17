export function mount(vnode, container) {
  const el = document.createElement(vnode.tag);

  for (const prop in vnode.props) {
    el.setAttribute(prop, vnode.props[prop]);
  }

  if (typeof vnode.children === 'string') {
    el.textContent = vnode.children;
  } else if (typeof vnode.children === 'object') {
    vnode.children.forEach((child) => {
      mount(child, el);
    });
  }
  container.appendChild(el);

  vnode.$el = el;
}
