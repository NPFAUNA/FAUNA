"use client"

import { motion } from "framer-motion"
import { MatchResult } from "@/lib/matcher"
import { CategoryBar } from "@/components/category-bar"
import { ScoreRing } from "@/components/score-ring"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, AlertCircle, Zap, FileText } from "lucide-react"

interface ResultsPanelProps {
  result: MatchResult
}

export function ResultsPanel({ result }: ResultsPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Score Header */}
      <Card className="border-2">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <ScoreRing score={result.overallScore} />
            <div className="flex-1 space-y-3">
              <h2 className="text-xl font-bold text-gray-900">Overall Match Score</h2>
              <p className="text-gray-600 text-sm">
                {result.overallScore >= 70
                  ? "Your background aligns well with this role. Focus on highlighting relevant digital skills."
                  : result.overallScore >= 45
                  ? "You have transferable skills but the resume needs repositioning for this role."
                  : "Significant gaps exist. The resume needs major tailoring and possible upskilling."}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-gray-500">Top matched keywords:</span>
                {result.matchedKeywords.slice(0, 8).map(kw => (
                  <Badge key={kw} className="text-xs bg-blue-100 text-blue-700 border-blue-200" variant="outline">
                    {kw}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="categories">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="strengths">Strengths</TabsTrigger>
          <TabsTrigger value="gaps">Gaps</TabsTrigger>
          <TabsTrigger value="actions">Action Plan</TabsTrigger>
        </TabsList>

        {/* Category Breakdown */}
        <TabsContent value="categories" className="space-y-3 mt-4">
          {result.categoryScores
            .filter(c => c.matched.length + c.missing.length > 0)
            .map((cat, i) => (
              <CategoryBar key={cat.name} category={cat} index={i} />
            ))}
        </TabsContent>

        {/* Strengths */}
        <TabsContent value="strengths" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2 text-green-700">
                <CheckCircle className="h-4 w-4" /> What's Working
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {result.strengths.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100"
                >
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-green-800">{s}</span>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Gaps */}
        <TabsContent value="gaps" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2 text-red-700">
                <XCircle className="h-4 w-4" /> Identified Gaps
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {result.gaps.map((g, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100"
                >
                  <AlertCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-red-800">{g}</span>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Action Plan */}
        <TabsContent value="actions" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2 text-blue-700">
                <Zap className="h-4 w-4" /> Recommended Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {result.recommendations.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100"
                >
                  <span className="text-xs font-bold text-blue-600 bg-blue-200 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-blue-800">{r}</span>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* Tailored Summary */}
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2 text-purple-700">
                <FileText className="h-4 w-4" /> AI-Tailored Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 leading-relaxed italic bg-purple-50 p-4 rounded-lg border border-purple-100">
                "{result.tailoredSummary}"
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Copy this summary and replace the one on your resume to better target this role.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
