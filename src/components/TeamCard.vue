<template>
  <article
    class="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
    :aria-label="member.name"
  >
    <div class="relative">
      <img
        :src="member.photo"
        :alt="member.name"
        class="w-full h-44 object-cover"
        loading="lazy"
      />
      <div class="absolute left-4 top-4 bg-purple-800 text-white text-xs font-semibold px-2 py-1 rounded">
        {{ member.role }}
      </div>
    </div>

    <div class="p-5 text-center">
      <h4 class="text-lg font-semibold text-gray-900">{{ member.name }}</h4>
      <p class="text-sm text-gray-500 mt-1 mb-3">{{ member.bio }}</p>

      <div class="flex items-center justify-center">
        <!-- Hanya Instagram, tampilkan jika ada -->
        <a
          v-if="member.instagram"
          :href="member.instagram"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-tr from-pink-500 to-yellow-400 text-white text-sm rounded hover:opacity-95 transition"
          aria-label="Instagram"
        >
          <!-- Instagram SVG -->
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
          </svg>
          IG
        </a>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  member: {
    type: Object,
    required: true
  }
})
</script>
