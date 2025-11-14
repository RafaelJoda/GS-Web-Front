import React from "react"
import { MapPin } from "lucide-react"

export default function ProfessionalCard({ professional, onSelect }) {
  return (
    <div className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 border border-border/50 hover:border-primary/50 bg-gray-50 dark:bg-gray-900 backdrop-blur-sm rounded-xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100" onClick={() => onSelect(professional)}>
      <div className="p-6 relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 h-24 w-24 overflow-hidden rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-background group-hover:ring-4 group-hover:ring-primary/40 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500 relative before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:from-primary/20 before:to-secondary/20 before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500">
          <img src={professional.photo || "/placeholder.svg"} alt={professional.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125 relative z-10" />
        </div>

        <h3 className="mb-1 text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{professional.name}</h3>

        <p className="mb-2 text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{professional.role}</p>

        <div className="mb-3 flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          <MapPin className="h-3 w-3" />
          {professional.city}
        </div>

        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {professional.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110">{skill}</span>
          ))}

          {professional.skills.length > 3 && (
            <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-all duration-300">+{professional.skills.length - 3}</span>
          )}
        </div>

        <p className="line-clamp-2 text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{professional.bio}</p>
      </div>

      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}