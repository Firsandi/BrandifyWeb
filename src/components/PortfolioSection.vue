<template>
  <section class="px-6 py-20 md:py-28 bg-gradient-to-b from-white via-indigo-50 to-white" id="porto">
    <div class="mx-auto max-w-7xl">
      <!-- Header -->
      <div class="mb-16 text-center">
        <h3 class="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
          Portofolio Kami
        </h3>
        <p class="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600">
          Hasil karya nyata dari kolaborasi kami dengan berbagai klien. Setiap project dirancang dengan dedikasi penuh.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-6 py-2.5 rounded-full font-medium transition-all duration-300',
            selectedCategory === category
              ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg scale-105'
              : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 shadow-md'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <TransitionGroup name="portfolio-list" tag="div" class="contents">
          <PortfolioCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
          />
        </TransitionGroup>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="py-16 text-center">
        <svg class="w-24 h-24 mx-auto mb-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
        <p class="text-lg text-gray-500">Belum ada project di kategori ini</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import PortfolioCard from '@/components/PortfolioCard.vue'

const selectedCategory = ref('Semua')

const categories = ref([
  'Semua',
  'Business Profile',
  'Company Profile',
  'Landing Page'
])

// Data portfolio - UPDATED dengan project Toko Buku!
const projects = ref([
  // Project 1 - Toko Buku Timur Bersaudara (BARU!)
  {
    id: 1,
    title: 'Toko Buku Timur Bersaudara',
    category: 'Business Profile',
    description: 'Modern business profile website untuk toko buku preloved original di Solo. Menampilkan katalog produk, testimoni customer, dan integrasi dengan Tokopedia & Shopee.',
    image: '/images/portfolio/Timurbersaudara.png', // tambahkan screenshot nanti
    tech: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://timur-bersaudara.vercel.app',
    githubUrl: 'https://github.com/Firsandi/Timur-Bersaudara',
    featured: true
  },
  
  // Project 2 - Sahabat Tani (yang sudah ada)
  {
    id: 2,
    title: 'Toko Sahabat Tani',
    category: 'Landing Page',
    description: 'Landing page modern untuk toko pertanian dengan katalog produk dan integrasi WhatsApp.',
    image: '/images/portfolio/sahabat-tani.png',
    tech: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://sahabat-tani-landing-page.vercel.app/',
    githubUrl: "https://github.com/Firsandi/Sahabat-Tani-Landing-Page.git",
    featured: false
  }
])

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Semua') {
    return projects.value
  }
  return projects.value.filter(p => p.category === selectedCategory.value)
})
</script>

<style scoped>
.portfolio-list-enter-active {
  transition: all 0.4s ease;
}

.portfolio-list-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}

.portfolio-list-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.portfolio-list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.portfolio-list-move {
  transition: transform 0.4s ease;
}
</style>
