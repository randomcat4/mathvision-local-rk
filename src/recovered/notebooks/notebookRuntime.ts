import {
  r as o,
  p as be,
  q as we,
  ax as J,
  aj as ee,
  c2 as U,
  n as Fe,
  c3 as ft,
  c4 as Dt,
} from "../../chunks/index-BM3ZINIl.jsx";
import { p as no } from "../../chunks/chatsApi-Ck-JYICO.js";
import { u as oa } from "../../chunks/useQuery-DM2qiUYb.js";
import { u as Be } from "../../chunks/useMutation-C1SgG9wr.js";

var pa = (e, t, a) =>
  t in e
    ? Object.defineProperty(e, t, { enumerable: true, configurable: true, writable: true, value: a })
    : (e[t] = a);
var ot = (e, t, a) => pa(e, typeof t != "symbol" ? t + "" : t, a);

const ps = (e) => {
  switch (e.kind) {
    case "markdown":
      return e;
    case "artifact":
      return {
        kind: e.kind,
        attachmentId: e.attachment_id,
        artifactKind:
          e.artifact_kind === "math_scene"
            ? "scene"
            : e.artifact_kind === "data"
              ? "file"
              : e.artifact_kind,
        name: e.name,
        title: e.title,
        altText: e.alt_text,
        mimeType: e.mime_type,
        sizeBytes: e.size_bytes,
        preview: e.preview,
      };
    case "error":
      return {
        kind: e.kind,
        name: e.name,
        message: e.message,
        traceback: e.traceback,
      };
  }
};
const ms = (e) => {
  const t = e.result_metadata;
  const a = t.response ?? null;
  if (a && a.operation !== "compute" && a.operation !== "visualization") {
    throw new Error(
      `Notebook run '${e.id}' returned an unsupported structured operation.`,
    );
  }
  return {
    id: e.id,
    cellId: e.cell_id,
    status: e.status,
    executionCount: e.execution_count,
    reasoning: e.reasoning,
    structuredResponse: a,
    toolCalls: (t.tool_calls ?? []).flatMap((n) => [
      {
        provider: "mathvision",
        api: "opencode",
        toolType: "function_call",
        toolName: n.tool,
        callId: n.call_id,
        status: n.status,
        arguments: n.arguments,
      },
      {
        provider: "mathvision",
        api: "opencode",
        toolType: "function_call_output",
        toolName: n.tool,
        callId: n.call_id,
        status: n.status,
        arguments: {
          output: n.output ?? null,
        },
      },
    ]),
    outputs: e.outputs.map(ps),
    errorMessage: e.error_message,
    durationMs: e.duration_ms,
    startedAt: e.started_at,
    finishedAt: e.finished_at,
    createdAt: e.created_at,
  };
};
const Cs = (e) => ({
  id: e.id,
  notebookId: e.notebook_id,
  operation: e.operation,
  source: e.source,
  position: e.position,
  revision: e.revision,
  isStale: e.is_stale,
  latestRun: e.latest_run ? ms(e.latest_run) : null,
  createdAt: e.created_at,
  lastUpdated: e.last_updated,
});
const ra = (e) => ({
  id: e.id,
  title: e.title,
  folderId: e.folder_id,
  revision: e.revision,
  cellCount: e.cell_count,
  isPinned: e.is_pinned,
  pinnedAt: e.pinned_at,
  createdAt: e.created_at,
  lastUpdated: e.last_updated,
});
const le = (e) => ({
  ...ra(e),
  userId: e.user_id,
  executionCount: e.execution_count,
  cells: e.cells.map(Cs).sort((t, a) => t.position - a.position),
});
const te = () => "notebooks";
const fs = 500;
const bs = (e) =>
  no({
    pageSize: fs,
    itemLabel: "Notebook",
    fetchPage: async ({ limit: t, offset: a }) =>
      (
        await J.get(
          ee,
          te(),
          {
            limit: t,
            offset: a,
          },
          e,
        )
      ).map(ra),
  });
const pt = (e, t) =>
  J.get(ee, `${te()}/${encodeURIComponent(e)}`, undefined, t).then(le);
