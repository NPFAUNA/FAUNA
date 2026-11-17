                key={logo.src ?? logo.text}
                role={logo.text ? "img" : undefined}
                aria-label={logo.text ? logo.alt : undefined}
                className={`relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border shadow-md ${
                  logo.darkBackground
                    ? "border-[#33CCCC]/40 bg-[#0a1e3d]"
                    : "border-gray-200 bg-white"
                }`}
              >
                {logo.text ? (
                  <span className="px-3 text-center font-sans text-base font-semibold leading-tight text-[#0a1e3d]">
                    {logo.text}
                  </span>
                ) : (
                  <Image
                    src={logo.src!}
                    alt={logo.alt}
                    fill
                    className={
                      logo.darkBackground
                        ? "object-contain p-2"
                        : "object-contain p-4"
                    }
                    sizes="144px"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Naming Campaign */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Badge className="mb-4 border-[#8AFF00]/30 bg-[#8AFF00]/20 font-sans text-[#0a1e3d]">
            Hope Has a Place
          </Badge>

          <h2 className="font-script mb-4 text-5xl text-[#0a1e3d] md:text-6xl">
            Naming Campaign
          </h2>

          <p className="mx-auto mb-4 max-w-2xl text-lg text-gray-600">
            Your name, or the name of a person or pet you love, can be forever
            honored where second chances begin.
          </p>

          <blockquote className="my-8 text-2xl font-bold italic text-[#0099FF]">
            &ldquo;Someone believed you were worth this.&rdquo;
          </blockquote>

          <div className="mx-auto mb-12 max-w-3xl rounded-2xl border border-sky-100 bg-sky-50 p-8 text-left">
            <h3 className="font-script mb-5 text-3xl text-[#0a1e3d]">
              The Impact of Your Gift:
            </h3>

            <ul className="space-y-4">
              {giftImpacts.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 leading-relaxed text-gray-700"
                >
                  <Star className="mt-1 h-4 w-4 shrink-0 text-[#5a9900]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-[#0a1e3d] px-6 py-12 text-white">
            <h2 className="font-sans text-4xl font-bold text-[#33CCCC] md:text-5xl">
              Explore the Campaign Flipbook
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-sky-100">
              Discover naming and capital opportunities that create a lasting
              legacy while helping FAUNA provide care and second chances for
              animals throughout Natchitoches Parish.
            </p>

            <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/generations-of-hope-cover.png"
                alt="Building Generations of Hope capital campaign for the Edwina and Sam Friedman Pet Adoption and Welfare Center"
                width={1080}
                height={1080}
                className="h-auto w-full"
              />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/hopehasaplace">
                <Button className="h-auto bg-[#8AFF00] px-8 py-4 font-bold text-[#0a1e3d] hover:bg-[#7aee00]">
                  View Naming &amp; Capital Opportunities
                </Button>
              </Link>

              <Link
                href="https://online.fliphtml5.com/placeforhope/ainw/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="h-auto border-[#33CCCC] bg-transparent px-8 py-4 font-bold text-[#33CCCC] hover:bg-[#33CCCC]/10 hover:text-[#33CCCC]"
                >
                  Open Campaign Flipbook
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
