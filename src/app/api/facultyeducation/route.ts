import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse the JSON data from the request body
    const {
      facultyId,
      classProgram,
      usnSsn,
      schoolCollege,
      specialization,
      mediumOfInstruction,
      directCorr,
      passClass
    } = await req.json();

    // Create a new educational record for faculty in the FacultyEducation table
    const newEducationData = await prisma.facultyEducation.create({
      data: {
        facultyId,
        classProgram,
        usnSsn,
        schoolCollege,
        specialization,
        mediumOfInstruction,
        directCorr,
        passClass
      },
    });

    // Return a success response with the new record
    return NextResponse.json({ success: true, data: newEducationData });
  } catch (error) {
    console.error("Error creating faculty education data:", error);
    return NextResponse.json({ success: false, error: "Failed to create faculty education data" }, { status: 500 });
  }
}


export async function GET(req: Request) {
  try {
    // Fetch all education records from the FacultyEducation table
    const educationData = await prisma.facultyEducation.findMany();
    return NextResponse.json(educationData, { status: 200 });
  } catch (error) {
    console.error("Error fetching faculty education data:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}