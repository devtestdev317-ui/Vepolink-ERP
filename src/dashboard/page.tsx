import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

interface SectionProps {
    id: string
    title: string;
    description: string;
    subnavItems?: SubnavItem[];
}
interface SubnavItem {
    id: string;
    title: string;
    href: string;
    disabled?: boolean;
}
export default function DashboardPage() {
    const sections: SectionProps[] = [
        {
            id: '1',
            title: 'Pre-sales/Leads',
            description: 'Get a quick overview of your dashboard.',
            subnavItems: [
                { id: '1', title: 'Overview', href: '/dashboard/overview' },
                { id: '2', title: 'Analytics', href: '/dashboard/analytics' },
                { id: '3', title: 'Reports', href: '/dashboard/reports', disabled: true },
                { id: '4', title: 'Price', href: '/dashboard/price', disabled: true },
                { id: '5', title: 'Comparisons', href: '/dashboard/comparisons', disabled: true },
                { id: '6', title: 'Case Studies', href: '/dashboard/case-studies', disabled: true },
                { id: '7', title: 'Events', href: '/dashboard/events', disabled: true },
                { id: '8', title: 'Contact Sales', href: '/dashboard/contact-sales', disabled: true },
            ]
        },
        {
            id: '2',
            title: 'Sales',
            description: 'Get a quick overview of your dashboard.',
            subnavItems: [
                {
                    id: "1",
                    title: "Overview",
                    href: "/dashboard/overview",
                    disabled: true
                },
                {
                    id: "2",
                    title: "Analytics",
                    href: "/dashboard/analytics",
                    disabled: true
                },
                {
                    id: "3",
                    title: "Reports",
                    href: "/dashboard/reports",
                },
                {
                    id: "4",
                    title: "Pricing",
                    href: "/dashboard/pricing",
                },
                {
                    id: "5",
                    title: "Comparisons",
                    href: "/dashboard/comparisons",
                    disabled: true
                },
                {
                    id: "6",
                    title: "Case Studies",
                    href: "/dashboard/case-studies",
                    disabled: true
                },
                {
                    id: "7",
                    title: "Webinars",
                    href: "/dashboard/webinars",
                },
                {
                    id: "8",
                    title: "ROI Calculator",
                    href: "/dashboard/roi-calculator",
                },
                {
                    id: "9",
                    title: "Request Demo",
                    href: "/dashboard/request-demo",
                },
                {
                    id: "10",
                    title: "Contact Sales",
                    href: "/dashboard/contact-sales",
                },
                {
                    id: "11",
                    title: "Implementation",
                    href: "/dashboard/implementation",
                },
                {
                    id: "12",
                    title: "Security & Compliance",
                    href: "/dashboard/security",
                }
            ]
        },
        {
            id: '3',
            title: 'Accounts',
            description: 'Get a quick overview of your dashboard.',
            subnavItems: [
                {
                    id: "1",
                    title: "Account Overview",
                    href: "/accounts/overview"
                },
                {
                    id: "2",
                    title: "Profile Settings",
                    href: "/accounts/profile"
                },
                {
                    id: "3",
                    title: "Billing & Payments",
                    href: "/accounts/billing",
                },
                {
                    id: "4",
                    title: "Subscription",
                    href: "/accounts/subscription",
                    disabled: true
                },
                {
                    id: "5",
                    title: "Usage Analytics",
                    href: "/accounts/usage",
                },
                {
                    id: "6",
                    title: "Team Members",
                    href: "/accounts/team",
                },
                {
                    id: "7",
                    title: "API Keys",
                    href: "/accounts/api-keys",
                },
                {
                    id: "8",
                    title: "Security & Login",
                    href: "/accounts/security",
                },
                {
                    id: "9",
                    title: "Notifications",
                    href: "/accounts/notifications",
                },
                {
                    id: "10",
                    title: "Preferences",
                    href: "/accounts/preferences",
                },
                {
                    id: "11",
                    title: "Data & Privacy",
                    href: "/accounts/privacy",
                },
                {
                    id: "12",
                    title: "Download Data",
                    href: "/accounts/data-export",
                }
            ]
        },
        {
            id: '4',
            title: 'Service',
            description: 'Get a quick overview of your dashboard.',
            subnavItems: [
                {
                    id: "1",
                    title: "Service Dashboard",
                    href: "/service/dashboard"
                },
                {
                    id: "2",
                    title: "Ticket Status",
                    href: "/service/tickets"
                },
                {
                    id: "3",
                    title: "Create Ticket",
                    href: "/service/create-ticket",
                    disabled: true
                },
                {
                    id: "4",
                    title: "Knowledge Base",
                    href: "/service/knowledge-base",
                },
                {
                    id: "5",
                    title: "Live Chat",
                    href: "/service/live-chat",
                },
                {
                    id: "6",
                    title: "Service History",
                    href: "/service/history",
                    disabled: true
                },
                {
                    id: "7",
                    title: "SLA Status",
                    href: "/service/sla",
                },
                {
                    id: "8",
                    title: "Resources",
                    href: "/service/resources",
                },
                {
                    id: "9",
                    title: "System Status",
                    href: "/service/status",
                },
                {
                    id: "10",
                    title: "Contact Support",
                    href: "/service/contact",
                },
                {
                    id: "11",
                    title: "Training",
                    href: "/service/training",
                },
                {
                    id: "12",
                    title: "Feedback",
                    href: "/service/feedback",
                    disabled: true
                }
            ]
        },
        {
            id: '5',
            title: 'IT support',
            description: 'Get a quick overview of your dashboard.',
            subnavItems: [
                { id: '1', title: 'Overview', href: '/dashboard/overview' },
                { id: '2', title: 'Analytics', href: '/dashboard/analytics' },
                { id: '3', title: 'Reports', href: '/dashboard/reports', disabled: true },
                { id: '4', title: 'Price', href: '/dashboard/price', disabled: true },
                { id: '5', title: 'Comparisons', href: '/dashboard/comparisons', disabled: true },
                { id: '6', title: 'Case Studies', href: '/dashboard/case-studies', disabled: true },
                { id: '7', title: 'Events', href: '/dashboard/events', disabled: true },
                { id: '8', title: 'Contact Sales', href: '/dashboard/contact-sales', disabled: true },
            ]
        },
        {
            id: '6',
            title: 'IT Department',
            description: 'Get a quick overview of your dashboard.',
            subnavItems: [
                { id: '1', title: 'Overview', href: '/dashboard/overview' },
                { id: '2', title: 'Analytics', href: '/dashboard/analytics' },
                { id: '3', title: 'Reports', href: '/dashboard/reports', disabled: true },
                { id: '4', title: 'Price', href: '/dashboard/price', disabled: true },
                { id: '5', title: 'Comparisons', href: '/dashboard/comparisons', disabled: true },
                { id: '6', title: 'Case Studies', href: '/dashboard/case-studies', disabled: true },
                { id: '7', title: 'Events', href: '/dashboard/events', disabled: true },
                { id: '8', title: 'Contact Sales', href: '/dashboard/contact-sales', disabled: true },
            ]
        },
        {
            id: '7',
            title: 'HR Department',
            description: 'Get a quick overview of your dashboard.',
            subnavItems: [
                { id: '1', title: 'Overview', href: '/dashboard/overview' },
                { id: '2', title: 'Analytics', href: '/dashboard/analytics' },
                { id: '3', title: 'Reports', href: '/dashboard/reports', disabled: true },
                { id: '4', title: 'Price', href: '/dashboard/price', disabled: true },
                { id: '5', title: 'Comparisons', href: '/dashboard/comparisons', disabled: true },
                { id: '6', title: 'Case Studies', href: '/dashboard/case-studies', disabled: true },
                { id: '7', title: 'Events', href: '/dashboard/events', disabled: true },
                { id: '8', title: 'Contact Sales', href: '/dashboard/contact-sales', disabled: true },
            ]
        },
        {
            id: '8',
            title: 'Procurement department',
            description: 'Get a quick overview of your dashboard.',
            subnavItems: []
        },
    ]
    return Section ? (
        <div className=" p-4 md:py-6  min-h-[calc(100vh-48px)]">
            <div className="bg-white w-full overflow-hidden">
                <div className="flex gap-2 w-full overflow-x-auto">
                    {sections.map(section => (
                        <Section key={section.id} id={section.id} title={section.title} description={section.description} subnavItems={section.subnavItems} />
                    ))}
                </div>
            </div>
        </div>
    ) : null;
}

function Section({ id, title, subnavItems }: SectionProps) {
    return (
        <div key={id} className="px-2 py-2.5 flex-1 min-w-[280px] bg-gray-50 border-none rounded shadow-none transition-shadow h-full min-h-[calc(100vh-100px)]">
            <h2 className="text-[14px] text-black/80 font-semibold mb-2 whitespace-nowrap overflow-hidden text-ellipsis ">{title}</h2>
            <Separator className="my-3" />
            <Subnav items={subnavItems} />
        </div>
    );
}
function Subnav({ items }: { items?: SubnavItem[] }) {
    if (!items || items.length === 0) {
        return <p className="text-sm text-gray-500">No sub-navigation items available.</p>;
    }

    return (
        <nav>
            <ul className="space-y-1">
                {items.map((item) => (
                    <li key={item.id}>
                        <Link
                            to={item.href}
                            className={`block px-3 py-1 rounded hover:bg-gray-200 ${item.disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'
                                }`}
                            aria-disabled={item.disabled ? 'true' : 'false'}
                            onClick={(e) => {
                                if (item.disabled) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}