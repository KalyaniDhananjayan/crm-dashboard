"use client"

import { useState } from "react"

type Props = {
  onClose: () => void
}

export default function AddSaleModal({ onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    status: "Open",
    amount: "",
    stage: "",
    nextActivity: "",
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await fetch("/api/sales", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        status: form.status,
        amount: Number(form.amount),
        stage: form.stage,
        nextActivity: form.nextActivity,
      }),
    })

    onClose()
    window.location.reload()
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-50">
      <div className="bg-white text-gray-900 w-full max-w-md rounded-lg shadow-xl">
        <div className="px-4 py-3 border-b flex justify-between items-center">
          <h2 className="text-sm font-medium">Add Sale</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-3 text-sm">
          <input
            name="name"
            placeholder="Sale name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            required
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          >
            <option>Open</option>
            <option>Lost</option>
            <option>Sold</option>
            <option>Stalled</option>
          </select>

          <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            required
          />

          <input
            name="stage"
            placeholder="Stage (e.g. Proposal 60%)"
            value={form.stage}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            required
          />

          <input
            name="nextActivity"
            type="date"
            value={form.nextActivity}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
            required
          />

          <div className="flex justify-end gap-2 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border rounded text-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-teal-600 text-white rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
