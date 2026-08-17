import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { extname, resolve } from "node:path";

const chunkRoot = resolve("recovered/chunks");
const jsxRoot = resolve("recovered/named");
const sourceRoot = resolve("src");
const sourceChunkRoot = resolve(sourceRoot, "chunks");
const sourceAssetRoot = resolve(sourceRoot, "assets");
const publicAssetRoot = resolve("public/assets");
const recoveredViewRoot = resolve(sourceRoot, "views/recovered");
const applicationModules = new Set(
  (await readFile(resolve("reports/application-modules.txt"), "utf8"))
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean),
);
const compatibilityModules = [
  "streamNdjson-sRiOwtSP",
  "chatMessageSelectors-CRUAC26Y",
  "latexTextPatterns-B444ow6Q",
  "latexNaming-BAjxoZ-G",
  "downloadBlob-CusuPFei",
  "chatsApi-Ck-JYICO",
  "chatQueryCache-DOdNJrP_",
  "authFetch-DXjDztUP",
  "attachmentsApi-BHgxfYft",
  "ChatInteractionOverrides-dyfOoEnd",
  "ComposerQuote-2g1HGk7u",
  "ComposerAttachmentCards-CNJKQcrr",
  "latexProjectChatMessages-Cty9Jluh",
  "latexAttachment-C8umpCPo",
  "usePdfObjectUrl-Cd7ol8-S",
  "useControlOrMetaShortcut-DL7j4WBM",
  "latexWorkspacePanelVisibility-BotBQ6b-",
  "latexWriteup-2lgFk4Az",
  "writeupPdfCompileQueue-lQRkz9rt",
  "useAttachmentContent-15uaQfvd",
  "sampleWriteup-lHlzvOHA",
  "usePdfDocument-D5PFNoxR",
  "useGetUserType-DlzkERhz",
  "GeneratedArtifactContent-DZ9NE8JY",
  "VisualizationStructuredSection-BK_R26-B",
  "AssistantMessageMetadata-BCGLTOhc",
  "account-disabled-CVRHuqTs",
  "waitlist-D54NJ_xG",
  "privacy-4xLeU8-0",
  "terms-Bjf0FKSt",
  "share-_g1t1y30",
  "DebouncedTextField-DEJkKI5N",
  "CopyButton-BcOsqrNJ",
  "AttachmentFileName-BwwbwxPg",
  "ReportFeedbackDialog-DzymJyQD",
  "TimeRelative-HYP_-RcH",
  "useResizablePanelValue-D_NwbF9E",
  "useResizablePanelWidth-DfMwOMGi",
  "useLatexProjectCreation-BfZAUJk-",
  "WriteupDisplayControls-E0ZIJhIu",
  "PersonalizationDialog-SAjscOQ8",
  "QuotedSelection-JUU54BvY",
  "ComposerAttachmentCard-BVMHeN2h",
  "PdfCanvasViewerControls-CKiN42mP",
  "PdfCanvasViewer-jW4Ex2Pm",
  "PdfContinuousCanvasViewer-CbJuZJkv",
  "LatexAttachmentPreviewDrawer-DQLImhiz",
  "StructuredMarkdown-DAWLLRpf",
  "AccessStatusPage-BWPFK5HR",
  "ChatPanelMoreMenuContent-D1GGdgpe",
  "accept-2s0vxcCe",
  "AgentExecutionResult-MyNStJTJ",
  "ComputeStructuredSection-C40NdNj6",
  "MessageAttachments-nUg1LIry",
  "dialogs-D-Okwmpa",
  "LatexDocumentSelector-CsoCVGim",
  "documents-DhCTfQKt",
  "_chatId-BHWou8be",
  "FloatingFeatureAnnouncements-BUSQvA1p",
  "ThinkingElapsedLabel-DKCKD95O",
  "tour-guide.lazy-CGN25M6e",
  "WriteupStructuredResponsePanel-CPg9TOt6",
  "ThreadPendingAssistantMessage-SEoTs7JJ",
  "LatexDocumentCreateDrawer-Urvzcv4B",
  "LatexProjectChatPanel-DKAp7Vbq",
  "ProChatCallGraphDialog-BIa-XWUO",
  "AssistantStructuredResponse-CZDMu2rs",
  "LatexProjectFolderExpansionContext-DKFyp-6E",
  "UserMessage-DN7iPijg",
  "DeferredThreadMessageList-BRB1t-55",
  "NotebookWorkspaceContent-Cmckz3Qo",
  "WorkspaceExplorer-BkU1kYog",
  "_problemId.lazy-1puKhYPi",
  "public---7j118Y",
  "route.lazy-B7bltzFg",
];
const compatibilityFileNames = new Set(compatibilityModules.map((name) => `${name}.js`));
const recoveredViewModules = new Set([
  "UserMessage-DN7iPijg",
  "DeferredThreadMessageList-BRB1t-55",
  "NotebookWorkspaceContent-Cmckz3Qo",
  "WorkspaceExplorer-BkU1kYog",
  "_problemId.lazy-1puKhYPi",
  "public---7j118Y",
  "route.lazy-B7bltzFg",
]);

