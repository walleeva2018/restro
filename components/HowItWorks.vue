<!-- HowItWorksSection.vue -->
<template>
  <section class="py-16 sm:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          How It Works
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          From restaurant menus to personalized recommendations - discover how we connect food lovers with their perfect meal
        </p>
      </div>

      <!-- Steps -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
        <!-- Step 1: Restaurant Owner -->
        <div class="text-center group">
          <div class="relative mb-8">
            <div class="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span class="text-sm font-bold text-blue-600">1</span>
            </div>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Restaurant Partners</h3>
          <p class="text-gray-600 leading-relaxed">
            Restaurant owners create detailed menus on our platform, showcasing their dishes with photos, descriptions, and pricing to reach hungry customers.
          </p>
        </div>

        <!-- Step 2: User Experience -->
        <div class="text-center group">
          <div class="relative mb-8">
            <div class="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span class="text-sm font-bold text-green-600">2</span>
            </div>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Rate & Review</h3>
          <p class="text-gray-600 leading-relaxed">
            Users browse menus, order food, and share their honest ratings and reviews about taste, quality, and overall dining experience.
          </p>
        </div>

        <!-- Step 3: AI Recommendations -->
        <div class="text-center group">
          <div class="relative mb-8">
            <div class="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span class="text-sm font-bold text-purple-600">3</span>
            </div>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Smart Suggestions</h3>
          <p class="text-gray-600 leading-relaxed">
            Our AI analyzes user ratings and preferences to provide personalized food recommendations, helping you discover your next favorite meal.
          </p>
        </div>
      </div>

      <!-- Process Flow -->
      <div class="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-12">
        <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
          The Complete Journey
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Mini Step 1 -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Menu Creation</h4>
            <p class="text-sm text-gray-600">Restaurants build comprehensive menus with detailed descriptions</p>
          </div>

          <!-- Mini Step 2 -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">User Discovery</h4>
            <p class="text-sm text-gray-600">Customers browse and discover restaurants in their area</p>
          </div>

          <!-- Mini Step 3 -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div class="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Rating System</h4>
            <p class="text-sm text-gray-600">Users rate dishes and share detailed reviews</p>
          </div>

          <!-- Mini Step 4 -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">AI Matching</h4>
            <p class="text-sm text-gray-600">Smart algorithms suggest perfect matches based on preferences</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="inline-flex flex-col sm:flex-row gap-4">
          <button class="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Start Exploring Restaurants
          </button>
          <button class="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200">
            Join as Restaurant Partner
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorksSection'
}
</script>