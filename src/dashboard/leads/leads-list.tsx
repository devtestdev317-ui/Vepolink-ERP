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
import { ArrowUpDown, ChevronDown, MoreHorizontal, Search, MoveLeft, MoveRight } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
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
import { Badge } from "@/components/ui/badge"
import { rankItem } from "@tanstack/match-sorter-utils"
import { Link } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { DashboardStrip } from "@/components/custom/DashboardStrip"

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(row.getValue(columnId), value)
    addMeta({
        itemRank,
    })
    return itemRank.passed
};

export type LEADSDATATYPE = {
    id: string;
    customerName: string;
    customerCompanyName: string;
    customerContactNumber: string;
    inquiryLocation: string;
    category: string;
    requirement: string;
    sourceOfLeadContact: string;
    salesManager: string;
    remark: string;
    status: boolean
}
const data: LEADSDATATYPE[] = [
    {
        id: "1",
        customerName: "Rahul Sharma",
        customerCompanyName: "GreenTech Industries",
        customerContactNumber: "9876543210",
        inquiryLocation: "north",
        category: "ambient",
        requirement: "Air Quality Monitoring System",
        sourceOfLeadContact: "email",
        salesManager: "Ankit Verma",
        remark: "Requested urgent quotation",
        status: true
    },
    {
        id: "2",
        customerName: "Priya Mehta",
        customerCompanyName: "AquaPure Solutions",
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
        customerCompanyName: "EcoSafe Pvt Ltd",
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
        customerCompanyName: "BioCare Laboratories",
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

export const columns: ColumnDef<LEADSDATATYPE>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
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
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("customerName")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "customerCompanyName",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Customer Company Name
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("customerCompanyName")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "customerContactNumber",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Customer Contact Number
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("customerContactNumber")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "inquiryLocation",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Inquiry Location
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("inquiryLocation")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "category",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Category
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("category")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "requirement",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Requirement
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("requirement")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "sourceOfLeadContact",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Source Of Lead
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("sourceOfLeadContact")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "salesManager",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Sales Manager
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("salesManager")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "remark",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Remark
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({ row }) => <div className="uppercase">{String(row.getValue("remark")).toLocaleUpperCase()}</div>,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            row.getValue("status") ? (
                <Badge variant="default" className="bg-green-100 border-green-500 text-green-700" >Active</Badge>
            ) : (
                <Badge variant="destructive" className="bg-red-100 border-red-500 text-red-700" >Inactive</Badge>
            )
        ),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Copy Lead ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Link to={`/dashboard/leads/view/${payment.id}`}>View Leads</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to={`/dashboard/leads/update/${payment.id}`}>Edit Leads</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to={`/dashboard/leads/${payment.id}/delete`}>Delete Leads</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
];



export default function LeadsList() {

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = React.useState("")
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({
            customerName: true,
            customerCompanyName: true,
            customerContactNumber: true,
            inquiryLocation: true,
            category: true,
            requirement: true,
            sourceOfLeadContact: true,
            salesManager: true,
            remark: true,
            status: true
        })
    const [rowSelection, setRowSelection] = React.useState({
    });
    const table = useReactTable({
        data,
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

    // Calculate page numbers to display
    const currentPage = table.getState().pagination.pageIndex + 1;
    const pageCount = table.getPageCount();
    const maxVisiblePages = 5; // Number of page buttons to show

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

    return (
        <div className="w-full p-7">
            <DashboardStrip title="Pre-sales/Leads: List" />
            <Card className="w-full p-4">
                <div className="flex items-center justify-between">
                    <div className="relative">
                        <Input
                            placeholder="Search across all fields..."
                            value={globalFilter ?? ""}
                            onChange={(event) =>
                                setGlobalFilter(event.target.value)
                            }
                            className="max-w-sm h-[40px] w-[320px] pl-[40px]"
                        />
                        <Search className="size-[20px] absolute left-3 top-[12px]" stroke="#808080" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="h-[40px] ml-auto text-[#6d7a86] font-semibold cursor-pointer">
                                    <span className="font-medium">Show</span>: Table Columns <ChevronDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="h-[220px]">
                                {table
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className="capitalize  cursor-pointer"
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) =>
                                                    column.toggleVisibility(!!value)
                                                }
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        )
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Link to="/dashboard/leads/add" className={buttonVariants({
                            variant: "outline",
                            className: "h-[40px] ml-auto text-white font-semibold bg-blue-500 hover:bg-blue-600 hover:text-white"
                        })}>Add New Lead</Link>
                    </div>
                </div>
                <div className="overflow-hidden rounded-md border">
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
                                            <TableCell key={cell.id}>
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
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex items-center justify-between py-4">
                    <div className="text-muted-foreground flex-1 text-sm">
                        {table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length} row(s) selected.
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            className="h-8 w-8 p-0 border-0 rounded-0 cursor-pointer shadow-none"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <span className="sr-only">Go to previous page</span>
                            <MoveLeft className="h-4 w-4" />
                        </Button>

                        {pageNumbers.map(page => (
                            <Button
                                key={page}
                                variant={"outline"}
                                className={`h-8 w-8 p-0 rounded-[4px] cursor-pointer hover:bg-blue-100 hover:border-blue-600 hover:text-blue-600 ${currentPage === page ? "bg-blue-100 border-blue-600 text-blue-600" : ""}`}
                                onClick={() => table.setPageIndex(page - 1)}
                            >
                                {page}
                            </Button>
                        ))}

                        <Button
                            variant="outline"
                            className="h-8 w-8 p-0 border-0 rounded-0 cursor-pointer shadow-none"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            <span className="sr-only">Go to next page</span>
                            <MoveRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}