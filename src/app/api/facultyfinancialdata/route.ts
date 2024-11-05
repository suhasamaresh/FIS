import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse the JSON data from the request body
    const {
      facultyId,
      bankName,
      accountNo,
      accountName,
      accountType,
      branch,
      ifsc,
      pfNumber,
      uanNumber,
      pensionNumber
    } = await req.json();

    // Create a new financial record for faculty in the FacultyFinancialData table
    const newFinancialData = await prisma.facultyFinancialData.create({
      data: {
        facultyId,
        bankName,
        accountNo,
        accountName,
        accountType,
        branch,
        ifsc,
        pfNumber,
        uanNumber,
        pensionNumber
      },
    });

    // Return a success response with the new record
    return NextResponse.json({ success: true, data: newFinancialData });
  } catch (error) {
    console.error("Error creating faculty financial data:", error);
    return NextResponse.json({ success: false, error: "Failed to create faculty financial data" }, { status: 500 });
  }
}


export async function GET(req: Request) {
  try {
    // Fetch all financial records from the FacultyFinancialData table
    const financialData = await prisma.facultyFinancialData.findMany();
    return NextResponse.json(financialData, { status: 200 });
  } catch (error) {
    console.error("Error fetching faculty financial data:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}