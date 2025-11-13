<template>
  <main>
    <Navbar />

    <!-- Hero Section -->
    <section class="text-center py-16 bg-gradient-to-b from-purple-800 to-purple-950 text-white">
      <h2 class="text-4xl font-bold mb-4">Brandify</h2>
      <p class="text-xl mb-6">Membangun Website Profesional untuk Bisnismu</p>
      <div class="space-x-4">
        <!-- Tombol Hubungi Kami memunculkan modal -->
        <button @click="isModalOpen = true"
          class="bg-white text-purple-700 px-6 py-2 rounded hover:bg-purple-100 hover:text-purple-900 transition">
          Hubungi Kami
        </button>
        <a href="#porto" class="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-purple-800 transition">
          Lihat Portofolio
        </a>
      </div>
    </section>

    <!-- Ringkasan Jasa -->
    <section class="py-12 px-4 text-center bg-white">
      <h3 class="text-2xl font-semibold text-purple-800 mb-4">Kenapa Pilih Brandify?</h3>
      <p class="text-gray-700 max-w-xl mx-auto">
        Kami bantu UMKM tampil profesional di dunia digital melalui Bussiness profile, Company profile, dan Landing Page. Tanpa ribet, tanpa mahal.
      </p>
    </section>

<!-- Layanan Utama -->
<section class="py-12 px-4 bg-purple-50" id="layanan">
  <h3 class="text-2xl font-semibold text-center text-purple-800 mb-8">Layanan Utama</h3>

  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Business Profile -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition flex flex-col">
      <div class="flex-1">
        <h4 class="font-bold text-purple-700 mb-2 text-lg">Business Profile</h4>
        <p class="text-sm text-gray-600 mb-4">
          Halaman ringkas untuk UMKM — fokus ke produk/layanan, harga, dan CTA langsung (WA / Instagram). Cocok untuk konversi cepat dari social.
        </p>
        <ul class="text-sm text-gray-600 mb-4 space-y-1">
          <li>Hero singkat & penawaran</li>
          <li>Daftar produk/layanan unggulan</li>
          <li>CTA Whatsapp / Instagram</li>
        </ul>
      </div>
      <div class="mt-4">
        <a href="#kontak" class="inline-block w-full text-center bg-white text-purple-700 border border-purple-700 px-4 py-2 rounded hover:bg-purple-100 transition">Pilih Business Profile</a>
      </div>
    </div>

    <!-- Company Profile -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition flex flex-col">
      <div class="flex-1">
        <h4 class="font-bold text-purple-700 mb-2 text-lg">Company Profile</h4>
        <p class="text-sm text-gray-600 mb-4">
          Situs korporat lengkap untuk membangun kredibilitas — tentang perusahaan, tim, portofolio, studi kasus, dan kontak bisnis formal.
        </p>
        <ul class="text-sm text-gray-600 mb-4 space-y-1">
          <li>Halaman About, Tim, & Layanan</li>
          <li>Studi kasus / portofolio</li>
          <li>Form kontak bisnis dan dokumen pendukung</li>
        </ul>
      </div>
      <div class="mt-4">
        <a href="#kontak" class="inline-block w-full text-center bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition">Pilih Company Profile</a>
      </div>
    </div>

    <!-- Landing Page -->
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition flex flex-col">
      <div class="flex-1">
        <h4 class="font-bold text-purple-700 mb-2 text-lg">Landing Page</h4>
        <p class="text-sm text-gray-600 mb-4">
          Halaman tunggal bertarget untuk kampanye iklan atau promosi produk — optimasi konversi dengan headline kuat dan CTA fokus.
        </p>
        <ul class="text-sm text-gray-600 mb-4 space-y-1">
          <li>Headline & value proposition jelas</li>
          <li>Form / tombol konversi teroptimasi</li>
          <li>Social proof dan garansi singkat</li>
        </ul>
      </div>
      <div class="mt-4">
        <a href="#kontak" class="inline-block w-full text-center bg-white text-purple-700 border border-purple-700 px-4 py-2 rounded hover:bg-purple-100 transition">Pilih Landing Page</a>
      </div>
    </div>
  </div>
</section>


    <!-- TeamSection (reusable component) -->
    <TeamSection />

    <!-- Modal Hubungi Kami -->
    <Transition name="fade">
      <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
          <h3 class="text-lg font-semibold text-purple-800 mb-4">Hubungi Kami</h3>
          <div class="space-y-3">
            <a
              href="https://wa.me/6282151160513"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              <!-- WhatsApp SVG -->
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.52 3.48A11.88 11.88 0 0 0 12 .1 11.93 11.93 0 0 0 .1 12a11.9 11.9 0 0 0 1.83 6.14L0 24l5.96-1.56A11.93 11.93 0 0 0 12 24c6.6 0 11.98-5.38 11.98-12 0-3.2-1.24-6.23-3.46-8.52zM12 21.6c-1.66 0-3.28-.42-4.7-1.22l-.34-.19-3.54.93.94-3.45-.22-.35A9.6 9.6 0 0 1 2.4 12 9.6 9.6 0 0 1 12 2.4 9.6 9.6 0 0 1 21.6 12 9.6 9.6 0 0 1 12 21.6z"/>
                <path d="M17.3 14.3c-.26-.13-1.52-.75-1.76-.83-.24-.08-.42-.13-.6.13-.18.26-.7.83-.86 1-.16.16-.32.18-.59.06-.27-.12-1.14-.42-2.17-1.33-.8-.71-1.34-1.6-1.5-1.87-.16-.26-.02-.4.12-.53.13-.12.3-.32.45-.48.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.06-.13-.6-1.44-.82-1.98-.22-.52-.44-.45-.6-.46l-.51-.01c-.17 0-.44.06-.67.32-.23.26-.88.86-.88 2.1 0 1.24.9 2.44 1.02 2.61.12.18 1.78 2.88 4.32 3.93 3.02 1.27 3.02.85 3.56.8.54-.05 1.74-.71 1.99-1.4.25-.69.25-1.28.18-1.4-.07-.12-.26-.19-.52-.32z"/>
              </svg>
              WhatsApp
            </a>

            <a
              href="https://instagram.com/brandify.web"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center gap-2 bg-gradient-to-tr from-pink-500 to-yellow-400 text-white py-2 rounded hover:opacity-95 transition"
            >
              <!-- Instagram SVG -->
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
              </svg>
              Instagram
            </a>

            <a
              href="mailto:brandify@email.com"
              class="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              <!-- Email SVG -->
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.5l-8 5-8-5V6h16zM4 18V8.5l7.2 4.5L4 17.9V18zM20 18l-7.2-4.4L20 8.5V18z"/>
              </svg>
              Email
            </a>
          </div>
          <button @click="isModalOpen = false" class="mt-4 text-sm text-gray-600 hover:text-gray-800">Tutup</button>
        </div>
      </div>
    </Transition>
    <Footer />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import TeamSection from '@/components/TeamSection.vue'
import Footer from '@/components/Footer.vue'

const isModalOpen = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
