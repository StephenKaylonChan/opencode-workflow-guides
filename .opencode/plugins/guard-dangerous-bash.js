const BLOCKED = [
  /git\s+push\s+--force\b/,
  /git\s+reset\s+--hard\b/,
  /rm\s+-rf\b/,
]

export const GuardDangerousBash = async () => {
  return {
    "tool.execute.before": async (input, output) => {
      if (input.tool !== "bash") return

      const command = output.args.command || ""
      for (const pattern of BLOCKED) {
        if (pattern.test(command)) {
          throw new Error(`Blocked dangerous bash command: ${command}`)
        }
      }
    },
  }
}
