<template>
  <nav class="flex items-center justify-between p-4 text-purple-700 bg-white shadow">
    <!-- Logo + Brand -->
    <div class="flex items-center space-x-2">
      <img src="/images/logo.png" alt="Logo" class="w-20 h-20" />
      <h1 class="text-xl font-bold">Brandify</h1>
    </div>

    <!-- Tombol Hamburger / Close (mobile only) -->
    <button @click="toggleMenu" class="md:hidden">
      <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Menu Desktop -->
    <ul class="hidden space-x-6 text-sm font-medium md:flex">
      <li><a href="#beranda" class="transition border-b-2 border-transparent hover:border-purple-500">Beranda</a></li>
      <li><a href="#team" class="transition border-b-2 border-transparent hover:border-purple-500">Tim</a></li>
      <li><a href="#layanan" class="transition border-b-2 border-transparent hover:border-purple-500">Layanan</a></li>
      <li><a href="#porto" class="transition border-b-2 border-transparent hover:border-purple-500">Portofolio</a></li>
    </ul>
  </nav>

  <!-- Menu Mobile -->
  <Transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 text-xl font-semibold text-purple-800 bg-white">
  <a href="#beranda" @click="closeMenu" class="hover:text-purple-500">Beranda</a>
  <a href="#team" @click="closeMenu" class="hover:text-purple-500">Team</a>
  <a href="#layanan" @click="closeMenu" class="hover:text-purple-500">Layanan</a>
  <a href="#porto" @click="closeMenu" class="hover:text-purple-500">Portofolio</a>
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

