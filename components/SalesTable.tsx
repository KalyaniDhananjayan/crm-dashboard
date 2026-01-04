"use client"

import { useEffect, useState } from "react"

const ITEMS_PER_PAGE = 5

type Sale = {
  status: "Open" | "Lost" | "Sold" | "Stalled"
  amount: number
  stage: string
  nextActivity: string
  name: string
  createdAt: string
}

function statusBadge(status: Sale["status"]) {
  const map = {
    Open: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    Lost: "bg-red-50 text-red-700 border border-red-200",
    Sold: "bg-blue-50 text-blue-700 border border-blue-200",
    Stalled: "bg-orange-50 text-orange-700 border border-orange-200",
  }

  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium ${map[status]}`}>
      {status}
    </span>
  )
}

export default function SalesTable() {
  const [sales, setSales] = useState<Sale[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch("/api/sales")
      .then((res) => res.json())
      .then(setSales)
  }, [])

  const totalPages = Math.ceil(sales.length / ITEMS_PER_PAGE)

  const paginatedSales = sales.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500 border-b">
          <tr>
            <th className="p-3 font-normal text-left">Status</th>
            <th className="p-3 font-normal text-left">Sale date</th>
            <th className="p-3 font-normal text-left">Amount</th>
            <th className="p-3 font-normal text-left">Stage</th>
            <th className="p-3 font-normal text-left">Next activity</th>
            <th className="p-3 font-normal text-left">Sale name</th>
          </tr>
        </thead>

        <tbody>
          {paginatedSales.map((sale, i) => (
            <tr
            key={i}
            className="border-b last:border-b-0 hover:bg-gray-50 text-gray-700"
            >
              <td className="p-3">{statusBadge(sale.status)}</td>
              <td className="p-3">
                {new Date(sale.createdAt).toLocaleDateString()}
              </td>
              <td className="p-3">€ {sale.amount.toLocaleString()}</td>
              <td className="p-3">{sale.stage}</td>
              <td className="p-3">{sale.nextActivity}</td>
              <td className="p-3 font-medium">{sale.name}</td>
            </tr>
          ))}

          {paginatedSales.length === 0 && (
            <tr>
              <td colSpan={6} className="p-6 text-center text-gray-500">
                No sales found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-600">
        <span>
          Page {page} of {totalPages || 1}
        </span>

        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          <button
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
