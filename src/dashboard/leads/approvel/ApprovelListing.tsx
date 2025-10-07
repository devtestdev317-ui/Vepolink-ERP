import * as React from "react"

import type {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    FilterFn,
} from "@tanstack/react-table"
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, Search, MoveLeft, MoveRight, ScrollText, FileText, RotateCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { rankItem } from "@tanstack/match-sorter-utils"
import { Card } from "@/components/ui/card"
import { DashboardStrip } from "@/components/custom/DashboardStrip"
import { SalesManagerLeadData } from "@/dummy-data/SalesManagerDummyLeadData"
import type { SalesManagerLead } from "@/schema/SalesManagerLeadSchema"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
    FieldSet
} from "@/components/ui/field"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)
    addMeta({
        itemRank,
    })
    return itemRank.passed
};
interface FRAMEWORKS {
    value: string,
    label: string
}
export default function QuoteApprovelPage() {
    const frameworks: FRAMEWORKS[] = [
        {
            value: "director",
            label: "Director",
        },
        {
            value: "CEO",
            label: "CEO",
        },
        {
            value: "voice president",
            label: "Voice President",
        },
        {
            value: "sales manager",
            label: "Sales Manager",
        }
    ]
    const [modelOpen, setModelOpen] = React.useState(false);
    const columns: ColumnDef<SalesManagerLead>[] = [
        {
            accessorKey: "leadId",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Lead ID
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div onClick={() => HandleModel(row.original.leadId)} className="uppercase px-3">{String(row.getValue("leadId")).toUpperCase()}</div>,
        },
        {
            accessorKey: "customerName",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Customer Name
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div onClick={() => HandleModel(row.original.leadId)} className="uppercase px-3">{String(row.getValue("customerName")).toUpperCase()}</div>,
        },
        {
            accessorKey: "customerCompanyName",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Company Name
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div onClick={() => HandleModel(row.original.leadId)} className="uppercase px-3">{String(row.getValue("customerCompanyName")).toUpperCase()}</div>,
        },
        {
            accessorKey: "customerContactNumber",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Contact
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div onClick={() => HandleModel(row.original.leadId)} className="uppercase px-3">{String(row.getValue("customerContactNumber")).toUpperCase()}</div>,
        }
    ];
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = React.useState("")
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})


    const table = useReactTable({
        data: SalesManagerLeadData,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        globalFilterFn: fuzzyFilter,
        state: {
            sorting,
            columnFilters,
            globalFilter,
            columnVisibility,
            rowSelection,
        },
    })
    const [selectedFrameworks, setSelectedFrameworks] = React.useState<string[]>([]);
    // Calculate page numbers to display
    const currentPage = table.getState().pagination.pageIndex + 1;
    const pageCount = table.getPageCount();
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pageCount, startPage + maxVisiblePages - 1);

    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }
    function HandleModel(leadId: string) {
        setModelOpen(true);
        return leadId
    }

    const [actTab, setActTab] = React.useState<string | null>(null)


    return (
        <div className="w-full p-7">
            <DashboardStrip title="Request for Approvel" />
            <Card className="w-full p-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="relative">
                        <Input
                            placeholder="Search across all fields..."
                            value={globalFilter ?? ""}
                            onChange={(event) => setGlobalFilter(event.target.value)}
                            className="max-w-sm h-[40px] w-[320px] pl-[40px]"
                        />
                        <Search className="size-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="h-[40px] ml-auto">
                                    Table Columns <ChevronDown className="ml-2 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="max-h-[220px] overflow-y-auto">
                                {table
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className="capitalize cursor-pointer"
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        )
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id} className="py-3">
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                <div className="flex items-center justify-between py-4">
                    <div className="text-sm text-muted-foreground">
                        {table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length} row(s) selected.
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <MoveLeft className="h-4 w-4" />
                        </Button>

                        {pageNumbers.map(page => (
                            <Button
                                key={page}
                                variant="outline"
                                size="sm"
                                className={`w-8 h-8 p-0 ${currentPage === page ? "bg-blue-100 border-blue-600 text-blue-600" : ""}`}
                                onClick={() => table.setPageIndex(page - 1)}
                            >
                                {page}
                            </Button>
                        ))}

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            <MoveRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
            <Dialog open={modelOpen} onOpenChange={setModelOpen}  >
                <DialogContent className="w-full max-w-full bg-white">
                    <DialogHeader className="flex space-y-2 flex-row gap-x-3 items-center">
                        <div className="w-[45px] h-[45px] rounded-[6px] bg-[#584ccc] flex flex-col items-center justify-center"><RotateCw size={30} stroke="#fff" /></div>
                        <div>
                            <DialogTitle className="leading-6">Aproval</DialogTitle>
                            <div className="leading-5 text-xs text-gray-500">Create a new approval</div>
                        </div>
                    </DialogHeader>
                    <DialogDescription>
                        {/* actTab, setActTab */}
                        <div className="flex flex-wrap gap-x-2">
                            {
                                actTab === null ?
                                    <>
                                        <div className="w-full mb-2.5 font-medium">Select Approvel For</div>
                                        {
                                            [{ name: "Quote", icon: <ScrollText stroke="#fff" size={30} /> }, { name: "PI", icon: <FileText size={30} stroke="#fff" /> }].map((item) => (
                                                <Card key={item.name} className="flex-2 flex flex-row gap-3 p-2 items-center rounded-[6px]" onClick={() => setActTab(item.name)}>
                                                    <div className="w-[45px] h-[45px] flex flex-col items-center justify-center rounded-[6px] bg-[#584ccc]">{item.icon}</div>
                                                    <div>
                                                        {item.name}
                                                    </div>
                                                </Card>
                                            ))
                                        }
                                    </>

                                    : <>
                                        <div className="w-full flex flex-col space-y-4">
                                            <div className="flex flex-col space-y-2.5">
                                                <Label >Name Of Company</Label>
                                                <Input type="text" defaultValue="ABC Pharmaceuticals Ltd" className="h-[45px] text-black" readOnly disabled />
                                            </div>

                                            <div className="flex flex-col space-y-2.5">
                                                <Label >Approvers</Label>
                                                <FieldSet className="">
                                                    <div className="flex flex-wrap gap-0">
                                                        {
                                                            frameworks.map((item) => (
                                                                <div key={item.value} className="w-full md:w-1/2 p-1">
                                                                    <div className="flex items-center space-x-2">
                                                                        <Label htmlFor={item.value} className={`relative p-2 py-3 border rounded w-full font-normal ${selectedFrameworks.includes(item.value) ? "bg-[#584ccc] border-[#584ccc] text-white" : ""}`}>
                                                                            <Checkbox
                                                                                id={item.value}
                                                                                checked={selectedFrameworks.includes(item.value)}
                                                                                onCheckedChange={(checked) => {
                                                                                    if (checked) {
                                                                                        setSelectedFrameworks(prev => [...prev, item.value]);
                                                                                    } else {
                                                                                        setSelectedFrameworks(prev => prev.filter(framework => framework !== item.value));
                                                                                    }
                                                                                }}
                                                                                className="absolute right-2 "
                                                                            />
                                                                            {item.label}
                                                                        </Label>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>

                                                </FieldSet>
                                            </div>
                                            <div className="flex flex-col space-y-2.5">
                                                <Label >Remarks</Label>
                                                <Textarea placeholder="If needed, add some extra info that'll help the recipients about the request." />
                                            </div>
                                            <div className="flex flex-col space-y-2.5">
                                                <Label >Add Attachment</Label>
                                                <Label htmlFor="attacheDoc" className="border-dashed border-2 p-4 rounded flex flex-col items-center justify-center ">
                                                    <div className="flex flex-col space-y-2 items-center justify-center ">
                                                        <img src="/assets/images/upload-file.png" width={55} height={55} />
                                                        <div className="text-gray-600 font-medium mt-2">Drag File here</div>
                                                        <div className="text-blue-600 font-normal ">Or Select a File </div>
                                                    </div>
                                                    <Input id="attacheDoc" className="hidden" type="file" />
                                                </Label>
                                            </div>
                                        </div>
                                        <div className="w-full  flex flex-row justify-between mt-3">
                                            <Button variant="secondary" className="cursor-pointer" type="button" onClick={() => setActTab(null)}>Back</Button>
                                            <Button type="button" className="cursor-pointer" onClick={() => setModelOpen(false)}>Submit</Button>
                                        </div>
                                    </>

                            }
                        </div>
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
    )
}