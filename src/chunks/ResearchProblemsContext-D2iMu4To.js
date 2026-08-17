import { ax as r, aj as p, r as c } from "./index-BM3ZINIl.jsx";
import { t as m } from "./attachmentsApi-BHgxfYft.js";
const o = p,
  t = (e) => {
    if (e === null) throw new Error("Research submission response is incomplete.");
    return e;
  },
  n = (e) => {
    const a = {
      id: e.id,
      title: e.title,
      email: e.email,
      name: e.name,
      careerStage: e.career_stage,
      affiliation: e.affiliation,
      createdAt: e.created_at,
      lastUpdated: e.last_updated,
      subject: e.subject ? { type: e.subject.type, targetId: e.subject.target_id } : null,
    };
    return e.submission_type === "problem"
      ? {
          ...a,
          submissionType: "problem",
          problemStatement: t(e.problem_statement),
          mathematicalArea: t(e.mathematical_area),
          notability: t(e.notability),
          expectedSolutionTime: t(e.expected_solution_time),
          keywords: t(e.keywords),
          publicSource: t(e.public_source),
          meaningfulProgress: t(e.meaningful_progress),
          approachIntuition: t(e.approach_intuition),
          examplesAndCounterexamples: t(e.examples_and_counterexamples),
          problemComments: e.problem_comments ?? "",
          attachments: e.attachments.map(m),
        }
      : {
          ...a,
          submissionType: "feedback",
          overallReaction: t(e.overall_reaction),
          firstSeriousProblem: t(e.first_serious_problem),
          issueExplanation: t(e.issue_explanation),
          usefulParts: t(e.useful_parts),
          suggestedNextStep: t(e.suggested_next_step),
          problemSubmissionId: e.problem_submission_id,
        };
  },
  u = (e) => {
    const a = {
      submission_type: e.submissionType,
      title: e.title,
      email: e.email,
      name: e.name,
      career_stage: e.careerStage,
      affiliation: e.affiliation,
      confirms_submission_authority: e.confirmsSubmissionAuthority,
      subject: e.subject ? { type: e.subject.type, target_id: e.subject.targetId } : null,
    };
    return e.submissionType === "problem"
      ? {
          ...a,
          submission_type: "problem",
          problem_statement: e.problemStatement,
          mathematical_area: e.mathematicalArea,
          notability: e.notability,
          expected_solution_time: e.expectedSolutionTime,
          keywords: e.keywords,
          public_source: e.publicSource,
          meaningful_progress: e.meaningfulProgress,
          approach_intuition: e.approachIntuition,
          examples_and_counterexamples: e.examplesAndCounterexamples,
          problem_comments: e.problemComments || null,
          attachment_ids: e.attachmentIds,
        }
      : {
          ...a,
          submission_type: "feedback",
          problem_submission_id: e.problemSubmissionId,
          overall_reaction: e.overallReaction,
          first_serious_problem: e.firstSeriousProblem,
          issue_explanation: e.issueExplanation,
          useful_parts: e.usefulParts,
          suggested_next_step: e.suggestedNextStep,
        };
  },
  _ = (e) => ({
    id: e.id,
    chatId: e.chat_id,
    chatName: e.chat_name,
    messageIndex: e.message_index,
    status: e.status,
    createdAt: e.created_at,
  }),
  f = () =>
    r
      .get(o, "research-submissions")
      .then((e) => ({
        submissions: e.submissions.map(n),
        pilotSubmissionLimit: e.pilot_submission_limit,
        remainingPilotSubmissionSlots: e.remaining_pilot_submission_slots,
        isPilotIntakeOpen: e.is_pilot_intake_open,
        attachmentMaxCount: e.attachment_max_count,
      })),
  g = (e) => r.post(o, "research-submissions", u(e)).then((a) => n(a)),
  x = (e, a) =>
    r
      .post(o, `research-submissions/problems/${e}/feedback`, {
        overall_reaction: a.overallReaction,
        first_serious_problem: a.firstSeriousProblem,
        issue_explanation: a.issueExplanation,
        useful_parts: a.usefulParts,
        suggested_next_step: a.suggestedNextStep,
      })
      .then((i) => {
        const l = n(i);
        if (l.submissionType !== "feedback")
          throw new Error("Problem feedback endpoint returned a non-feedback submission.");
        return l;
      }),
  S = () => r.get(o, "research-submissions/math-harness-runs").then((e) => e.map(_)),
  s = {
    all: ["research-problems"],
    submissions: () => [...s.all, "submissions"],
    linkableMathHarnessRuns: () => [...s.all, "linkable-math-harness-runs"],
  },
  d = c.createContext(null);
function y() {
  const e = c.useContext(d);
  if (!e)
    throw new Error("useResearchProblems must be used within a ResearchProblemsContext provider.");
  return e;
}
export { d as R, g as a, S as b, x as c, f as g, s as r, y as u };
