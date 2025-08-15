// app/blogs/route.ts
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: Request) {
    try {
        const body = await request.json(); 
        console.log("Received data:", body);

        // Ensure directory exists
        const dirPath = path.join(process.cwd(), "contactdata");
        await fs.mkdir(dirPath, { recursive: true });

        // Read files in the folder
        const files = await fs.readdir(dirPath);
        console.log("Files in contactdata:", files);

        // Filename starts from 1.json instead of 0.json
        const fileNumber = files.length + 1;
        const filePath = path.join(dirPath, `data${fileNumber}.json`);
        await fs.writeFile(filePath, JSON.stringify(body, null, 2));

        return new Response(JSON.stringify(body), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Error handling POST:", error);
        return new Response(
            JSON.stringify({ error: "Something went wrong" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

export async function GET() {
    const allBlogs = [
        { id: 1, title: "First blog" },
        { id: 2, title: "Second blog" },
    ];

    return new Response(JSON.stringify(allBlogs), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
