// foodData.js
export const foodData = {
    restaurants: [
      {
        id: 1,
        name: "Robata Jinya",
        type: "Japanese",
        location: "Downtown",
        deliveryTime: "30-50 min",
        rating: 4.5,
        totalReviews: 1247,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        cuisineType: ["Japanese", "Asian"],
        priceRange: "$$",
        isOpen: true
      },
      {
        id: 2,
        name: "Kazunori Nozawa Sushi",
        type: "Sushi",
        location: "Beverly Hills",
        deliveryTime: "15-30 min",
        rating: 4.8,
        totalReviews: 892,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        cuisineType: ["Sushi", "Japanese"],
        priceRange: "$$$",
        isOpen: true
      },
      {
        id: 3,
        name: "Cafe Gratitude",
        type: "Healthy",
        location: "Venice",
        deliveryTime: "20-35 min",
        rating: 4.3,
        totalReviews: 654,
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop",
        cuisineType: ["Healthy", "Vegan", "Vegetarian"],
        priceRange: "$$",
        isOpen: true
      },
      {
        id: 4,
        name: "Tatsu Ramen",
        type: "Ramen",
        location: "Little Tokyo",
        deliveryTime: "25-40 min",
        rating: 4.6,
        totalReviews: 1543,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
        cuisineType: ["Ramen", "Japanese"],
        priceRange: "$$",
        isOpen: true
      },
      {
        id: 5,
        name: "Guelaguetza",
        type: "Mexican",
        location: "Koreatown",
        deliveryTime: "20-35 min",
        rating: 4.4,
        totalReviews: 987,
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop",
        cuisineType: ["Mexican", "Traditional"],
        priceRange: "$$",
        isOpen: true
      },
      {
        id: 6,
        name: "Night + Market",
        type: "Thai",
        location: "West Hollywood",
        deliveryTime: "30-45 min",
        rating: 4.7,
        totalReviews: 756,
        image: "https://images.unsplash.com/photo-1559314809-0f31657def5e?w=400&h=300&fit=crop",
        cuisineType: ["Thai", "Asian"],
        priceRange: "$$",
        isOpen: false
      }
    ],
  
    foods: [
      // Japanese/Sushi Items
      {
        id: 1,
        name: "Chirashi Bowl",
        description: "Fresh assorted sashimi over seasoned sushi rice with pickled vegetables",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        category: "Sushi",
        restaurantId: 2,
        restaurantName: "Kazunori Nozawa Sushi",
        rating: 4.9,
        totalRatings: 234,
        ingredients: ["Fresh Tuna", "Salmon", "Yellowtail", "Sushi Rice", "Wasabi"],
        allergens: ["Fish", "Gluten"],
        isVegetarian: false,
        isVegan: false,
        calories: 520,
        preparationTime: "15 min",
        spiceLevel: 0
      },
      {
        id: 2,
        name: "Tonkotsu Ramen",
        description: "Rich pork bone broth with chashu pork, soft-boiled egg, and fresh noodles",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
        category: "Ramen",
        restaurantId: 4,
        restaurantName: "Tatsu Ramen",
        rating: 4.7,
        totalRatings: 456,
        ingredients: ["Pork Broth", "Ramen Noodles", "Chashu Pork", "Soft-boiled Egg", "Green Onions"],
        allergens: ["Gluten", "Egg", "Soy"],
        isVegetarian: false,
        isVegan: false,
        calories: 680,
        preparationTime: "20 min",
        spiceLevel: 1
      },
      {
        id: 3,
        name: "Robata Grilled Salmon",
        description: "Perfectly grilled salmon with miso glaze, served with steamed vegetables",
        price: 28.99,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
        category: "Japanese",
        restaurantId: 1,
        restaurantName: "Robata Jinya",
        rating: 4.6,
        totalRatings: 189,
        ingredients: ["Fresh Salmon", "Miso Paste", "Seasonal Vegetables", "Sesame Oil"],
        allergens: ["Fish", "Soy"],
        isVegetarian: false,
        isVegan: false,
        calories: 420,
        preparationTime: "25 min",
        spiceLevel: 0
      },
  
      // Healthy/Vegan Items
      {
        id: 4,
        name: "I Am Grateful Bowl",
        description: "Quinoa, roasted vegetables, avocado, hemp seeds with tahini dressing",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop",
        category: "Healthy",
        restaurantId: 3,
        restaurantName: "Cafe Gratitude",
        rating: 4.5,
        totalRatings: 312,
        ingredients: ["Quinoa", "Roasted Vegetables", "Avocado", "Hemp Seeds", "Tahini"],
        allergens: ["Sesame"],
        isVegetarian: true,
        isVegan: true,
        calories: 380,
        preparationTime: "15 min",
        spiceLevel: 0
      },
      {
        id: 5,
        name: "Green Goddess Smoothie Bowl",
        description: "Spirulina smoothie bowl topped with fresh fruits, granola, and coconut",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop",
        category: "Healthy",
        restaurantId: 3,
        restaurantName: "Cafe Gratitude",
        rating: 4.3,
        totalRatings: 198,
        ingredients: ["Spirulina", "Banana", "Mango", "Granola", "Coconut Flakes"],
        allergens: ["Nuts"],
        isVegetarian: true,
        isVegan: true,
        calories: 290,
        preparationTime: "10 min",
        spiceLevel: 0
      },
  
      // Mexican Items
      {
        id: 6,
        name: "Mole Poblano",
        description: "Traditional chicken mole with complex sauce of chiles and chocolate",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop",
        category: "Mexican",
        restaurantId: 5,
        restaurantName: "Guelaguetza",
        rating: 4.8,
        totalRatings: 287,
        ingredients: ["Chicken", "Poblano Chiles", "Chocolate", "Sesame Seeds", "Rice"],
        allergens: ["Sesame", "Nuts"],
        isVegetarian: false,
        isVegan: false,
        calories: 650,
        preparationTime: "30 min",
        spiceLevel: 2
      },
      {
        id: 7,
        name: "Street Tacos Al Pastor",
        description: "Three corn tortillas with marinated pork, pineapple, onions, and cilantro",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
        category: "Mexican",
        restaurantId: 5,
        restaurantName: "Guelaguetza",
        rating: 4.6,
        totalRatings: 445,
        ingredients: ["Corn Tortillas", "Pork Al Pastor", "Pineapple", "White Onions", "Cilantro"],
        allergens: [],
        isVegetarian: false,
        isVegan: false,
        calories: 420,
        preparationTime: "15 min",
        spiceLevel: 2
      },
  
      // Thai Items
      {
        id: 8,
        name: "Pad Thai Night Market Style",
        description: "Traditional pad thai with rice noodles, shrimp, bean sprouts, and tamarind sauce",
        price: 17.99,
        image: "https://images.unsplash.com/photo-1559314809-0f31657def5e?w=400&h=300&fit=crop",
        category: "Thai",
        restaurantId: 6,
        restaurantName: "Night + Market",
        rating: 4.7,
        totalRatings: 378,
        ingredients: ["Rice Noodles", "Shrimp", "Bean Sprouts", "Tamarind", "Peanuts"],
        allergens: ["Shellfish", "Peanuts"],
        isVegetarian: false,
        isVegan: false,
        calories: 540,
        preparationTime: "20 min",
        spiceLevel: 2
      },
      {
        id: 9,
        name: "Green Curry with Chicken",
        description: "Creamy coconut green curry with chicken, Thai basil, and jasmine rice",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop",
        category: "Thai",
        restaurantId: 6,
        restaurantName: "Night + Market",
        rating: 4.5,
        totalRatings: 267,
        ingredients: ["Chicken", "Coconut Milk", "Green Curry Paste", "Thai Basil", "Jasmine Rice"],
        allergens: [],
        isVegetarian: false,
        isVegan: false,
        calories: 580,
        preparationTime: "25 min",
        spiceLevel: 3
      },
  
      // Additional Popular Items
      {
        id: 10,
        name: "California Roll",
        description: "Classic sushi roll with crab, avocado, and cucumber",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop",
        category: "Sushi",
        restaurantId: 2,
        restaurantName: "Kazunori Nozawa Sushi",
        rating: 4.4,
        totalRatings: 567,
        ingredients: ["Crab", "Avocado", "Cucumber", "Nori", "Sushi Rice"],
        allergens: ["Shellfish"],
        isVegetarian: false,
        isVegan: false,
        calories: 320,
        preparationTime: "10 min",
        spiceLevel: 0
      },
      {
        id: 11,
        name: "Veggie Ramen",
        description: "Plant-based ramen with miso broth, tofu, and seasonal vegetables",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        category: "Ramen",
        restaurantId: 4,
        restaurantName: "Tatsu Ramen",
        rating: 4.2,
        totalRatings: 234,
        ingredients: ["Vegetable Broth", "Ramen Noodles", "Tofu", "Mushrooms", "Corn"],
        allergens: ["Gluten", "Soy"],
        isVegetarian: true,
        isVegan: true,
        calories: 450,
        preparationTime: "18 min",
        spiceLevel: 1
      },
      {
        id: 12,
        name: "Breakfast Burrito",
        description: "Scrambled eggs, cheese, potatoes, and salsa in a warm flour tortilla",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
        category: "Mexican",
        restaurantId: 5,
        restaurantName: "Guelaguetza",
        rating: 4.3,
        totalRatings: 156,
        ingredients: ["Eggs", "Cheese", "Potatoes", "Salsa", "Flour Tortilla"],
        allergens: ["Dairy", "Gluten"],
        isVegetarian: true,
        isVegan: false,
        calories: 520,
        preparationTime: "12 min",
        spiceLevel: 1
      }
    ],
  
    categories: [
      {
        id: 1,
        name: "All",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop",
        count: 12
      },
      {
        id: 2,
        name: "Sushi",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop",
        count: 2
      },
      {
        id: 3,
        name: "Ramen",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&h=200&fit=crop",
        count: 2
      },
      {
        id: 4,
        name: "Japanese",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=200&fit=crop",
        count: 1
      },
      {
        id: 5,
        name: "Healthy",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=200&h=200&fit=crop",
        count: 2
      },
      {
        id: 6,
        name: "Mexican",
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200&h=200&fit=crop",
        count: 3
      },
      {
        id: 7,
        name: "Thai",
        image: "https://images.unsplash.com/photo-1559314809-0f31657def5e?w=200&h=200&fit=crop",
        count: 2
      }
    ],
  
    // User ratings and reviews
    userRatings: [
      {
        id: 1,
        userId: 101,
        userName: "Sarah M.",
        foodId: 1,
        rating: 5,
        review: "Amazing chirashi bowl! Fresh fish and perfectly seasoned rice.",
        date: "2024-12-15",
        helpful: 23,
        verified: true
      },
      {
        id: 2,
        userId: 102,
        userName: "Mike Chen",
        foodId: 2,
        rating: 5,
        review: "Best tonkotsu ramen in the city. Rich broth and perfect noodles.",
        date: "2024-12-14",
        helpful: 45,
        verified: true
      },
      {
        id: 3,
        userId: 103,
        userName: "Emma L.",
        foodId: 4,
        rating: 4,
        review: "Love the healthy options here. Fresh ingredients and great flavors.",
        date: "2024-12-13",
        helpful: 12,
        verified: true
      },
      {
        id: 4,
        userId: 104,
        userName: "Carlos R.",
        foodId: 6,
        rating: 5,
        review: "Authentic mole poblano! Takes me back to Mexico.",
        date: "2024-12-12",
        helpful: 34,
        verified: true
      },
      {
        id: 5,
        userId: 105,
        userName: "Lisa Wang",
        foodId: 8,
        rating: 4,
        review: "Great pad thai with authentic flavors. Will order again!",
        date: "2024-12-11",
        helpful: 18,
        verified: true
      }
    ],
  
    // Helper functions
    getFoodsByCategory: function(categoryName) {
      if (categoryName === "All") {
        return this.foods;
      }
      return this.foods.filter(food => food.category === categoryName);
    },
  
    getFoodsByRestaurant: function(restaurantId) {
      return this.foods.filter(food => food.restaurantId === restaurantId);
    },
  
    getTopRatedFoods: function(limit = 5) {
      return this.foods
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
    },
  
    getFoodsByPriceRange: function(minPrice, maxPrice) {
      return this.foods.filter(food => 
        food.price >= minPrice && food.price <= maxPrice
      );
    },
  
    getVegetarianFoods: function() {
      return this.foods.filter(food => food.isVegetarian);
    },
  
    getVeganFoods: function() {
      return this.foods.filter(food => food.isVegan);
    },
  
    searchFoods: function(query) {
      const searchTerm = query.toLowerCase();
      return this.foods.filter(food => 
        food.name.toLowerCase().includes(searchTerm) ||
        food.description.toLowerCase().includes(searchTerm) ||
        food.restaurantName.toLowerCase().includes(searchTerm) ||
        food.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm)
        )
      );
    }
  };
  
  export default foodData;