export function unmount(vnode) {
  if (vnode.$el) vnode.$el?.parentNode?.removeChild(vnode.$el);
}
