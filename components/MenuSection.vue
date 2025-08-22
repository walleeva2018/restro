<!-- MenuSection.vue -->
<template>
  <section class="p-4 sm:p-8 bg-gray-100 pb-24">
    <div class="max-w-7xl mx-auto">
      <!-- Category Tabs -->
      <div class="flex gap-3 mb-8 overflow-x-auto pb-2">
        <button 
          v-for="category in categories" 
          :key="category"
          :class="[
            'px-6 py-3 rounded-full border transition-all duration-200 whitespace-nowrap text-sm font-medium',
            activeCategory === category 
              ? 'bg-blue-500 text-white border-blue-500' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          ]"
          @click="setActiveCategory(category)"
        >
          {{ category }}
        </button>
      </div>

      <!-- Restaurant Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        <div 
          v-for="restaurant in restaurants" 
          :key="restaurant.id"
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="h-40 overflow-hidden">
            <img 
              :src="restaurant.image" 
              :alt="restaurant.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ restaurant.name }}</h3>
            <div class="flex justify-between items-center text-sm text-gray-600">
              <span>{{ restaurant.type }}</span>
              <span>{{ restaurant.time }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="mb-8">
        <button class="w-full bg-white border border-gray-300 rounded-2xl p-4 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between">
          <div class="text-left">
            <div class="font-semibold text-gray-900">View all cuisines</div>
            <div class="text-sm text-gray-600">Browse 1000+ restaurants</div>
          </div>
          <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>

      <!-- Bottom Navigation -->
      <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div class="flex justify-around py-3">
          <div class="flex flex-col items-center gap-1 text-blue-500">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9,22 9,12 15,12 15,22"></polyline>
            </svg>
            <span class="text-xs font-medium">Home</span>
          </div>
          <div class="flex flex-col items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <span class="text-xs">Search</span>
          </div>
          <div class="flex flex-col items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span class="text-xs">Orders</span>
          </div>
          <div class="flex flex-col items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span class="text-xs">Account</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenuSection',
  data() {
    return {
      activeCategory: 'All',
      categories: ['All', 'Pizza', 'Sushi', 'Burgers', 'Desserts'],
      restaurants: [
        {
          id: 1,
          name: 'Robata Jinya',
          type: 'Japanese',
          time: '30-50 min',
          image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop'
        },
        {
          id: 2,
          name: 'Kazunori Nozawa Sushi',
          type: 'Sushi',
          time: '15-30 min',
          image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop'
        },
        {
          id: 3,
          name: 'Cafe Gratitude',
          type: 'Healthy',
          time: '20-35 min',
          image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=300&h=200&fit=crop'
        },
        {
          id: 4,
          name: 'Tatsu Ramen',
          type: 'Ramen',
          time: '25-40 min',
          image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop'
        }
      ]
    }
  },
  methods: {
    setActiveCategory(category) {
      this.activeCategory = category;
    }
  }
}
</script>