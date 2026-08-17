const d = (t, c) => {
  const o = URL.createObjectURL(t),
    e = document.createElement("a");
  ((e.href = o),
    (e.download = c),
    document.body.appendChild(e),
    e.click(),
    e.remove(),
    window.setTimeout(() => URL.revokeObjectURL(o), 0));
};
export { d };
