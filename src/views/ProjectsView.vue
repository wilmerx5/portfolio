<script setup>
const featuredProjects = [
  {
    name: 'POS System',
    url: 'https://pos-practice-v1.vercel.app/',
    image: '/images/pos_bg.png',
    role: 'Full Stack Engineer',
    description: 'Modern POS system with dynamic billing, responsive UI, and real-time interactions.',
    stack: ['Vue', 'Tailwind', 'Node'],
  },
  {
    name: 'Budget Management',
    url: 'https://budget-management-phi.vercel.app/',
    image: '/images/budget_bg.png',
    role: 'Frontend / UX',
    description: 'Personal finance dashboard with visual analytics and category-based tracking.',
    stack: ['React', 'Charts', 'UX'],
  },
]

const collaboratedProjects = [
  { name: 'Vinali Group', url: 'https://vinaligroup.com/', image: '/images/vinali.png' },
  { name: 'Veteran Tree Care', url: 'https://veterantreecare.com', image: '/images/VTC.png' },
  { name: 'Netvin', url: 'https://netvin.co', image: '/images/Netvin.png' },
  { name: 'Holbie', url: 'https://holisticbillingservices.com/', image: '/images/Holbie.png' },
  { name: 'Pronto Pollo Portal', url: 'https://prontopolloportal.com/', image: '/images/PPP.png' },
]
</script>

<template>
  <section
    id="projects"
    class="py-28 px-6 transition-colors
           bg-slate-50 text-slate-900
           dark:bg-slate-950 dark:text-white"
  >
    <div class="max-w-7xl mx-auto">

      <!-- HEADER -->
      <div class="max-w-3xl mb-20">
        <p class="text-xs tracking-[0.3em] text-indigo-600 dark:text-indigo-400 mb-4">
          PROJECTS
        </p>

        <h2 class="text-4xl font-bold">
          Selected work
        </h2>

        <p class="mt-5 text-slate-700 dark:text-slate-300 text-lg">
          A selection of products and platforms I’ve built or contributed to,
          focusing on real-world use cases, performance, and scalability.
        </p>
      </div>

      <!-- FEATURED PROJECTS -->
      <div class="grid md:grid-cols-2 gap-12 mb-28">
        <a
          v-for="project in featuredProjects"
          :key="project.name"
          :href="project.url"
          target="_blank"
          class="group relative overflow-hidden rounded-3xl border
                 border-slate-200 dark:border-slate-800
                 bg-white/80 dark:bg-slate-900/60
                 hover:border-indigo-500 transition-all"
        >
          <!-- IMAGE -->
          <img
            :src="project.image"
            alt=""
            class="h-64 w-full object-cover opacity-90
                   group-hover:scale-105 transition-transform duration-500"
          />

          <!-- OVERLAY -->
          <div
            class="absolute inset-0
                   bg-gradient-to-t
                   from-white/90 via-transparent to-transparent
                   dark:from-slate-950 dark:via-transparent dark:to-transparent"
          ></div>

          <!-- CONTENT -->
          <div class="absolute bottom-0 p-6">
            <span class="text-xs tracking-wide text-indigo-600 dark:text-indigo-400">
              {{ project.role }}
            </span>

            <h3 class="text-2xl font-semibold mt-2">
              {{ project.name }}
            </h3>

            <p class="mt-3 text-slate-700 dark:text-slate-300 text-sm max-w-md">
              {{ project.description }}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="text-xs px-3 py-1 rounded-full
                       bg-slate-200 text-slate-700
                       dark:bg-slate-800 dark:text-slate-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </a>
      </div>

      <!-- COLLABORATED PROJECTS -->
      <div>
        <h3 class="text-2xl font-semibold mb-10">
          Client & collaboration projects
        </h3>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <a
            v-for="project in collaboratedProjects"
            :key="project.name"
            :href="project.url"
            target="_blank"
            class="group flex items-center justify-center p-4 rounded-2xl
                   border border-slate-200 dark:border-slate-800
                   bg-white dark:bg-slate-900/60
                   hover:border-indigo-500 hover:-translate-y-1 transition-all"
          >
            <img
              :src="project.image"
              alt=""
              class="h-12 object-contain opacity-80
                     group-hover:opacity-100 transition"
            />
          </a>
        </div>
      </div>

    </div>
  </section>
</template>
