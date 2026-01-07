"use client";

import React from "react";

export function LastStatsSyncStatus() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Indeed Last Successful Stats Fetch</h2>
      <p className="text-gray-600">Last stats sync status content will be displayed here.</p>
    </div>
  );
}

export default function LastStatsSyncStatusPage() {
  return <LastStatsSyncStatus />;
}

