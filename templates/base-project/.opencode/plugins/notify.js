export const NotifyOnIdle = async ({ $ }) => {
  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        await $`osascript -e 'display notification "OpenCode session completed" with title "OpenCode"'`
      }
    },
  }
}
