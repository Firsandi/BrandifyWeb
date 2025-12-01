<template>
  <main class="overflow-x-hidden">
    <Navbar />

    <!-- Hero Section -->
    <section
      class="relative py-20 overflow-hidden text-center text-white md:py-32 bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-900"
      id="beranda"
    >
      <!-- Background animated circles -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute bg-blue-400 rounded-full -top-20 -right-20 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute bg-indigo-400 rounded-full -bottom-20 -left-20 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute bg-purple-400 rounded-full top-1/2 left-1/2 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div class="relative z-10 px-4">
        <h2 class="mb-6 text-4xl font-bold md:text-6xl animate-fade-in-up">
          Brandify
        </h2>
        <p class="max-w-2xl mx-auto mb-8 text-lg md:text-2xl animate-fade-in-up animation-delay-200">
          Membangun Website Profesional untuk Bisnismu
        </p>
        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up animation-delay-400">
          <button
            @click="isModalOpen = true"
            class="px-8 py-3 text-indigo-700 transition-all duration-300 transform bg-white rounded-lg group hover:bg-indigo-50 hover:text-indigo-900 hover:shadow-xl hover:scale-105"
            id="kontak"
          >
            <span class="flex items-center gap-2">
              Hubungi Kami
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </button>
          <a
            href="#porto"
            class="px-8 py-3 text-white transition-all duration-300 transform border-2 border-white rounded-lg group hover:bg-white hover:text-indigo-800 hover:shadow-xl hover:scale-105"
          >
            <span class="flex items-center gap-2">
              Lihat Portofolio
              <svg class="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Ringkasan Jasa -->
    <section class="px-4 py-16 text-center md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div class="max-w-4xl mx-auto">
        <h3 class="mb-6 text-3xl font-bold text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
          Kenapa Pilih Brandify?
        </h3>
        <p class="text-lg leading-relaxed text-gray-700 md:text-xl">
          Kami bantu UMKM tampil profesional di dunia digital melalui Business
          profile, Company profile, dan Landing Page. Tanpa ribet, tanpa mahal.
        </p>
        
        <!-- Stats Section -->
        <div class="grid max-w-3xl grid-cols-2 gap-6 mx-auto mt-12 md:grid-cols-3">
          <div class="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-2">
            <div class="mb-2 text-4xl font-bold text-indigo-600">50+</div>
            <div class="text-sm text-gray-600">Proyek Selesai</div>
          </div>
          <div class="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-2">
            <div class="mb-2 text-4xl font-bold text-blue-600">98%</div>
            <div class="text-sm text-gray-600">Kepuasan Klien</div>
          </div>
          <div class="col-span-2 p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-2 md:col-span-1">
            <div class="mb-2 text-4xl font-bold text-purple-600">24/7</div>
            <div class="text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Layanan Utama -->
    <section class="px-4 py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white" id="layanan">
      <h3 class="mb-12 text-3xl font-bold text-center text-transparent md:text-4xl bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
        Layanan Utama
      </h3>

      <div class="grid grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
        <!-- Business Profile -->
        <div class="relative flex flex-col p-8 transition-all duration-300 bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-t-2xl"></div>
          
          <div class="flex-1">
            <div class="flex items-center justify-center mb-4 transition-transform duration-300 transform w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl group-hover:scale-110 group-hover:rotate-3">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>

            <h4 class="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
              Business Profile
            </h4>
            <p class="mb-4 leading-relaxed text-gray-600">
              Halaman ringkas untuk UMKM — fokus ke produk/layanan, harga, dan
              CTA langsung (WA / Instagram). Cocok untuk konversi cepat dari social.
            </p>
            <ul class="mb-6 space-y-3 text-sm text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Hero singkat & penawaran
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Daftar produk/layanan unggulan
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                CTA Whatsapp / Instagram
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <a
              :href="waLink('Business Profile')"
              target="_blank"
              rel="noopener"
              class="inline-block w-full px-6 py-3 font-semibold text-center text-indigo-600 transition-all duration-300 transform border-2 border-indigo-600 bg-indigo-50 rounded-xl hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:scale-105"
            >
              Pilih Paket Ini
            </a>
          </div>
        </div>

        <!-- Company Profile - Featured -->
        <div class="relative flex flex-col p-8 transition-all duration-300 transform scale-105 shadow-2xl group bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl hover:shadow-3xl hover:-translate-y-3 md:scale-110">
          <div class="absolute px-4 py-1 text-xs font-bold text-yellow-900 transform -translate-x-1/2 bg-yellow-400 rounded-full shadow-lg -top-4 left-1/2">
            ⭐ POPULER
          </div>
          
          <div class="flex-1">
            <div class="flex items-center justify-center mb-4 transition-transform duration-300 transform w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 group-hover:rotate-3">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>

            <h4 class="mb-3 text-2xl font-bold text-white">
              Company Profile
            </h4>
            <p class="mb-4 leading-relaxed text-white/90">
              Situs korporat lengkap untuk membangun kredibilitas — tentang
              perusahaan, tim, portofolio, studi kasus, dan kontak bisnis formal.
            </p>
            <ul class="mb-6 space-y-3 text-sm text-white/90">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Halaman About, Tim, & Layanan
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Studi kasus / portofolio
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Form kontak & dokumen pendukung
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <a
              :href="waLink('Company Profile')"
              target="_blank"
              rel="noopener"
              class="inline-block w-full px-6 py-3 font-bold text-center text-indigo-600 transition-all duration-300 transform bg-white rounded-xl hover:bg-yellow-400 hover:text-indigo-900 hover:shadow-lg hover:scale-105"
            >
              Pilih Paket Ini
            </a>
          </div>
        </div>

        <!-- Landing Page -->
        <div class="relative flex flex-col p-8 transition-all duration-300 bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2">
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"></div>
          
          <div class="flex-1">
            <div class="flex items-center justify-center mb-4 transition-transform duration-300 transform w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 group-hover:rotate-3">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>

            <h4 class="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
              Landing Page
            </h4>
            <p class="mb-4 leading-relaxed text-gray-600">
              Halaman tunggal bertarget untuk kampanye iklan atau promosi produk
              — optimasi konversi dengan headline kuat dan CTA fokus.
            </p>
            <ul class="mb-6 space-y-3 text-sm text-gray-600">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Headline & value proposition jelas
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Form / tombol konversi teroptimasi
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Social proof dan garansi singkat
              </li>
            </ul>
          </div>
          <div class="mt-auto">
            <a
              :href="waLink('Landing Page')"
              target="_blank"
              rel="noopener"
              class="inline-block w-full px-6 py-3 font-semibold text-center text-blue-600 transition-all duration-300 transform border-2 border-blue-600 bg-blue-50 rounded-xl hover:bg-blue-600 hover:text-white hover:shadow-lg hover:scale-105"
            >
              Pilih Paket Ini
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <PortfolioSection />

    <!-- Team Section -->
    <TeamSection />

    <!-- Modal Hubungi Kami -->
    <Transition name="modal">
      <div
        v-if="isModalOpen"
        @click.self="isModalOpen = false"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      >
        <div class="relative w-full max-w-md p-8 text-center transition-all transform bg-white shadow-2xl rounded-2xl">
          <button
            @click="isModalOpen = false"
            class="absolute text-gray-400 transition-colors top-4 right-4 hover:text-gray-600"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div class="mb-6">
            <h3 class="mb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Hubungi Kami
            </h3>
            <p class="text-sm text-gray-600">Pilih channel komunikasi yang kamu suka</p>
          </div>

          <div class="space-y-3">
            <a
              href="https://wa.me/6282151160513?text=Halo%20Brandify,%20saya%20ingin%20membuat%20Website."
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center gap-3 px-4 py-3 font-medium text-white transition-all duration-300 transform bg-green-600 group rounded-xl hover:bg-green-700 hover:shadow-lg hover:scale-105"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="https://instagram.com/brandify.web"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center gap-3 px-4 py-3 font-medium text-white transition-all duration-300 transform group rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 hover:shadow-lg hover:scale-105"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
              </svg>
              Instagram
            </a>
            <a
              href="mailto:brandify@email.com"
              class="flex items-center justify-center gap-3 px-4 py-3 font-medium text-white transition-all duration-300 transform bg-blue-600 group rounded-xl hover:bg-blue-700 hover:shadow-lg hover:scale-105"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </Transition>

    <Footer />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import PortfolioSection from '@/components/PortfolioSection.vue'
import TeamSection from '@/components/TeamSection.vue'
import Footer from '@/components/Footer.vue'

const isModalOpen = ref(false)

function waLink(service) {
  const base = 'https://wa.me/6282151160513'
  const text = `Halo Brandify, saya ingin membuat ${service}.`
  return `${base}?text=${encodeURIComponent(text)}`
}
</script>

<style scoped>
/* Animations */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animation-delay-200 {
  animation-delay: 0.2s;
  animation-fill-mode: backwards;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  animation-fill-mode: backwards;
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.9);
  opacity: 0;
}
</style>
