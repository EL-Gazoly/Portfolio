// app/api/contact/route.ts (or pages/api/contact.ts for Pages Router)
import { NextRequest, NextResponse } from "next/server";
import { triggerNotification } from "@/lib/novu-server"; // Your axios-based function

export async function POST(request: NextRequest) {
  try {
    console.log("API route hit");

    const body = await request.json();
    console.log("Request body:", body);

    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      console.log("Validation failed - missing fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!email.includes("@")) {
      console.log("Validation failed - invalid email");
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("Calling triggerNotification...");

    // Call your server-side Novu function
    const result = await triggerNotification({
      workflowTriggerIdentifier: "portfolio", // Your workflow ID
      subscriberId: "68adb588d8e299ea2080a059", // Your subscriber ID
      email: "elgazoly11@gmail.com", // Your notification email
      payload: {
        name,
        email,
        subject,
        message,
      },
      overrides: {}, // Add any overrides if needed
    });

    console.log("triggerNotification result:", result);

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Novu trigger failed:", result.error);
      return NextResponse.json(
        { error: "Failed to send notification", details: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
