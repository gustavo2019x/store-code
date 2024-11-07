<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div v-for="(product, index) in products" :key="index" class="border rounded-lg shadow-md p-4 overflow-hidden">
      <product-image :product="product"></product-image>
      <product-description :product="product"></product-description>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductDescription from '@/components/ProductDescription.vue'
import ProductImage from '@/components/ProductImage.vue'

const products = ref([])

const getProducts = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`)
  if (response.ok) {
    products.value = await response.json();
  }
}

onMounted(async () => {
  await getProducts()
})



</script>

<style scoped></style>
