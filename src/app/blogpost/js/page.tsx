import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col gap-[8px] row-start-2 items-center justify-center sm:items-start">
        <h1 className="text-4xl sm:text-3xl font-bold mt-10 tracking-tight text-center sm:text-left">
          📌 Importance of JavaScript (JS)
        </h1>
        <p>JavaScript is one of the most essential technologies in modern software development, especially in web development. Here’s why:</p>
        <hr />
        <ol className="list-disc pl-5 mt-5">
          <li><strong> Interactivity: </strong> JS enables dynamic content and interactive features on web pages.</li>
          <li><strong> Versatality: </strong> It can be used for both client-side and server-side development.</li>
          <li><strong> Community and Libraries: </strong> A vast ecosystem of libraries and frameworks (like React, Angular, Vue) enhances productivity.</li>
          <li><strong>Performance:</strong> Modern JS engines are highly optimized for performance.</li>
          <li><strong>Integration:</strong> Easily integrates with HTML and CSS, making it a cornerstone of web development.</li>
        </ol>
    </div>
  )
}
