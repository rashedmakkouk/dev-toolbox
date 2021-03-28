---
title: TypeScript
sidebar_label: TypeScript
---

## Type Definitions

### Overwrite exiting vendor type definitions

> vendor/custom.d.ts

```typescript
declare global {
  namespace NodeJS {
    interface Global {
        myConfig: {
          a: number;
          b: number;
        }
    }
  }
}
```

> tsconfig.json

```json
{
  "types": [
    ...
    "vendor/custom.d.ts"
  ]
}
```
