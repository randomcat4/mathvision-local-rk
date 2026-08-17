import { r as p, j as i } from "./index-BM3ZINIl.js";
import { C as _Component } from "./ComposerAttachmentCard-BVMHeN2h.js";
import "./useAttachmentContent-15uaQfvd.js";
import "./useQuery-DM2qiUYb.js";
import "./attachmentsApi-BHgxfYft.js";
import "./authFetch-DXjDztUP.js";
import "./AttachmentFileName-BwwbwxPg.js";
import "./latexAttachmentPreviewLazy-DKgWJirC.js";
import "./latexAttachment-C8umpCPo.js";
import "./ThinkingElapsedLabel-DKCKD95O.js";
import "./MarkdownHighlights-C-ZhT8z1.js";
import "./TextField-D8vc_sXz.js";
import "./index-Yb6ONXKu.js";
import "./Card-Bf0WPnf4.js";
const e = ({ attachments: r, disabled: t, onRemove: m }) =>
  r.map((o) => (
    <_Component
      attachment={o}
      disabled={t}
      onRemove={() => {
        m(o.id);
      }}
      key={o.id}
    />
  ));
const ComposerAttachmentCards = p.memo(e);
export { ComposerAttachmentCards };
