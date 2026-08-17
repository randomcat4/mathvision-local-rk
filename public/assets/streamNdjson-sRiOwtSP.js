function u(r) {
  return r;
}
async function* l(r, a) {
  var c;
  const i = (c = r.body) == null ? void 0 : c.getReader();
  if (!i) throw new Error(a);
  const s = new TextDecoder("utf-8");
  let e = "";
  const f = function* () {
    const t = e.split(`
`);
    e = t.pop() ?? "";
    for (const o of t) {
      const n = o.trim();
      n && (yield JSON.parse(n));
    }
  };
  for (;;) {
    const { done: t, value: o } = await i.read();
    if (t) break;
    const n = s.decode(o, { stream: !0 });
    n && ((e += n), yield* f());
  }
  const d = s.decode();
  (d && (e += d), e.trim() && (yield JSON.parse(e.trim())));
}
export { u as q, l as s };
