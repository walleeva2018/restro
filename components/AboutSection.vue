<template>
  <div class="py-8 sm:py-12 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="mb-8 sm:mb-12 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
          About Us
        </h2>
        <p class="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are innovators in restaurant management, offering a seamless dining experience with cutting-edge services like table reservations, dynamic menus, and personalized culinary options.
        </p>
      </div>

      <!-- Category Filter - Mobile Optimized -->
      <div class="flex justify-center mb-8 sm:mb-12">
        <div class="w-full max-w-4xl">
          <!-- Mobile: Horizontal scroll -->
          <div class="flex sm:hidden overflow-x-auto space-x-2 pb-2 px-2">
            <button
              v-for="category in categories"
              :key="category"
              :class="[
                'flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              ]"
              @click="activeCategory = category"
            >
              {{ category }}
            </button>
          </div>
          
          <!-- Desktop: Centered flex -->
          <ul class="hidden sm:flex flex-wrap justify-center gap-3 lg:gap-4">
            <li
              v-for="category in categories"
              :key="category"
              :class="[
                'px-4 lg:px-6 py-2 lg:py-3 rounded-full cursor-pointer text-sm lg:text-base font-medium transition-all duration-200 hover:shadow-md',
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg transform hover:scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-indigo-200'
              ]"
              @click="activeCategory = category"
            >
              {{ category }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Menu Items Grid - Fully Responsive -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <div
          v-for="item in filteredMenuItems"
          :key="item.id"
          class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-105 hover:-translate-y-1"
        >
          <div class="p-4 sm:p-6">
            <!-- Title -->
            <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
              {{ item.title }}
            </h3>
            
            <!-- Description -->
            <p class="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed line-clamp-3">
              {{ item.description }}
            </p>
            
            <!-- Location -->
            <p class="text-xs sm:text-sm text-gray-500 mb-4 flex items-center">
              <svg class="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {{ item.location }}
            </p>
            
            <!-- Price and Button -->
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <span class="text-lg sm:text-xl font-bold text-indigo-600">
                ${{ item.price }}
              </span>
              <button class="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State (when no items match filter) -->
      <div 
        v-if="filteredMenuItems.length === 0" 
        class="text-center py-12 sm:py-16"
      >
        <div class="text-gray-400 mb-4">
          <svg class="mx-auto h-12 w-12 sm:h-16 sm:w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
        </div>
        <h3 class="text-sm sm:text-base font-medium text-gray-900 mb-2">No items found</h3>
        <p class="text-xs sm:text-sm text-gray-500">Try selecting a different category.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['All', 'Reservations', 'Dynamic Menus', 'Personalized Options']
const activeCategory = ref('All')

const menuItems = [
  {
    id: 1,
    title: 'Table Reservations',
    description: 'Book your favorite table effortlessly through our online system.',
    location: 'Available Globally',
    price: '0.00',
    category: 'Reservations',
  },
  {
    id: 2,
    title: 'Dynamic Menu Management',
    description: 'Experience menus that adapt to your preferences in real-time.',
    location: 'Restaurant HQ',
    price: '50.00',
    category: 'Dynamic Menus',
  },
  {
    id: 3,
    title: 'Personalized Dining Options',
    description: 'Tailored culinary experiences crafted just for you.',
    location: 'Exclusive Locations',
    price: '100.00',
    category: 'Personalized Options',
  },
]

const filteredMenuItems = computed(() => {
  if (activeCategory.value === 'All') {
    return menuItems
  }
  return menuItems.filter(item => item.category === activeCategory.value)
})
</script>

<style scoped>
/* Utility classes for text truncation */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom scrollbar for mobile category filter */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>