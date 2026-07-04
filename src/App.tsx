import { useState } from "react";
import { ArrowRight, Check, Menu, X } from "lucide-react";
import { Logo } from "./components/Logo";
import { SectionHeader } from "./components/SectionHeader";
import {
  aboutPoints,
  announcement,
  audiences,
  contact,
  contactItems,
  currentWork,
  footerColumns,
  footerDescription,
  hero,
  mission,
  missionValues,
  navLinks,
  solutions,
  teamMembers,
  utilityNav,
} from "./data/siteContent";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-navy-950">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="bg-navy-900 px-5 py-2 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="font-medium">{announcement.text}</p>
            <a
              href={announcement.href}
              className="inline-flex items-center gap-2 font-semibold text-orange-400 transition hover:text-orange-300"
            >
              {announcement.linkLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-navy-900 transition hover:text-orange-500"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            {utilityNav.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  type="button"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-navy-100 text-navy-800 transition hover:border-orange-500 hover:text-orange-500"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </button>
              );
            })}
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-orange-500 px-5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Partner With Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy-100 text-navy-900 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="border-t border-navy-100 bg-white px-5 py-5 shadow-corporate lg:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-50 hover:text-orange-500"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-orange-500 px-5 text-sm font-bold text-white"
              >
                Partner With Us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="bg-white">
          <div className="relative h-[680px] overflow-hidden sm:h-[720px]">
            <img
              src={hero.image}
              alt="Modern corporate architecture representing enterprise technology"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/15" />
            <div className="absolute inset-x-0 bottom-16 bg-navy-900/95 py-10 shadow-panel sm:bottom-20 lg:py-14">
              <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="max-w-5xl">
                  <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-orange-400">
                    Omaha-based technology partner
                  </p>
                  <h1 className="text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
                    {hero.headline.before}
                    <span className="text-orange-400">{hero.headline.emphasis}</span>
                    {hero.headline.after}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
            <p className="max-w-5xl text-2xl font-semibold leading-10 text-navy-950 sm:text-3xl">
              {hero.intro}
            </p>
          </div>
        </section>

        <section className="bg-navy-50 px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-orange-500">
                {mission.label}
              </p>
              <h2 className="text-3xl font-bold tracking-normal text-navy-950 sm:text-4xl lg:text-5xl">
                {mission.heading}
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <p>{mission.body}</p>
              <p>{mission.detail}</p>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {missionValues.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="rounded-md border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-corporate"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy-950">{value.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{value.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="solutions" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Technology solutions designed around your business."
              description="Conditia AI works across software, automation, analytics, inspection technology, websites, and branding so business owners can solve the problems that slow teams down."
              align="center"
              tone="light"
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <article
                    key={solution.title}
                    className="group rounded-md border border-navy-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-corporate"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy-900 text-white transition group-hover:bg-orange-500">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-navy-950">{solution.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{solution.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="current-work" className="bg-navy-50 px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Current Work"
              title="Building solutions across operations, inspection, and digital presence."
              description="These active projects show how Conditia AI applies technology to different business needs without limiting the company to one industry."
              align="center"
              tone="light"
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {currentWork.map((project) => {
                const Icon = project.icon;
                return (
                  <article
                    key={project.title}
                    className="overflow-hidden rounded-md border border-navy-100 bg-white shadow-corporate"
                  >
                    <div className="relative h-72">
                      <img
                        src={project.image}
                        alt={`${project.title} project visual`}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="p-7 sm:p-8">
                      <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
                        {project.subtitle}
                      </p>
                      <h3 className="mt-3 text-3xl font-bold text-navy-950">{project.title}</h3>
                      <p className="mt-5 leading-7 text-slate-600">{project.text}</p>
                      <div className="mt-7 grid gap-3">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                            <Check className="mt-0.5 h-4 w-4 flex-none text-orange-500" aria-hidden="true" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="who-we-serve" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="Built for businesses ready to operate smarter."
              description="We help practical operators, small businesses, and growing teams replace unclear workflows with stronger digital systems."
              align="center"
              tone="light"
            />
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {audiences.map((audience) => {
                const Icon = audience.icon;
                return (
                  <article
                    key={audience.title}
                    className="rounded-md border border-navy-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-corporate"
                  >
                    <Icon className="h-9 w-9 text-orange-500" aria-hidden="true" />
                    <h3 className="mt-6 text-2xl font-bold text-navy-950">{audience.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{audience.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="bg-navy-900 px-5 py-24 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-orange-400">
                About Conditia AI
              </p>
              <h2 className="text-3xl font-bold tracking-normal sm:text-4xl lg:text-5xl">
                Technology partner, not just a service provider.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-200">
                We do not believe every business problem needs a complicated system. Our approach is
                to understand the workflow first, then build technology that fits the way the
                business actually operates. Whether the solution is a dashboard, inspection
                platform, automation tool, or website, the goal is always the same: make the
                business easier to run and easier to grow.
              </p>
            </div>
            <div className="grid gap-4">
              {aboutPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <article
                    key={point.title}
                    className="rounded-md border border-white/15 bg-white/[0.06] p-6"
                  >
                    <Icon className="h-6 w-6 text-orange-400" aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-bold">{point.title}</h3>
                    <p className="mt-3 leading-7 text-slate-200">{point.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="team" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              title="The team behind Conditia AI."
              description="A small founding team focused on building useful technology, strong client relationships, and practical execution."
              align="center"
              tone="light"
            />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {teamMembers.map((member) => {
                const LinkedInIcon = member.icon;
                return (
                  <article
                    key={member.name}
                    className="overflow-hidden rounded-md border border-navy-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-corporate"
                  >
                    <div className="flex aspect-[4/3] items-center justify-center bg-navy-50">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={`${member.name} professional headshot`}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-navy-900 text-3xl font-bold text-white">
                          {member.initials}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-navy-950">{member.name}</h3>
                          <p className="mt-1 text-sm font-bold text-orange-500">{member.role}</p>
                        </div>
                        <a
                          href="#contact"
                          aria-label={`${member.name} LinkedIn placeholder`}
                          className="flex h-10 w-10 flex-none items-center justify-center rounded-md border border-navy-100 text-navy-800 transition hover:border-orange-500 hover:text-orange-500"
                        >
                          <LinkedInIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                      </div>
                      <p className="mt-4 leading-7 text-slate-600">{member.bio}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-orange-500 px-5 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-normal sm:text-4xl lg:text-5xl">
                Let's build something that moves your business forward.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/90">
                Whether you need a smarter workflow, drone-assisted inspection, a modern website,
                automation, or a custom software solution, Conditia AI can help turn your business
                problem into a practical technology solution.
              </p>
              <a
                href={`mailto:${contact.emails[0]}`}
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-navy-900 px-6 text-base font-bold text-white transition hover:bg-navy-950"
              >
                Partner With Us
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <div className="rounded-md bg-white p-6 text-navy-950 shadow-panel">
              <h3 className="text-xl font-bold">Contact Conditia AI</h3>
              <div className="mt-5 grid gap-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3 text-sm text-slate-700">
                      <Icon className="mt-0.5 h-5 w-5 flex-none text-orange-500" aria-hidden="true" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy-950 px-5 py-16 text-slate-300 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.2fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-6 max-w-sm leading-7">{footerDescription}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-white">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-sm transition hover:text-orange-400">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-white">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>{contact.phone}</li>
              {contact.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="transition hover:text-orange-400">
                    {email}
                  </a>
                </li>
              ))}
              <li>{contact.location}</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Conditia AI. All rights reserved.</p>
          <p>Technology solutions for businesses ready to operate smarter.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
