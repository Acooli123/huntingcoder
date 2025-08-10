import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col gap-[8px] row-start-2  sm:items-start">
        <h1 className="text-4xl sm:text-3xl font-bold mt-10 tracking-tight sm:text-left">
          📌 Importance of Artificial Intelligence (AI)
        </h1>
        <p>AI (Artificial Intelligence) is the ability of machines to mimic human intelligence—such as learning, reasoning, and problem-solving. Here’s why:</p>
        <hr />
        <ol className="list-disc pl-5 mt-5">
          <li><strong> Automation: </strong> Performs repetitive tasks efficiently</li>
          <li><strong> Scalability : </strong> Handles massive datasets and learns effectively as the amount of data grows.</li>
          <li><strong> Accuracy:</strong> Reduces human error in decision-making.</li>
          <li><strong> Optimization :</strong> Improves processes and performance, like optimizing delivery routes or marketing strategies.</li>
          <li><strong> Innovation:</strong> Drives new technologies like self-driving cars, AI assistants, and smart devices.</li>
          <li><strong> Personalization:</strong> ML tailors content and recommendations (e.g., Netflix, YouTube) based on user preferences.</li>
          <li><strong> Prediction:</strong> It forecasts outcomes based on data, such as predicting stock prices or customer behavior.</li>
          <li><strong> Productivity:</strong> Handles and learns from large-scale data.</li>
        </ol>
    </div>
  )
}
