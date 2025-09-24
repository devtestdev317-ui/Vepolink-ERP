import { DashboardStrip } from "@/components/custom/DashboardStrip";
import { Card } from "@/components/ui/card";
import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BadgeAlert } from 'lucide-react';

import { DataLeads } from "../leads-list";
const NewLeadSchema = z.object({
    LeadType: z.string().min(1, "Required"),
    InstrumentType: z.string().min(1, "Required"),
    customerName: z.string().min(1, "Required"),
    customerCompanyName: z.string().min(1, "Required"),
    customerContactNumber: z.string().optional(),
    inquiryLocation: z.string().min(1, "Required"),
    category: z.string().optional(),
    requirement: z.string().min(1, "Required"),
    sourceOfLeadContact: z.string().optional(),
    salesManager: z.string().min(1, "Required"),
    remark: z.string().optional(),
    status: z.boolean(),
});
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

export default function UpdateLeadPage() {
    const { id } = useParams<{ id: string }>();
    const lead = DataLeads.find(lead => lead.id === id);
    const form = useForm<z.infer<typeof NewLeadSchema>>({
        resolver: zodResolver(NewLeadSchema),
        defaultValues: {
            LeadType: lead?.LeadType || "",
            InstrumentType: lead?.InstrumentType || "",
            customerName: lead?.customerName || "",
            customerCompanyName: lead?.customerCompanyName || "",
            customerContactNumber: lead?.customerContactNumber || "",
            inquiryLocation: lead?.inquiryLocation || "",
            category: lead?.category || "",
            requirement: lead?.requirement || "",
            sourceOfLeadContact: lead?.sourceOfLeadContact || "",
            salesManager: lead?.salesManager || "",
            remark: lead?.remark || "",
            status: lead?.status || true,
        },
    })
    function onSubmit(values: z.infer<typeof NewLeadSchema>) {
        console.log(values)
    }
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("");


    interface LEADTYPE {
        id: number;
        label: string;
        value: string;
    }
    const leadTypes: LEADTYPE[] = [
        { id: 1, label: "Instrumental", value: "Instrumental" },
        { id: 2, label: "Chemical", value: "Chemical" },
        { id: 3, label: "Project", value: "Project" },
    ];
    const ClientTypes: LEADTYPE[] = [
        { id: 1, label: "New client", value: "New client" },
        { id: 2, label: "Existing client", value: "Existing client" },
    ];


    const [selectedInstrument, setSelectedInstrument] = React.useState<string | null>(lead?.InstrumentType || null);
    const [ClientList, setClientList] = React.useState<LEADTYPE[]>([]);

    function InstrumentChangeHand(value: string) {
        console.log("value", value);
        setSelectedInstrument(value);
        if (value !== "Existing client") {
            form.reset();
            setClientList([]);
            setValue("");
        }
        else {
            setClientList(DataLeads.map((client) => ({
                id: parseInt(client.id),
                label: client.customerCompanyName,
                value: client.customerCompanyName
            })));
        }
    }
    React.useEffect(() => {
        if (lead?.InstrumentType) {
            InstrumentChangeHand(lead.InstrumentType);
        }
    }, [lead]);
    function handelClientSelect(value: string) {
        DataLeads.forEach((client) => {
            if (client.customerCompanyName === value) {
                form.setValue("customerName", client.customerName);
                form.setValue("customerCompanyName", client.customerCompanyName);
                form.setValue("customerContactNumber", client.customerContactNumber);
                form.setValue("inquiryLocation", client.inquiryLocation);
                form.setValue("category", client.category);
                form.setValue("requirement", client.requirement);
                form.setValue("sourceOfLeadContact", client.sourceOfLeadContact);
                form.setValue("salesManager", client.salesManager);
                form.setValue("remark", client.remark);
                form.setValue("status", client.status);
            }
        });
        form.clearErrors();
    }
    return (
        <div className="w-full p-7">
            <DashboardStrip title="Pre-sales/Leads: Add New" />

            <Card className="p-7 rounded-xl border border-slate-200/60 dark:border-slate-700/60 mt-4 gap-4">
                <div className="flex items-center justify-between">
                    <h4 data-slot="card-title" className="leading-none flex items-center gap-3 text-slate-800">
                        <div className="p-2 bg-blue-50 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-line w-5 h-5 text-blue-600" aria-hidden="true"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path></svg></div>Add New Lead</h4>
                    <Link to="/dashboard/leads" className={buttonVariants({
                        variant: "ghost",
                        className: "text-sm font-normal bg-slate-300/50 hover:bg-slate-400"
                    })}>Back to Leads List</Link>
                </div>

                <div className="flex flex-row w-full">
                    <p className="px-3 py-2.5 mb-8 bg-blue-50 rounded-lg text-blue-700 text-sm flex flex-row items-center gap-x-1  w-full"><BadgeAlert size="18px" /><span>Use the form below to add a new lead to the system. Please ensure all required fields are filled out accurately before submitting.</span></p>
                </div>

                {/* <Separator className="mt-3 mb-6" /> */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-wrap align-baseline items-start">
                        <div className="flex flex-wrap w-full   items-start">
                            <FormField
                                control={form.control}
                                name="LeadType"
                                render={({ field }) => (
                                    <FormItem className="w-1/4 px-2">
                                        <Label className="text-slate-700 font-medium">Lead Type<span className="text-red-500">*</span></Label>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full min-h-[40px]">
                                                    <SelectValue placeholder="Select Lead Type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    leadTypes.map((leadType) => (
                                                        <SelectItem key={leadType.id} value={leadType.value}>{leadType.label}</SelectItem>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="InstrumentType"
                                render={({ field }) => (
                                    <FormItem className="w-1/4 px-2">
                                        <Label className="text-slate-700 font-medium">Instrument Type<span className="text-red-500">*</span></Label>
                                        <Select onValueChange={(value) => {
                                            field.onChange(value);
                                            InstrumentChangeHand(value);
                                        }}
                                            defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full min-h-[40px]">
                                                    <SelectValue placeholder="Select Instrument Type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    ClientTypes.map((leadType) => (
                                                        <SelectItem key={leadType.id} value={leadType.value}>{leadType.label}</SelectItem>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {
                                selectedInstrument === "Existing client" && (<div className="w-1/4 mb-4 flex flex-col px-2 gap-2">
                                    <Label className="text-slate-700 font-medium">Select Client<span className="text-red-500">*</span></Label>
                                    <Popover open={open} onOpenChange={setOpen} >
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={open}
                                                className="w-full justify-between font-normal h-[40px]"
                                            >
                                                {value
                                                    ? ClientList.find((client) => client.label === value)?.label
                                                    : "Select Client..."}
                                                <ChevronsUpDown className="opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Search Client..." className="h-9" />
                                                <CommandList>
                                                    <CommandEmpty>No Client found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {ClientList.map((framework) => (
                                                            <CommandItem
                                                                key={framework.id}
                                                                value={framework.label}
                                                                onSelect={(currentValue) => {
                                                                    setValue(currentValue === value ? "" : currentValue)
                                                                    setOpen(false)
                                                                    handelClientSelect(currentValue)
                                                                }}
                                                            >
                                                                {framework.label}
                                                                <Check
                                                                    className={cn(
                                                                        "ml-auto",
                                                                        value === framework.label ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                </div>)

                            }

                        </div>

                        <FormField
                            control={form.control}
                            name="customerName"
                            render={({ field }) => (
                                <FormItem className="w-1/4 px-2">
                                    <FormLabel className="text-slate-700 font-medium">Customer Name <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Customer Name" className=" h-[40px]" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="customerCompanyName"
                            render={({ field }) => (
                                <FormItem className="w-1/4 px-2">
                                    <FormLabel className="text-slate-700 font-medium">Customer Company Name  <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Customer Company Name" className=" h-[40px]" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="customerContactNumber"
                            render={({ field }) => (
                                <FormItem className="w-1/4 px-2">
                                    <FormLabel className="text-slate-700 font-medium">Customer Contact Number</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="Enter Customer Contact Number" className=" h-[40px]" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="inquiryLocation"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-1/4 px-2">
                                    <FormLabel className="text-slate-700 font-medium">Inquiry Location <span className="text-red-500">*</span></FormLabel>
                                    <Popover >
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "w-full h-[40px] justify-between font-normal capitalize",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value
                                                        ? DataLeads.find((location) => location.inquiryLocation === field.value)?.inquiryLocation
                                                        : "Select Inquiry Location"}
                                                    <ChevronsUpDown className="opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                                <CommandInput
                                                    placeholder="Search Location..."
                                                    className="h-9"
                                                />
                                                <CommandList>
                                                    <CommandEmpty>No Location found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {DataLeads.map((language) => (
                                                            <CommandItem
                                                                className="capitalize"
                                                                value={language.inquiryLocation}
                                                                key={language.id}
                                                                onSelect={() => {
                                                                    form.setValue("inquiryLocation", language.inquiryLocation)
                                                                }}
                                                            >
                                                                {language.inquiryLocation}
                                                                <Check
                                                                    className={cn(
                                                                        "ml-auto",
                                                                        language.inquiryLocation === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem className="w-1/4 px-2">
                                    <FormLabel className="text-slate-700 font-medium">Category</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Category" className=" h-[40px]" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="requirement"
                            render={({ field }) => (
                                <FormItem className="w-1/4 px-2">
                                    <FormLabel className="text-slate-700 font-medium">Requirement<span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Requirement" className=" h-[40px]" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="sourceOfLeadContact"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-1/4 px-2">
                                    <FormLabel className="text-slate-700 font-medium">Source Of Lead</FormLabel>
                                    <Popover >
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "w-full h-[40px] justify-between font-normal capitalize",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value
                                                        ? DataLeads.find(
                                                            (language) => language.sourceOfLeadContact === field.value
                                                        )?.sourceOfLeadContact
                                                        : "Select Source Of Lead"}
                                                    <ChevronsUpDown className="opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                                <CommandInput
                                                    placeholder="Search Location..."
                                                    className="h-9"
                                                />
                                                <CommandList>
                                                    <CommandEmpty>No Source of lead found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {DataLeads.map((language) => (
                                                            <CommandItem
                                                                className="capitalize"
                                                                value={language.sourceOfLeadContact}
                                                                key={language.id}
                                                                onSelect={() => {
                                                                    form.setValue("sourceOfLeadContact", language.sourceOfLeadContact)
                                                                }}
                                                            >
                                                                {language.sourceOfLeadContact}
                                                                <Check
                                                                    className={cn(
                                                                        "ml-auto",
                                                                        language.sourceOfLeadContact === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="salesManager"
                            render={({ field }) => (
                                <FormItem className="flex flex-col w-1/4 px-2">
                                    <FormLabel className="text-slate-700 font-medium">Sales Manager</FormLabel>
                                    <Popover >
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "w-full h-[40px] justify-between font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value
                                                        ? DataLeads.find(
                                                            (language) => language.salesManager === field.value
                                                        )?.salesManager
                                                        : "Select Sales Manager"}
                                                    <ChevronsUpDown className="opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                                <CommandInput
                                                    placeholder="Search framework..."
                                                    className="h-9"
                                                />
                                                <CommandList>
                                                    <CommandEmpty>No framework found.</CommandEmpty>
                                                    <CommandGroup>
                                                        {DataLeads.map((language) => (
                                                            <CommandItem
                                                                value={language.salesManager}
                                                                key={language.id}
                                                                onSelect={() => {
                                                                    form.setValue("salesManager", language.salesManager)
                                                                }}
                                                            >
                                                                {language.salesManager}
                                                                <Check
                                                                    className={cn(
                                                                        "ml-auto",
                                                                        language.salesManager === field.value
                                                                            ? "opacity-100"
                                                                            : "opacity-0"
                                                                    )}
                                                                />
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="remark"
                            render={({ field }) => (
                                <FormItem className="w-full px-2">
                                    <FormLabel className="text-slate-700 font-medium">Remarks</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us a little bit"
                                            className="resize-none h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="w-full flex flex-col items-end justify-end">
                            <Button type="submit" className="cursor-pointer">Update</Button>

                        </div>
                    </form>
                </Form>
            </Card>
        </div>
    );
}