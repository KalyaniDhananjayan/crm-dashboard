export default function TopBar() {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-b">
      {/* LEFT */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 px-4 py-2 bg-white border rounded-full text-sm font-medium">
          🏢 New
          <span className="text-xs">▾</span>
        </button>

      </div>

      {/* CENTER */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-xl relative">
          <input
            type="text"
            placeholder="Search for anything"
            disabled
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white border text-sm text-gray-600"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div className="relative">
          🔔
          <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
            3
          </span>
        </div>

        <div className="w-8 h-8 rounded-full bg-gray-300" />

        <button className="text-lg">☰</button>

        <span className="hidden md:inline">Help</span>

        <button className="p-2 border rounded-md bg-white">
          ▦
        </button>
      </div>
    </div>
  )
}
