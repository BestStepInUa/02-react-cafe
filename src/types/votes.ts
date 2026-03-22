export const VOTE_TYPES = ['good', 'neutral', 'bad'] as const

export type VoteType = (typeof VOTE_TYPES)[number]

export type Votes = Record<VoteType, number>