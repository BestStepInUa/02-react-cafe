import { VOTE_TYPES, type VoteType } from '@/types/votes'
import css from './VoteOptions.module.css'
import makeVoteName from '@/utils'

interface VoteOptionsProps {
	onVote: (type: VoteType) => void
	onReset: () => void
	canReset: boolean
}

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
	const voteBtns = VOTE_TYPES.map((option) => (
		<button key={option} className={css.button} onClick={() => onVote(option)}>
			{makeVoteName(option)}
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

