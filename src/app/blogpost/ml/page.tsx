import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-[8px] row-start-2 items-center justify-center sm:items-start">
      <h1 className="text-4xl sm:text-3xl font-bold mt-10 tracking-tight text-center sm:text-left">
        📌 Importance of Machine Learning
      </h1>
      <p>
        Machine Learning enables systems to learn from data, make decisions, and
        improve automatically without human intervention—powering technologies
        like recommendation engines, fraud detection, speech recognition, and
        self-driving cars. . Here’s why:
      </p>
      <hr />
      <ol className="list-disc pl-5 mt-5">
        <li>
          <strong> Automation: </strong> Automates tasks without explicit
          programming.
        </li>
        <li>
          <strong> Prediction: </strong> Improves decision-making using data.
        </li>
        <li>
          <strong> Personalization:</strong> Enhances user experiences (e.g.,
          recommendations).
        </li>
        <li>
          <strong> Detection:</strong> Detects fraud and anomalies.
        </li>
        <li>
          <strong> Innovation:</strong> Enables predictions and forecasting.
        </li>
        <li>
          <strong> Optimization:</strong> Powers AI innovations (e.g.,
          self-driving cars).
        </li>
        <li>
          <strong> Scalability:</strong> Handles and learns from large-scale
          data.
        </li>
      </ol>
    </div>
  );
}
