<!-- HeroSection.vue -->
<template>
  <section class="mt-16 p-4 sm:p-6 bg-gray-100">
    <div class="max-w-7xl mx-auto">
      <!-- Search Bar -->
      <div class="mb-8">
        <div class="relative max-w-md mx-auto">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search" 
            class="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
            v-model="searchQuery"
          />
        </div>
      </div>
      
      <!-- Hero Content -->
      <div class="bg-white rounded-2xl overflow-hidden shadow-lg">
        <div class="relative h-64 sm:h-80">
          <img 
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=400&fit=crop" 
            alt="Food spread" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
              Discover the best food & drinks in your area
            </h1>
            <p class="text-base sm:text-lg text-white/90">
              We have 1,000+ restaurants available
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      searchQuery: ''
    }
  }
}
</script>