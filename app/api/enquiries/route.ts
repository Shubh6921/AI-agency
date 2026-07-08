import { NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "@/lib/supabase";

// Define the validation schema
const enquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  project_type: z.array(z.string()).min(1, "Select at least one project type"),
  budget_range: z.string().min(1, "Budget range is required"),
  timeline: z.string().min(1, "Timeline is required"),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const result = enquirySchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", details: result.error.flatten() },
        { status: 400 }
      );
    }

    // Insert into Supabase table
    const { data, error } = await supabase
      .from("enquiries")
      .insert([result.data])
      .select();

    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json(
        { error: "Database error occurred", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("API Route Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error", details: errorMsg },
      { status: 500 }
    );
  }
}
