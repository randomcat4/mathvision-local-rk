# Recovered module boundaries

This inventory prevents bundled dependencies from being counted as unrecovered
MathVision application source.  It is evidence about the frozen production
bundle, not a proposal to redesign or substitute the product.

## Maintainable application modules

`tools/assemble-source.mjs` contains the authoritative `compatibilityModules`
list.  Every entry there is wired back into the original chunk graph through a
small export-compatible file in `src/compat`, while the maintainable
implementation lives under `src/api`, `src/domain`, `src/features`, or
`src/shared`.

## Frozen third-party modules

`reports/vendor-modules.txt` contains chunks whose recovered bodies are library
implementations rather than MathVision product logic: MUI components/icons and
the React-Markdown/unified rendering engine.  They remain frozen dependencies;
rewriting them into first-party TypeScript would make this repository less
maintainable and would falsely describe vendor code as MathVision source.

## Mixed bundle boundaries

`reports/mixed-boundary-modules.txt` contains chunks in which the production
bundler combined application code with substantial framework or rendering
engines.  These are not declared recovered merely because part of a chunk is a
dependency.  Their application exports continue to be extracted one at a time
and wired through `src/compat`.

## Remaining application work

The remaining set is computed as:

`application-modules - compatibilityModules - vendor-modules`

Mixed chunks remain in this set until each application-facing export has a
named, typed seam.  A passing Vite build proves that restored exports still fit
the captured module graph; it does not by itself prove page-level behavioral
identity.
