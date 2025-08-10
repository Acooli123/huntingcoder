import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  try {
    // Absolute path to blogdata folder
    const dataDir = path.join(process.cwd(), "blogdata");

    // Read all JSON files
    const files = fs.readdirSync(dataDir);
    const blogs = files.map(file => {
      const filePath = path.join(dataDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content);
    });

    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load blog data" },
      { status: 500 }
    );
  }
}