await rm(sourceChunkRoot, { recursive: true, force: true });
await rm(sourceAssetRoot, { recursive: true, force: true });
await rm(publicAssetRoot, { recursive: true, force: true });
await mkdir(sourceChunkRoot, { recursive: true });
await mkdir(sourceAssetRoot, { recursive: true });
await mkdir(publicAssetRoot, { recursive: true });

const files = (await readdir(chunkRoot)).sort();
for (const name of files) {
  const extension = extname(name).toLowerCase();
  if (extension === ".js") {
    if (compatibilityFileNames.has(name)) continue;
    const isApplicationModule = applicationModules.has(name);
    const inputPath = isApplicationModule
      ? resolve(jsxRoot, name.replace(/\.js$/, ".jsx"))
      : resolve(chunkRoot, name);
    let code = await readFile(inputPath, "utf8");
    code = rewriteApplicationImports(
      code,
      applicationModules,
      compatibilityFileNames,
      recoveredViewModules,
    );
    if (name === "index-BM3ZINIl.js") {
      code = removeLogoComponent(code);
      code = allowLocalDevelopmentOrigin(code);
      code = installLocalOnlyIdentity(code);
      code = removeBundledKeycloak(code);
      code = installLocalizationBootstrap(code);
    }
    if (name === "ChatPanelMoreMenu-B1X9SOWN.js") code = removeMenuLogoFromJsx(code);
    if (name === "WorkspaceSidePanelFrame-BElEFQhq.js") code = installLanguageSettings(code);
    // Recovered production chunks stay as an explicit, frozen JSX compatibility
    // layer.  Maintainable TypeScript modules replace these one at a time via the
    // compatibilityModules table above; pretending the untouched bundle is typed
    // source would make the type-checking result meaningless.
    const outputName = isApplicationModule ? name.replace(/\.js$/, ".jsx") : name;
    await writeFile(resolve(sourceChunkRoot, outputName), code, "utf8");
    continue;
  }

  await cp(resolve(chunkRoot, name), resolve(sourceAssetRoot, name));
}

for (const moduleName of compatibilityModules) {
  if (recoveredViewModules.has(moduleName)) {
    let code = await readFile(resolve(recoveredViewRoot, `${moduleName}.tsx`), "utf8");
    code = code.replaceAll("../../vendor/recovered/", "../vendor/recovered/");
    code = code.replaceAll("../../recovered/notebooks/", "../recovered/notebooks/");
    code = code.replaceAll("../../recovered/chat/", "../recovered/chat/");
    code = rewriteApplicationImports(
      code,
      applicationModules,
      compatibilityFileNames,
      recoveredViewModules,
    );
    await writeFile(resolve(sourceChunkRoot, `${moduleName}.tsx`), code, "utf8");
    continue;
  }
  await cp(
    resolve(sourceRoot, `compat/${moduleName}.ts`),
    resolve(sourceChunkRoot, `${moduleName}.js`),
  );
}

for (const name of files) {
  const sourcePath = resolve(chunkRoot, name);
  const publicPath = resolve(publicAssetRoot, name);
  if (extname(name).toLowerCase() !== ".js") {
    await cp(sourcePath, publicPath);
    continue;
  }

  let code = await readFile(sourcePath, "utf8");
  if (name === "index-BM3ZINIl.js") {
    code = removeLogoFromCompiledEntry(code);
    code = allowLocalDevelopmentOrigin(code);
  }
  if (name === "ChatPanelMoreMenu-B1X9SOWN.js") code = removeMenuLogoFromCompiledJs(code);
  await writeFile(publicPath, code, "utf8");
}

function rewriteApplicationImports(code, modules, compatibilityNames, typedViews) {
  for (const name of modules) {
    if (typedViews.has(name.replace(/\.js$/, ""))) {
      const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      code = code.replace(new RegExp(`(\\./)${escaped}`, "g"), `$1${name.replace(/\.js$/, ".tsx")}`);
      continue;
    }
    if (compatibilityNames.has(name)) continue;
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    code = code.replace(new RegExp(`(\\./)${escaped}`, "g"), `$1${name.replace(/\.js$/, ".jsx")}`);
  }
  return code;
}

