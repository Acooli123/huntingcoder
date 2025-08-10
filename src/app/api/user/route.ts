export async function GET() {
  return new Response(
    JSON.stringify({ user: "Soumyajit", role: "Developer" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
