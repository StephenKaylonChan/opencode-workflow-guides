export const CompactionContext = async () => {
  return {
    "experimental.session.compacting": async (input, output) => {
      output.context.push(`
## guides-opencode Persistent State
- Current maintenance phase
- Version synchronization status
- Files changed in this session
- Whether docs and templates were both updated
`)
    },
  }
}
