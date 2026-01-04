import React from "react"
import TopBar from "@/components/TopBar"
import Sidebar from "@/components/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main wrapper (offset for sidebar) */}
      <div className="ml-16 flex flex-col min-h-screen">
        {/* Top bar */}
        <TopBar />

        {/* Page content */}
        <main className="flex-1 px-6 py-4">
          {children}
        </main>
      </div>
    </div>
  )
}
