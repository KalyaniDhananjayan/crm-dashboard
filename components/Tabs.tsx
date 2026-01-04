"use client"

import { useState } from "react"
import SalesTable from "./SalesTable"
import AddSaleModal from "./AddSaleModal"

const tabs = ["Activities", "Contacts", "Projects", "Sales", "Requests"]

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Sales")

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-6 border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm ${
              activeTab === tab
                ? "border-b-2 border-teal-600 text-teal-600 font-medium"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "Sales" ? (
        <SalesSection />
      ) : (
        <div className="text-gray-500 text-sm">
          {activeTab} content not implemented
        </div>
      )}
    </div>
  )
}

function SalesSection() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="flex gap-6 mb-3 text-sm text-gray-400">
        <button onClick={() => setOpen(true)} className="hover:text-gray-900">
          ＋ Add
        </button>
        <button className="hover:text-gray-900">🗑 Delete</button>
        <button className="hover:text-gray-900">⏷ Filter</button>
        <button className="hover:text-gray-900">⬇ Export</button>
      </div>

      <SalesTable />

      {open && <AddSaleModal onClose={() => setOpen(false)} />}
    </div>
  )
}