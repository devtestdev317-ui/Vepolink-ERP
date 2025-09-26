import { z } from 'zod';

// Sign In Schema
export const SignInSchema = z.object({
    userId: z.string().min(1, "User ID is required"),
    password: z.string().min(1, "Password is required"),
    rememberMe: z.boolean("Accecpt terms and conditions")
});

// Lead Base Selection Schema
export const LeadBaseSelectionSchema = z.enum([
    "Instrument",
    "Chemical",
    "Project",
    "Data Transmission"
]);

// New Client Schema
export const NewClientSchema = z.object({
    customerName: z.string().min(1, "Customer name is required"),
    customerCompanyName: z.string().min(1, "Company name is required"),
    customerContactNumber: z.string().optional(),
    inquiryLocation: z.enum(["north", "south", "east", "west"]),
    category: z.enum(["ambient", "effluent", "RTWQMS", "emission"]).optional(),
    requirement: z.string().min(1, "Requirement is required"),
    sourceOfLead: z.enum(["email", "inbound call", "outbound call"]),
    salesManager: z.string().min(1, "Sales manager is required"),
    remark: z.string().optional()
});

// Existing Client Schema
export const ExistingClientSchema = z.object({
    customerCompanyName: z.string().min(1, "Company selection is required"),
    customerName: z.string(),
    customerContactNumber: z.string(),
    inquiryLocation: z.string(),
    category: z.enum(["ambient", "effluent", "emission"]).optional(),
    requirement: z.string().min(1, "Requirement is required"),
    sourceOfLead: z.enum(["email", "inbound call", "outbound call"]),
    salesManager: z.string().min(1, "Sales manager is required"),
    remark: z.string().optional()
});

// Sales Manager Lead Schema
export const SalesManagerLeadSchema = z.object({
    leadId: z.string().min(1, "Lead ID is required"),
    clientType: z.enum(["new", "existing"]),
    sourceOfLead: z.enum(["email", "inbound call", "outbound call"]),
    customerName: z.string().min(1, "Customer name is required"),
    customerCompanyName: z.string().min(1, "Company name is required"),
    customerContactNumber: z.string().min(10, "Valid contact number is required"),
    inquiryLocation: z.enum(["north", "south", "east", "west"]),
    category: z.enum(["ambient", "effluent", "RTWQMS", "emission"]),
    requirement: z.string().min(1, "Requirement is required"),
    remark: z.string().optional(),
    enquiryStatus: z.enum(["pending", "call done", "close"]),
    closeRemark: z.string().optional(),
    salesManager: z.string().min(1, "Sales manager is required"),
    serviceManager: z.string().optional(),
    technicalFieldEngineer: z.string().optional(),
    inspectionStatus: z.enum(["pending", "progress", "done"]).optional(),
    quoteAmount: z.number().positive("Quote amount must be positive").optional(),
    quoteAttached: z.boolean().optional(),
    attachedPO: z.boolean().optional(),
    poDate: z.string().optional(),
    attachedPI: z.boolean().optional()
});

export type SalesManagerLead = z.infer<typeof SalesManagerLeadSchema>;

// Export all schemas
export const VepolinkERPSchemas = {
    SignInSchema,
    LeadBaseSelectionSchema,
    NewClientSchema,
    ExistingClientSchema,
    SalesManagerLeadSchema,
};