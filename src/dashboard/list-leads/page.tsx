import { DashboardStrip } from "@/components/custom/DashboardStrip";
import { Card } from "@/components/ui/card";

import LeadCard from "@/components/custom/LeadCard";

export interface STATUSLEAD {
    name: string,
    status: boolean
}
export default function ListLeadsPage() {
    const StatusLeads: STATUSLEAD[] = [
        {
            name: "Call Done",
            status: true
        },
        {
            name: "Inspection Done",
            status: false
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
            <DashboardStrip title="Recived Leads" />
            <Card className="w-full p-4">
                <LeadCard data={StatusLeads} />
            </Card>
        </div>
    )
}
