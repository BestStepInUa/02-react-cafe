import { VOTE_TYPES, type VoteType } from '@/types/votes'
import css from './VoteOptions.module.css'

interface VoteOptionsProps {
	onVote: (type: VoteType) => void
	onReset: () => void
	canReset: boolean
}

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
	const voteBtns = VOTE_TYPES.map((option) => (
		<button key={option} className={css.button} onClick={() => onVote(option)}>
			{option.charAt(0).toUpperCase() + option.slice(1)}
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

