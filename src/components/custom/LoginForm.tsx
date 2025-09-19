
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { z } from "zod"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schema/LoginSchema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Eye, EyeOff } from 'lucide-react';
import { useState } from "react";
export function LoginForm() {
    const [isShowPassord, hidePassword] = useState(true)
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            userId: "",
            password: ""
        },
    })
    function onSubmit(values: z.infer<typeof LoginSchema>) {
        console.log(values)
    }

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-linear-to-b from-[#c0cce8] from-65% to-white  relative">
            <img src="assets/images/img1.png" className="absolute w-[260px] left-[2%] bottom-[2%]" />
            <img src="assets/images/img2.png" className="absolute w-[350px] right-[2%] top-[2%]" />
            <Card className="w-[330px] rounded-sm relative z-10 bg-[#dfe6f6] border-white">
                <CardHeader className="flex flex-col items-center gap-3">
                    <img src="assets/images/logo.png" className="w-[130px]" />
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-3">
                            <FormField
                                control={form.control}
                                name="userId"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel className="font-outfit text-slate-600 font-medium text-sm">User Id</FormLabel>
                                        <FormControl>
                                            <Input className="w-full h-[40px] border-white hover:shadow-blue-400" placeholder="Enter User ID" {...field} />
                                        </FormControl>
                                        <FormMessage className="absolute bottom-[-8px] text-[12px]" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="relative">
                                        <FormLabel className="font-outfit text-slate-600 font-medium text-sm">Password</FormLabel>
                                        <FormControl className="relative">
                                            <Input type={isShowPassord ? "password" : "text"} className="w-full h-[40px] border-white hover:shadow-blue-400" placeholder="Enter Password" {...field} />
                                        </FormControl>
                                        {
                                            isShowPassord ? <Eye fill="#dfe6f6" stroke="#2b7fff" onClick={() => hidePassword(!isShowPassord)} size={25} className="absolute right-[5px] top-[36px] w-[25px] h-[25px] cursor-pointer" /> : <EyeOff fill="#dfe6f6" stroke="#2b7fff" onClick={() => hidePassword(!isShowPassord)} size={25} className="absolute right-[5px] top-[36px] w-[25px] h-[25px] cursor-pointer" />
                                        }

                                        <FormMessage className="absolute bottom-[-8px] text-[12px]" />
                                    </FormItem>
                                )}
                            />
                            {/* isShowPassord, hidePassword */}
                            <div className="text-[12px] text-right text-slate-600">Having trouble in login <Link className="text-blue-500" to="/" >Click here</Link></div>

                            <Button className="h-[40px] cursor-pointer">Authenticate <ArrowRight /></Button>
                        </form>
                    </Form>
                    
                </CardContent>
            </Card>
        </div>
    )
};