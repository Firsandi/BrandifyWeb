<template>
  <article
    class="relative overflow-hidden transition-all duration-500 transform bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
  >
    <!-- Featured Badge -->
    <div
      v-if="project.featured"
      class="absolute z-10 px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500"
    >
      ⭐ Featured
    </div>

    <!-- Project Image -->
    <div class="relative h-56 overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-100">
      <img
        :src="project.image"
        :alt="project.title"
        class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        @error="handleImageError"
        loading="lazy"
      />
      
      <!-- Overlay on hover (hanya muncul jika ada liveUrl) -->
      <div 
        v-if="project.liveUrl"
        class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-100"
      >
        <div class="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">
          <a
            :href="project.liveUrl"
            target="_blank"
            rel="noopener"
            class="flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            @click.stop
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>

    <!-- Project Info -->
    <div class="p-6">
      <!-- Category Badge -->
      <div class="mb-3">
        <span class="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full">
          {{ project.category }}
        </span>
      </div>

      <!-- Title -->
      <h4 class="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
        {{ project.title }}
      </h4>

      <!-- Description -->
      <p class="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-2 py-1 text-xs text-gray-700 bg-gray-100 border border-gray-200 rounded"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Bottom Border Accent -->
    <div class="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-500 transform scale-x-0 bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:scale-x-100"></div>
  </article>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})

// Fallback jika gambar error
const handleImageError = (e) => {
  e.target.src = 'https://via.placeholder.com/600x400/4F46E5/ffffff?text=Coming+Soon'
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
