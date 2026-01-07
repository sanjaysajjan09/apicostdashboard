"use client";

import React, { useState } from "react";
import { PublisherCostAnalysis } from "../publisher-cost-analysis/page";
import { LastStatsSyncStatus } from "../last-stats-sync-status/page";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type TabType = "cost-analysis" | "stats-sync";

export default function TechOpsDashboardPage() {
  const [activeTab, setActiveTab] = useState<TabType>("cost-analysis");

  return (
    <div className="min-h-screen bg-[#F7FAFC]">
      <Header />
      <main className="p-4 lg:p-6 w-full pt-20">
        {/* Tabs Navigation */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              onClick={() => setActiveTab("cost-analysis")}
              className={cn(
                "rounded-none border-b-2 px-6 py-3 font-medium transition-all",
                activeTab === "cost-analysis"
                  ? "border-[#303F9F] text-[#303F9F] bg-[#F0F4FF]"
                  : "border-transparent text-gray-600 hover:text-[#303F9F] hover:bg-[#F8F9FA]"
              )}
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Publisher API Cost Analysis
            </Button>
            <Button
              variant="ghost"
              onClick={() => setActiveTab("stats-sync")}
              className={cn(
                "rounded-none border-b-2 px-6 py-3 font-medium transition-all",
                activeTab === "stats-sync"
                  ? "border-[#303F9F] text-[#303F9F] bg-[#F0F4FF]"
                  : "border-transparent text-gray-600 hover:text-[#303F9F] hover:bg-[#F8F9FA]"
              )}
            >
              <Clock className="mr-2 h-4 w-4" />
              Indeed Last Successful Stats Fetch
            </Button>
          </div>
        </div>

        {/* Tab Content - Full Width */}
        <div className="w-full">
          {activeTab === "cost-analysis" && <PublisherCostAnalysis />}
          {activeTab === "stats-sync" && <LastStatsSyncStatus />}
        </div>
      </main>
    </div>
  );
}

