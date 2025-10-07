import { Card, CardTitle } from "@/components/ui/card";
import { SalesManagerLeadData } from "@/dummy-data/SalesManagerDummyLeadData";
import { BadgeAlert } from 'lucide-react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge"
import { BadgeCheckIcon } from "lucide-react";
import { Link } from "react-router-dom";
import type { STATUSLEAD } from "@/dashboard/list-leads/page";

interface LeadCardProps {
    data: STATUSLEAD[];
}
export default function LeadCard({ data }: LeadCardProps) {
    return (
        <div className="flex flex-wrap">
            {
                SalesManagerLeadData.map((item) => (
                    <div className="w-full md:w-1/2 p-2" key={item.leadId}>
                        <Card className=" p-3 rounded-[8px]">
                            <Link to={`/dashboard/leads/update/${item.leadId}`} className="overflow-hidden">
                                <div className="flex flex-row space-x-3">
                                    <div className="w-[120px] h-[120px] flex flex-col items-center justify-center bg-conic-10 from-indigo-600 via-indigo-50 to-indigo-600 rounded-2xl">
                                        <Avatar className="rounded-[5px] size-20">
                                            <AvatarImage
                                                src="/assets/images/office-building.png"
                                                alt="@evilrabbit"
                                            />
                                            <AvatarFallback>ER</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="w-full md:max-w-[320px]">
                                        <CardTitle><span className="text-gray-500 leading-[20px] text-sm">Lead ID: </span><Badge variant="secondary" className="text-[11px]">{item.leadId}</Badge></CardTitle>
                                        <CardTitle className="text-[14px]"><span className="block text-gray-500 leading-[25px]">Company Name</span>{item.companyAddress}</CardTitle>
                                        <CardTitle className="text-[14px]"><span className="block text-gray-500 leading-[25px] text-sm">Requirement</span>{item.requirement}</CardTitle>
                                    </div>
                                </div>

                                <div className="flex items-center w-full text-xs mt-3.5 font-normal my-1.5 gap-x-1.5">
                                    {
                                        data.map((statusItem, i) => (
                                            <Badge
                                                key={i}
                                                variant="secondary"
                                                className={statusItem.status ? "bg-blue-500 text-white dark:bg-blue-600" : "bg-gray-200 text-black"}
                                            >
                                                {statusItem.status ? <BadgeCheckIcon /> : <BadgeAlert />}
                                                {statusItem.name}
                                            </Badge>
                                        ))
                                    }
                                </div>
                            </Link>
                        </Card>

                    </div>
                ))
            }
        </div>
    )
}