const o = (s) => {
    var t;
    if (s.activeRun || ((t = s.latestRun) == null ? void 0 : t.status) !== "canceled")
      return s.messages;
    const e = s.messages.at(-1);
    return (e == null ? void 0 : e.role) !== "user" ? s.messages : s.messages.slice(0, -1);
  },
  a = (s) => {
    for (let e = s.length - 1; e >= 0; e -= 1) if (s[e].role === "user") return e;
    return -1;
  },
  i = (s) => {
    const e = new Map();
    let t = 0,
      r = 0;
    for (const [n, u] of s.entries()) {
      if (u.role === "user") {
        ((t += 1), e.set(n, { queryNumber: t }));
        continue;
      }
      ((r += 1), e.set(n, { responseNumber: r }));
    }
    return e;
  },
  g = (s) => {
    var e;
    for (let t = s.length - 1; t >= 0; t -= 1)
      if (((e = s[t]) == null ? void 0 : e.role) === "assistant") return t;
    return -1;
  };
export { g as a, o as b, a as c, i as g };
