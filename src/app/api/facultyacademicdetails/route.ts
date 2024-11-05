import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse the JSON data from the request body
    const {
      facultyVTUId,
      facultyAICTEId,
      orcidId,
      googleScholarId,
      scopusId,
      publonsId,
      nationalJournals,
      internationalJournals,
      nationalConferences,
      internationalConferences,
      researchGrants,
      consultancies,
      patents,
      researchSupervisions,
    } = await req.json();

    // Create a new research details record for faculty in the FacultyResearchDetails table
    const newResearchDetail = await prisma.facultyResearchDetails.create({
      data: {
        facultyVTUId,
        facultyAICTEId,
        orcidId,
        googleScholarId,
        scopusId,
        publonsId,

        // Relations - creating arrays for each category
        nationalJournals: {
          create: nationalJournals ?? []
        },
        internationalJournals: {
          create: internationalJournals ?? []
        },
        nationalConferences: {
          create: nationalConferences ?? []
        },
        internationalConferences: {
          create: internationalConferences ?? []
        },
        researchGrants: {
          create: researchGrants ?? []
        },
        consultancies: {
          create: consultancies ?? []
        },
        patents: {
          create: patents ?? []
        },
        researchSupervisions: {
          create: researchSupervisions ?? []
        },
      },
    });

    // Return a success response with the new record
    return NextResponse.json({ success: true, data: newResearchDetail });
  } catch (error) {
    console.error("Error creating faculty research details:", error);
    return NextResponse.json({ success: false, error: "Failed to create faculty research details" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    // Fetch all faculty research details records
    const facultyResearchDetails = await prisma.facultyResearchDetails.findMany();

    // Return a success response with the records
    return NextResponse.json({ success: true, data: facultyResearchDetails });
  } catch (error) {
    console.error("Error fetching faculty research details:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch faculty research details" }, { status: 500 });
  }
}