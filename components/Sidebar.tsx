"use client"

import {
  LayoutDashboard,
  Building2,
  User,
  Calendar,
  DollarSign,
  ClipboardList,
  Ticket,
  Mail,
  List,
  BarChart3,
  Target,
  Wrench,
  ChevronRight,
} from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-gradient-to-b from-emerald-700 to-emerald-900 flex flex-col items-center py-4 text-white">
      {/* Logo */}
      <div className="text-2xl font-bold mb-6">L</div>

      {/* Icons */}
      <nav className="flex flex-col items-center gap-5 flex-1">
        <Icon icon={LayoutDashboard} />
        <Icon icon={Building2} active />
        <Icon icon={User} />
        <Icon icon={Calendar} />
        <Icon icon={DollarSign} />
        <Icon icon={ClipboardList} />
        <Icon icon={Ticket} />
        <Icon icon={Mail} />
        <Icon icon={List} />
        <Icon icon={BarChart3} />
        <Icon icon={Target} />
        <Icon icon={Wrench} />
      </nav>

      {/* Bottom */}
      <div className="mb-2">
        <ChevronRight className="w-5 h-5 opacity-70" />
      </div>
    </aside>
  )
}

function Icon({
  icon: Icon,
  active = false,
}: {
  icon: any
  active?: boolean
}) {
  return (
    <div
      className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer
      ${
        active
          ? "bg-emerald-600"
          : "hover:bg-emerald-600/40"
      }`}
    >
      <Icon className="w-5 h-5" />
    </div>
  )
}
