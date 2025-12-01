<template>
  <section class="px-6 py-20 md:py-24 bg-gradient-to-b from-white via-blue-50 to-white" id="team">
    <div class="mx-auto max-w-7xl">
      <div class="mb-16 text-center">
        <h3 class="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
          Tim Kami
        </h3>
        <p class="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600">
          Tim multidisiplin kami menggabungkan desain, pengembangan, dan strategi digital untuk membantu bisnis kamu tumbuh.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <TransitionGroup name="team-list" tag="div" class="contents">
          <TeamCard v-for="(m, index) in members" :key="m.id" :member="m" :index="index" />
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TeamCard from '@/components/TeamCard.vue'

const members = ref([
  {
    id: 1,
    name: 'Khayru Nabiel Bakhtiar',
    role: 'CEO',
    bio: 'Founder & Product Lead',
    photo: '/images/Nabil.jpeg',
    instagram: 'https://instagram.com/nabil.bahtiar_'
  },
  {
    id: 2,
    name: "Dimas Rofi' Purnomo",
    role: 'CMO',
    bio: 'Marketing & Growth',
    photo: '/images/dimas.jpeg',
    instagram: 'https://instagram.com/dmsrof_'
  },
  {
    id: 3,
    name: 'Firsandi Andraw F.',
    role: 'CTO',
    bio: 'Teknologi & Infrastruktur',
    photo: '/images/firsandi.jpeg',
    instagram: 'https://instagram.com/firsandia'
  },
  {
    id: 4,
    name: 'Hanif Rizqi Fadilah',
    role: 'COO',
    bio: 'Project Manager & Client Success.',
    photo: '/images/hanif.jpeg',
    instagram: 'https://instagram.com/apip.iii'
  }
])
</script>

<style scoped>
.team-list-enter-active {
  transition: all 0.5s ease;
}

.team-list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.team-list-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