const xs = (e) =>
  J.post(ee, te(), {
    ...(e.title !== undefined
      ? {
          title: e.title,
        }
      : {}),
    ...(e.folderId !== undefined
      ? {
          folder_id: e.folderId,
        }
      : {}),
  }).then(le);
const la = (e, t) =>
  J.patch(ee, `${te()}/${encodeURIComponent(e)}`, {
    ...(t.title !== undefined
      ? {
          title: t.title,
        }
      : {}),
    ...(t.isPinned !== undefined
      ? {
          is_pinned: t.isPinned,
        }
      : {}),
    expected_revision: t.expectedRevision,
  }).then(le);
const gs = (e, t) =>
  J.patch(ee, `${te()}/${encodeURIComponent(e)}/folder`, {
    folder_id: t.folderId,
  }).then(le);
const vs = (e, t) =>
  J.delete(ee, `${te()}/${encodeURIComponent(e)}`, {
    expected_revision: t,
  }).then(() => {});
const Ss = (e, t) =>
  J.post(ee, `${te()}/${encodeURIComponent(e)}/cells`, {
    operation: t.operation,
    source: t.source,
    ...(t.position !== undefined
      ? {
          position: t.position,
        }
      : {}),
    expected_revision: t.expectedRevision,
  }).then(le);
const ys = (e, t, a) =>
  J.patch(
    ee,
    `${te()}/${encodeURIComponent(e)}/cells/${encodeURIComponent(t)}`,
    {
      ...(a.operation !== undefined
        ? {
            operation: a.operation,
          }
        : {}),
      ...(a.source !== undefined
        ? {
            source: a.source,
          }
        : {}),
      ...(a.position !== undefined
        ? {
            position: a.position,
          }
        : {}),
      expected_revision: a.expectedRevision,
    },
  ).then(le);
const ws = (e, t, a) =>
  J.delete(
    ee,
    `${te()}/${encodeURIComponent(e)}/cells/${encodeURIComponent(t)}`,
    {
      expected_revision: a,
    },
  ).then(le);
const ks = (e, t, a) =>
  J.patch(ee, `${te()}/${encodeURIComponent(e)}/cells/order`, {
    cell_ids: t,
    expected_revision: a,
  }).then(le);
const Is = (e, t, a) =>
  J.post(
    ee,
    `${te()}/${encodeURIComponent(e)}/cells/${encodeURIComponent(t)}/run`,
    {
      expected_revision: a,
    },
  ).then(le);
const Ts = (e, t, a) =>
  J.post(
    ee,
    `${te()}/${encodeURIComponent(e)}/cells/${encodeURIComponent(t)}/cancel`,
    {
      run_id: a,
    },
  ).then(le);
const Ai = ["compute", "visualize"];
const Ps = 255;
const Rs = (e) =>
  (e == null
    ? undefined
    : e.cells.some((t) => {
        var a;
        return ((a = t.latestRun) == null ? undefined : a.status) === "running";
      })) ?? false;
