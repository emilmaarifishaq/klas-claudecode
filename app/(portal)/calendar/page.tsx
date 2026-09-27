export default function CalendarPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Calendar</h1>
        <p className="text-muted-foreground mt-1">Upcoming events and sessions</p>
      </div>

      <div className="bg-card border border-border rounded-xl p-12 text-center">
        <div className="text-5xl mb-4">📅</div>
        <div className="text-lg font-medium text-foreground mb-2">No events scheduled</div>
        <p className="text-sm text-muted-foreground mb-4">
          No events are currently scheduled for July 2026.
        </p>
        <a
          href="https://www.skool.com/claudecodeclub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
        >
          Check Skool for upcoming events →
        </a>
      </div>
    </div>
  )
}
