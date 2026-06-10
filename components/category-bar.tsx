"use client"

import { motion } from "framer-motion"
import { CategoryScore } from "@/lib/matcher"
import { Badge } from "@/components/ui/badge"

interface CategoryBarProps {
  category: CategoryScore
  index: number
}

export function CategoryBar({ category, index }: CategoryBarProps) {
  const getColor = (s: number) => {
    if (s >= 70) return "bg-green-500"
    if (s >= 40) return "bg-amber-500"
    return "bg-red-500"
  }

  const getBgColor = (s: number) => {
    if (s >= 70) return "bg-green-50 border-green-100"
    if (s >= 40) return "bg-amber-50 border-amber-100"
    return "bg-red-50 border-red-100"
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-lg border p-4 ${getBgColor(category.score)}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-700">{category.name}</span>
        <span className="text-sm font-bold text-gray-900">{category.score}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
        <motion.div
          className={`h-2 rounded-full ${getColor(category.score)}`}
          initial={{ width: 0 }}
          animate={{ width: `${category.score}%` }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        />
      </div>
      <div className="flex flex-wrap gap-1">
        {category.matched.slice(0, 4).map(kw => (
          <Badge key={kw} variant="outline" className="text-xs bg-green-100 text-green-700 border-green-200">
            ✓ {kw}
          </Badge>
        ))}
        {category.missing.slice(0, 3).map(kw => (
          <Badge key={kw} variant="outline" className="text-xs bg-red-100 text-red-700 border-red-200">
            ✗ {kw}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}
