import type { Metadata } from "next"
import Image from "next/image"
import { BadgeCheck, UserRound } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Board of Directors | FAUNA",
  description:
    "Learn about the volunteer leadership, governance, and responsibilities of FAUNA's Board of Directors.",
}

const boardMembers = [
  {
    role: "President",
    name: "Leah Forsyth",
    image: "/Leah.jpg",
    bio: [
      "Leah Forsyth has been involved in animal rescue in Natchitoches since 2011 when she adopted her beagle mix Maggie. She has previously served as Secretary and Vice President for FAUNA.",
      "She is a member of the Northwestern State University Music Faculty and a professional oboist. Leah loves gardening, doing yoga, and spending time with her husband, son, dog, and two cats. You can get Leah to do anything by suggesting getting a coffee along the way.",
    ],
  },
  {
    role: "Vice President",
    name: "Rachel Leblanc",
    image: "/Rachel.jpg",
    bio: [
      "Rachel Leblanc has been an animal advocate in Natchitoches since 2014. Her passion for animals led her to serving as President of former organization Natchitoches Hope for Paws and then FAUNA for a total of 9 years. Her rescued black labs, Alex and Izzy, were her joy for over 16 years.",
      "Some of her favorite rescue experiences include attending animal welfare internships at nationally renowned shelters such as Austin Pets Alive, planning and executing annual Farm to Table Dinners, and receiving positive updates from recent FAUNA animal adopters.",
      "A trained graphic designer, Rachel now works in human resources and stays busy with her three children, husband, two dogs, and a cat.",
    ],
  },
  {
    role: "Secretary",
    name: "Karn Richoux",
    image: "/Karn-Richoux.jpg",
    bio: [
      "Karn has been involved in rescue with Natchitoches Humane Society and FAUNA since 2019 when WhoDat, her boxer mix, passed away. She and her husband wanted to honor his memory by taking in another animal and foster failed on their deaf pitty, Lexus.",
      "They then fostered and transported over 50 dogs, which was no small feat since Lexus is a solo dog. In 2022 they stopped fostering and had 2 kids, so she then began coordinating as many transports as possible. Bissell has been a lifesaver. She later managed a grant that kicked off Trap-Neuter-Return for community cats.",
      "Recently, she helped FAUNA receive another grant to read and donate Robin Lapre&apos;s pet welfare books to classrooms.",
      "Karn&apos;s full-time job is as faculty in technical theatre at both NSU and LSMSA. She is from Minnesota, went to grad school at Florida State University, taught in Austin, and has been in Natchitoches since 2016.",
      "She is very proud of all the progress FAUNA has made, but there is always more. Please spay and neuter your pets.",
    ],
  },
  {
    role: "Treasurer",
    name: "Tina Brown",
  },
  {
    role: "Board Member",
    name: "Kay Kaufman",
    bio: [
      "Kay has been a familiar and trusted voice for animals in Natchitoches since her rescue journey began in 2010. She grew into leadership as President of Natchitoches Hope for Paws for 5 years, advocating for the forgotten, the vulnerable, and the overlooked.",
      "Now a founding board member of FAUNA, Kay continues to pour her heart into rescue work, using her experience and compassion to guide the organization&apos;s mission.",
      "After retiring from City Bank in 2023 following 44 remarkable years, Kay treasures time with her four grandchildren and still finds deep purpose in helping animals find hope, comfort, and a place to call home.",
    ],
  },
  {
    role: "Board Member",
    name: "Jennifer Long",
    image: "/Jennifer_Long.jpg",
  },
  {
    role: "Board Member",
    name: "Kathy Owsley",
    image: "/Kathy_Owsley.jpg",
    bio: [
      "Kathy has always loved all types of animals and has been involved in animal rescue for the past 35 years. She is also a wildlife rehabber who runs her own nonprofit, KLAWS, Inc.",
      "Kathy is the school secretary at NSU Middle Lab School. She is married to Robert Owsley and they have two grown daughters, Cameron and Callie.",
      "&ldquo;In rescuing animals, I lost my mind but found my soul.&rdquo; (author unknown)",
    ],
  },
  {
    role: "Board Member",
    name: "Juanita Murphy",
    image: "/juanita.jpg",
    bio: [
      "Since 2009, Juanita has been dedicated to animal rescue, first with the Natchitoches Humane Society and now with FAUNA. From animals arriving at the shelter near death to becoming beloved and deeply important companions, she says the most rewarding part of rescue is seeing those changes happen right before her eyes.",
      "Her journey into animal rescue began when two Natchitoches women, Sharon Gahagan and Conna Cloutier, encouraged her to help a dying dog at the City Shelter. Their encouragement changed the course of her life.",
      "Juanita has one amazing dog of her own, Vega, who was a shelter dog who was repeatedly overlooked and never had an application submitted for her.",
      "Before entering the rescue world, Juanita was an accredited ASID interior designer, a photographer, and eventually a full-time mom. She still loves to photograph animals and events for FAUNA on a regular basis.",
    ],
  },
  {
    role: "Board Member",
    name: "Greg St. Andre",
  },
  {
    role: "Board Member",
    name: "Debbie Tebbetts",
    image: "/Debbie.jpg",
    bio: [
      "Debbie rescued her first dog at age 15. His name was Fred. Since then, there have been many dogs, cats, and even a baby skunk.",
      "Debbie was a member of the Natchitoches Humane Society for over 35 years, holding the positions of Board Member, Secretary, and President, and has been a Board Member of FAUNA since its inception.",
      "When she&apos;s not caring for animals, she loves music, dancing when her knees allow, reading, flower gardening, and spending time with friends.",
      "One of her greatest joys is her grandson, Dillon, who rescued his first dog at age four, a puppy with a broken leg thrown out behind a dumpster, and who has been volunteering with FAUNA since he was eight.",
    ],
  },
]

