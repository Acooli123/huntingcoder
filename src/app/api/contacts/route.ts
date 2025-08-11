// app/blogs/route.ts
import { promises as fs } from 'fs';

export async function POST(request: Request) {
    try {
        const body = await request.json(); // ✅ Parse JSON body
        console.log("Received data:", body);
        fs.writeFile('data1.json', JSON.stringify(body, null, 2)); // Save to file for testing

        // Return the same JSON back for testing
        return new Response(JSON.stringify(body), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });

    } catch (error) {
        console.error("Error parsing JSON:", error);
        return new Response(
            JSON.stringify({ error: "Invalid JSON" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
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
