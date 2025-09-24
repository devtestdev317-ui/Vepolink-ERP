import { DashboardStrip } from "@/components/custom/DashboardStrip";
import { Card } from "@/components/ui/card";
import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BadgeAlert } from 'lucide-react';
const NewLeadSchema = z.object({
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
import { Button } from "@/components/ui/button"
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
import { Link } from "react-router-dom";
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
import type { LEADSDATATYPE } from "../leads-list";
export default function AddNewLeadPage() {
    const form = useForm<z.infer<typeof NewLeadSchema>>({
        resolver: zodResolver(NewLeadSchema),
        defaultValues: {
            customerName: "",
            customerCompanyName: "",
            customerContactNumber: "",
            inquiryLocation: "",
            category: "",
            requirement: "",
            sourceOfLeadContact: "",
            salesManager: "",
            remark: "",
            status: true,
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
        { id: 1, label: "Instrumental", value: "instrumental" },
        { id: 2, label: "Chemical", value: "chemical" },
        { id: 3, label: "Project", value: "project" },
    ];
    const ClientTypes: LEADTYPE[] = [
        { id: 1, label: "New client", value: "new_client" },
        { id: 2, label: "Existing client", value: "existing_client" },
    ];
    const data: LEADSDATATYPE[] = [
        {
            id: "1",
            customerName: "Rahul Sharma",
            customerCompanyName: "Green Tech Industries",
            customerContactNumber: "9876543210",
            inquiryLocation: "north",
            category: "ambient",
            requirement: "Air Quality Monitoring System",
            sourceOfLeadContact: "on Draft",
            salesManager: "Ankit Verma",
            remark: "Requested urgent quotation",
            status: true
        },
        {
            id: "2",
            customerName: "Priya Mehta",
            customerCompanyName: "Aqua Pure Solutions",
            customerContactNumber: "9123456780",
            inquiryLocation: "west",
            category: "effluent",
            requirement: "Effluent Treatment Plant",
            sourceOfLeadContact: "inbound call",
            salesManager: "Neha Kapoor",
            remark: "Follow-up scheduled next week",
            status: false
        },
        {
            id: "3",
            customerName: "Amit Kumar",
            customerCompanyName: "Eco Safe Pvt Ltd",
            customerContactNumber: "9988776655",
            inquiryLocation: "south",
            category: "emission",
            requirement: "Stack Emission Monitoring Device",
            sourceOfLeadContact: "outbound call",
            salesManager: "Ravi Singh",
            remark: "Interested in annual maintenance as well",
            status: true
        },
        {
            id: "4",
            customerName: "Sneha Patel",
            customerCompanyName: "Bio Care Laboratories",
            customerContactNumber: "9012345678",
            inquiryLocation: "east",
            category: "ambient",
            requirement: "Dust Sampler Instrument",
            sourceOfLeadContact: "email",
            salesManager: "Karan Malhotra",
            remark: "Asked for technical brochure",
            status: false
        }
    ];

    const [selectedInstrument, setSelectedInstrument] = React.useState<string | null>(null);
    const [ClientList, setClientList] = React.useState<LEADTYPE[]>([]);

    function InstrumentChangeHand(value: string) {
        setSelectedInstrument(value);
        if (value !== "existing_client") {
            form.reset();
            setClientList([]);
            setValue("");
        }
        else {
            setClientList(data.map((client) => ({
                id: parseInt(client.id),
                label: client.customerCompanyName,
                value: client.customerCompanyName
            })));
        }
    }
    function handelClientSelect(value: string) {
        data.forEach((client) => {
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
    }
    return (
        <div className="w-full p-7">
            <DashboardStrip title="Pre-sales/Leads: Add New" />

            <Card className="p-7 rounded-xl border border-slate-200/60 dark:border-slate-700/60 mt-4 gap-4">
                <div className="flex items-center justify-between">
                    <h4 data-slot="card-title" className="leading-none flex items-center gap-3 text-slate-800">
                        <div className="p-2 bg-blue-50 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pen-line w-5 h-5 text-blue-600" aria-hidden="true"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path></svg></div>Add New Lead</h4><Link to="/dashboard/leads" data-slot="button" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4 mr-2" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>Back to Leads</Link></div>

                <div className="flex flex-row w-full">
                    <p className="px-3 py-2.5 mb-8 bg-blue-50 rounded-lg text-blue-700 text-sm flex flex-row items-center gap-x-1  w-full"><BadgeAlert size="18px" /><span>Use the form below to add a new lead to the system. Please ensure all required fields are filled out accurately before submitting.</span></p>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-1/4 mb-4 flex flex-col px-2 gap-2">
                        <Label className="text-slate-700 font-medium">Lead Type<span className="text-red-500">*</span></Label>
                        <Select>
                            <SelectTrigger className="w-full min-h-[40px]">
                                <SelectValue placeholder="Select Lead Type" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    leadTypes.map((leadType) => (
                                        <SelectItem key={leadType.id} value={leadType.value}>{leadType.label}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-1/4 mb-4 flex flex-col px-2 gap-2">
                        <Label className="text-slate-700 font-medium">Instrument Type<span className="text-red-500">*</span></Label>
                        <Select onValueChange={(e) => InstrumentChangeHand(e)}>
                            <SelectTrigger className="w-full min-h-[40px]">
                                <SelectValue placeholder="Select Instrument Type" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    ClientTypes.map((leadType) => (
                                        <SelectItem key={leadType.id} value={leadType.value}>{leadType.label}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </div>
                    {
                        selectedInstrument === "existing_client" && (<div className="w-1/4 mb-4 flex flex-col px-2 gap-2">
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

                {/* <Separator className="mt-3 mb-6" /> */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-wrap align-top">
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
                                                        ? data.find((location) => location.inquiryLocation === field.value)?.inquiryLocation
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
                                                        {data.map((language) => (
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
                                                        ? data.find(
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
                                                        {data.map((language) => (
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
                                                        ? data.find(
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
                                                        {data.map((language) => (
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
                            <Button type="submit" className="cursor-pointer">Submit</Button>

                        </div>
                    </form>
                </Form>
            </Card>
        </div>
    );
}