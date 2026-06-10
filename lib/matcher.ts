export interface MatchResult {
  overallScore: number
  matchedKeywords: string[]
  missingKeywords: string[]
  categoryScores: CategoryScore[]
  strengths: string[]
  gaps: string[]
  recommendations: string[]
  tailoredSummary: string
}

export interface CategoryScore {
  name: string
  score: number
  matched: string[]
  missing: string[]
}

const STOP_WORDS = new Set([
  "a","an","the","and","or","but","in","on","at","to","for","of","with","by",
  "from","is","are","was","were","be","been","being","have","has","had","do",
  "does","did","will","would","could","should","may","might","shall","this",
  "that","these","those","it","its","we","our","their","they","he","she","his",
  "her","you","your","i","me","my","us","as","if","so","not","no","more","also",
  "than","then","when","who","which","what","how","all","any","both","each",
  "few","most","other","some","such","only","own","same","about","above","after",
  "before","between","during","including","into","through","throughout","up",
  "while","per","using","based","across","within","without","new","can","use"
])

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s\/\-]/g, " ")
    .split(/\s+/)
    .filter(t => t.length > 2 && !STOP_WORDS.has(t))
}

function extractPhrases(text: string): string[] {
  const lower = text.toLowerCase()
  const phrases: string[] = []
  const multiWordTerms = [
    "google analytics","social media","email marketing","content creation",
    "digital marketing","digital communications","digital media","adobe creative suite",
    "microsoft office","google workspace","html/css","html css","project management",
    "stakeholder engagement","content management","cms","drupal","seo","search engine",
    "press release","grant writing","community development","event coordination",
    "canva","mailchimp","constant contact","short form video","video editing",
    "photography","videography","brand management","strategic communications",
    "annual report","donor communications","email campaigns","web copy",
    "visual design","graphic design","infographic","podcast","digital signage",
    "crm systems","communication","scheduling","team collaboration","multitasking",
    "problem solving","organization","professional communication","front desk",
    "customer relations","customer service","operations support"
  ]
  for (const term of multiWordTerms) {
    if (lower.includes(term)) phrases.push(term)
  }
  return phrases
}

const SKILL_CATEGORIES = [
  {
    name: "Digital & Technical Skills",
    keywords: ["google analytics","seo","html","css","cms","drupal","canva","adobe","photoshop",
      "indesign","illustrator","digital","web","website","email marketing","mailchimp",
      "constant contact","digital signage","video editing","photography","videography","podcast"],
  },
  {
    name: "Communications & Content",
    keywords: ["writing","content","communications","press release","storytelling","editing",
      "copy","newsletter","blog","social media","brand","campaigns","visual design",
      "graphic","infographic","multimedia","narration","messaging"],
  },
  {
    name: "Social Media & Marketing",
    keywords: ["social media","facebook","instagram","twitter","linkedin","youtube","tiktok",
      "engagement","audience","followers","analytics","reach","impressions","campaigns",
      "marketing","digital marketing","email campaigns","content calendar"],
  },
  {
    name: "Project & Stakeholder Management",
    keywords: ["project management","stakeholder","coordination","scheduling","organization",
      "multitasking","deadlines","reporting","tracking","planning","collaboration","team"],
  },
  {
    name: "Education & Experience Requirements",
    keywords: ["bachelor","degree","communications","marketing","digital media","3 years",
      "experience","certification","graduate","master"],
  }
]

