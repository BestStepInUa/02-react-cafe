import type { VoteType } from '@/types/votes'
import voteOptions from '@/data/voteOptions.json'
import css from './VoteOptions.module.css'
import makeVoteName from '@/utils'

interface VoteOptionsProps {
	onVote: (type: VoteType) => void
	onReset: () => void
	canReset: boolean
}

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
	const voteBtns = voteOptions.map((vote) => (
		<button key={vote} className={css.button} onClick={() => onVote(vote as VoteType)}>
			{makeVoteName(vote)}
		</button>
	))

	return (
		<div className={css.container}>
			{voteBtns}
			{canReset && (
				<button className={`${css.button} ${css.reset}`} onClick={onReset}>
					Reset
				</button>
			)}
		</div>
	)
}