function ScriptTitle({ title }: { title: string }) {
  return (
    <>
      {title.split(/(\s+)/).map((part, index) => {
        const lettersOnly = part.replace(/[^A-Za-z]/g, "")
        const isAllCaps =
          lettersOnly.length > 1 &&
          lettersOnly === lettersOnly.toUpperCase()

        return isAllCaps ? (
          <span key={`${part}-${index}`} className="font-brand-caps">
            {part}
          </span>
        ) : (
          part
        )
      })}
    </>
  )
}

export default function BoardOfDirectorsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#061424] to-[#0a1e3d] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-5 border-[#8AFF00]/30 bg-[#8AFF00]/15 text-[#8AFF00]">
            Volunteer Leadership
          </Badge>

          <h1 className="font-script text-6xl leading-tight text-white sm:text-7xl">
            <ScriptTitle title="Board of Directors" />
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-sky-100">
            Providing governance, financial oversight, strategic leadership,
            and long-term stewardship for FAUNA.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="relative aspect-[3/2] w-full max-w-3xl overflow-hidden rounded-3xl border-8 border-white/25 bg-white/10 shadow-2xl">
              <Image
                src="/Board.jpg"
                alt="FAUNA Board of Directors"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 92vw, 768px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <BadgeCheck className="mx-auto h-10 w-10 text-[#0099FF]" />

          <h2 className="font-script mt-5 text-5xl text-[#0a1e3d]">
            <ScriptTitle title="Leadership and Responsibility" />
          </h2>

          <p className="mt-7 text-lg leading-relaxed text-gray-700">
            FAUNA&apos;s Board of Directors provides governance, financial
            oversight, strategic leadership, and long-term stewardship for the
            organization.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            Each board member serves as a volunteer leader committed to
            FAUNA&apos;s mission of improving the lives of homeless animals
            throughout Natchitoches Parish.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-700">
            The board helps ensure that FAUNA remains mission-focused,
            financially responsible, transparent, and prepared to meet the
            changing needs of animals and families in the community.
          </p>
        </div>
      </section>

      <section className="bg-[#0a1e3d] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge className="mb-4 border-[#8AFF00]/30 bg-[#8AFF00]/15 text-[#8AFF00]">
              Volunteer Leadership
            </Badge>

            <h2 className="font-script text-5xl text-white sm:text-6xl">
              <ScriptTitle title="Board of Directors" />
            </h2>
          </div>

          <div className="space-y-8">
            {boardMembers.map((member) => (
              <Card
                key={`${member.role}-${member.name}`}
                className="overflow-hidden border border-white/10 bg-white text-[#0a1e3d] shadow-xl"
              >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[240px_1fr]">
                    <div className="flex items-center justify-center bg-sky-50 p-8">
                      {member.image ? (
                        <div className="relative h-48 w-48 overflow-hidden rounded-full border-8 border-white shadow-lg">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-contain p-1"
                            sizes="192px"
                          />
                        </div>
                      ) : (
                        <div className="flex h-48 w-48 items-center justify-center rounded-full border-8 border-white bg-[#0a1e3d] shadow-lg">
                          <UserRound className="h-20 w-20 text-[#33CCCC]" />
                        </div>
                      )}
                    </div>

                    <div className="p-7 sm:p-9">
                      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0099FF]">
                        {member.role}
                      </p>

                      <h3 className="mt-2 text-3xl font-extrabold text-[#0a1e3d] sm:text-4xl">
                        {member.name}
                      </h3>

                      {member.bio ? (
                        <div className="mt-5 space-y-4 text-base leading-7 text-gray-700">
                          {member.bio.map((paragraph) => (
                            <p
                              key={paragraph}
                              dangerouslySetInnerHTML={{ __html: paragraph }}
                            />
                          ))}
                        </div>
                      ) : (
                        <p className="mt-5 text-base italic text-gray-500">
                          Bio coming soon.
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
