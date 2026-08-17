import {
  u as c,
  j as e,
  B as l,
  e as d,
  S as a,
  T as t,
  h as u,
  aU as m,
  a5 as p,
} from "./index-BM3ZINIl.js";
import { C as h } from "./Container-C988byeG.js";
import { D as r } from "./Divider-BcuihGce.js";
import { M as y } from "./index-DzMT-bSF.js";
const f = {
  h1: ({ children: n }) =>
    e.jsx(t, { component: "h1", variant: "h4", gutterBottom: !0, children: n }),
  h2: ({ children: n }) =>
    e.jsx(t, { component: "h2", variant: "h5", gutterBottom: !0, children: n }),
  h3: ({ children: n }) =>
    e.jsx(t, { component: "h3", variant: "h6", gutterBottom: !0, children: n }),
  p: ({ children: n }) =>
    e.jsx(t, { component: "p", variant: "body1", color: "textSecondary", children: n }),
  ul: ({ children: n }) =>
    e.jsx(a, { component: "ul", spacing: 0.75, sx: { pl: 3, my: 0 }, children: n }),
  ol: ({ children: n }) =>
    e.jsx(a, { component: "ol", spacing: 0.75, sx: { pl: 3, my: 0 }, children: n }),
  li: ({ children: n }) =>
    e.jsx(t, { component: "li", variant: "body1", color: "textSecondary", children: n }),
  a: ({ children: n, href: i }) => {
    const o = i == null ? void 0 : i.startsWith("http");
    return e.jsx(p, {
      href: i,
      target: o ? "_blank" : void 0,
      rel: o ? "noreferrer" : void 0,
      children: n,
    });
  },
};
function D({ document: n }) {
  const i = c();
  return e.jsx(l, {
    sx: {
      minHeight: "100dvh",
      backgroundColor: "background.default",
      backgroundImage: "var(--app-shell-background)",
      py: { xs: 3, md: 6 },
    },
    children: e.jsx(h, {
      maxWidth: "md",
      children: e.jsx(d, {
        sx: { p: { xs: 3, md: 5 } },
        children: e.jsxs(a, {
          spacing: 3.5,
          children: [
            e.jsxs(a, {
              spacing: 1,
              children: [
                e.jsx(t, { variant: "h3", children: n.title }),
                e.jsxs(t, {
                  variant: "body2",
                  color: "textSecondary",
                  children: ["Effective ", n.effectiveDate, " | Version ", n.version],
                }),
              ],
            }),
            e.jsx(r, {}),
            e.jsx(a, { spacing: 3, children: e.jsx(y, { components: f, children: n.markdown }) }),
            e.jsx(r, {}),
            e.jsx(a, {
              direction: { xs: "column", sm: "row" },
              spacing: 1.25,
              children: e.jsx(u, {
                variant: "outlined",
                startIcon: e.jsx(m, { fontSize: "small" }),
                onClick: () => i.history.back(),
                children: "Go Back",
              }),
            }),
          ],
        }),
      }),
    }),
  });
}
const g = `# Math Vision Privacy Policy

**Last Updated:** June 7, 2026
**Effective Date:** Upon launch, private beta access, account creation, waitlist submission, or other first use of Math Vision, whichever occurs first
**Version:** 2026-06-07-v3

This Privacy Policy explains how Math Vision collects, uses, retains, discloses, and otherwise processes information when you access or use Math Vision.

Math Vision is an AI-powered chatbot and math-assistance product. Because Math Vision processes prompts, messages, uploaded materials, generated responses, usage data, and related information, you should read this Privacy Policy carefully before submitting information to the Service.

By using Math Vision, creating an account, joining a waitlist, participating in a beta, submitting content, or clicking to accept our Terms of Service, you acknowledge the practices described in this Privacy Policy.

This Privacy Policy should be read together with our Terms of Service and any other product-specific, organization-specific, beta, enterprise, school, classroom, or written agreement that applies to your use of Math Vision. If a separate written agreement conflicts with this Privacy Policy, the separate written agreement controls to the extent of the conflict.

---

## 1. Summary

This summary is provided for convenience. The full Privacy Policy controls.

- We collect information you provide, information generated through your use of Math Vision, technical and usage information, account information, communications, and information from vendors, service providers, organizations, and other sources.
- We may access, view, review, read, analyze, label, annotate, moderate, transform, and otherwise process Customer Content and related information to provide, secure, support, debug, improve, train, evaluate, and operate Math Vision.
- We may use Customer Content, Output, Usage Data, feedback, metadata, and related information to test, evaluate, train, fine-tune, and improve Math Vision and related AI systems where permitted by law and applicable agreements.
- We may create, use, retain, disclose, publish, transfer, license, sell, commercialize, monetize, and otherwise exploit Deidentified Data, Aggregated Data, and Anonymized Data for lawful business purposes.
- At launch, we do not sell Personal Information for money. If we later engage in activities that are considered a “sale,” “sharing,” “targeted advertising,” “cross-context behavioral advertising,” or similar activity under applicable privacy laws, we will provide legally required notices and choices.
- Math Vision is not intended for children under 13.

---

## 2. Scope

This Privacy Policy applies to Math Vision websites, applications, APIs, AI-assisted tools, chatbot features, vision features, document tools, account services, support channels, waitlists, beta programs, administrative interfaces, and related services.

This Privacy Policy does not apply to third-party websites, products, services, model providers, identity providers, payment providers, analytics providers, advertising providers, integrations, or other third parties that have their own privacy policies.

If you use Math Vision through an organization, school, employer, workspace, enterprise account, classroom, district, or other managed account, that organization may control or administer your account and may have its own privacy notices, contracts, and policies.

When we decide why and how Personal Information is processed, we act as a controller, business, or similar role under applicable privacy laws. When we process information on behalf of an enterprise customer, school, employer, district, or other organization under a separate written agreement, we may act as a processor, service provider, contractor, or similar role for that organization.

---

## 3. Definitions

**“Math Vision,” “we,” “us,” and “our”** mean the provider of the Math Vision service.

**“Service”** means Math Vision and all related websites, applications, APIs, AI-assisted tools, chatbot features, vision features, document tools, beta features, account features, support channels, and related products and services.

**“Customer,” “you,” and “your”** mean the individual, company, school, organization, parent, guardian, teacher, administrator, or other entity that accesses or uses Math Vision.

**“User”** means an individual who accesses or uses Math Vision through an account, workspace, organization, invitation, beta program, API key, or other authorization.

**“Input”** means prompts, messages, questions, files, images, screenshots, photographs, handwritten work, documents, PDFs, LaTeX source, equations, code, chat hierarchy names, LaTeX project names, feedback, annotations, metadata, and other materials submitted, uploaded, transmitted, imported, linked, or otherwise provided to Math Vision.

**“Output”** means responses, explanations, mathematical reasoning, proof steps, generated text, generated code, summaries, classifications, labels, annotations, document conversions, recommendations, or other content generated or returned by Math Vision or third-party AI providers through the Service.

**“Customer Content”** means Input and Output.

**“Usage Data”** means information relating to access to or use of the Service, including logs, telemetry, device information, browser information, network identifiers, approximate location, pages viewed, features used, timestamps, session activity, error reports, model-routing information, performance data, account activity, interaction data, token usage, rate-limit activity, prompt metadata, upload metadata, output metadata, and related technical data.

**“Personal Information”** means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked to an identifiable person, household, account, device, or user, as defined by applicable privacy law.

**“Sensitive Information”** means categories of information that receive heightened protection under applicable law or that may create heightened risk if misused, including government identifiers, financial account information, payment card information, health information, biometric information, precise location information, student records, children’s information, passwords, authentication tokens, private keys, confidential business information, trade secrets, export-controlled information, and similar information.

**“Deidentified Data”** means data that has been processed so that it cannot reasonably be used to infer information about, identify, relate to, describe, be associated with, or be linked, directly or indirectly, to a particular person, household, account, device, or user, and that is subject to reasonable technical, administrative, organizational, and contractual safeguards designed to prevent reidentification.

**“Aggregated Data”** means data combined with other data so that it describes groups, patterns, statistics, trends, benchmarks, model performance, usage behavior, or other collective information and does not identify or reasonably link to a particular person, household, account, device, or user.

**“Anonymized Data”** means data that has been anonymized, deidentified, aggregated, or otherwise processed so that it does not identify and cannot reasonably be linked to a particular person, household, account, device, or user.

Hashing, tokenization, pseudonymization, redaction, or removal of obvious identifiers alone does not necessarily make data Deidentified Data, Aggregated Data, or Anonymized Data.

Derived information that is reasonably linkable to a person, household, account, device, or user remains Personal Information and will be treated as Personal Information where required by applicable law.

---

## 4. Information We Collect

We collect information directly from you, automatically from your use of Math Vision, from organizations that administer accounts, from authentication providers, from vendors and service providers, and from other third-party sources.

### 4.1 Information You Provide

We may collect information you provide, including:

- name;
- account identifiers;
- authentication information;
- profile information;
- account settings;
- waitlist information;
- role, organization, school, employer, classroom, or workspace information;
- support requests;
- feedback;
- survey responses;
- billing information;
- communications with us;
- information submitted through forms, uploads, account settings, integrations, or support channels.

### 4.2 Customer Content

We collect and process Customer Content, including:

- prompts;
- messages;
- mathematical questions;
- AI conversations;
- uploaded files;
- images;
- screenshots;
- photographs;
- handwritten work;
- PDFs;
- LaTeX source;
- equations;
- documents;
- generated documents;
- chat hierarchies and LaTeX projects;
- code;
- feedback;
- annotations;
- attachments;
- Output generated by Math Vision or third-party AI providers.

Customer Content may contain Personal Information or Sensitive Information depending on what you submit.

You should not submit Sensitive Information unless you have authority to do so and your use is permitted by your agreement with us.

### 4.3 Usage, Technical, and Device Information

We may collect information automatically when you use Math Vision, including:

- pages viewed;
- features used;
- searches;
- clicks;
- timestamps;
- session events;
- device type;
- browser type;
- operating system;
- language settings;
- referring sources;
- network information;
- network identifiers;
- approximate location derived from network information;
- model selections;
- token usage;
- rate-limit activity;
- latency;
- diagnostic information;
- crash data;
- error reports;
- performance data;
- interaction logs;
- prompt metadata;
- output metadata;
- upload metadata;
- security logs;
- fraud and abuse signals.

### 4.4 Billing and Commercial Information

If paid services are offered, we may collect billing and commercial information, including:

- plan type;
- subscription status;
- transaction records;
- invoice details;
- payment status;
- tax information;
- purchase history;
- billing details.

Payment card numbers or payment credentials may be processed by third-party payment processors. We may receive limited payment-related information from those processors, such as payment status, card brand, last four digits, billing region, and transaction identifiers.

### 4.5 Information From Organizations

If you use Math Vision through an organization, school, employer, classroom, workspace, district, or enterprise account, we may receive information from that organization, including:

- name;
- role;
- account status;
- permissions;
- workspace membership;
- classroom membership;
- school, district, employer, or organization association;
- administrative settings;
- billing status;
- compliance information;
- access-control information.

### 4.6 Information From Third Parties

We may receive information from third parties, including:

- authentication providers;
- single sign-on providers;
- infrastructure providers;
- AI model providers;
- analytics providers;
- payment processors;
- security vendors;
- fraud-prevention vendors;
- marketing providers;
- communication providers;
- support providers;
- data providers;
- public sources;
- business partners;
- organizations that invite or administer users.

---

## 5. How We Use Information

We may use information for business and commercial purposes, including to:

- provide, operate, maintain, secure, and support Math Vision;
- authenticate users;
- create and manage accounts, organizations, workspaces, classrooms, roles, permissions, and access controls;
- process prompts, uploads, screenshots, images, documents, conversations, chat hierarchies, LaTeX projects, and other Customer Content;
- generate, store, display, evaluate, and improve Output;
- maintain conversation history, chat hierarchy history, LaTeX project history, document history, settings, and account preferences;
- provide customer support;
- troubleshoot issues;
- debug errors;
- monitor usage, performance, reliability, errors, model quality, and system health;
- improve user experience, features, workflows, documentation, prompts, and interfaces;
- develop, test, train, fine-tune, evaluate, benchmark, and improve Math Vision, AI systems, algorithms, models, datasets, safety systems, ranking systems, and business operations;
- create Deidentified Data, Aggregated Data, and Anonymized Data;
- conduct analytics, measurement, forecasting, research, benchmarking, market analysis, and business intelligence;
- enforce Terms of Service, acceptable-use rules, rate limits, quotas, security requirements, and legal obligations;
- detect, prevent, investigate, and respond to fraud, abuse, spam, security incidents, unauthorized access, harmful activity, academic-integrity violations, and policy violations;
- communicate with users and administrators about accounts, support, updates, legal notices, security, billing, product information, and administrative matters;
- market, advertise, promote, and sell Math Vision and related products or services;
- comply with law, legal process, regulatory requests, audits, tax obligations, sanctions screening, and records obligations;
- exercise, establish, or defend legal claims;
- complete corporate transactions, financing, diligence, mergers, acquisitions, reorganizations, bankruptcy, asset sales, or business transfers.

---

## 6. Human Review and Internal Access

Math Vision may use automated systems and authorized personnel, contractors, vendors, reviewers, AI model providers, service providers, and other authorized parties to access, view, review, read, analyze, label, annotate, moderate, transform, or otherwise process Customer Content, Output, Usage Data, account information, logs, and related information.

We may do this to:

- provide the Service;
- generate Output;
- maintain account, conversation, document, classroom, chat hierarchy, and LaTeX project history;
- troubleshoot issues;
- respond to support requests;
- debug technical problems;
- investigate errors;
- detect abuse;
- investigate security incidents;
- enforce our Terms of Service;
- prevent fraud, spam, misuse, and unauthorized access;
- improve product quality;
- evaluate model behavior;
- test prompts, workflows, features, and safety systems;
- train, fine-tune, or improve models and AI systems where permitted;
- conduct analytics and research;
- comply with law;
- operate our business.

We are not obligated to monitor Customer Content, but we may do so.

We use access controls, authorization procedures, confidentiality obligations, logging, vendor controls, and other safeguards designed to limit access to appropriate people and purposes.

You should not submit information that you are not authorized to share or that you do not want Math Vision or its authorized providers to access, view, or process.

---

## 7. AI Systems, Model Providers, and Product Improvement

Math Vision may use first-party and third-party AI systems, model providers, infrastructure providers, search providers, analytics providers, storage providers, and other vendors to provide and improve the Service.

We may send Customer Content, Output, metadata, Usage Data, account information, and related context to these providers to:

- provide the Service;
- process prompts and files;
- analyze images, screenshots, equations, documents, and other uploads;
- generate Output;
- route requests;
- improve response quality;
- maintain reliability;
- monitor abuse;
- enforce safety rules;
- debug model behavior;
- evaluate model quality;
- improve AI-assisted features;
- support technical operations.

Third-party providers may process information according to our agreements with them and, where applicable, their own terms and privacy policies.

We may use Customer Content, Output, Usage Data, feedback, metadata, logs, evaluations, annotations, labels, embeddings, and derived information to evaluate, test, train, fine-tune, benchmark, and improve Math Vision, including AI systems, prompts, safety systems, ranking systems, evaluation datasets, and related products.

Where required by law or where we provide settings for this purpose, you may opt out of certain training, model-improvement, targeted-advertising, sale, or sharing uses.

We may continue to use Deidentified Data, Aggregated Data, and Anonymized Data for training, evaluation, analytics, research, safety, benchmarking, and product improvement where permitted by law.

For enterprise, school, district, classroom, or organization accounts, separate written agreements may provide different training, retention, access, or data-use terms.

---

## 8. Deidentified, Aggregated, and Anonymized Data

We may create Deidentified Data, Aggregated Data, and Anonymized Data from information processed through or relating to Math Vision, including Customer Content, Output, Usage Data, account information, interactions, support requests, files, prompts, feedback, telemetry, and related information.

We may use, retain, reproduce, disclose, publish, transfer, license, sell, share, commercialize, monetize, and otherwise exploit Deidentified Data, Aggregated Data, and Anonymized Data for lawful business purposes, including:

- product development;
- AI training;
- model evaluation;
- model improvement;
- safety research;
- benchmarking;
- analytics;
- market research;
- business intelligence;
- commercial partnerships;
- data licensing;
- research;
- publications;
- reports;
- advertising measurement;
- industry analysis;
- improving Math Vision and related products.

We may sell, license, transfer, or otherwise monetize Deidentified Data, Aggregated Data, and Anonymized Data.

We do not treat Deidentified Data, Aggregated Data, or Anonymized Data as Customer Content owned by you, except where applicable law requires otherwise.

When we externally disclose, license, or sell Deidentified Data or Anonymized Data, we will use reasonable technical, organizational, administrative, and contractual measures designed to prevent reidentification.

For data that we treat as Deidentified Data or Anonymized Data for external sale, licensing, disclosure, or monetization, we publicly commit to maintain and use that data in deidentified or anonymized form and not to attempt to reidentify it, except where permitted by law for testing, security, compliance, or validating our deidentification processes.

We will require recipients of Deidentified Data or Anonymized Data to agree not to attempt to reidentify the data and to use reasonable safeguards designed to prevent reidentification.

We may retain Deidentified Data, Aggregated Data, and Anonymized Data indefinitely unless applicable law requires otherwise.

---

## 9. How We Disclose Information

We may disclose information to the following categories of recipients.

### 9.1 Vendors, Service Providers, Contractors, and Processors

We may disclose information to service providers, vendors, contractors, and processors that help us operate Math Vision, including hosting providers, database providers, infrastructure providers, AI model providers, search providers, analytics providers, logging providers, security providers, payment providers, communication providers, customer-support providers, and other operational vendors.

### 9.2 AI Model and Infrastructure Providers

We may disclose Customer Content, Output, Usage Data, metadata, and related context to AI model providers, infrastructure providers, and technical providers to provide, operate, secure, support, evaluate, and improve Math Vision.

### 9.3 Organizations and Administrators

If you use Math Vision through an organization, school, employer, classroom, workspace, enterprise account, district account, or other managed account, we may disclose account information, Usage Data, Customer Content, Output, chat hierarchies, LaTeX projects, documents, files, logs, billing information, and administrative information to that organization and its administrators.

### 9.4 Professional Advisors and Business Operations Recipients

We may disclose information to professional advisors, auditors, insurers, lenders, investors, legal counsel, accountants, consultants, and other parties involved in business operations, compliance, financing, diligence, audits, or legal matters.

### 9.5 Legal, Safety, and Compliance Recipients

We may disclose information to law enforcement, courts, regulators, government authorities, parties involved in legal process, or other third parties where we believe disclosure is required or appropriate to comply with law, legal process, regulatory requests, audits, enforceable government requests, litigation, security obligations, or to protect Math Vision, users, vendors, third parties, or the public.

### 9.6 Corporate Transaction Recipients

We may disclose information in connection with a merger, acquisition, financing, reorganization, bankruptcy, sale of assets, corporate transaction, diligence process, or transfer of all or part of our business.

### 9.7 User-Directed Disclosures and Integrations

We may disclose information when you direct us to do so, use integrations, connect third-party services, share content, export data, invite collaborators, or otherwise instruct us to disclose information.

### 9.8 Deidentified, Aggregated, and Anonymized Data Recipients

We may disclose, license, sell, share, publish, transfer, commercialize, and otherwise make available Deidentified Data, Aggregated Data, and Anonymized Data to third parties for lawful business purposes.

---

## 10. Sale, Sharing, Targeted Advertising, and Privacy Choices

At launch, we do not sell Personal Information for money.

We may disclose Personal Information to vendors, service providers, contractors, processors, model providers, analytics providers, payment providers, authentication providers, infrastructure providers, security providers, support providers, and other third parties as described in this Privacy Policy.

We may create, use, disclose, license, sell, and otherwise commercialize Deidentified Data, Aggregated Data, and Anonymized Data as described in this Privacy Policy.

We may use third-party analytics, measurement, attribution, marketing, or advertising technologies. Depending on the law that applies and how those technologies are implemented, these activities may be considered a “sale,” “sharing,” “targeted advertising,” “cross-context behavioral advertising,” or similar activity under applicable privacy laws.

If we sell or share Personal Information, process Personal Information for targeted advertising, or engage in similar activities covered by applicable privacy laws, we will provide legally required notices and choices.

Where required by applicable law, we will provide a “Do Not Sell or Share My Personal Information,” “Your Privacy Choices,” or similar link or control.

Where required by applicable law, we will honor browser-based, device-based, or platform-based opt-out preference signals, including Global Privacy Control, where technically feasible for us to recognize and apply.

You may exercise available privacy choices through the privacy controls, request tools, account settings, browser-based opt-out preference signals, or other method we make available.

We do not knowingly sell Personal Information of users under 18 or knowingly process Personal Information of users under 18 for targeted advertising unless we have obtained consent required by applicable law.

---

## 11. Cookies and Similar Technologies

We and third parties may use cookies, local storage, pixels, tags, SDKs, server logs, APIs, server-side events, and similar technologies to:

- operate Math Vision;
- remember preferences;
- authenticate users;
- secure accounts;
- prevent fraud and abuse;
- measure usage;
- improve performance;
- analyze behavior;
- conduct research;
- support marketing;
- support attribution and measurement;
- provide or measure advertising where enabled.

Your browser or device may allow you to block or delete cookies. Some features may not function correctly if cookies or local storage are disabled.

Where required by law, we will request consent for certain cookies or similar technologies and provide controls for managing preferences.

---

## 12. Data Retention

We retain information for as long as reasonably necessary for the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law.

We determine retention periods based on factors such as:

- the nature and sensitivity of the information;
- the purposes for which it was collected or processed;
- account status;
- user settings;
- product functionality;
- security needs;
- fraud and abuse-prevention needs;
- legal, tax, accounting, audit, contractual, and compliance obligations;
- dispute-resolution needs;
- technical constraints;
- backup and disaster-recovery requirements;
- model-improvement, analytics, and product-development needs where permitted by law.

Examples include:

| Category                                      | Example Retention Approach                                                                                                                                                                                                         |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account information                           | Retained while your account is active and for a reasonable period after closure for legal, security, tax, accounting, compliance, and dispute-resolution purposes.                                                                 |
| Customer Content and Output                   | Retained while needed to provide account history, chat hierarchy history, LaTeX project history, document history, service functionality, support, debugging, safety, model evaluation, product improvement, or as otherwise described in your settings or plan. |
| Uploads and documents                         | Retained while associated with your account, chat hierarchy, LaTeX project, workspace, classroom, school, district, or organization unless deleted earlier or retained longer for legal, security, backup, abuse-prevention, or operational purposes.    |
| Usage Data and technical logs                 | Retained for security, fraud prevention, abuse prevention, debugging, analytics, reliability, compliance, and product-improvement purposes for a period reasonably necessary for those purposes.                                   |
| Security and audit logs                       | Retained for security, fraud prevention, abuse prevention, investigations, compliance, legal claims, and audit purposes.                                                                                                           |
| Support communications                        | Retained for support history, quality assurance, training, legal, compliance, and business purposes.                                                                                                                               |
| Billing records                               | Retained as required or appropriate for tax, accounting, audit, payment, legal, and compliance purposes.                                                                                                                           |
| Backups                                       | Retained for a limited backup or disaster-recovery cycle before deletion or overwrite, unless preservation is required for legal, security, operational, or compliance purposes.                                                   |
| Deidentified, Aggregated, and Anonymized Data | May be retained indefinitely where permitted by law.                                                                                                                                                                               |

Deletion requests may not remove all information. We may retain information:

- in backups, archives, logs, security systems, and disaster-recovery systems;
- where required or permitted by law, contract, audit, tax, accounting, or regulatory obligations;
- to prevent abuse, fraud, spam, security incidents, and policy violations;
- to resolve disputes and enforce agreements;
- for legitimate business purposes, including analytics, product improvement, model improvement, research, benchmarking, and internal reporting;
- in Deidentified Data, Aggregated Data, or Anonymized Data;
- where deletion is technically infeasible or would impair security, integrity, or compliance.

We are not obligated to retain Customer Content unless required by law or a separate written agreement.

---

## 13. Security

We use reasonable administrative, technical, and organizational safeguards designed to protect information. These may include access controls, authentication, encryption, logging, monitoring, backups, vendor controls, confidentiality obligations, and security review.

No method of transmission, processing, or storage is completely secure. We cannot guarantee absolute security.

You are responsible for securing your devices, credentials, networks, integrations, files, user permissions, and account access.

You must promptly use the security-reporting method we make available if you suspect unauthorized access, credential compromise, or misuse of your account.

---

## 14. Sensitive Information

You should not submit Sensitive Information unless your use is expressly permitted by your agreement with us and you have all required rights, consents, notices, permissions, and legal bases.

Sensitive Information includes:

- government identifiers;
- financial account information;
- payment card numbers;
- health information;
- medical records;
- biometric information;
- precise geolocation;
- student education records;
- children’s information;
- trade secrets;
- confidential business information;
- attorney-client privileged information;
- export-controlled information;
- passwords;
- private keys;
- API keys;
- authentication tokens;
- credentials.

If you submit Sensitive Information, you are responsible for ensuring that submission and use comply with applicable law, contractual obligations, organizational policies, and this Privacy Policy.

We may delete, restrict, block, refuse to process, or apply additional controls to Sensitive Information.

---

## 15. Enterprise, Organization, School, Classroom, and Managed Accounts

If you use Math Vision through an organization, school, employer, classroom, workspace, enterprise account, district account, or other managed account, your organization may access, monitor, export, delete, retain, or control information associated with your account, including account details, usage records, Customer Content, Output, chat hierarchies, LaTeX projects, documents, files, settings, and logs.

Organization administrators may:

- add or remove users;
- configure access;
- assign roles;
- manage billing;
- review activity;
- access Customer Content and Output;
- export data;
- delete data;
- configure retention settings;
- respond to legal or compliance requests;
- suspend or terminate access;
- request account or data actions.

If a school, educational institution, teacher, administrator, parent, guardian, district, or organization uses Math Vision with students or minors, that organization is responsible for providing required notices, obtaining required consents, complying with education privacy laws, and ensuring that student use is authorized.

Separate school, enterprise, district, classroom, or organization agreements may include additional privacy, retention, training, security, student-data, and data-use terms.

---

## 16. Children and Minors

Math Vision is not intended for children under 13. We do not knowingly collect Personal Information from children under 13.

If you believe a child under 13 has provided Personal Information to Math Vision, you may use the privacy-request method we make available so we can review and take appropriate action.

If you are under 18, you should use Math Vision only with permission from your parent or legal guardian.

We do not knowingly sell Personal Information of users under 18 or knowingly process Personal Information of users under 18 for targeted advertising unless we have obtained consent required by applicable law.

Where required by law, a parent, guardian, school, district, or authorized organization may exercise privacy rights on behalf of a minor.

---

## 17. International Transfers

We may process, store, access, disclose, and transfer information in the United States and other countries.

Those countries may have privacy laws that differ from the laws where you live.

Where required for transfers of Personal Information from the European Economic Area, United Kingdom, Switzerland, or other jurisdictions with transfer restrictions, we may rely on adequacy decisions, standard contractual clauses, the UK International Data Transfer Agreement or UK Addendum, data-processing agreements, vendor commitments, consent, necessity for contract performance, or other lawful transfer mechanisms.

You understand that your information may be transferred to and processed in the United States and other countries where we, our affiliates, vendors, service providers, AI model providers, business partners, or transaction counterparties operate.

---

## 18. Legal Bases for EU, UK, Swiss, and Similar Privacy Laws

If the General Data Protection Regulation, UK GDPR, Swiss Federal Act on Data Protection, or similar privacy laws apply, our legal bases may include:

- performance of a contract, including providing Math Vision, account access, support, security, and requested features;
- legitimate interests, including service operation, product improvement, analytics, research, model evaluation, fraud prevention, security, enforcement, business development, marketing, and internal administration;
- consent, including for optional marketing, certain cookies or tracking technologies, sensitive data where required, or other processing where consent is required;
- compliance with legal obligations, including tax, accounting, sanctions, law-enforcement, regulatory, audit, and records obligations;
- protection of rights, safety, and legal claims;
- other legal bases recognized by applicable law.

Where processing is based on consent, you may withdraw consent at any time, but withdrawal will not affect processing that occurred before withdrawal or processing based on another lawful basis.

Depending on the law that applies, you may have rights to access, correct, delete, restrict, object to, or port Personal Information; withdraw consent; opt out of certain processing; and lodge a complaint with a data-protection authority or regulator.

These rights may be limited by law, contracts, security needs, legal obligations, technical constraints, and our role as a processor for an organization.

---

## 19. Your Privacy Rights

Depending on where you live and which laws apply, including laws in the United States, European Economic Area, United Kingdom, Switzerland, Canada, Brazil, and other jurisdictions, you may have rights to:

- know whether we process Personal Information about you;
- access Personal Information;
- receive a copy of Personal Information;
- correct inaccurate Personal Information;
- delete Personal Information;
- obtain a portable copy of Personal Information;
- opt out of sale, sharing, targeted advertising, or certain profiling;
- limit the use or disclosure of Sensitive Information;
- withdraw consent where processing is based on consent;
- object to or restrict certain processing;
- appeal a privacy-rights decision;
- not be discriminated against for exercising privacy rights.

You may make requests through account settings, privacy controls, request forms, or other methods we make available.

If you are making an opt-out request, use the privacy-choice method we make available.

If you are appealing a privacy-rights decision, use the appeal method we make available.

We may need to verify your identity, account, residency, authority, or request details before responding. We may deny or limit requests where permitted by law, including for security, fraud prevention, legal compliance, technical limitations, contractual obligations, business records, free-expression rights, trade secrets, or other lawful reasons.

Authorized agents may submit requests where permitted by law. We may require proof of authorization and verification of the relevant user.

If we deny your request and applicable law gives you a right to appeal, you may appeal through the appeal process we make available.

If your appeal is denied, you may have the right to contact the attorney general, data-protection authority, or regulator in your jurisdiction.

---

## 20. U.S. State Privacy Notice

If a U.S. state privacy law applies to us and to your information, including the California Consumer Privacy Act, Delaware Personal Data Privacy Act, or similar laws in other states, this section provides additional notice.

### 20.1 Categories of Personal Information We May Collect

We may collect the following categories of Personal Information:

- identifiers, such as name, account identifier, user identifier, authentication identifier, organization identifier, network identifiers, device identifiers, and other unique identifiers;
- customer records information, such as account details, billing details, and support records;
- commercial information, such as plan, subscription status, purchase history, transaction records, and payment status;
- internet or other electronic network activity, such as pages viewed, features used, searches, clicks, timestamps, session events, model selections, token usage, rate-limit activity, and interaction logs;
- approximate geolocation information, such as approximate location derived from network information;
- audio, electronic, visual, or similar information if you submit files, images, screenshots, videos, handwriting, documents, or communications containing it;
- professional, educational, or employment-related information if you provide it or if an organization provides it;
- education information if you or an organization submits it and applicable law allows us to process it;
- inferences and derived information, such as usage patterns, product analytics, account health, risk scores, feature preferences, and aggregated or deidentified metrics;
- sensitive Personal Information if you submit it or if it is needed for security, authentication, compliance, or account administration.

### 20.2 Sources of Personal Information

We may collect Personal Information from:

- you;
- your use of Math Vision;
- your device or browser;
- organizations that administer accounts;
- authentication providers;
- vendors and service providers;
- payment processors;
- model providers;
- security providers;
- analytics providers;
- communication providers;
- public sources;
- business partners;
- other third-party sources.

### 20.3 Purposes for Collection, Use, and Processing

We may use the categories of Personal Information listed above for the purposes described in this Privacy Policy, including providing the Service, processing Customer Content, generating Output, account administration, security, fraud prevention, support, analytics, product improvement, model evaluation, model improvement, training, marketing, compliance, legal claims, corporate transactions, and business operations.

### 20.4 Categories of Third Parties to Whom We Disclose Personal Information

We may disclose Personal Information to the categories of recipients described in this Privacy Policy, including vendors, service providers, contractors, processors, AI model providers, hosting providers, database providers, analytics providers, logging providers, security providers, search providers, payment providers, communication providers, customer-support providers, organization administrators, affiliates, professional advisors, legal and compliance recipients, corporate transaction recipients, and third parties you direct us to use.

### 20.5 Sale or Sharing of Personal Information

At launch, we do not sell Personal Information for money.

We may use analytics, measurement, attribution, marketing, or advertising technologies. Depending on applicable law and implementation, those activities may be considered a “sale,” “sharing,” “targeted advertising,” “cross-context behavioral advertising,” or similar activity.

If we engage in sale, sharing, targeted advertising, or similar covered processing, the categories of Personal Information involved may include identifiers, internet or other electronic network activity, commercial information, approximate geolocation, inferences, and related information.

We may use, disclose, license, sell, share, commercialize, and otherwise exploit Deidentified Data, Aggregated Data, and Anonymized Data as described in this Privacy Policy.

### 20.6 Sensitive Personal Information

We do not seek Sensitive Information unless needed for security, authentication, compliance, account administration, requested features, or where you choose to submit it.

Where required by law, we will obtain consent before processing Sensitive Information or provide a right to limit certain uses or disclosures of Sensitive Information.

### 20.7 Rights

Depending on your state, you may have the right to:

- know or confirm whether we process Personal Information;
- access Personal Information;
- delete Personal Information;
- correct Personal Information;
- obtain a portable copy of Personal Information;
- obtain information about categories of third parties to whom Personal Information has been disclosed;
- opt out of sale;
- opt out of sharing;
- opt out of targeted advertising;
- opt out of certain profiling;
- limit certain uses or disclosures of Sensitive Information;
- appeal a privacy-rights decision;
- not receive discriminatory treatment for exercising privacy rights.

You may exercise these rights through account settings, privacy controls, request forms, or other methods we make available.

If we add a dedicated privacy choices page, “Do Not Sell or Share My Personal Information” link, “Your Privacy Choices” link, or other required request method, you may also use that method.

Where required by applicable law, we will honor browser-based or device-based opt-out preference signals, including Global Privacy Control, where technically feasible for us to recognize and apply.

---

## 21. Notice at Collection

We collect the categories of Personal Information described in this Privacy Policy for the purposes described in this Privacy Policy.

We retain Personal Information as described in the “Data Retention” section above.

At launch, we do not sell Personal Information for money.

If we sell or share Personal Information or process Personal Information for targeted advertising in a way covered by applicable law, we will provide legally required notices and choices, including a “Do Not Sell or Share My Personal Information,” “Your Privacy Choices,” or similar link or control where required.

We may disclose Personal Information to the categories of recipients described in this Privacy Policy.

We may create, use, disclose, license, sell, and otherwise commercialize Deidentified Data, Aggregated Data, and Anonymized Data as described in this Privacy Policy.

---

## 22. Do Not Track

Some browsers transmit “Do Not Track” signals. Because there is no uniform industry standard for responding to Do Not Track signals, we do not currently respond to Do Not Track signals unless required by law.

Where required by applicable law, we will honor opt-out preference signals, including Global Privacy Control, as described in this Privacy Policy.

---

## 23. Changes to This Privacy Policy

We may update this Privacy Policy from time to time.

We may update this Privacy Policy because of changes in law, regulatory requirements, security needs, safety needs, vendor requirements, new features, new technologies, product changes, business changes, or operational needs.

If we make material changes, we may notify you by posting an updated version, providing an in-product notice, requiring acknowledgment, or using another reasonable method.

The effective date and version shown on the Privacy Policy page indicate the current version.

Your continued use of Math Vision after an updated Privacy Policy becomes effective means you acknowledge the updated Privacy Policy.
`,
  v = `# Math Vision Terms of Service

**Last Updated:** June 7, 2026
**Effective Date:** Upon launch, private beta access, account creation, or other first use of Math Vision, whichever occurs first
**Version:** 2026-06-07-v4

These Terms of Service govern access to and use of Math Vision, including our website, application, APIs, AI-assisted math tools, chatbot features, document tools, collaboration features, account features, beta features, and related products and services.

By creating an account, accessing Math Vision, using the Service, joining a waitlist, participating in a private beta, or clicking to accept these Terms, you agree to these Terms on behalf of yourself and, if applicable, the organization or entity you represent.

If you do not agree to these Terms, do not access or use Math Vision.

These Terms should be read together with our Privacy Policy and any product-specific terms, order forms, enterprise agreements, data processing agreements, acceptable use policies, or other written agreements that apply to your use of Math Vision.

---

## 1. Definitions

**“Math Vision,” “we,” “us,” and “our”** mean the provider of the Math Vision service.

**“Customer,” “you,” and “your”** mean the individual, company, school, organization, or other entity that accesses or uses Math Vision.

**“User”** means an individual who accesses Math Vision through an account, workspace, organization, invitation, beta program, API key, or other authorization.

**“Service”** means Math Vision and all related websites, applications, APIs, models, tools, features, software, documentation, workflows, and services.

**“Input”** means prompts, messages, questions, files, images, screenshots, documents, equations, LaTeX documents, code, chat hierarchy names, LaTeX project names, feedback, metadata, and other materials submitted, uploaded, transmitted, imported, or otherwise provided to Math Vision.

**“Output”** means responses, explanations, mathematical reasoning, proof steps, generated text, generated code, formalizations, summaries, document conversions, recommendations, classifications, labels, annotations, or other content generated or returned by Math Vision or by third-party model providers through the Service.

**“Customer Content”** means Input and Output.

**“Usage Data”** means information relating to access to or use of the Service, including logs, telemetry, device information, browser information, network identifiers, approximate location, pages viewed, features used, timestamps, session activity, error reports, model-routing information, performance data, account activity, and interaction data.

**“Personal Information”** means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked to an identifiable person, household, account, device, or user, as further defined by applicable privacy law.

**“Deidentified Data”** means data that has been processed so that it cannot reasonably identify, relate to, describe, be associated with, or be linked, directly or indirectly, to a particular person, household, account, device, or user, and that is subject to reasonable technical and business safeguards designed to prevent reidentification.

**“Aggregated Data”** means data combined with other data so that it describes groups, patterns, statistics, trends, benchmarks, model performance, usage behavior, or other collective information and does not identify or reasonably link to a particular person, household, account, device, or user.

**“Anonymized Data”** means data that has been anonymized, deidentified, aggregated, or otherwise processed so that it does not identify and cannot reasonably be linked to a particular person, household, account, device, or user. Hashing, tokenization, pseudonymization, redaction, or removal of obvious identifiers alone does not necessarily make data Anonymized Data.

---

## 2. Pre-Launch, Beta, and Experimental Status

Math Vision may be made available before public launch, during a waitlist period, in private beta, in limited release, or as an experimental service.

You understand that pre-launch, beta, experimental, or preview features may be incomplete, unstable, inaccurate, unavailable, rate-limited, modified, reset, discontinued, or removed at any time.

We may change features, access rules, model providers, account eligibility, pricing, quotas, usage limits, data practices, or technical architecture before or after launch.

We are not obligated to launch Math Vision publicly, continue any beta program, preserve beta data, maintain specific features, or provide advance notice before modifying or discontinuing pre-launch or beta features.

---

## 3. Eligibility and Authority

You must be at least 13 years old or the minimum age required in your jurisdiction to use Math Vision.

If you are under 18 years old, you must have permission from your parent or legal guardian to use Math Vision.

If you use Math Vision on behalf of a company, school, employer, client, organization, or other entity, you represent that you have authority to bind that entity to these Terms.

If your organization has a separate written agreement with Math Vision, that agreement controls if it conflicts with these Terms.

Math Vision is not intended for children under 13. You may not use Math Vision if you are under 13 years old.

---

## 4. Global Use

You may access Math Vision from different jurisdictions, but you are responsible for complying with laws that apply to you.

We may restrict or modify availability, features, access, support, account eligibility, data practices, vendors, model providers, or service plans by jurisdiction where required by law, business risk, vendor limits, sanctions, export controls, privacy requirements, or operational constraints.

Nothing in these Terms limits rights that cannot be waived under laws that apply to consumers or users in your jurisdiction.

---

## 5. Account Registration and Security

You may need an account to use some or all of Math Vision.

You agree to provide accurate, current, and complete account information and to keep that information updated.

You are responsible for maintaining the confidentiality of your credentials, API keys, authentication methods, and devices.

You are responsible for all activity under your account, workspace, organization, API key, or other access credentials.

You may not share your account credentials or make your account available to others unless Math Vision expressly allows that feature.

You must promptly use the security-reporting method we make available if you suspect unauthorized access, credential compromise, security incidents, or misuse of your account.

We may suspend, restrict, reset, or terminate accounts, credentials, sessions, or API keys to protect Math Vision, users, vendors, third parties, or our business.

---

## 6. Access Controls, Capacity, and Service Changes

Math Vision may limit access based on account status, waitlist status, invitation status, organization settings, abuse risk, capacity constraints, usage limits, payment status, administrative decisions, legal requirements, or operational requirements.

We may modify, suspend, remove, replace, or discontinue features, models, model providers, tools, APIs, quotas, limits, service plans, or integrations at any time.

We may impose or change rate limits, usage limits, storage limits, file-size limits, token limits, workspace limits, export limits, or other technical restrictions.

We may refuse, throttle, or block requests that we believe create risk, violate these Terms, exceed limits, degrade the Service, or cause harm.

---

## 7. License to Use Math Vision

Subject to your compliance with these Terms and all applicable policies, we grant you a limited, revocable, non-exclusive, non-transferable, non-sublicensable right to access and use Math Vision for lawful purposes.

This right does not give you any ownership interest in Math Vision, our software, models, systems, workflows, interfaces, documentation, trademarks, trade secrets, or other intellectual property.

We reserve all rights not expressly granted.

---

## 8. Acceptable Use

You may use Math Vision only in compliance with these Terms, applicable law, and any documentation or policies we provide.

You may not:

1. Violate any law, regulation, court order, contract, intellectual property right, privacy right, publicity right, academic integrity rule, school policy, or third-party right.

2. Submit, upload, generate, or share content that is unlawful, abusive, harassing, defamatory, deceptive, exploitative, hateful, threatening, invasive of privacy, sexually exploitative, or otherwise harmful.

3. Use Math Vision to cheat, plagiarize, misrepresent authorship, evade academic requirements, or violate school, employer, or testing rules.

4. Attempt to gain unauthorized access to systems, accounts, models, infrastructure, data, networks, API keys, or non-public areas of the Service.

5. Probe, scan, test, scrape, crawl, overload, disrupt, reverse engineer, decompile, extract, exfiltrate, or interfere with the Service except as expressly authorized by us in writing.

6. Use automated methods to access Math Vision except through interfaces we expressly authorize.

7. Circumvent rate limits, access restrictions, safety mitigations, usage limits, payment requirements, security controls, or technical measures.

8. Use Math Vision to develop, distribute, or facilitate malware, phishing, credential theft, cyber abuse, evasion, unauthorized surveillance, exploitation, or compromise of systems.

9. Use Output to develop, train, improve, benchmark, or validate a model, product, or service that competes with Math Vision unless we authorize it in writing.

10. Modify, copy, lease, sell, resell, sublicense, distribute, or make Math Vision available to third parties unless we authorize it in writing.

11. Remove notices, watermarks, attribution, proprietary markings, safety notices, or security features.

12. Misrepresent Output as human-created when disclosure is legally, academically, contractually, or ethically required.

13. Submit personal information, confidential information, student records, health information, financial account information, government identifiers, trade secrets, export-controlled information, or other sensitive information unless you have authority to do so and your use is permitted by your agreement with us.

14. Use Math Vision or Output as the sole basis for legal, medical, financial, educational, employment, housing, insurance, safety, credit, lending, immigration, criminal justice, or similarly significant decisions about a person.

15. Use Math Vision in a way that creates legal, security, operational, reputational, or business risk for Math Vision, users, vendors, model providers, or third parties.

We may update or supplement these restrictions at any time.

---

## 9. AI Output and Verification

Math Vision uses artificial intelligence systems and third-party model providers.

AI systems can produce Output that is incorrect, incomplete, biased, outdated, offensive, unsafe, or misleading.

You are responsible for reviewing, testing, validating, and independently verifying Output before relying on it.

Math Vision is not a substitute for professional advice, academic judgment, legal advice, medical advice, financial advice, engineering review, safety review, or expert mathematical verification.

You should not rely on Output as a sole source of truth.

Output may not be unique. Other users may receive similar or identical Output.

Output may include errors in reasoning, calculations, proofs, citations, code, formatting, or interpretations.

You are responsible for determining whether Output is appropriate, accurate, lawful, and suitable for your use case.

---

## 10. Ownership of Customer Content

As between you and Math Vision:

1. You retain ownership of Input that you submit, subject to the rights granted in these Terms and our Privacy Policy.

2. To the extent permitted by applicable law, you own Output generated for you.

3. We assign to you any right, title, and interest we may have in Output generated for you, subject to these Terms.

Your ownership of Output does not give you rights in:

1. Math Vision;

2. Our software, models, systems, prompts, workflows, infrastructure, interfaces, documentation, or technology;

3. Third-party services, models, or content;

4. Output generated for other users;

5. Similar or identical Output generated for others;

6. Underlying training data, model weights, model behavior, or system logic.

You are responsible for Customer Content, including ensuring that you have all rights, consents, permissions, notices, and legal bases necessary to submit Input and use Output.

---

## 11. License to Customer Content

You grant Math Vision a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to host, copy, store, reproduce, process, transmit, display, access, view, analyze, modify, transform, create technical derivatives of, and otherwise use Customer Content as necessary or useful to:

1. Provide, operate, maintain, secure, support, and improve the Service;

2. Generate, deliver, format, store, and display Output;

3. Maintain accounts, chat hierarchies, LaTeX projects, documents, conversations, histories, settings, workspaces, and usage records;

4. Provide customer support, troubleshooting, debugging, error correction, diagnostics, and technical maintenance;

5. Monitor, detect, prevent, investigate, and respond to abuse, fraud, security incidents, policy violations, harmful activity, and misuse;

6. Enforce these Terms and other applicable policies;

7. Comply with law, legal process, audits, regulatory requests, contractual obligations, and law enforcement requests;

8. Measure, analyze, test, develop, train, fine-tune, evaluate, benchmark, and improve Math Vision, AI systems, models, products, services, features, safety systems, and business operations;

9. Create Deidentified Data, Aggregated Data, Anonymized Data, analytics, statistics, research, benchmarks, datasets, reports, and derived insights;

10. Exercise rights described in our Privacy Policy.

This license applies to Customer Content submitted before launch, during beta, and after launch.

This license continues for as long as needed for the purposes described in these Terms and our Privacy Policy.

This license survives termination, account deletion, or deletion requests to the extent necessary or permitted for backups, audit logs, legal compliance, dispute resolution, safety, security, abuse prevention, fraud prevention, service improvement, model improvement, Deidentified Data, Aggregated Data, Anonymized Data, and legitimate business purposes.

---

## 12. Company Access to and Review of Customer Content

You authorize Math Vision, its personnel, contractors, vendors, service providers, model providers, subprocessors, and authorized reviewers to access, view, read, process, analyze, label, annotate, moderate, use, and review Customer Content, Usage Data, account information, and related data manually or automatically for the purposes described in these Terms and our Privacy Policy.

This includes access and review for:

1. Providing the Service;

2. Generating and improving Output;

3. Customer support;

4. Debugging and troubleshooting;

5. Safety monitoring;

6. Abuse detection;

7. Security review;

8. Fraud prevention;

9. Policy enforcement;

10. Quality assurance;

11. Product development;

12. Model evaluation;

13. Model training and fine-tuning;

14. Analytics;

15. Legal compliance;

16. Business operations.

We are not obligated to monitor Customer Content, but we may do so.

You should not submit information that you are not authorized to share with Math Vision or that you do not want Math Vision or its authorized providers to access, view, or process.

Some features may allow you to delete, export, restrict, or manage Customer Content, but deletion, export, and restriction features may be limited by law, backups, technical constraints, security needs, abuse-prevention needs, contractual obligations, or legitimate business interests.

---

## 13. Deidentified, Aggregated, and Anonymized Data

Math Vision may create Deidentified Data, Aggregated Data, and Anonymized Data from Customer Content, Usage Data, account information, interactions, support requests, files, prompts, Output, feedback, telemetry, and other information processed through or relating to the Service.

Math Vision may use, retain, reproduce, disclose, publish, transfer, license, sell, share, commercialize, monetize, and otherwise exploit Deidentified Data, Aggregated Data, and Anonymized Data for any lawful purpose, including:

1. Product development;

2. Model training;

3. Model evaluation;

4. Safety research;

5. Benchmarking;

6. Analytics;

7. Market research;

8. Business intelligence;

9. Commercial partnerships;

10. Data licensing;

11. Research;

12. Publications;

13. Reports;

14. Advertising measurement;

15. Industry analysis;

16. Improving Math Vision and related products.

We may sell, license, transfer, or otherwise monetize Deidentified Data, Aggregated Data, and Anonymized Data.

We will not treat Deidentified Data, Aggregated Data, or Anonymized Data as Customer Content owned by you, except where applicable law requires otherwise.

We will use reasonable technical and business measures designed to prevent Deidentified Data and Anonymized Data that we externally disclose, license, or sell from being reasonably linked back to a particular person, household, account, device, or user.

For data that we treat as Deidentified Data or Anonymized Data for external sale, licensing, disclosure, or monetization, we will not attempt to reidentify the data and will require recipients to agree not to attempt to reidentify it, except where a different standard is expressly permitted by applicable law.

We may continue using Deidentified Data, Aggregated Data, and Anonymized Data after your account is terminated or deleted.

---

## 14. Personal Information and Privacy

Our Privacy Policy explains how we collect, use, disclose, retain, sell, share, and otherwise process Personal Information.

If we sell or share Personal Information as those terms are defined under applicable privacy laws, we will provide notices, rights, and choices required by applicable law.

We may disclose Personal Information to vendors, service providers, contractors, subprocessors, infrastructure providers, model providers, analytics providers, payment providers, authentication providers, security providers, and other third parties as described in our Privacy Policy.

We may disclose information in connection with a merger, acquisition, financing, reorganization, bankruptcy, sale of assets, corporate transaction, or transfer of all or part of our business.

We may disclose information where we believe disclosure is required or appropriate to comply with law, legal process, law enforcement requests, regulatory requests, audits, enforceable government requests, litigation, security obligations, or to protect Math Vision, users, vendors, third parties, or the public.

You acknowledge that use of Math Vision involves data processing by Math Vision and third-party providers in the United States and other jurisdictions.

---

## 15. Sensitive Information

You should not submit sensitive information unless your use is expressly permitted by your agreement with us and you have all required rights, consents, notices, and legal bases.

Sensitive information includes:

1. Government identifiers;

2. Financial account information;

3. Payment card numbers;

4. Health information;

5. Medical records;

6. Biometric information;

7. Precise geolocation;

8. Student education records;

9. Children’s information;

10. Trade secrets;

11. Confidential business information;

12. Attorney-client privileged information;

13. Export-controlled information;

14. Passwords, private keys, API keys, authentication tokens, or credentials.

If you submit sensitive information, you are responsible for ensuring that submission and use comply with applicable law, contractual obligations, organizational policies, and these Terms.

We may delete, restrict, block, or refuse to process sensitive information.

---

## 16. Organization, School, and Enterprise Use

If you use Math Vision through an organization, school, employer, workspace, enterprise account, or other managed account, that organization may control your account and access.

Administrators may be able to:

1. Add or remove users;

2. Restrict access;

3. View usage;

4. View, access, export, delete, or manage Customer Content;

5. Manage chat hierarchies, LaTeX projects, documents, conversations, settings, and permissions;

6. Configure retention settings;

7. Review logs and analytics;

8. Suspend or terminate access;

9. Request deletion or export of data.

You are responsible for ensuring that your use of Math Vision complies with your organization’s policies and any applicable confidentiality, security, education, procurement, retention, privacy, or compliance requirements.

If a school, educational institution, teacher, administrator, parent, guardian, district, or organization uses Math Vision with students or minors, that organization is responsible for providing all required notices, obtaining all required consents, complying with education privacy laws, and ensuring that student use is authorized.

Unless a separate written agreement states otherwise, Math Vision may use organization and enterprise Customer Content in the same manner as other Customer Content under these Terms.

---

## 17. Third-Party Services and Model Providers

Math Vision may integrate with or rely on third-party infrastructure, authentication providers, AI model providers, search providers, analytics providers, hosting providers, payment providers, security providers, communication providers, and other vendors.

Your use of third-party services may be subject to their own terms and policies.

Third-party model providers and vendors may process Customer Content, Usage Data, and other information to provide, secure, monitor, improve, or support their services, subject to their agreements with us or their own terms where applicable.

We are not responsible for third-party services, content, models, outputs, outages, security incidents, or data practices except to the extent required by law or a separate written agreement.

Third-party services may change, suspend, discontinue, or restrict functionality at any time.

---

## 18. Intellectual Property

Math Vision and its software, systems, models, workflows, prompts, interfaces, designs, documentation, databases, data structures, tools, APIs, trademarks, trade names, logos, and technology are owned by Math Vision or its licensors and are protected by intellectual property and other laws.

Except for rights expressly granted to you, we reserve all rights in Math Vision.

You may not copy, modify, distribute, sell, lease, sublicense, host, reverse engineer, decompile, extract, or create derivative works from Math Vision except as permitted by these Terms or applicable law.

You may not use Math Vision’s names, logos, trademarks, or branding without our prior written permission.

---

## 19. Feedback

If you provide feedback, suggestions, ideas, bug reports, feature requests, recommendations, comments, or other input about Math Vision, you grant us a perpetual, irrevocable, worldwide, royalty-free, sublicensable, transferable right to use, commercialize, modify, distribute, and exploit that feedback without restriction or compensation.

We are not obligated to use feedback.

Feedback is not confidential unless we expressly agree otherwise in writing.

---

## 20. Paid Services, Billing, and Taxes

Math Vision may offer free plans, paid plans, subscriptions, usage-based billing, enterprise plans, premium features, service credits, API access, or other paid services.

If paid services apply, you agree to pay all fees, taxes, charges, overage fees, and other amounts described in the applicable checkout page, order form, invoice, plan description, pricing page, or agreement.

You must provide complete and accurate billing information and maintain a valid payment method.

For subscriptions, we may automatically charge your payment method on each renewal period until you cancel.

You are responsible for applicable taxes, duties, levies, and governmental charges, excluding taxes based on our net income.

We may suspend, downgrade, limit, or terminate access for failed payment, late payment, suspected fraud, chargebacks, excessive disputes, billing errors, or payment risk.

Fees are non-refundable except as required by law or expressly stated in a separate written agreement.

---

## 21. Cancellation, Renewals, and Price Changes

You may cancel a paid subscription according to the cancellation process we provide.

Unless otherwise stated, cancellation takes effect at the end of the then-current billing period.

If you cancel, you may continue to have access until the end of the paid period unless we suspend or terminate your access under these Terms.

We may change prices, plan features, limits, or billing structures from time to time.

If we increase subscription prices, we will provide reasonable advance notice where required by law or where the increase materially affects you. Price changes will apply on your next renewal unless otherwise stated.

If we discontinue a paid service, we may provide advance notice where practicable and refund prepaid unused fees where required by law or expressly stated in a written agreement.

---

## 22. Availability and Support

Math Vision may be unavailable, interrupted, delayed, inaccurate, degraded, or discontinued due to maintenance, model-provider outages, infrastructure issues, capacity limits, abuse prevention, rate limits, security events, legal requirements, vendor issues, or other causes.

We do not guarantee uninterrupted access, specific model availability, exact response times, preservation of all data, error-free operation, or any specific uptime unless expressly stated in a separate written service level agreement.

Support may be limited, unavailable, or subject to plan level, account status, business hours, or operational capacity.

---

## 23. Security

We use reasonable administrative, technical, and organizational measures designed to protect the Service.

No system is perfectly secure.

You are responsible for securing your devices, credentials, networks, integrations, files, user permissions, and account access.

You must not test, probe, scan, assess, or attempt to bypass Math Vision security except through a written vulnerability disclosure program or other written authorization from us.

You must use the security-reporting method we make available to report suspected vulnerabilities, unauthorized access, or security incidents.

---

## 24. Confidentiality

If we exchange non-public business, technical, financial, product, security, or operational information, each party will use reasonable care to protect the other party’s confidential information and use it only for purposes related to the Service.

Confidentiality obligations do not apply to information that:

1. Is or becomes public without breach of these Terms;

2. Was already known without confidentiality obligations;

3. Is independently developed without use of confidential information;

4. Is lawfully received from a third party without confidentiality obligations;

5. Must be disclosed by law, court order, subpoena, or governmental request.

This section does not limit Math Vision’s rights to process Customer Content, Usage Data, Deidentified Data, Aggregated Data, or Anonymized Data as described in these Terms and our Privacy Policy.

---

## 25. Suspension and Termination

We may suspend, restrict, or terminate access immediately if we believe that:

1. You violated these Terms or applicable policies;

2. Your use creates legal, security, operational, reputational, business, vendor, or user risk;

3. Your account is unauthorized, fraudulent, inactive, unpaid, compromised, or misused;

4. Continued access could harm Math Vision, users, vendors, model providers, third parties, or the public;

5. We are required or reasonably advised to do so by law, legal process, vendor requirements, or government request.

You may stop using Math Vision at any time.

If you believe your account was suspended or terminated in error, you may use the appeal method we make available. We may review reasonable appeals, but we are not obligated to restore access.

Termination does not affect accrued rights, payment obligations, licenses that survive, disclaimers, limitations of liability, confidentiality obligations, data rights, or provisions that by their nature should survive.

---

## 26. Data Retention and Deletion

We may retain Customer Content, account records, Usage Data, logs, backups, analytics, support records, security records, billing records, Deidentified Data, Aggregated Data, Anonymized Data, and other information after termination or deletion for business, legal, security, compliance, audit, tax, accounting, product improvement, dispute resolution, model improvement, abuse-prevention, and operational purposes, as described in our Privacy Policy.

Deletion requests may be limited by law, legal obligations, technical constraints, backups, security needs, abuse-prevention needs, fraud-prevention needs, contractual obligations, accounting obligations, dispute resolution, and legitimate business interests.

We may retain Deidentified Data, Aggregated Data, and Anonymized Data indefinitely unless applicable law requires otherwise.

We are not obligated to retain Customer Content unless required by law or a separate written agreement.

---

## 27. Copyright and Intellectual Property Complaints

If you believe material on Math Vision infringes your copyright or other intellectual property rights, you may submit a report through the copyright-reporting method we make available.

Your report should include:

1. A physical or electronic signature of the person authorized to act on behalf of the owner of the copyright or intellectual property interest;

2. A description of the copyrighted work or intellectual property right you claim has been infringed;

3. A description of where the allegedly infringing material is located in Math Vision;

4. Sufficient information for us to identify the reporting party and respond through the method we make available;

5. A statement that you have a good-faith belief that the disputed use is not authorized by the owner, its agent, or the law;

6. A statement that the information in your report is accurate and, under penalty of perjury where applicable, that you are the owner or authorized to act on behalf of the owner.

We may remove or disable access to content alleged to infringe intellectual property rights and may terminate accounts of repeat infringers where appropriate.

---

## 28. Disclaimers

Math Vision is provided “as is” and “as available.”

To the fullest extent permitted by law, Math Vision and its affiliates, officers, directors, employees, contractors, vendors, licensors, service providers, and model providers disclaim all warranties, whether express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, accuracy, availability, security, reliability, quiet enjoyment, and any warranties arising from course of dealing or trade usage.

We do not warrant that Math Vision or Output will:

1. Meet your requirements;

2. Be uninterrupted;

3. Be accurate;

4. Be secure;

5. Be error-free;

6. Be free of harmful components;

7. Preserve all data;

8. Produce correct results;

9. Produce lawful results;

10. Be suitable for any specific academic, professional, commercial, legal, safety, or technical purpose.

You use Math Vision and Output at your own risk.

---

## 29. Limitation of Liability

To the fullest extent permitted by law, Math Vision and its affiliates, officers, directors, employees, contractors, vendors, licensors, service providers, and model providers will not be liable for indirect, incidental, special, consequential, exemplary, punitive, or enhanced damages, including lost profits, lost revenue, lost business, lost goodwill, lost data, data corruption, security incidents, business interruption, procurement of substitute services, or damages arising from AI Output.

To the fullest extent permitted by law, our total liability for all claims arising out of or relating to the Service or these Terms will not exceed the greater of:

1. The amount you paid to Math Vision for the Service giving rise to the claim during the twelve months before the event giving rise to liability; or

2. One hundred U.S. dollars.

The limitations in this section apply even if a remedy fails of its essential purpose and even if we have been advised of the possibility of damages.

Some jurisdictions do not allow certain limitations, so some limitations may not apply to you.

---

## 30. Indemnification

If you are a business, organization, school, enterprise customer, developer, API user, or otherwise using Math Vision for commercial, professional, institutional, or organizational purposes, you will defend, indemnify, and hold harmless Math Vision and its affiliates, officers, directors, employees, contractors, vendors, licensors, service providers, and model providers from and against claims, damages, liabilities, losses, costs, and expenses, including reasonable attorneys’ fees, arising from or relating to:

1. Your use of Math Vision;

2. Customer Content;

3. Your violation of these Terms;

4. Your violation of law or third-party rights;

5. Your use or reliance on Output;

6. Your products, services, decisions, workflows, or systems that use Math Vision or Output;

7. Your failure to obtain required rights, consents, notices, permissions, or legal bases.

For individual consumers, this indemnity applies only to the extent permitted by applicable law.

---

## 31. Export, Sanctions, and Compliance

You may not use Math Vision in violation of export controls, sanctions, anti-corruption laws, anti-bribery laws, procurement rules, education records laws, privacy laws, or other applicable legal requirements.

You represent that you are not located in, organized under the laws of, or ordinarily resident in a country or region subject to comprehensive sanctions, and that you are not on any restricted-party list.

You may not submit Input that requires a government license for release, export, or re-export unless your agreement with us expressly permits it and you have obtained all required authorizations.

---

## 32. Changes to the Service or Terms

We may update these Terms from time to time.

We may update these Terms due to changes in law, regulatory requirements, security needs, safety needs, vendor requirements, new features, new technologies, product changes, business changes, or operational needs.

If changes materially adversely affect you, we will provide reasonable advance notice where required by law.

All other changes are effective when posted or otherwise made available.

If you do not agree to updated Terms, you must stop using Math Vision.

Your continued use after updated Terms become effective means you accept the updated Terms.

---

## 33. Governing Law and Venue

These Terms are governed by the laws of the jurisdiction specified in a separate written agreement with you.

If no jurisdiction is specified, these Terms are governed by the laws of the State of Delaware, United States, without regard to conflict-of-law rules.

Subject to any non-waivable rights you may have under laws in your jurisdiction, you and Math Vision agree to the exclusive jurisdiction and venue of the state and federal courts located in Delaware for disputes arising out of or relating to these Terms or the Service, unless a separate written agreement provides otherwise.

If you are a consumer located outside the United States, local consumer protection laws may give you rights that these Terms cannot limit or waive.

---

## 34. Informal Dispute Resolution

Before filing a claim, you and Math Vision agree to try to resolve the dispute informally.

To start informal dispute resolution, use the dispute-resolution method we make available and describe the dispute, the relief requested, and sufficient information for us to identify the relevant account or transaction.

We may send notices through the Service, account interfaces, or other legally permitted methods.

If the dispute is not resolved within sixty days after notice is submitted, either party may begin a formal proceeding unless a separate written agreement requires a different process.

This section does not prevent either party from seeking injunctive or equitable relief for unauthorized use, security abuse, intellectual property infringement, or misuse of the Service.

---

## 35. Class Action and Jury Trial Waiver

To the fullest extent permitted by law, you and Math Vision agree that disputes must be brought only on an individual basis and may not be brought as a plaintiff or class member in any class, consolidated, representative, collective, or private attorney general action.

To the fullest extent permitted by law, you and Math Vision knowingly and voluntarily waive any right to trial by jury in any dispute arising out of or relating to these Terms or the Service.

If this section is found unenforceable as to a particular claim or request for relief, that claim or request for relief may proceed only to the extent required by law, and the remaining portions of these Terms will remain in effect.

---

## 36. Assignment

You may not assign or transfer your rights or obligations under these Terms without our prior written consent.

Any attempted assignment or transfer without consent is void.

We may assign or transfer these Terms, in whole or in part, without restriction, including to an affiliate, subsidiary, successor, acquirer, or purchaser of assets or equity.

---

## 37. Severability

If any provision of these Terms is found invalid, illegal, or unenforceable, that provision will be enforced to the maximum extent permitted, and the remaining provisions will remain in full force and effect.

---

## 38. No Waiver

Our failure to enforce any provision of these Terms is not a waiver of our right to enforce that provision later.

Any waiver must be in writing and signed by an authorized representative of Math Vision.

---

## 39. Force Majeure

We will not be liable for delay or failure to perform resulting from causes beyond our reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, internet failures, power failures, cloud provider outages, model provider outages, cyberattacks, government actions, legal restrictions, supply shortages, or other events beyond our reasonable control.

---

## 40. Third-Party Beneficiaries

Math Vision’s affiliates, officers, directors, employees, contractors, vendors, licensors, service providers, model providers, and suppliers are intended third-party beneficiaries of the disclaimers, limitations of liability, indemnity, intellectual property protections, and other protections in these Terms.

Except as stated above, these Terms do not create third-party beneficiary rights.

---

## 41. Entire Agreement

These Terms, together with our Privacy Policy, applicable product-specific terms, order forms, enterprise agreements, data processing agreements, acceptable use policies, and other written agreements that expressly apply, form the entire agreement between you and Math Vision regarding the Service.

These Terms supersede prior or contemporaneous agreements, understandings, or communications regarding the Service, except for separate written agreements signed by Math Vision.
`,
  s = "June 7, 2026",
  I = { title: "Terms of Service", version: "2026-06-07-v2", effectiveDate: s, markdown: v },
  M = { title: "Privacy Policy", version: "2026-06-07-v2", effectiveDate: s, markdown: g };
export { D as L, M as P, I as T };
