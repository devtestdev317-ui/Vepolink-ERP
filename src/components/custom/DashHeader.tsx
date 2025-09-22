import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Settings, Bell, Expand } from 'lucide-react';
import { Button } from "../ui/button";
// shrink

export default function DashboardHeader() {
    return (
        <header className="w-full items-center justify-between flex h-12 border-b px-4 shadow-sm">
            <div className="text-lg font-medium">Veplolink ERP</div>
            <div className="flex items-center gap-4">
                <Button className="p-2 hover:bg-muted rounded-md bg-white cursor-pointer">
                    <Expand size="20px" stroke="#474747" className="" />
                </Button>
                <Link to="/dashboard/settings" className="p-2 hover:bg-muted rounded-md">
                    <Bell size="20px" stroke="#474747" className="" />
                </Link>
                <Link to="/dashboard/settings" className="p-2 hover:bg-muted rounded-md">
                    <Settings size="20px" stroke="#474747" className="" />
                </Link>
                <Avatar>
                    <Link to="/dashboard/profile">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Link>
                </Avatar>
            </div>
        </header>
    );
}