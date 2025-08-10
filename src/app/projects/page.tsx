export default function page() {
  return (
    <div className="w-screen h-screen fixed overflow-hidden">
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl sm:text-3xl italic font-serif font-bold">
          This is purpose page
        </h1>
        <p className="mt-4">
          Here you see purpose about our blog.
        </p>
      </div>
    </div>
  );
}