const zt = {
  running: 1,
  completed: 2,
  failed: 2,
  canceled: 2,
};
const Kt = (e) => {
  if (!e.finishedAt) {
    return -1;
  }
  const t = new Date(e.finishedAt).getTime();
  if (Number.isNaN(t)) {
    throw new Error("Notebook run finished_at must be a valid timestamp.");
  }
  return t;
};
const As = (e, t) => {
  var l;
  var r;
  if (!e || !t) {
    if (e) {
      return 1;
    } else if (t) {
      return -1;
    } else {
      return 0;
    }
  }
  const a = (e.executionCount ?? -1) - (t.executionCount ?? -1);
  if (a !== 0) {
    return a;
  }
  const n = zt[e.status] - zt[t.status];
  if (n !== 0) {
    return n;
  }
  const i = Kt(e) - Kt(t);
  if (i !== 0) {
    return i;
  } else {
    return (
      (((l = e.reasoning) == null ? undefined : l.length) ?? 0) -
      (((r = t.reasoning) == null ? undefined : r.length) ?? 0)
    );
  }
};
const _s = (e, t) => {
  const a = new Map(e.cells.map((i) => [i.id, i]));
  let n = false;
  for (const i of t.cells) {
    const l = a.get(i.id);
    if (!l) {
      if (e.revision > t.revision) {
        continue;
      }
      return -1;
    }
    const r = As(l.latestRun, i.latestRun);
    if (r < 0) {
      return -1;
    }
    if (r > 0) {
      n = true;
    }
  }
  if (n) {
    return 1;
  } else {
    return 0;
  }
};
const Ls = (e, t) => {
  const a = e.revision - t.revision;
  if (a < 0) {
    return a;
  }
  const n = e.executionCount - t.executionCount;
  if (a === 0 && n < 0) {
    return n;
  }
  const i = _s(e, t);
  if (i < 0) {
    return i;
  } else if (a > 0 || n > 0) {
    return 1;
  } else {
    return i;
  }
};
const Pe = (e, t) => e === undefined || Ls(t, e) > 0;
const Qe = (e) =>
  [...e].sort((t, a) => {
    if (t.isPinned !== a.isPinned) {
      if (t.isPinned) {
        return -1;
      } else {
        return 1;
      }
    }
    const n =
      new Date(a.pinnedAt ?? 0).getTime() - new Date(t.pinnedAt ?? 0).getTime();
    if (n !== 0) {
      return n;
    } else {
      return (
        new Date(a.lastUpdated).getTime() - new Date(t.lastUpdated).getTime()
      );
    }
  });
const Wt = (e) => {
  const t = new Date(e.lastUpdated).getTime();
  if (Number.isNaN(t)) {
    throw new Error("Notebook last_updated must be a valid timestamp.");
  }
  return t;
};
const gt = (e, t) => {
  const a = e.revision - t.revision;
  if (a !== 0) {
    return a;
  } else {
    return Wt(e) - Wt(t);
  }
};
const Ds = (e, t) => {
  const a = e ?? [];
  const n = a.find((i) => i.id === t.id);
  if (n) {
    if (gt(t, n) <= 0) {
      return a;
    } else {
      return Qe(a.map((i) => (i.id === t.id ? t : i)));
    }
  } else {
    return Qe([...a, t]);
  }
};
const js = (e, t) => {
  const a = new Map((e ?? []).map((n) => [n.id, n]));
  return Qe(
    t.map((n) => {
      const i = a.get(n.id);
      if (i && gt(n, i) <= 0) {
        return i;
      } else {
        return n;
      }
    }),
  );
};
const Os =
  "Review and dismiss the notebook conflict before trying this action again.";
class Vt extends Error {
  constructor() {
    super(Os);
    this.name = "NotebookConflictBlockedActionError";
  }
}
class Es {
  constructor() {
    ot(this, "tail", Promise.resolve());
    ot(this, "isConflictBlocked", false);
  }
  enqueue(t) {
    if (this.isConflictBlocked) {
      return Promise.reject(new Vt());
    }
    const a = () => {
      if (this.isConflictBlocked) {
        throw new Vt();
      }
      return t();
    };
    const n = this.tail.then(a, a);
    this.tail = n.then(
      () => {},
      () => {},
    );
    return n;
  }
  blockForConflict() {
    this.isConflictBlocked = true;
  }
  resolveConflict() {
    this.isConflictBlocked = false;
  }
}
const Fs = 30000;
const Bs = 1000;
const Z = (e, t) =>
  Promise.all([
    e.cancelQueries({
      queryKey: U.list(),
      exact: true,
    }),
    ...(t
      ? [
          e.cancelQueries({
            queryKey: U.detail(t),
            exact: true,
          }),
        ]
      : []),
  ]);
