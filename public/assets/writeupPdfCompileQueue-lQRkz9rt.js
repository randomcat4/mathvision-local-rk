import { i as n, g as c } from "./useLatexQueries-DBpKOPUv.js";
const p = 700;
let a = Promise.resolve();
const m = () =>
    new Promise((e) => {
      setTimeout(e, p);
    }),
  s = (e) => c(e),
  P = async (e) => {
    let o = await s(e);
    for (; n(o);) (await m(), (o = await s(e)));
    return o;
  },
  w = async (e) => {
    const o = a;
    let i = () => {};
    const r = new Promise((t) => {
      i = t;
    });
    ((a = o.then(
      () => r,
      () => r,
    )),
      await o);
    try {
      const t = await e(),
        u = P(t.id);
      return (
        u
          .catch((l) => {
            console.warn("Could not monitor queued writeup PDF compile job.", l);
          })
          .finally(i),
        { job: t, settledJobPromise: u }
      );
    } catch (t) {
      throw (i(), t);
    }
  };
export { w as e };
