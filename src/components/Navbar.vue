<template>
  <nav class="sticky top-0 z-50 flex items-center justify-between px-6 py-4 text-indigo-700 transition-all duration-300 shadow-md bg-white/90 backdrop-blur-md">
    <!-- Logo + Brand -->
    <div class="flex items-center space-x-3">
      <img src="/images/logo.png" alt="Logo" class="w-16 h-16 transition-transform duration-300 transform md:w-20 md:h-20 hover:scale-110" />
      <h1 class="text-2xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
        Brandify
      </h1>
    </div>

    <!-- Tombol Hamburger (mobile) -->
    <button 
      @click="toggleMenu" 
      class="p-2 transition-colors rounded-lg md:hidden hover:bg-indigo-50"
      aria-label="Toggle menu"
    >
      <svg v-if="!isOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Menu Desktop -->
    <ul class="items-center hidden space-x-8 text-base font-semibold md:flex">
      <li>
        <a href="#beranda" class="relative py-2 transition-colors group hover:text-indigo-600">
          Beranda
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a href="#team" class="relative py-2 transition-colors group hover:text-indigo-600">
          Tim
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a href="#layanan" class="relative py-2 transition-colors group hover:text-indigo-600">
          Layanan
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a href="#porto" class="relative py-2 transition-colors group hover:text-indigo-600">
          Portofolio
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a 
          href="#kontak" 
          class="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-bold hover:shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Kontak
        </a>
      </li>
    </ul>
  </nav>

  <!-- Menu Mobile dengan animasi slide -->
  <Transition name="mobile-menu">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-40 bg-white md:hidden"
    >
      <div class="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-bold">
        <a href="#beranda" @click="closeMenu" class="text-indigo-600 transition-all transform hover:text-blue-600 hover:scale-110">
          Beranda
        </a>
        <a href="#team" @click="closeMenu" class="text-indigo-600 transition-all transform hover:text-blue-600 hover:scale-110">
          Team
        </a>
        <a href="#layanan" @click="closeMenu" class="text-indigo-600 transition-all transform hover:text-blue-600 hover:scale-110">
          Layanan
        </a>
        <a href="#porto" @click="closeMenu" class="text-indigo-600 transition-all transform hover:text-blue-600 hover:scale-110">
          Portofolio
        </a>
        <a 
          href="#kontak" 
          @click="closeMenu" 
          class="px-8 py-3 text-white transition-all transform rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-xl hover:scale-110"
        >
          Kontak
        </a>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

watch(isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : 'auto'
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
