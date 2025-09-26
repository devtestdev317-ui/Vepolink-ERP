import { DashboardStrip } from "@/components/custom/DashboardStrip";
import { Card } from "@/components/ui/card";
import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BadgeAlert } from 'lucide-react';

import { Button, buttonVariants } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Link, useParams } from "react-router-dom";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import { SalesManagerLeadData } from "@/dummy-data/SalesManagerDummyLeadData";
import { SalesManagerLeadSchema } from "@/schema/SalesManagerLeadSchema";
export default function UpdateLeadSalesManagerPage() {
    const { id } = useParams<{ id: string }>();
    const lead = SalesManagerLeadData.find(lead => lead.leadId === id);
    const form = useForm<z.infer<typeof SalesManagerLeadSchema>>({
        resolver: zodResolver(SalesManagerLeadSchema),
        defaultValues: {
            leadId: lead?.leadId || '',
            clientType: lead?.clientType || 'new',
            sourceOfLead: lead?.sourceOfLead || 'email',
            customerName: lead?.customerName || '',
            customerCompanyName: lead?.customerCompanyName || '',
            customerContactNumber: lead?.customerContactNumber || '',
            inquiryLocation: lead?.inquiryLocation || 'north',
            category: lead?.category || 'ambient',
            requirement: lead?.requirement || '',
            remark: lead?.remark || '',
            enquiryStatus: lead?.enquiryStatus || 'pending',
            closeRemark: lead?.closeRemark || '',
            salesManager: lead?.salesManager || '',
            serviceManager: lead?.serviceManager || '',
            technicalFieldEngineer: lead?.technicalFieldEngineer || '',
            inspectionStatus: lead?.inspectionStatus || 'pending',
            quoteAmount: lead?.quoteAmount || 0,
            quoteAttached: lead?.quoteAttached || false,
            attachedPO: lead?.attachedPO || false,
            poDate: lead?.poDate || '',
            attachedPI: lead?.attachedPI || false
        }
    });
    function onSubmit(values: z.infer<typeof SalesManagerLeadSchema>) {
        console.log(values)
    }
    return (
        <div className="w-full p-7">
            <DashboardStrip title="Sales Manager/Add Details Lead" />
            <Card className="p-7 rounded-xl border border-slate-200/60 dark:border-slate-700/60 mt-4 gap-4">
                <div className="flex items-center justify-between">
                    <h4 data-slot="card-title" className="leading-none flex items-center gap-3 text-slate-800">
                        <div className="p-2 bg-blue-50 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-line w-5 h-5 text-blue-600" aria-hidden="true"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path></svg></div>Add Details to Lead</h4>
                    <Link to="/dashboard/leads" className={buttonVariants({
                        variant: "ghost",
                        className: "text-sm font-normal bg-slate-300/50 hover:bg-slate-400"
                    })}>Back to Leads List</Link>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-wrap align-baseline items-start">
                        <div className="flex flex-wrap w-full   items-start">
                            <FormField
                                control={form.control}
                                name="leadId"
                                render={({ field }) => (
                                    <FormItem className="w-1/4 px-2">
                                        <FormLabel className="text-slate-700 font-medium">Lead ID <span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Lead ID" className=" h-[40px] disabled:bg-gray-100" {...field} disabled readOnly />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="clientType"
                                render={({ field }) => (
                                    <FormItem className="w-1/4 px-2">
                                        <FormLabel className="text-slate-700 font-medium">Client Type <span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Client Type" className=" h-[40px] disabled:bg-gray-100" {...field} disabled readOnly />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="sourceOfLead"
                                render={({ field }) => (
                                    <FormItem className="w-1/4 px-2">
                                        <FormLabel className="text-slate-700 font-medium">Source of Lead <span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Source of Lead" className=" h-[40px] disabled:bg-gray-100" {...field} disabled readOnly />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="customerName"
                                render={({ field }) => (
                                    <FormItem className="w-1/4 px-2">
                                        <FormLabel className="text-slate-700 font-medium">Customer Name <span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter Customer Name" className=" h-[40px] disabled:bg-gray-100" {...field} disabled readOnly />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </form>
                </Form>
            </Card>
        </div>
    );
}