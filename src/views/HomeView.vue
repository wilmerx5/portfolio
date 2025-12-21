<script setup>
import { ref, onMounted } from 'vue'

const today = new Date().toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
})

const availabilityPulse = ref(false)

onMounted(() => {
  setInterval(() => {
    availabilityPulse.value = !availabilityPulse.value
  }, 1200)
})

const skills = [
  {
    title: 'Frontend',
    description: 'Fast, accessible, and polished interfaces.',
    items: ['Vue', 'React', 'Angular', 'Tailwind', 'Accessibility', 'Animations'],
  },
  {
    title: 'Backend',
    description: 'Robust APIs and scalable systems.',
    items: ['Node (NestJS)', 'Spring Boot', 'REST', 'GraphQL'],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Production-ready infrastructure.',
    items: ['AWS', 'Docker', 'CI/CD', 'Linux'],
  },
  {
    title: 'CMS & Marketing',
    description: 'Conversion-focused web platforms.',
    items: ['WordPress', 'Custom Themes', 'Plugins', 'SEO'],
  },
]
</script>

<template>
  <main
    class="overflow-hidden transition-colors
           bg-slate-50 text-slate-900
           dark:bg-slate-950 dark:text-white"
  >

    <!-- TOP BAR -->
    <header
      class="fixed top-0 left-0 w-full z-50 backdrop-blur
             bg-white/70 dark:bg-slate-950/70
             border-b border-slate-200 dark:border-slate-800"
    >
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span class="text-sm text-slate-600 dark:text-slate-400">
          {{ today }}
        </span>

        <div class="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
          <span
            class="w-2.5 h-2.5 rounded-full bg-emerald-500 transition-opacity"
            :class="availabilityPulse ? 'opacity-100' : 'opacity-40'"
          ></span>
          Available to work
        </div>
      </div>
    </header>

    <!-- HERO -->
    <section
      class="min-h-screen flex items-center justify-center pt-24
             bg-gradient-to-br
             from-slate-50 via-indigo-50 to-slate-100
             dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900"
    >
      <div class="max-w-4xl px-6 text-center">
        <p class="text-xs tracking-[0.3em] text-indigo-600 dark:text-indigo-400 mb-6">
          FULL STACK ENGINEER
        </p>

        <h1 class="text-5xl md:text-6xl font-bold leading-tight">
          I build and scale<br />
          <span class="text-indigo-600 dark:text-indigo-400">
            web products
          </span><br />
          that actually ship.
        </h1>

        <p class="mt-8 text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          Product-focused Full Stack Engineer with 6+ years of experience delivering
          production systems for U.S.-based clients.
          I take ownership from UI details to backend architecture and cloud deployment.
        </p>

        <div class="mt-12 flex justify-center gap-6">
          <RouterLink
            to="/projects"
            class="px-7 py-3 rounded-xl
                   bg-indigo-600 text-white
                   hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
          >
            View projects
          </RouterLink>
          <a
            href="#contact"
            class="px-7 py-3 rounded-xl
                   border border-slate-300 dark:border-slate-600
                   hover:border-indigo-500 hover:-translate-y-0.5 transition-all"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="py-24 px-6 max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-14 text-center">
        What I do
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(skill, i) in skills"
          :key="i"
          class="group rounded-2xl p-6 transition-all
                 bg-white border border-slate-200
                 dark:bg-slate-900/70 dark:border-slate-800
                 hover:border-indigo-500 hover:-translate-y-1"
        >
          <h3 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            {{ skill.title }}
          </h3>

          <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
            {{ skill.description }}
          </p>

          <ul class="space-y-1 text-slate-700 dark:text-slate-300 text-sm">
            <li
              v-for="item in skill.items"
              :key="item"
              class="group-hover:translate-x-1 transition-transform"
            >
              → {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section class="py-24 px-6 max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold mb-14">
        Experience
      </h2>

      <div class="space-y-14">
        <div class="group">
          <h3 class="text-xl font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
            Web Developer — AlterEgo Marketing
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">
            Aug 2025 – Present · Contract · Remote (US)
          </p>
          <ul class="mt-5 space-y-2 text-slate-700 dark:text-slate-300">
            <li>→ Built high-performing marketing platforms for U.S. clients</li>
            <li>→ Developed custom WordPress themes and reusable components</li>
            <li>→ Integrated AWS services for scalability and reliability</li>
            <li>→ Focused on SEO, accessibility, and conversion performance</li>
          </ul>
        </div>

        <div class="group">
          <h3 class="text-xl font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
            Web Developer — Vinali Group
          </h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">
            Dec 2024 – Oct 2025 · Contract · Remote
          </p>
          <ul class="mt-5 space-y-2 text-slate-700 dark:text-slate-300">
            <li>→ Built custom WordPress websites and internal tools</li>
            <li>→ Created plugins, APIs, and frontend applications</li>
            <li>→ Managed AWS infrastructure and Docker deployments</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      id="contact"
      class="py-24 px-6 text-center
             bg-gradient-to-t
             from-indigo-50 to-slate-100
             dark:from-indigo-950 dark:to-slate-950"
    >
      <h2 class="text-4xl font-bold">
        Let’s build something meaningful.
      </h2>

      <p class="mt-5 text-slate-700 dark:text-slate-300 max-w-xl mx-auto">
        If you need a developer who can take ownership,
        move fast, and deliver production-ready solutions.
      </p>

      <a
        href="mailto:wilmercampos2004@gmail.com"
        class="inline-block mt-10 px-8 py-4 rounded-xl
               bg-indigo-600 text-white
               hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
      >
        Get in touch
      </a>
    </section>

    <!-- FOOTER -->
    <footer class="py-6 text-center text-sm text-slate-500 dark:text-slate-500">
      © 2025 Wilmer Campos — Full Stack Engineer
    </footer>

  </main>
</template>
