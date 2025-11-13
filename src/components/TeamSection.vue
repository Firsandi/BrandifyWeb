<template>
  <section class="py-16 px-6 bg-gradient-to-b from-white to-gray-50" id="team">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-3xl font-bold text-center text-gray-900 mb-8">Team Kami</h3>
      <p class="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Tim multidisiplin kami menggabungkan desain, pengembangan, dan strategi digital untuk membantu bisnis kamu tumbuh.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <TransitionGroup name="list" tag="div" class="contents">
          <TeamCard v-for="m in members" :key="m.id" :member="m" />
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
    role: 'CMM',
    bio: 'Project Manager & Client Success.',
    photo: '/images/hanif.jpeg',
    instagram: 'https://instagram.com/pip.iii'
  }
])
</script>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 0.35s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.list-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
