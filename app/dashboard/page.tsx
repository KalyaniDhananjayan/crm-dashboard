import Tabs from "@/components/Tabs"
import RightPanel from "@/components/RightPanel"
import TopBar from "@/components/TopBar"

function CompanyDetails() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            SuperCompany Ltd ASA
          </h2>
          <p className="text-sm text-gray-500">
            Department Stockholm
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6 mt-4 text-sm">
        <div>
          <span className="text-gray-500">Address</span>
          <p className="text-gray-900">
            Västgötagatan 5, 102 61 Stockholm
          </p>
        </div>

        <div>
          <span className="text-gray-500">Country</span>
          <p className="text-gray-900">Sweden</p>
        </div>

        <div>
          <span className="text-gray-500">Phone</span>
          <p className="text-gray-900">+46 800 193 2820</p>
        </div>

        <div>
          <span className="text-gray-500">Email</span>
          <p className="text-gray-900">info@sc.se</p>
        </div>

        <div>
          <span className="text-gray-500">Category</span>
          <p className="text-gray-900">Customer A</p>
        </div>

        <div>
          <span className="text-gray-500">VAT Number</span>
          <p className="text-gray-900">SE123456789</p>
        </div>
      </div>
    </div>
  )
}



export default function DashboardPage() {
  return (
    <div>
    <div className="px-6 py-4 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div>
        <CompanyDetails />
        <Tabs />
        </div>

        <RightPanel />
    </div>
    </div>
  )
}