function removeLogoComponent(code) {
  const start = code.indexOf('const Z6 = "/assets/math-vision-logo-BZDuanMC.svg";');
  const end = code.indexOf("const Tu =", start);
  if (start < 0 || end < 0) throw new Error("Logo component boundary was not found in the recovered entry chunk.");
  return `${code.slice(0, start)}function _Component39() {\n  return null;\n}\n${code.slice(end)}`;
}

function installLocalizationBootstrap(code) {
  const rootMarker = 'const $H = k5.createRoot(document.getElementById("root"));';
  if (!code.includes(rootMarker)) {
    throw new Error("Application root marker was not found for localization bootstrap.");
  }
  return `import { initializeLocalization } from "../i18n/localization.js";\n${code.replace(
    rootMarker,
    `initializeLocalization();\n${rootMarker}`,
  )}`;
}

function installLanguageSettings(code) {
  const themeHook = "  const { activeColorScheme: h, activeColorSchemeLabel: c } = xt();";
  const themeState = '  const J = y === "theme";';
  const nextSection = "            {ft && (";
  for (const marker of [themeHook, themeState, nextSection]) {
    if (!code.includes(marker)) {
      throw new Error(`Language settings seam was not found: ${marker}`);
    }
  }
  const languageMenu = `            <S
              sx={$e}
              onMouseEnter={() => {
                U("language");
              }}
              onMouseLeave={ee}
            >
              <_Component8
                type="button"
                variant="text"
                color="secondary"
                fullWidth={true}
                aria-controls={languageMenuOpen ? "sidebar-profile-language-menu" : undefined}
                aria-haspopup="menu"
                aria-expanded={languageMenuOpen ? true : undefined}
                startIcon={
                  <S component="span" sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "-0.04em" }}>
                    文/A
                  </S>
                }
                endIcon={<_Component27 fontSize="small" />}
                sx={[w, languageMenuOpen && qe]}
                onFocus={() => {
                  U("language");
                }}
                onClick={() => {
                  B(() => {
                    U("language");
                  });
                }}
              >
                {activeLanguage === "zh-CN" ? "语言：简体中文" : "Language: English"}
              </_Component8>
              {languageMenuOpen && (
                <_Component29
                  variant="floating"
                  sx={[Oe(i), za]}
                  onMouseEnter={() => {
                    U("language");
                  }}
                  onMouseLeave={ee}
                >
                  <_Component28
                    id="sidebar-profile-language-menu"
                    dense={true}
                    aria-label={activeLanguage === "zh-CN" ? "选择语言" : "Choose language"}
                    sx={Wa}
                  >
                    {[
                      { value: "zh-CN", primary: "简体中文", secondary: "Chinese (Simplified)" },
                      { value: "en", primary: "English", secondary: "英文" },
                    ].map((option) => {
                      const selected = activeLanguage === option.value;
                      return (
                        <Nt
                          role="menuitemradio"
                          aria-checked={selected}
                          selected={selected}
                          key={option.value}
                          onClick={() => {
                            setAppLanguage(option.value);
                            f(null);
                          }}
                        >
                          <_Component24>
                            <S component="span" sx={{ fontSize: "0.72rem", fontWeight: 700 }}>
                              {option.value === "zh-CN" ? "文" : "A"}
                            </S>
                          </_Component24>
                          <_Component25 primary={option.primary} secondary={option.secondary} />
                          {selected && <_Component26 aria-hidden="true" size={16} />}
                        </Nt>
                      );
                    })}
                  </_Component28>
                </_Component29>
              )}
            </S>
`;
  return `import { useLanguage } from "../i18n/localization.js";\n${code
    .replace(
      themeHook,
      `${themeHook}\n  const { language: activeLanguage, setLanguage: setAppLanguage } = useLanguage(g);`,
    )
    .replace(themeState, `${themeState}\n  const languageMenuOpen = y === "language";`)
    .replace(nextSection, `${languageMenu}${nextSection}`)}`;
}

function allowLocalDevelopmentOrigin(code) {
  const productionCondition = "if (window.location.origin !== Dx)";
  const localCondition =
    'if (window.location.origin !== Dx && window.location.hostname !== "127.0.0.1" && window.location.hostname !== "localhost")';
  if (!code.includes(productionCondition)) {
    throw new Error("Production-origin guard was not found in the recovered entry chunk.");
  }
  return code.replace(productionCondition, localCondition);
}

