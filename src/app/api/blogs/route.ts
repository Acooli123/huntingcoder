import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const folderPath = path.join(process.cwd(), 'blogdata');
    console.log("Looking for files in:", folderPath);

    const files = await fs.readdir(folderPath);
    console.log("Files found:", files);

    let blogsArray: any[] = []; // Create empty array

    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(folderPath, file);
        console.log("Reading file:", filePath);

        const content = await fs.readFile(filePath, 'utf-8');
        try {
          const parsed = JSON.parse(content);
          blogsArray.push(parsed); // Push each parsed JSON into array
        } catch (err) {
          console.error(`Invalid JSON in file: ${file}`, err);
        }
      }
    }

    return new Response(JSON.stringify(blogsArray), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error('Error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
