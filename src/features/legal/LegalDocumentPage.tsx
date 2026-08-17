import type { ReactNode } from "#production-react";
import { ArrowBackIcon, Box, Button, Container, Divider, Link, Markdown, Paper, Stack, Typography, useRouter } from "../../runtime/legalDocumentRuntime.js";
import type { LegalDocument } from "./legalDocuments";

const markdownComponents = {
  h1: ({ children }: { children: ReactNode }) => <Typography component="h1" variant="h4" gutterBottom={true}>{children}</Typography>,
  h2: ({ children }: { children: ReactNode }) => <Typography component="h2" variant="h5" gutterBottom={true}>{children}</Typography>,
  h3: ({ children }: { children: ReactNode }) => <Typography component="h3" variant="h6" gutterBottom={true}>{children}</Typography>,
  p: ({ children }: { children: ReactNode }) => <Typography component="p" variant="body1" color="textSecondary">{children}</Typography>,
  ul: ({ children }: { children: ReactNode }) => <Stack component="ul" spacing={0.75} sx={{ pl: 3, my: 0 }}>{children}</Stack>,
  ol: ({ children }: { children: ReactNode }) => <Stack component="ol" spacing={0.75} sx={{ pl: 3, my: 0 }}>{children}</Stack>,
  li: ({ children }: { children: ReactNode }) => <Typography component="li" variant="body1" color="textSecondary">{children}</Typography>,
  a: ({ children, href }: { children: ReactNode; href?: string }) => { const external = href?.startsWith("http"); return <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{children}</Link>; },
};

export function LegalDocumentPage({ document }: { document: LegalDocument }) {
  const router = useRouter();
  return <Box sx={{ minHeight: "100dvh", backgroundColor: "background.default", backgroundImage: "var(--app-shell-background)", py: { xs: 3, md: 6 } }}><Container maxWidth="md"><Paper sx={{ p: { xs: 3, md: 5 } }}><Stack spacing={3.5}><Stack spacing={1}><Typography variant="h3">{document.title}</Typography><Typography variant="body2" color="textSecondary">Effective {document.effectiveDate} | Version {document.version}</Typography></Stack><Divider/><Stack spacing={3}><Markdown components={markdownComponents}>{document.markdown}</Markdown></Stack><Divider/><Stack direction={{ xs: "column", sm: "row" }} spacing={1.25}><Button variant="outlined" startIcon={<ArrowBackIcon fontSize="small"/>} onClick={() => router.history.back()}>Go Back</Button></Stack></Stack></Paper></Container></Box>;
}