export function analyzeMatch(resumeText: string, jobText: string): MatchResult {
  const resumeTokens = new Set(tokenize(resumeText))
  const jobTokens = new Set(tokenize(jobText))
  const resumePhrases = new Set(extractPhrases(resumeText))
  const jobPhrases = new Set(extractPhrases(jobText))

  const allResumeTerms = new Set([...resumeTokens, ...resumePhrases])
  const allJobTerms = new Set([...jobTokens, ...jobPhrases])

  const matchedKeywords: string[] = []
  const missingKeywords: string[] = []

  for (const term of allJobTerms) {
    if (allResumeTerms.has(term)) {
      matchedKeywords.push(term)
    } else {
      missingKeywords.push(term)
    }
  }

  const categoryScores: CategoryScore[] = SKILL_CATEGORIES.map(cat => {
    const matched: string[] = []
    const missing: string[] = []
    for (const kw of cat.keywords) {
      const inJob = jobText.toLowerCase().includes(kw)
      if (!inJob) continue
      if (resumeText.toLowerCase().includes(kw)) {
        matched.push(kw)
      } else {
        missing.push(kw)
      }
    }
    const total = matched.length + missing.length
    const score = total === 0 ? 0 : Math.round((matched.length / total) * 100)
    return { name: cat.name, score, matched, missing }
  })

  const overallScore = Math.round(
    categoryScores.reduce((acc, c) => {
      const total = c.matched.length + c.missing.length
      return acc + (total > 0 ? (c.matched.length / total) * 100 : 0)
    }, 0) / categoryScores.filter(c => c.matched.length + c.missing.length > 0).length
  )

  const strengths: string[] = []
  const gaps: string[] = []
  const recommendations: string[] = []

  for (const cat of categoryScores) {
    if (cat.score >= 60) {
      strengths.push(`Strong ${cat.name.toLowerCase()} alignment (${cat.score}% match)`)
    } else if (cat.score < 30 && cat.matched.length + cat.missing.length > 0) {
      gaps.push(`Weak ${cat.name.toLowerCase()} — missing: ${cat.missing.slice(0, 3).join(", ")}`)
    }
  }

  if (resumeText.toLowerCase().includes("microsoft office")) {
    strengths.push("Microsoft Office proficiency aligns with technical requirements")
  }
  if (resumeText.toLowerCase().includes("communication")) {
    strengths.push("Demonstrated communication and stakeholder engagement experience")
  }
  if (resumeText.toLowerCase().includes("project") || resumeText.toLowerCase().includes("managing")) {
    strengths.push("Multi-project coordination experience translates well")
  }
  if (resumeText.toLowerCase().includes("consulting") || resumeText.toLowerCase().includes("director")) {
    strengths.push("Leadership experience as Founder and Director adds credibility")
  }

  if (!resumeText.toLowerCase().includes("google analytics") && jobText.toLowerCase().includes("google analytics")) {
    gaps.push("Google Analytics not mentioned — required by the job")
    recommendations.push("Add Google Analytics experience or certifications to your Skills section")
  }
  if (!resumeText.toLowerCase().includes("canva") && !resumeText.toLowerCase().includes("adobe")) {
    gaps.push("No design software (Canva / Adobe Creative Suite) listed")
    recommendations.push("List Canva, Adobe, or any design tools you've used — even basic experience matters")
  }
  if (!resumeText.toLowerCase().includes("social media")) {
    gaps.push("Social media management not explicitly mentioned")
    recommendations.push("Add specific social media platforms you've managed and measurable results (follower growth, engagement rates)")
  }
  if (!resumeText.toLowerCase().includes("content")) {
    gaps.push("Content creation experience not highlighted")
    recommendations.push("Reframe existing work to highlight content creation: client materials, presentations, and documents ARE content")
  }
  if (!resumeText.toLowerCase().includes("seo") && jobText.toLowerCase().includes("seo")) {
    gaps.push("SEO knowledge not mentioned — listed as preferred")
    recommendations.push("Consider adding a Google SEO Fundamentals certificate (free, takes ~1 day)")
  }
  if (!resumeText.toLowerCase().includes("email")) {
    gaps.push("Email marketing/campaigns not referenced")
    recommendations.push("Reference any email newsletters or campaigns you managed at the Chamber or McCoy Consulting")
  }

  recommendations.push("Update your Professional Summary to lead with 'communications' and 'digital content' rather than hospitality")
  recommendations.push("Quantify your achievements: include numbers, percentages, and outcomes wherever possible")
  recommendations.push("Add a 'Technical Skills' section listing all software, platforms, and tools")

  const tailoredSummary = `Dynamic communications professional with 7+ years of experience leading stakeholder engagement, content development, and multi-channel communications across public, private, and nonprofit sectors. Proven track record creating institutional materials, coordinating community outreach campaigns, and managing complex projects with competing deadlines. Adept at translating organizational goals into compelling narratives that engage diverse audiences. Brings a collaborative approach and mission-driven mindset to every initiative.`

  return {
    overallScore,
    matchedKeywords: matchedKeywords.slice(0, 20),
    missingKeywords: missingKeywords.slice(0, 20),
    categoryScores,
    strengths,
    gaps,
    recommendations,
    tailoredSummary
  }
}
