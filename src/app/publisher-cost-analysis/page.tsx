"use client";

import React from "react";

export function PublisherCostAnalysis() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Publisher API Cost Analysis</h2>
      <p className="text-gray-600">Publisher cost analysis content will be displayed here.</p>
    </div>
  );
}

export default function PublisherCostAnalysisPage() {
  return <PublisherCostAnalysis />;
}

