<script setup>
import { ref } from 'vue'
import GitHubIcon from '@/components/Icons/GitHubIcon.vue'
import GmailIcon from '@/components/Icons/GmailIcon.vue'
import LinkedinIcon from '@/components/Icons/LinkedinIcon.vue'
import WhatsIcon from '@/components/Icons/WhatsIcon.vue'

const copied = ref(null)

const contacts = [
  {
    id: 'email',
    label: 'Email',
    value: 'wilmercampos2004@gmail.com',
    href: 'mailto:wilmercampos2004@gmail.com',
    icon: GmailIcon,
    helper: 'Best for detailed conversations',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/wilmer-campos-arevalo-7a129a273/',
    icon: LinkedinIcon,
    helper: 'Best for recruiters',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@wilmerx5',
    href: 'https://github.com/wilmerx5',
    icon: GitHubIcon,
    helper: 'Code & projects',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+57 312 454 7085',
    href: 'https://wa.me/573124547085',
    icon: WhatsIcon,
    helper: 'Fast response',
  },
]

function copyToClipboard(text, id) {
  navigator.clipboard.writeText(text)
  copied.value = id
  setTimeout(() => (copied.value = null), 1600)
}
</script>

<template>
  <section
    class="min-h-screen flex items-center justify-center px-6 py-28
           bg-gradient-to-b
           from-slate-50 via-slate-100 to-slate-50
           dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
           text-slate-900 dark:text-white transition-colors"
  >
    <div class="w-full max-w-6xl">

      <!-- HEADER -->
      <div class="max-w-3xl mb-20">
        <p class="text-xs tracking-[0.35em] text-indigo-600 dark:text-indigo-400 mb-4">
          CONTACT
        </p>

        <h2 class="text-4xl md:text-5xl font-bold leading-tight">
          Let’s start a conversation
        </h2>

        <p class="mt-6 text-lg text-slate-700 dark:text-slate-300 max-w-xl">
          I’m currently available for full-time, contract, or freelance work.
          If you’re looking for someone who takes ownership and ships reliably,
          this is the fastest way to reach me.
        </p>
      </div>

      <!-- CONTACT GRID -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div
          v-for="contact in contacts"
          :key="contact.id"
          class="group relative rounded-3xl border
                 border-slate-200 dark:border-slate-800
                 bg-white/80 dark:bg-slate-900/60
                 p-6 transition-all
                 hover:-translate-y-1
                 hover:border-indigo-500"
        >
          <!-- ICON -->
          <div
            class="flex items-center justify-center h-12 w-12 rounded-xl
                   bg-slate-200 dark:bg-slate-800
                   mb-6 transition
                   group-hover:bg-indigo-500"
          >
            <component
              :is="contact.icon"
              class="h-6 w-6 text-slate-700 dark:text-white
                     group-hover:text-white transition"
            />
          </div>

          <!-- CONTENT -->
          <p class="text-sm text-slate-500 dark:text-slate-400">
            {{ contact.label }}
          </p>

          <p class="mt-1 font-medium break-all text-slate-900 dark:text-white">
            {{ contact.value }}
          </p>

          <p class="mt-3 text-xs text-slate-500 dark:text-slate-500">
            {{ contact.helper }}
          </p>

          <!-- ACTIONS -->
          <div class="mt-6 flex items-center gap-4">
            <a
              :href="contact.href"
              target="_blank"
              class="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Open →
            </a>

            <button
              v-if="contact.id === 'email' || contact.id === 'whatsapp'"
              @click="copyToClipboard(contact.value, contact.id)"
              class="text-sm text-slate-500 dark:text-slate-400
                     hover:text-slate-900 dark:hover:text-white transition"
            >
              {{ copied === contact.id ? 'Copied ✓' : 'Copy' }}
            </button>
          </div>
        </div>
      </div>

      <!-- FOOTER NOTE -->
      <div class="mt-20 max-w-xl">
        <p class="text-slate-600 dark:text-slate-400 text-sm">
          I usually reply within
          <span class="text-indigo-600 dark:text-indigo-400 font-medium">
            24 hours
          </span>.
          Clear communication and long-term collaboration matter to me.
        </p>
      </div>

    </div>
  </section>
</template>
