# Identity

## Onfido SDK UI

## Overview

The Onfido Web SDK provides a set of components for JavaScript applications to capture identity documents and selfie photos, videos, and motion captures for the purpose of identity verification.(https://documentation.onfido.com/)

## How to use Identity

### IdentityProvider

```
import { IdentityProvider } from '@afterpaytouch/identity'

<IdentityProvider
  applicantId={applicantId}
  token={sdkToken}
  userStatus=''
  workflowRunId={workflowRunId}
  >

    {children}
</IdentityProvider>
```

### useIdentityContext

```
import { useIdentityContext } from '@afterpaytouch/identity/lib/hooks'

const { token } = useIdentityContext()

console.log('token: ', token)
```
