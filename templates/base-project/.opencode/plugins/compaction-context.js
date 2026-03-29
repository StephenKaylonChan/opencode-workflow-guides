export const CompactionContext = async () => {
  return {
    "experimental.session.compacting": async (input, output) => {
      output.context.push(`
## Persistent State
- Current task status
- Important decisions made
- Files being actively edited
- Known blockers and next steps
`)
    },
  }
}
