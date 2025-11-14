import React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm sticky top-0 z-40 shadow-md dark:shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">TalentHub</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">O futuro do trabalho começa aqui</p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-800 dark:text-gray-300" />
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}