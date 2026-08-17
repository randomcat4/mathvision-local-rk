const o = (t) => t.trim().toLowerCase().endsWith(".tex"),
  s = (t) => {
    const a = atob(t),
      n = new Uint8Array(a.length);
    for (let e = 0; e < a.length; e += 1) n[e] = a.charCodeAt(e);
    return new TextDecoder("utf-8", { fatal: !1 }).decode(n);
  };
export { s as d, o as i };
