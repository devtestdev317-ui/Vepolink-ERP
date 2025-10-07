import { DashboardStrip } from "@/components/custom/DashboardStrip";
import LeadCard from "@/components/custom/LeadCard";
import type { STATUSLEAD } from "@/dashboard/list-leads/page";


export default function InspectionListPage() {
    const StatusLeads: STATUSLEAD[] = [
        {
            name: "Inspection Done",
            status: true
        },
        {
            name: "Quote Done",
            status: false
        },
        {
            name: "PO Done",
            status: false
        },
        {
            name: "PI Done",
            status: false
        },
    ]
    return (
        <div className="w-full p-7">
            <DashboardStrip title="Inspection List" />
            <LeadCard data={StatusLeads} />
        </div>
    )
}