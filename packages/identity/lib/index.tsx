import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import type { SdkError, SdkHandle, SdkResponse } from 'onfido-sdk-ui'
import { IdentityContextProps, IdentityProviderProps } from './types'
import { IdentityContext } from './context'

export const IdentityProvider = ({ applicantId, token, workflowRunId, userStatus }: IdentityProviderProps): JSX.Element => {
  const sdk = useRef<SdkHandle>()

  const initializeOnfidoSDK = useCallback(async () => {
    if (token === '' || workflowRunId === '') {
      return
    }
    try {
      const { init } = await import('onfido-sdk-ui')

      sdk.current = init({
        token,
        containerId: 'onfido-mount',
        workflowRunId,
        onComplete: function (data: SdkResponse) {
          console.log('everything is complete', data)
        },
        onError: function (error: SdkError) {
          console.log(error)
        },
      })
    } catch (error) {
      console.error('IdentityProvider initialize OnfidoSDK error: ', error)
    }
  }, [token, workflowRunId])

  const value = useMemo<IdentityContextProps>(
    () => ({
      applicantId,
      status,
      token,
      userStatus,
    }),
    [applicantId, token, userStatus]
  )

  useEffect(() => {
    initializeOnfidoSDK()
  }, [initializeOnfidoSDK])

  return (
    <IdentityContext.Provider value={value}>
      <div id='onfido-mount'></div>
    </IdentityContext.Provider>
  )
}
