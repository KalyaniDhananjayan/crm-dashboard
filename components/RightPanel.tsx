export default function RightPanel() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm space-y-6">
      {/* Preview */}
      <div>
        <p className="text-xs text-gray-500 mb-1">PREVIEW</p>
        <h3 className="text-base font-semibold text-gray-900">
          45 Components – RTS
        </h3>
        <p className="text-gray-500 mt-1">€ 17,344 EUR</p>
      </div>

      {/* Sale details */}
      <div className="space-y-2">
        <Detail label="Company" value="SuperCompany Ltd ASA" />
        <Detail label="Contact" value="Peter Elliot" />
        <Detail label="Sale date" value="01/02/2025" />
        <Detail label="Owner" value="Eric Davies" />
        <Detail label="Sale type" value="Cross-sale to existing customer" />
        <Detail label="Status" value="Open (20%)" />
      </div>

      {/* Activities */}
      <div>
        <h4 className="font-medium text-gray-900 mb-2">Activities</h4>
        <ul className="space-y-1 text-gray-600">
          <li>04/11/2024 – Follow-up call</li>
          <li>01/11/2024 – Quote sent</li>
          <li>23/09/2024 – Prospect meeting</li>
          <li>22/09/2024 – Introduction call</li>
        </ul>
      </div>

      {/* Stakeholders */}
      <div>
        <h4 className="font-medium text-gray-900 mb-2">Stakeholders</h4>
        <ul className="space-y-1 text-gray-600">
          <li>James Vargas</li>
          <li>Lisa Jansson</li>
        </ul>
      </div>
    </div>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-2">
      <span className="text-gray-500">{label}</span>
      <span className="text-gray-900 text-right">{value}</span>
    </div>
  )
}
