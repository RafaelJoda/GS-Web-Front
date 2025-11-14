"use client"

import { useState, useMemo } from "react"
import Header from "./Header"
import Filters from "./Filters"
import ProfessionalsGrid from "./ProfessionalsGrid"
import professionalsData from "./data/professionals.json"
import ProfessionalModal from "./ProfessionalModal"


export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [areaFilter, setAreaFilter] = useState("all")
  const [cityFilter, setCityFilter] = useState("all")
  const [selectedProfessional, setSelectedProfessional] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const professionals = professionalsData

 
  const areas = useMemo(
    () => [...new Set(professionals.map((p) => p.area))].sort(),
    [professionals]
  )

  const cities = useMemo(
    () => [...new Set(professionals.map((p) => p.city))].sort(),
    [professionals]
  )

 
  const filteredProfessionals = useMemo(() => {
    return professionals.filter((p) => {
      const search = searchTerm.toLowerCase()
      const matchesSearch =
        p.name.toLowerCase().includes(search) ||
        p.role.toLowerCase().includes(search) ||
        p.skills.some((s) => s.toLowerCase().includes(search))
      const matchesArea = areaFilter === "all" || p.area === areaFilter
      const matchesCity = cityFilter === "all" || p.city === cityFilter
      return matchesSearch && matchesArea && matchesCity
    })
  }, [professionals, searchTerm, areaFilter, cityFilter])


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="
      min-h-screen 
      bg-gray-50 dark:bg-gray-900 
      text-gray-900 dark:text-gray-100 
      transition-colors duration-300
    ">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        areaFilter={areaFilter}
        setAreaFilter={setAreaFilter}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        areas={areas}
        cities={cities}
        filteredCount={filteredProfessionals.length}
      />

      <ProfessionalsGrid
        professionals={filteredProfessionals}
        onSelect={setSelectedProfessional}
      />
   

      <ProfessionalModal
        professional={selectedProfessional}
        onClose={() => setSelectedProfessional(null)}
        onRecommend={(name) => {
          alert(`Você recomendou ${name} com sucesso!`)
          setSelectedProfessional(null)
        }}
        onMessage={(name) => {
          alert(`Mensagem enviada para ${name}!`)
          setSelectedProfessional(null)
        }}
      />
    </div>
  )
}