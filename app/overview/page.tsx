"use client";

import { Areachart } from "../_components/Areachart";
import Barchart from "../_components/Barchart";
import Header from "../_components/Header";
import { Radialchart } from "../_components/Linechart";
import { Piechart } from "../_components/Piechart";
import { Radarchart } from "../_components/Radarchart";

export default function Overview() {
  return (
    <div className="flex h-screen flex-col w-full overflow-y-auto">
      {/* Header */}
      <Header />

      {/* Chart Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-6 w-full max-w-7xl mx-auto">
        <div className="rounded-xl bg-white shadow-md p-4 text-center flex justify-center">
          <Barchart />
        </div>

        <div className="rounded-xl bg-white shadow-md p-4">
          <Piechart />
        </div>

        <div className="rounded-xl bg-white shadow-md p-4">
          <Radialchart />
        </div>

        <div className="rounded-xl bg-white shadow-md p-4">
          <Radarchart />
        </div>
      </div>

      {/* Area Chart Full Width */}
      <div className="px-4 pb-6 w-full max-w-7xl mx-auto">
        <div className="rounded-xl bg-white shadow-md p-4">
          <Areachart />
        </div>
      </div>
    </div>
  );
}
