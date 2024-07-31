function r(i, l, t) {
  let e = [...i], n = t;
  return t >= e.length && (n = e.length), t < 0 && (n = 0), e.splice(n, 0, l), e;
}
export {
  r as default
};
