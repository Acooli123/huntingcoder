import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const folderPath = path.join(process.cwd(), 'blogdata');
    console.log("Looking for files in:", folderPath);

    const files = await fs.readdir(folderPath);
    console.log("Files found:", files);

    const allBlogs = await Promise.all(
      files
        .filter(file => file.endsWith('.json'))
        .map(async (file) => {
          const filePath = path.join(folderPath, file);
          console.log("Reading file:", filePath);

          const content = await fs.readFile(filePath, 'utf-8');
          try {
            return JSON.parse(content);
          } catch (err) {
            console.error(`Invalid JSON in file: ${file}`, err);
            return null;
          }
        })
    );

    const validBlogs = allBlogs.filter(blog => blog !== null);
    return new Response(JSON.stringify(validBlogs), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.error('Error:', err);
    return new Response('Internal Server Error', { status: 500 });
  }
}