function installLocalOnlyIdentity(code) {
  const authStart = "let Px;\nconst kt = new M5({";
  const authEnd = "function l_(e) {";
  const start = code.indexOf(authStart);
  const end = code.indexOf(authEnd, start);
  if (start < 0 || end < 0) {
    throw new Error("Remote authentication block was not found in the recovered entry chunk.");
  }
  const localIdentity = `const localIdentity = Object.freeze({
  sub: "local-user",
  preferred_username: "local-user",
  given_name: "Local",
  family_name: "User",
  email: "",
});
const kt = {
  token: "local-session",
  tokenParsed: localIdentity,
  authenticated: true,
  login: async () => {},
  logout: async () => {},
  updateToken: async () => true,
  createAccountUrl: () => window.location.href,
  hasRealmRole: () => false,
};
const _i = {
  doLogin: async () => {},
  doLogout: async () => {},
  manageSignInSecurity: () => {},
  resetPassword: () => {},
  isLoggedIn: () => true,
  getToken: () => kt.token,
  updateToken: async (ready) => ready(),
  getUsername: () => localIdentity.preferred_username,
  getUserId: () => localIdentity.sub,
  getFirstname: () => localIdentity.given_name,
  getLastname: () => localIdentity.family_name,
  getDisplayName: () => "Local User",
  getInitials: () => "LU",
  getEmail: () => localIdentity.email,
  getOrganization: () => undefined,
  getUserAttribute: (name) => localIdentity[name],
  hasRoles: () => false,
  hasAdminRole: () => false,
};
const jD = _i.getUserId;
const ND = _i.doLogout;
`;
  code = `${code.slice(0, start)}${localIdentity}${code.slice(end)}`;

  const clientStart = 'const uo = _t.create({\n  headers: {';
  const localClient =
    'const uo = _t.create({\n  adapter: "fetch",\n  headers: {';
  const tokenRefresh =
    '  e.url = `https://app.mathvision.ai/${e.url}`;\n  if (!_i.isLoggedIn()) {';
  const localTokenRefresh =
    '  e.url = `https://app.mathvision.ai/${e.url}`;\n  return e;\n  if (!_i.isLoggedIn()) {';
  for (const expected of [clientStart, tokenRefresh]) {
    if (!code.includes(expected)) {
      throw new Error(`Local-only network seam was not found: ${expected}`);
    }
  }
  const authBootstrap = `_i.initKeycloak(HH).catch((e) => {
  console.error("Math Vision authentication bootstrap failed.", e);
  Ov(<X6 />);
});`;
  if (!code.includes(authBootstrap)) {
    throw new Error("Remote authentication bootstrap was not found in the recovered entry chunk.");
  }
  return code
    .replace(clientStart, localClient)
    .replace(tokenRefresh, localTokenRefresh)
    .replace(authBootstrap, "HH();");
}

function removeBundledKeycloak(code) {
  code = code
    .replace('const OD = I0("VITE_KEYCLOAK_URL", "https://auth.mathvision.ai");\n', "")
    .replace('const MD = I0("VITE_KEYCLOAK_CLIENT_ID", "Math-Frontend");\n', "");
  const startMarker = 'const O5 = "application/json";';
  const endMarker = "function KT(e) {";
  const start = code.indexOf(startMarker);
  const end = code.indexOf(endMarker, start);
  if (start < 0 || end < 0) {
    throw new Error("Bundled Keycloak boundary was not found in the recovered entry chunk.");
  }
  return `${code.slice(0, start)}${code.slice(end)}`;
}

function removeLogoFromCompiledEntry(code) {
  const start = code.indexOf('  Z6 = "/assets/math-vision-logo-BZDuanMC.svg",');
  const end = code.indexOf("const Tu =", start);
  if (start < 0 || end < 0) {
    throw new Error("Compiled logo component boundary was not found in the recovered entry chunk.");
  }
  return `${code.slice(0, start)}  eI = () => null;\n${code.slice(end)}`;
}

function removeMenuLogoFromJsx(code) {
  const logo = /<_Component48\s+variant="mark"\s+alt="Math Vision logo"\s+sx=\{K0\}\s*\/>/u;
  if (!logo.test(code)) throw new Error("Menu logo JSX was not found in the recovered chunk.");
  return code.replace(logo, "");
}

function removeMenuLogoFromCompiledJs(code) {
  const logo = 'a.jsx(xg, { variant: "mark", alt: "Math Vision logo", sx: K0 })';
  if (!code.includes(logo)) throw new Error("Menu logo block was not found in the compiled chunk.");
  return code.replace(logo, "null");
}
