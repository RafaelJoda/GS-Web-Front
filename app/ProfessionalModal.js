"use client"

import React from "react"

export default function ProfessionalModal({ professional, onClose, onRecommend, onMessage }) {
  if (!professional) return null

  return (
    <div className="fixed inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition text-xl">✕</button>

        <div className="flex items-center gap-6 mb-6">
          <img src={professional.photo || "/placeholder.svg"} alt={professional.name} className="h-24 w-24 rounded-full object-cover ring-4 ring-blue-500/30 dark:ring-blue-400/30" />
          <div>
            <h2 className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">{professional.name}</h2>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{professional.role}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{professional.city}</p>
          </div>
        </div>

        <div className="space-y-8 mt-6">
          <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
            <h3 className="font-bold mb-3 text-lg text-gray-800 dark:text-gray-200">Sobre</h3>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{professional.bio}</p>
          </div>

          {professional.education && (
            <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
              <h3 className="font-bold mb-3 text-lg text-gray-800 dark:text-gray-200">Formação Acadêmica</h3>
              <p className="text-base text-gray-600 dark:text-gray-400">{professional.education}</p>
            </div>
          )}

          {professional.experience?.length > 0 && (
            <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
              <h3 className="font-bold mb-3 text-lg text-gray-800 dark:text-gray-200">Experiência Profissional</h3>
              <ul className="space-y-2">
                {professional.experience.map((exp, i) => (
                  <li key={i} className="text-base text-gray-600 dark:text-gray-400 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {professional.skills?.length > 0 && (
            <div>
              <h3 className="font-bold mb-3 text-lg text-gray-800 dark:text-gray-200">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-3">
                {professional.skills.map((skill, i) => (
                  <span key={i} className="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium border border-blue-200 dark:border-blue-800">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {professional.softSkills?.length > 0 && (
            <div>
              <h3 className="font-bold mb-3 text-lg text-gray-800 dark:text-gray-200">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {professional.softSkills.map((skill, i) => (
                  <span key={i} className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">{skill}</span>
                ))}
              </div>
            </div>
          )}

          {professional.hobbies?.length > 0 && (
            <div>
              <h3 className="font-bold mb-3 text-lg text-gray-800 dark:text-gray-200">Hobbies e Interesses</h3>
              <div className="flex flex-wrap gap-3">
                {professional.hobbies.map((hobby, i) => (
                  <span key={i} className="text-sm px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">{hobby}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-8 border-t border-gray-200 dark:border-gray-700">
          <button onClick={() => onRecommend(professional.name)} className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-150 ease-in-out">Recomendar profissional</button>

          <button onClick={() => onMessage(professional.name)} className="flex-1 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 font-semibold transition duration-150 ease-in-out">Enviar mensagem</button>
        </div>
      </div>
    </div>
  )
}