const ca = (e) => ({
  id: e.id,
  title: e.title,
  folderId: e.folderId,
  revision: e.revision,
  cellCount: e.cellCount,
  isPinned: e.isPinned,
  pinnedAt: e.pinnedAt,
  createdAt: e.createdAt,
  lastUpdated: e.lastUpdated,
});
const vt = (e, t) => Ds(e, ca(t));
const Ns = () => {
  const e = be();
  return oa({
    queryKey: U.list(),
    queryFn: async ({ signal: t }) => {
      const a = await bs(t);
      return js(e.getQueryData(U.list()), a);
    },
    staleTime: Fs,
  });
};
const _i = (e) => {
  const t = be();
  const a = U.detail(e);
  return oa({
    queryKey: U.detail(e),
    queryFn: async ({ signal: n }) => {
      if (!e) {
        throw new Error("Notebook id is required to load a notebook.");
      }
      const i = await pt(e, n);
      const l = t.getQueryData(a);
      if (Pe(l, i)) {
        return i;
      }
      if (!l) {
        throw new Error(
          "Notebook snapshot comparison lost the loaded response.",
        );
      }
      return l;
    },
    enabled: e !== null,
    refetchInterval: (n) => (Rs(n.state.data) ? Bs : false),
  });
};
const Ms = () => {
  const e = be();
  return Be({
    mutationFn: async (t = {}) => {
      await Z(e);
      return xs(t);
    },
    onSuccess: async (t) => {
      await Z(e, t.id);
      e.setQueryData(U.detail(t.id), t);
      e.setQueryData(U.list(), (a) => vt(a, t));
      Fe({
        notebookId: t.id,
        folderId: t.folderId,
        notebooksChanged: true,
        workspaceExplorerChanged: true,
      });
    },
  });
};
const qs = () => {
  const e = be();
  return Be({
    mutationFn: async ({ notebookId: t, input: a }) => {
      await Z(e, t);
      return la(t, a);
    },
    onSuccess: async (t) => {
      await Z(e, t.id);
      e.setQueryData(U.detail(t.id), (a) => (Pe(a, t) ? t : a));
      e.setQueryData(U.list(), (a) => vt(a, t));
      Fe({
        notebookId: t.id,
        folderId: t.folderId,
        notebooksChanged: true,
        workspaceExplorerChanged: true,
      });
    },
    onError: (t, a) => {
      if (ft(t)) {
        e.invalidateQueries({
          queryKey: U.list(),
        });
        e.invalidateQueries({
          queryKey: U.detail(a.notebookId),
          exact: true,
        });
      }
    },
  });
};
const $s = () => {
  const e = be();
  return Be({
    mutationFn: async ({ notebookId: t, folderId: a }) => {
      await Z(e, t);
      return gs(t, {
        folderId: a,
      });
    },
    onSuccess: async (t, a) => {
      await Z(e, t.id);
      e.setQueryData(U.detail(t.id), (n) =>
        !n || Pe(n, t)
          ? t
          : {
              ...n,
              folderId: t.folderId,
              lastUpdated: t.lastUpdated,
            },
      );
      e.setQueryData(U.list(), (n = []) => {
        const i = ca(t);
        const l = n.find((c) => c.id === t.id);
        const r =
          l && gt(l, i) > 0
            ? {
                ...l,
                folderId: i.folderId,
                lastUpdated: l.lastUpdated,
              }
            : i;
        return Qe(l ? n.map((c) => (c.id === t.id ? r : c)) : [...n, r]);
      });
      Fe({
        folderIds: [a.previousFolderId, a.folderId],
        notebookId: t.id,
        notebooksChanged: true,
        workspaceExplorerChanged: true,
      });
    },
  });
};
const Us = () => {
  const e = be();
  return Be({
    mutationFn: async ({ notebookId: t, expectedRevision: a }) => {
      await Z(e, t);
      return vs(t, a);
    },
    onSuccess: async (t, a) => {
      await Z(e, a.notebookId);
      e.removeQueries({
        queryKey: U.detail(a.notebookId),
      });
      e.setQueryData(U.list(), (n = []) =>
        n.filter((i) => i.id !== a.notebookId),
      );
      Fe({
        removedNotebookIds: [a.notebookId],
        notebooksChanged: true,
        workspaceExplorerChanged: true,
      });
    },
    onError: (t) => {
      if (ft(t)) {
        e.invalidateQueries({
          queryKey: U.list(),
        });
      }
    },
  });
};
const zs = (e, t, a) => {
  switch (a.kind) {
    case "update-notebook":
      return la(e, {
        ...a.input,
        expectedRevision: t,
      });
    case "create-cell":
      return Ss(e, {
        ...a.input,
        expectedRevision: t,
      });
    case "update-cell":
      return ys(e, a.cellId, {
        ...a.input,
        expectedRevision: t,
      });
    case "delete-cell":
      return ws(e, a.cellId, t);
    case "reorder-cells":
      return ks(e, a.cellIds, t);
    case "run-cell":
      return Is(e, a.cellId, t);
    case "cancel-run":
      return Ts(e, a.cellId, a.runId);
  }
};
const Li = (e) => {
  const t = be();
  const a = o.useRef(e);
  const n = o.useRef(new Es());
  const [i, l] = o.useState(0);
  const [r, c] = o.useState(0);
  const [p, u] = o.useState(null);
  if (Pe(a.current, e)) {
    a.current = e;
  }
  const C = Be({
    mutationFn: ({ action: g, revision: v }) => zs(e.id, v, g),
  });
  const d = o.useCallback(
    (g) => {
      const v = t.setQueryData(U.detail(g.id), (k) => (Pe(k, g) ? g : k));
      if (v && Pe(a.current, v)) {
        a.current = v;
      }
      if (v) {
        t.setQueryData(U.list(), (k) => vt(k, v));
        Fe({
          notebookId: v.id,
          folderId: v.folderId,
          notebooksChanged: true,
          workspaceExplorerChanged: true,
        });
      }
    },
    [t],
  );
  const b = o.useCallback(
    (g) => {
      const v = g.kind === "run-cell";
      const k = v || g.kind === "cancel-run";
      const T = async () => {
        l((h) => h + 1);
        if (v) {
          c((h) => h + 1);
        }
        try {
          await Z(t, e.id);
          const h = await C.mutateAsync({
            action: g,
            revision: a.current.revision,
          });
          await Z(t, e.id);
          d(h);
          return h;
        } catch (h) {
          if (!ft(h)) {
            if (k) {
              const m = await pt(e.id);
              await Z(t, e.id);
              d(m);
            }
            throw h;
          }
          n.current.blockForConflict();
          try {
            const m = await pt(e.id);
            await Z(t, e.id);
            d(m);
            u({
              currentRevision: h instanceof Dt ? h.currentRevision : m.revision,
              message: we(h),
            });
          } catch (m) {
            u({
              currentRevision: h instanceof Dt ? h.currentRevision : null,
              message: `The notebook changed elsewhere, and its latest version could not be loaded: ${we(m)}`,
            });
            throw m;
          }
          throw h;
        } finally {
          l((h) => h - 1);
          if (v) {
            c((h) => h - 1);
          }
        }
      };
      return n.current.enqueue(T);
    },
    [C, d, e.id, t],
  );
  const x = o.useCallback(() => {
    n.current.resolveConflict();
    u(null);
  }, []);
  return {
    updateNotebook: (g) =>
      b({
        kind: "update-notebook",
        input: g,
      }),
    createCell: (g) =>
      b({
        kind: "create-cell",
        input: {
          operation: g,
          source: "",
        },
      }),
    updateCell: (g, v) =>
      b({
        kind: "update-cell",
        cellId: g,
        input: v,
      }),
    deleteCell: (g) =>
      b({
        kind: "delete-cell",
        cellId: g,
      }),
    reorderCells: (g) =>
      b({
        kind: "reorder-cells",
        cellIds: g,
      }),
    runCell: (g) =>
      b({
        kind: "run-cell",
        cellId: g,
      }),
    cancelRun: (g, v) =>
      b({
        kind: "cancel-run",
        cellId: g,
        runId: v,
      }),
    conflict: p,
    clearConflict: x,
    isBusy: i > 0,
    isRunning: r > 0,
  };
};

export {
  Ai as NOTEBOOK_OPERATIONS,
  Ps as NOTEBOOK_TITLE_MAX_LENGTH,
  Rs as hasRunningNotebookCell,
  Ns as useNotebooks,
  _i as useNotebook,
  Ms as useCreateNotebook,
  qs as useUpdateNotebook,
  $s as useMoveNotebook,
  Us as useDeleteNotebook,
  Li as useNotebookActionQueue,
};
