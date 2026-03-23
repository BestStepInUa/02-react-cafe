import voteOptions from '@/data/voteOptions.json'
import css from './VoteStats.module.css'
import makeVoteName from '@/utils'
import type { Votes, VoteType } from '@/types/votes'

interface VoteStatsProps {
	votes: Votes
	totalVotes: number
	positiveRate: number
}

export default function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {
	const voteResults = voteOptions.map((vote) => (
		<p key={vote} className={css.stat}>
			{makeVoteName(vote)}: <strong>{votes[vote as VoteType]}</strong>
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

