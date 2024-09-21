## Zero-effort Typesafety

Date: 2024-09-20

Status: accepted

### context

In [#0012](./0012-type-inference.md),

- RR knows what the types should be!
- tsc doesn't let you type modules
- tsc doesn't let plugins participate in typechecking

### decisions

- custom language service
  - non-routes -> pass through
- cli: typecheck

### limitations

- no top-level tsconfig.json w/ references
- eslint rules may need to be turned off
