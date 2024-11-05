import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse the JSON data from the request body
    const {
      facultyId,
      qualification,
      photo,
      title,
      firstName,
      middleName,
      lastName,
      emailId,
      contactNo,
      alternateContactNo,
      emergencyContactNo,
      adharNo,
      panNo,
      dob,
      gender,
      nationality,
      firstAddressLine1,
      firstAddressLine2,
      firstAddressLine3,
      correspondenceAddressLine1,
      correspondenceAddressLine2,
      correspondenceAddressLine3,
      religion,
      caste,
      category,
      motherTongue,
      speciallyChallenged,
      remarks,
      languages // New field for languages array
    } = await req.json();

    // Create a new faculty record in the FacultyPersonalDetails table
    const newFaculty = await prisma.facultyPersonalDetails.create({
      data: {
        facultyId,
        qualification,
        photo,
        title,
        firstName,
        middleName,
        lastName,
        emailId,
        contactNo,
        alternateContactNo,
        emergencyContactNo,
        adharNo,
        panNo,
        dob: new Date(dob), // Convert dob to Date object if it’s a string
        gender,
        nationality,
        firstAddressLine1,
        firstAddressLine2,
        firstAddressLine3,
        correspondenceAddressLine1,
        correspondenceAddressLine2,
        correspondenceAddressLine3,
        religion,
        caste,
        category,
        motherTongue,
        speciallyChallenged,
        remarks,
        languages // Include languages in the data
      },
    });

    // Return a success response with the new record
    return NextResponse.json({ success: true, data: newFaculty });
  } catch (error) {
    console.error("Error creating faculty:", error);
    return NextResponse.json({ success: false, error: "Failed to create faculty" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    // Fetch all faculty records from the FacultyPersonalDetails table
    const faculty = await prisma.facultyPersonalDetails.findMany();
    return NextResponse.json(faculty, { status: 200 });
  } catch (error) {
    console.error("Error fetching faculty:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}