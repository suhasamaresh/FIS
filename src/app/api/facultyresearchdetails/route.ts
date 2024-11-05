import { NextResponse } from 'next/server';
import prisma from '@/app/lib/db';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const newResearchDetail = await prisma.facultyResearchDetails.create({
      data: {
        facultyVTUId: data.facultyVTUId,
        facultyAICTEId: data.facultyAICTEId,
        orcidId: data.orcidId,
        googleScholarId: data.googleScholarId,
        scopusId: data.scopusId,
        publonsId: data.publonsId,
        nationalJournals: {
          create: data.nationalJournals,
        },
        internationalJournals: {
          create: data.internationalJournals,
        },
        nationalConferences: {
          create: data.nationalConferences,
        },
        internationalConferences: {
          create: data.internationalConferences,
        },
        researchGrants: {
          create: data.researchGrants,
        },
        consultancies: {
          create: data.consultancies,
        },
        patents: {
          create: data.patents,
        },
        researchSupervisions: {
          create: data.researchSupervisions,
        },
      },
    });

    return NextResponse.json(newResearchDetail, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const researchDetails = await prisma.facultyResearchDetails.findMany();
    return NextResponse.json(researchDetails, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
