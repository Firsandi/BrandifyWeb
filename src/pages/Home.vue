<template>
  <main>
    <Navbar />

    <!-- Hero Section -->
    <section
      class="py-16 text-center text-white bg-gradient-to-b from-purple-800 to-purple-950"
      id="tentang"
    >
      <h2 class="mb-4 text-4xl font-bold">Brandify</h2>
      <p class="mb-6 text-xl">Membangun Website Profesional untuk Bisnismu</p>
      <div class="space-x-4">
        <button
          @click="isModalOpen = true"
          class="px-6 py-2 text-purple-700 transition bg-white rounded hover:bg-purple-100 hover:text-purple-900"
          id="kontak"
        >
          Hubungi Kami
        </button>
        <a
          href="#porto"
          class="px-6 py-2 text-white transition border border-white rounded hover:bg-white hover:text-purple-800"
        >
          Lihat Portofolio
        </a>
      </div>
    </section>

    <!-- Ringkasan Jasa -->
    <section class="px-4 py-12 text-center bg-white">
      <h3 class="mb-4 text-2xl font-semibold text-purple-800">
        Kenapa Pilih Brandify?
      </h3>
      <p class="max-w-xl mx-auto text-gray-700">
        Kami bantu UMKM tampil profesional di dunia digital melalui Bussiness
        profile, Company profile, dan Landing Page. Tanpa ribet, tanpa mahal.
      </p>
    </section>

    <!-- Layanan Utama -->
    <section class="px-4 py-12 bg-purple-50" id="layanan">
      <h3
        class="mb-8 text-2xl font-semibold text-center text-purple-800"
      >
        Layanan Utama
      </h3>

      <div
        class="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-3"
      >
        <!-- Business Profile -->
        <div
          class="flex flex-col p-6 transition bg-white rounded-lg shadow-md hover:shadow-xl"
        >
          <div class="flex-1">
            <h4 class="mb-2 text-lg font-bold text-purple-700">
              Business Profile
            </h4>
            <p class="mb-4 text-sm text-gray-600">
              Halaman ringkas untuk UMKM — fokus ke produk/layanan, harga, dan
              CTA langsung (WA / Instagram). Cocok untuk konversi cepat dari
              social.
            </p>
            <ul class="mb-4 space-y-1 text-sm text-gray-600">
              <li>Hero singkat & penawaran</li>
              <li>Daftar produk/layanan unggulan</li>
              <li>CTA Whatsapp / Instagram</li>
            </ul>
          </div>
          <div class="mt-4">
            <a
              :href="waLink('Business Profile')"
              target="_blank"
              rel="noopener"
              class="inline-block w-full px-4 py-2 text-center text-purple-700 transition bg-white border border-purple-700 rounded hover:bg-purple-100"
            >
              Pilih Business Profile
            </a>
          </div>
        </div>

        <!-- Company Profile -->
        <div
          class="flex flex-col p-6 transition bg-white rounded-lg shadow-md hover:shadow-xl"
        >
          <div class="flex-1">
            <h4 class="mb-2 text-lg font-bold text-purple-700">
              Company Profile
            </h4>
            <p class="mb-4 text-sm text-gray-600">
              Situs korporat lengkap untuk membangun kredibilitas — tentang
              perusahaan, tim, portofolio, studi kasus, dan kontak bisnis formal.
            </p>
            <ul class="mb-4 space-y-1 text-sm text-gray-600">
              <li>Halaman About, Tim, & Layanan</li>
              <li>Studi kasus / portofolio</li>
              <li>Form kontak bisnis dan dokumen pendukung</li>
            </ul>
          </div>
          <div class="mt-4">
            <a
              :href="waLink('Company Profile')"
              target="_blank"
              rel="noopener"
              class="inline-block w-full px-4 py-2 text-center text-white transition bg-purple-700 rounded hover:bg-purple-800"
            >
              Pilih Company Profile
            </a>
          </div>
        </div>

        <!-- Landing Page -->
        <div
          class="flex flex-col p-6 transition bg-white rounded-lg shadow-md hover:shadow-xl"
        >
          <div class="flex-1">
            <h4 class="mb-2 text-lg font-bold text-purple-700">
              Landing Page
            </h4>
            <p class="mb-4 text-sm text-gray-600">
              Halaman tunggal bertarget untuk kampanye iklan atau promosi produk
              — optimasi konversi dengan headline kuat dan CTA fokus.
            </p>
            <ul class="mb-4 space-y-1 text-sm text-gray-600">
              <li>Headline & value proposition jelas</li>
              <li>Form / tombol konversi teroptimasi</li>
              <li>Social proof dan garansi singkat</li>
            </ul>
          </div>
          <div class="mt-4">
            <a
              :href="waLink('Landing Page')"
              target="_blank"
              rel="noopener"
              class="inline-block w-full px-4 py-2 text-center text-purple-700 transition bg-white border border-purple-700 rounded hover:bg-purple-100"
            >
              Pilih Landing Page
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- TeamSection -->
    <TeamSection />

    <!-- Modal Hubungi Kami -->
    <Transition name="fade">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div
          class="p-6 text-center bg-white rounded-lg shadow-lg w-80"
        >
          <h3
            class="mb-4 text-lg font-semibold text-purple-800"
          >
            Hubungi Kami
          </h3>
          <div class="space-y-3">
            <a
              href="https://wa.me/6282151160513?text=Halo%20Brandify,%20saya%20ingin%20membuat%20Website."
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center gap-2 py-2 text-white transition bg-green-600 rounded hover:bg-green-700"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/brandify.web"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center gap-2 py-2 text-white transition rounded bg-gradient-to-tr from-pink-500 to-yellow-400 hover:opacity-95"
            >
              Instagram
            </a>
            <a
              href="mailto:brandify@email.com"
              class="flex items-center justify-center gap-2 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
            >
              Email
            </a>
          </div>
          <button
            @click="isModalOpen = false"
            class="mt-4 text-sm text-gray-600 hover:text-gray-800"
          >
            Tutup
          </button>
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

// Fungsi untuk generate link WhatsApp dengan template pesan
function waLink(service) {
  const base = 'https://wa.me/6282151160513'
  const text = `Halo Brandify, saya ingin membuat ${service}.`
  return `${base}?text=${encodeURIComponent(text)}`
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
