import { useState } from 'react'
import CafeInfo from '@/components/CafeInfo'
import css from './App.module.css'

import VoteOptions from '../VoteOptions'
import VoteStats from '../VoteStats'
import Notification from '../Notification'
import type { Votes, VoteType } from '@/types/votes'

const initialVotesState = {
	good: 0,
	neutral: 0,
	bad: 0,
}

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
			<VoteOptions onVote={handleVote} onReset={resetVotes} canReset={hasVotes} />
			{hasVotes ? (
				<VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />
			) : (
				<Notification />
			)}
		</div>
	)
}

