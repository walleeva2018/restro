<template>
    <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4">About</h3>
            <p class="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aspernatur sit deleniti.
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Our Menu</h3>
            <ul class="space-y-2 text-gray-400">
              <li v-for="item in menuItems" 
                  :key="item" 
                  class="hover:text-white cursor-pointer">
                {{ item }}
              </li>
            </ul>
          </div>
  
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-gray-400">
              <li v-for="link in quickLinks" 
                  :key="link" 
                  class="hover:text-white cursor-pointer">
                {{ link }}
              </li>
            </ul>
          </div>
  
          <div>
            <h3 class="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul class="space-y-2 text-gray-400">
              <li v-for="item in contactItems" 
                  :key="item" 
                  class="hover:text-white cursor-pointer">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        
        <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>Copyright © {{ new Date().getFullYear() }}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  const menuItems = ['Biryani', 'Chicken', 'Pizza', 'Burger', 'Pasta']
  const quickLinks = ['About Us', 'Contact Us', 'Menu', 'Order', 'Services']
  const contactItems = ['Account', 'Support Center', 'Feedback', 'Suggestion']
  </script>