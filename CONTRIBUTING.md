# Branching model

This repo uses a trunk + integration branch workflow:

| Branch           | Purpose                                                             |
| ----------------- | -------------------------------------------------------------------- |
| `master`          | Production. Always deployable. Only receives merges from `release/*`. |
| `dev`              | Integration branch. All `feature/*` and `debugfix/*` branches merge here first. |
| `feature/<name>`   | New functionality, branched from `dev` (e.g. `feature/blog-search`). |
| `debugfix/<name>`  | Non-urgent bug fixes, branched from `dev` (e.g. `debugfix/contact-form-validation`). |
| `release/<version>`| Cut from `dev` to stabilize a batch of changes before merging to `master` (e.g. `release/1.1.0`). |

## Workflow

1. Branch from `dev`: `git checkout -b feature/<name> dev`
2. Commit, then open a PR into `dev`.
3. When `dev` is ready to ship, cut `release/<version>` from `dev`, verify (`npm run lint`, `npm run test`, `npm run build`), then merge into both `master` and back into `dev`.
4. Tag releases on `master` (e.g. `v1.1.0`).

## Before opening a PR

```bash
npm run lint
npm run test
npm run build
```
