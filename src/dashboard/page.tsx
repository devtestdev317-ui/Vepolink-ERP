import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
    Eye,
    ChartBar,
    FileText,
    DollarSign,
    GitCompare as Compare,
    CaseSensitive,
    Calendar,
    Phone,
    Settings,
    CreditCard,
    BarChart3,
    Users,
    Key,
    Shield,
    Bell,
    Sliders,
    Database,
    Download,
    Ticket,
    Plus,
    BookOpen,
    MessageSquare,
    History,
    Clock,
    Book,
    Server,
    HelpCircle,
    GraduationCap,
    ThumbsUp,
    Calculator
} from "lucide-react";
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
    icon?: React.ReactNode;
}
export default function DashboardPage() {

    const sections: SectionProps[] = [
        {
            id: '1',
            title: 'Pre-sales/Leads',
            description: 'Get a quick overview of your dashboard.',
            subnavItems: [
                { id: '1', title: 'Leads', href: '/dashboard/leads', icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '2', title: 'Analytics', href: '/dashboard/analytics', icon: <ChartBar size={"18px"} className="ml-0" /> },
                { id: '3', title: 'Reports', href: '/dashboard/reports', disabled: true, icon: <FileText size={"18px"} className="ml-0" /> },
                { id: '4', title: 'Price', href: '/dashboard/price', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '5', title: 'Comparisons', href: '/dashboard/comparisons', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '6', title: 'Case Studies', href: '/dashboard/case-studies', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '7', title: 'Events', href: '/dashboard/events', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '8', title: 'Contact Sales', href: '/dashboard/contact-sales', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
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
                    disabled: true,
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "2",
                    title: "Analytics",
                    href: "/dashboard/analytics",
                    icon: <Eye size={"18px"} className="ml-0" />,
                    disabled: true
                },
                {
                    id: "3",
                    title: "Reports",

                    href: "/dashboard/reports",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "4",
                    title: "Pricing",
                    href: "/dashboard/pricing",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "5",
                    title: "Comparisons",
                    href: "/dashboard/comparisons",
                    disabled: true,
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "6",
                    title: "Case Studies",
                    href: "/dashboard/case-studies",
                    disabled: true,
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "7",
                    title: "Webinars",
                    href: "/dashboard/webinars",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "8",
                    title: "ROI Calculator",
                    href: "/dashboard/roi-calculator",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "9",
                    title: "Request Demo",
                    href: "/dashboard/request-demo",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "10",
                    title: "Contact Sales",
                    href: "/dashboard/contact-sales",
                    icon: <Eye size={"18px"} className="ml-0" />
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
                    href: "/accounts/overview",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "2",
                    title: "Profile Settings",
                    href: "/accounts/profile",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "3",
                    title: "Billing & Payments",
                    href: "/accounts/billing",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "4",
                    title: "Subscription",
                    href: "/accounts/subscription",
                    disabled: true,
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "5",
                    title: "Usage Analytics",
                    href: "/accounts/usage",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "6",
                    title: "Team Members",
                    href: "/accounts/team",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "7",
                    title: "API Keys",
                    href: "/accounts/api-keys",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "8",
                    title: "Security & Login",
                    href: "/accounts/security",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "9",
                    title: "Notifications",
                    href: "/accounts/notifications",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "10",
                    title: "Preferences",
                    href: "/accounts/preferences",
                    icon: <Eye size={"18px"} className="ml-0" />
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
                    href: "/service/dashboard",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "2",
                    title: "Ticket Status",
                    href: "/service/tickets",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "3",
                    title: "Create Ticket",
                    href: "/service/create-ticket",
                    disabled: true,
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "4",
                    title: "Knowledge Base",
                    href: "/service/knowledge-base",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "5",
                    title: "Live Chat",
                    href: "/service/live-chat",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "6",
                    title: "Service History",
                    href: "/service/history",
                    icon: <Eye size={"18px"} className="ml-0" />,
                    disabled: true
                },
                {
                    id: "7",
                    title: "SLA Status",
                    href: "/service/sla",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "8",
                    title: "Resources",
                    href: "/service/resources",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "9",
                    title: "System Status",
                    href: "/service/status",
                    icon: <Eye size={"18px"} className="ml-0" />
                },
                {
                    id: "10",
                    title: "Contact Support",
                    href: "/service/contact",
                    icon: <Eye size={"18px"} className="ml-0" />
                }
            ]
        },
        {
            id: '5',
            title: 'IT support',
            description: 'Get a quick overview of your dashboard.',
            subnavItems: [
                { id: '1', title: 'Overview', href: '/dashboard/overview', icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '2', title: 'Analytics', href: '/dashboard/analytics', icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '3', title: 'Reports', href: '/dashboard/reports', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '4', title: 'Price', href: '/dashboard/price', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '5', title: 'Comparisons', href: '/dashboard/comparisons', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '6', title: 'Case Studies', href: '/dashboard/case-studies', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '7', title: 'Events', href: '/dashboard/events', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '8', title: 'Contact Sales', href: '/dashboard/contact-sales', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
            ]
        },
        {
            id: '6',
            title: 'IT Department',
            description: 'Get a quick overview of your dashboard.',
            subnavItems: [
                { id: '1', title: 'Overview', href: '/dashboard/overview', icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '2', title: 'Analytics', href: '/dashboard/analytics', icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '3', title: 'Reports', href: '/dashboard/reports', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '4', title: 'Price', href: '/dashboard/price', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '5', title: 'Comparisons', href: '/dashboard/comparisons', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '6', title: 'Case Studies', href: '/dashboard/case-studies', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '7', title: 'Events', href: '/dashboard/events', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '8', title: 'Contact Sales', href: '/dashboard/contact-sales', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
            ]
        },
        {
            id: '7',
            title: 'HR Department',
            description: 'Get a quick overview of your dashboard.',
            subnavItems: [
                { id: '1', title: 'Overview', href: '/dashboard/overview', icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '2', title: 'Analytics', href: '/dashboard/analytics', icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '3', title: 'Reports', href: '/dashboard/reports', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '4', title: 'Price', href: '/dashboard/price', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '5', title: 'Comparisons', href: '/dashboard/comparisons', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '6', title: 'Case Studies', href: '/dashboard/case-studies', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '7', title: 'Events', href: '/dashboard/events', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
                { id: '8', title: 'Contact Sales', href: '/dashboard/contact-sales', disabled: true, icon: <Eye size={"18px"} className="ml-0" /> },
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
        <div key={id} className={`px-3 py-2.5 flex-1 min-w-[220px] border-none rounded shadow-none transition-shadow h-full min-h-[calc(100vh-140px)] bg-[#f8fafc]`}>
            <h2 className="relative text-[14px] text-blue-600 font-semibold mb-2 whitespace-nowrap overflow-hidden text-ellipsis ">{title}<Badge className="h-5 bg-blue-100/65 text-blue-600 font-semibold rounded-[5px] ml-1.5 min-w-[30px] px-1 font-mono tabular-nums absolute top-0 block pt-[3px] text-center right-0">
                {subnavItems ? subnavItems.length : 0}
            </Badge></h2>
            <Separator className="my-3" />
            <Subnav items={subnavItems} />
        </div>
    );
}
function Subnav({ items }: { items?: SubnavItem[] }) {
    if (!items || items.length === 0) {
        return <p className="text-sm text-gray-500">No sub-navigation items available.</p>;
    }
    const getIconByTitle = (title: string) => {
        const iconSize = "18px";
        const iconClass = "ml-0";

        const iconMap: { [key: string]: React.ReactNode } = {
            // General icons
            'Overview': <Eye size={iconSize} className={iconClass} />,
            'Analytics': <ChartBar size={iconSize} className={iconClass} />,
            'Reports': <FileText size={iconSize} className={iconClass} />,
            'Price': <DollarSign size={iconSize} className={iconClass} />,
            'Pricing': <DollarSign size={iconSize} className={iconClass} />,
            'Comparisons': <Compare size={iconSize} className={iconClass} />,
            'Case Studies': <CaseSensitive size={iconSize} className={iconClass} />,
            'Events': <Calendar size={iconSize} className={iconClass} />,
            'Webinars': <Calendar size={iconSize} className={iconClass} />,
            'Contact Sales': <Phone size={iconSize} className={iconClass} />,

            // Accounts icons
            'Account Overview': <Eye size={iconSize} className={iconClass} />,
            'Profile Settings': <Settings size={iconSize} className={iconClass} />,
            'Billing & Payments': <CreditCard size={iconSize} className={iconClass} />,
            'Subscription': <CreditCard size={iconSize} className={iconClass} />,
            'Usage Analytics': <BarChart3 size={iconSize} className={iconClass} />,
            'Team Members': <Users size={iconSize} className={iconClass} />,
            'API Keys': <Key size={iconSize} className={iconClass} />,
            'Security & Login': <Shield size={iconSize} className={iconClass} />,
            'Security & Compliance': <Shield size={iconSize} className={iconClass} />,
            'Notifications': <Bell size={iconSize} className={iconClass} />,
            'Preferences': <Sliders size={iconSize} className={iconClass} />,
            'Data & Privacy': <Database size={iconSize} className={iconClass} />,
            'Download Data': <Download size={iconSize} className={iconClass} />,

            // Service icons
            'Service Dashboard': <Eye size={iconSize} className={iconClass} />,
            'Ticket Status': <Ticket size={iconSize} className={iconClass} />,
            'Create Ticket': <Plus size={iconSize} className={iconClass} />,
            'Knowledge Base': <BookOpen size={iconSize} className={iconClass} />,
            'Live Chat': <MessageSquare size={iconSize} className={iconClass} />,
            'Service History': <History size={iconSize} className={iconClass} />,
            'SLA Status': <Clock size={iconSize} className={iconClass} />,
            'Resources': <Book size={iconSize} className={iconClass} />,
            'System Status': <Server size={iconSize} className={iconClass} />,
            'Contact Support': <HelpCircle size={iconSize} className={iconClass} />,
            'Training': <GraduationCap size={iconSize} className={iconClass} />,
            'Feedback': <ThumbsUp size={iconSize} className={iconClass} />,

            // Sales specific
            'Request Demo': <Phone size={iconSize} className={iconClass} />,
            'ROI Calculator': <Calculator size={iconSize} className={iconClass} />,
            'Implementation': <Settings size={iconSize} className={iconClass} />,

            // Default icon
            'default': <Eye size={iconSize} className={iconClass} />
        };

        // Find matching icon (case insensitive)
        const normalizedTitle = title.toLowerCase();
        const matchedKey = Object.keys(iconMap).find(key =>
            normalizedTitle.includes(key.toLowerCase())
        );

        return matchedKey ? iconMap[matchedKey] : iconMap['default'];
    };
    return (
        <nav>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li key={item.id}>
                        <Link
                            to={item.href}
                            className={`flex items-center gap-1.5 bg-white  px-3 py-3 text-[14px] rounded   ${item.disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-blue-100/65 hover:text-blue-600'
                                }`}
                            aria-disabled={item.disabled ? 'true' : 'false'}
                            onClick={(e) => {
                                if (item.disabled) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <span className="inline-block align-middle">{getIconByTitle(item.title)}</span>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}