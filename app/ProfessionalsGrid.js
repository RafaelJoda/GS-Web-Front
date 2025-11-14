import React from "react"
import ProfessionalCard from "./ProfessionalCard"

export default function ProfessionalsGrid({ professionals, onSelect }) {
  if (professionals.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500 dark:text-gray-400 text-xl font-medium bg-gray-50 dark:bg-gray-900">
        <p className="mb-2"></p>
        Nenhum profissional encontrado com os filtros selecionados.
        <p className="text-sm mt-2 text-gray-400 dark:text-gray-500">
          Tente ajustar seus critérios de busca ou filtros.
        </p>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8 bg-white dark:bg-gray-900 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {professionals.map((professional) => (
          <ProfessionalCard
            key={professional.id}
            professional={professional}
            onSelect={onSelect}
          />
        ))}
      </div>
    </main>
  )
}
