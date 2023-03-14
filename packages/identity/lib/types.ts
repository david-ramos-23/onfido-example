export interface IdentityProviderProps {
  applicantId: string
  token: string
  userStatus: any
  workflowRunId?: string
  phrases?: Record<string, unknown>
}

export interface IdentityContextProps {
  applicantId: string
  status: any
  token: string
  userStatus: any
}
