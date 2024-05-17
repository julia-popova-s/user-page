export function unmount(vnode) {
  vnode.$el?.parentNode?.removeChild(vnode.$el);
}
