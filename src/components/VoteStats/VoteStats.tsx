import { VOTE_TYPES, type Votes } from '@/types/votes'
import css from './VoteStats.module.css'
import makeVoteName from '@/utils'

interface VoteStatsProps {
	votes: Votes
	totalVotes: number
	positiveRate: number
}

export default function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {
	const voteResults = VOTE_TYPES.map((vote) => (
		<p key={vote} className={css.stat}>
			{makeVoteName(vote)}: <strong>{votes[vote]}</strong>
		</p>
	))

	return (
		<div className={css.container}>
			{voteResults}
			<p className={css.stat}>
				Total: <strong>{totalVotes}</strong>
			</p>
			<p className={css.stat}>
				Positive: <strong>{positiveRate}%</strong>
			</p>
		</div>
	)
}

