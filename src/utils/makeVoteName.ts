export default function makeVoteName(vote: string) {
	return vote.charAt(0).toUpperCase() + vote.slice(1)
}
