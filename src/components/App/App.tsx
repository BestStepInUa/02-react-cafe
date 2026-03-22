import { useState } from 'react'
import CafeInfo from '@/components/CafeInfo'
import css from './App.module.css'
import { VOTE_TYPES, type Votes, type VoteType } from '@/types/votes'
import VoteOptions from '../VoteOptions'
import VoteStats from '../VoteStats'
import Notification from '../Notification'

const initialVotesState: Votes = Object.fromEntries(VOTE_TYPES.map((type) => [type, 0])) as Votes

export default function App() {
	const [votes, setVotes] = useState<Votes>(initialVotesState)

	const handleVote = (type: VoteType) => {
		setVotes({ ...votes, [type]: votes[type] + 1 })
	}

	const resetVotes = () => {
		setVotes(initialVotesState)
	}

	const totalVotes = Object.values(votes).reduce((sum, value) => sum + value, 0)
	const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0

	const hasVotes = totalVotes > 0

	return (
		<div className={css.app}>
			<CafeInfo />
			<VoteOptions onVote={handleVote} onReset={resetVotes} canReset={hasVotes ? true : false} />
			{hasVotes ? (
				<VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />
			) : (
				<Notification />
			)}
		</div>
	)
}

