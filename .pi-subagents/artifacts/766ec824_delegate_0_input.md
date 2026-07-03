# Task for delegate

Extract semantic knowledge graph entities and relationships from docs/images in /Users/mufid/personal-projects/blogs. Read these files: CONTEXT.md, package.json, src/content/blog/astro-seo-guide.md, src/content/blog/kubernetes-notes.md, src/content/blog/linux-productivity.md, public/favicon.svg if useful. Return ONLY JSON with shape {"nodes":[{"id":"...","label":"...","type":"CONCEPT|DOCUMENT|FEATURE|DECISION|PERSON|SITE","source":"path"}],"edges":[{"source":"...","target":"...","type":"DESCRIBES|USES|DECIDES|BELONGS_TO|TAGS|PUBLISHES|CANONICAL_FOR","source_file":"path","evidence":"short quote"}]}. Keep IDs stable slug-like. No markdown fences.

## Acceptance Contract
Acceptance level: attested
Completion is not accepted from prose alone. End with a structured acceptance report.

Criteria:
- criterion-1: Return a concise result and residual risks when applicable

Required evidence: manual-notes, residual-risks

Finish with a fenced JSON block tagged `acceptance-report` in this shape:
Use empty arrays when no items apply; array fields contain strings unless object entries are shown.
```acceptance-report
{
  "criteriaSatisfied": [
    {
      "id": "criterion-1",
      "status": "satisfied",
      "evidence": "specific proof"
    }
  ],
  "changedFiles": [
    "src/file.ts"
  ],
  "testsAddedOrUpdated": [
    "test/file.test.ts"
  ],
  "commandsRun": [
    {
      "command": "command",
      "result": "passed",
      "summary": "short result"
    }
  ],
  "validationOutput": [
    "validation output or concise summary"
  ],
  "residualRisks": [
    "none"
  ],
  "noStagedFiles": true,
  "diffSummary": "short description of the diff",
  "reviewFindings": [
    "blocker: file.ts:12 - issue found, or no blockers"
  ],
  "manualNotes": "anything else the parent should know"
}
```