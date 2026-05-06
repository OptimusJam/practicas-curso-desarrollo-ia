---
name: commit-changes
description: >
  Commit pending changes
  To be used for committing changes to the repository after making modifications to files.

---

# Committing Changes Skill

When asked for committing changes, follow these steps:

1. **Check for uncommitted changes**:
  - Use 'git status' to see if there are any uncommitted changes in the repository.

2. **Group changes**:
  - If there are multiple changes, group them logically based on the files modified or the nature of the changes.
  - Decide on meaningful commit messages for each group of changes.

3. **Stage changes**:
  - Stage the changes using 'git add' for each group of files.

4. **Commit changes**:
  - Commit the staged changes using 'git commit' with an appropriate commit message, using [conventional commit messages](./conventional-commits.md) guidelines.