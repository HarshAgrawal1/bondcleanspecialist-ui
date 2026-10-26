import { NextResponse } from "next/server";
import { isDbConfigured, listQuoteLeads } from "@/lib/db";

export async function GET(req: Request) {
  if (!isDbConfigured()) {
    return NextResponse.json(
      { error: "Database is not configured.", leads: [] },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") || "all";

  try {
    const leads = await listQuoteLeads({ status });
    return NextResponse.json({ leads });
  } catch (err) {
    console.error("[bcs-ops] list leads failed", err);
    return NextResponse.json({ error: "Could not load leads.", leads: [] }, { status: 500 });
  }
}
