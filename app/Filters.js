import React from "react"
import { Search } from "lucide-react"

export default function Filters({
  searchTerm,
  setSearchTerm,
  areaFilter,
  setAreaFilter,
  cityFilter,
  setCityFilter,
  areas,
  cities,
  filteredCount,
}) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm sticky top-[73px] z-30 shadow-sm dark:shadow-md">
      <div className="container mx-auto px-4 py-6">
        
        <div className="flex flex-col md:flex-row gap-4">
        
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Buscar por nome, cargo ou tecnologia..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full rounded-lg p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-150 ease-in-out"
            />
          </div>

          <select
            value={areaFilter}
            onChange={(e) => setAreaFilter(e.target.value)}
            className="w-full md:w-[200px] rounded-lg p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 appearance-none transition duration-150 ease-in-out"
          >
            <option value="all" className="dark:bg-gray-800">Todas as áreas</option>
            {areas.map((area) => (
              <option key={area} value={area} className="dark:bg-gray-800">
                {area}
              </option>
            ))}
          </select>

          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="w-full md:w-[200px] rounded-lg p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 appearance-none transition duration-150 ease-in-out"
          >
            <option value="all" className="dark:bg-gray-800">Todas as cidades</option>
            {cities.map((city) => (
              <option key={city} value={city} className="dark:bg-gray-800">
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {filteredCount}{" "}
          {filteredCount === 1 ? "profissional encontrado" : "profissionais encontrados"}
        </div>
      </div>
    </div>
  )
}