---
name: commit
agent: agent
description: This prompt is used to generate a commit message based on the changes made in the code.
tools: [execute, read]
model: GPT-5 mini (copilot)
---
# Commit Changes

## Role

Act as a software developer.

## Task

Commit pending changes.
Use the termial tool to run git commands.

## Context

Use the 'commiting-changes' skill as reference.

## Output checklist

- [ ] there are no uncommited changes in the codebase.

