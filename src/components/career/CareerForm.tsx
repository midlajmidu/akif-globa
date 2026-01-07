import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Upload } from "lucide-react";

const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    position: z.string({
        required_error: "Please select a position.",
    }),
    specialization: z.string().min(2, {
        message: "Please specify your subject or specialization.",
    }),
    experience: z.string().min(1, {
        message: "Please enter your years of experience.",
    }),
    message: z.string().optional(),
    resume: z.any().refine((files) => files?.length > 0, "Resume is required."),
});

import { useState } from "react";

// ... (existing imports)

export function CareerForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            position: "",
            specialization: "",
            experience: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            let resumeBase64 = "";
            let resumeType = "";

            if (values.resume && values.resume.length > 0) {
                const file = values.resume[0];
                resumeType = file.type;

                const reader = new FileReader();
                resumeBase64 = await new Promise((resolve, reject) => {
                    reader.onload = () => {
                        const result = reader.result as string;
                        const matches = result.match(/^data:(.+);base64,(.+)$/);
                        if (matches) {
                            resolve(matches[2]);
                        } else {
                            resolve("");
                        }
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
            }

            const payload = {
                fullName: values.fullName,
                email: values.email,
                phone: values.phone,
                field: values.position, // Mapping 'position' to 'field'
                specialization: values.specialization,
                experience: values.experience,
                message: values.message,
                resumeBase64,
                resumeType
            };

            await fetch("https://script.google.com/macros/s/AKfycbwZiiuN30sZ-_ADUrPjsjF82D59YH4-ekmOY1op-crhzWuZY9M8kfhplfDXiffsJhhm/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            toast.success("Application submitted successfully! We will get back to you soon.");
            form.reset();
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Failed to submit application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="bg-card p-8 rounded-2xl shadow-xl border border-border/50 backdrop-blur-sm">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">General Application</h3>
                <p className="text-muted-foreground">
                    Don't see a specific role? Send us your details and we'll keep you in mind for future opportunities.
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} className="bg-background/50" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="john@example.com" {...field} className="bg-background/50" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+91 98765 43210" {...field} className="bg-background/50" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="position"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Field of Interest</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-background/50">
                                                <SelectValue placeholder="Select a field" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="teaching">Teaching</SelectItem>
                                            <SelectItem value="administration">Administration</SelectItem>
                                            <SelectItem value="support">Support Staff</SelectItem>
                                            <SelectItem value="management">Management</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="specialization"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Specialization / Subject (e.g. Mathematics, HR, etc.)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Specify your subject or area of expertise" {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="experience"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Years of Experience</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="e.g. 5" {...field} className="bg-background/50" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="resume"
                            render={({ field: { value, onChange, ...field } }) => (
                                <FormItem>
                                    <FormLabel>Upload Resume (PDF)</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={(e) => onChange(e.target.files)}
                                                {...field}
                                                className="bg-background/50 cursor-pointer pr-10"
                                            />
                                            <Upload className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground pointer-events-none" />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Additional Message (Optional)</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us more about yourself..."
                                        className="min-h-[120px] bg-background/50"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" disabled={isSubmitting} className="w-full btn-accent py-6 text-lg font-semibold">
                        {isSubmitting ? "Submitting Application..." : "Submit Application"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
