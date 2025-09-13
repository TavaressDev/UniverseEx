"use client";

import { useState } from "react";

export interface FilterState {
  rover: string;
  camera: string;
  date: string;
}

interface FiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export default function Filters({ onFilterChange }: FiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    rover: "Curiosity",
    camera: "",
    date: "2020-07-01",
  });

  const rovers = [
    { value: "Curiosity", label: "Curiosity" },
    { value: "Opportunity", label: "Opportunity" },
    { value: "Spirit", label: "Spirit" },
  ];

  const cameras = [
    { value: "", label: "Todas as Câmeras" },
    { value: "FHAZ", label: "Front Hazard Avoidance Camera" },
    { value: "RHAZ", label: "Rear Hazard Avoidance Camera" },
    { value: "MAST", label: "Mast Camera" },
    { value: "CHEMCAM", label: "Chemistry and Camera Complex" },
    { value: "MAHLI", label: "Mars Hand Lens Imager" },
    { value: "MARDI", label: "Mars Descent Imager" },
    { value: "NAVCAM", label: "Navigation Camera" },
    { value: "PANCAM", label: "Panoramic Camera" },
    { value: "MINITES", label: "Mini-TES" },
  ];

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Filtros</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rover
          </label>
          <select
            value={filters.rover}
            onChange={(e) => handleFilterChange("rover", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {rovers.map((rover) => (
              <option key={rover.value} value={rover.value}>
                {rover.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Câmera
          </label>
          <select
            value={filters.camera}
            onChange={(e) => handleFilterChange("camera", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {cameras.map((camera) => (
              <option key={camera.value} value={camera.value}>
                {camera.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Data Terrestre
          </label>
          <input
            type="date"
            value={filters.date}
            onChange={(e) => handleFilterChange("date", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            max={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>


    </div>
  );
}