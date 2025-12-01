<template>
  <article
    class="overflow-hidden transition-all duration-300 transform bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-3"
    :aria-label="member.name"
  >
    <div class="relative overflow-hidden">
      <img
        :src="member.photo"
        :alt="member.name"
        class="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <!-- Gradient overlay -->
      <div class="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:opacity-100"></div>
      
      <!-- Role badge -->
      <div class="absolute left-4 top-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform">
        {{ member.role }}
      </div>

      <!-- Social on hover (mobile always visible) -->
      <div class="absolute transition-opacity duration-300 opacity-0 bottom-4 right-4 group-hover:opacity-100 md:opacity-100">
        <a
          v-if="member.instagram"
          :href="member.instagram"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center w-10 h-10 text-pink-600 transition-transform bg-white rounded-full shadow-lg hover:scale-110"
          aria-label="Instagram"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="p-6 text-center">
      <h4 class="mb-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
        {{ member.name }}
      </h4>
      <p class="mb-4 text-sm text-gray-500">{{ member.bio }}</p>

      <!-- Decorative element -->
      <div class="w-12 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-600 to-blue-600"></div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  member: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})
</script>
