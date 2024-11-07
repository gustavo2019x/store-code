<template>
    <div class="mt-2">
        <a href="/product/1" class="font-semibold hover:text-black/70 transition-all">{{ product.title }}</a>
        <p class="text-gray-500">{{ product.category }}</p>
        <div class="flex items-center space-x-2 my-2">
            <p class="text-green-600 font-bold"> {{ formatCurrency(product.price) }}</p>
            <p class="text-gray-500 line-through text-sm"> {{ formatCurrency(product.price) }} </p>
            <p class="text-green-600  text-sm">{{ priceDiscountPorcentage(product.price) }}</p>
        </div>
        <product-description-star :product="product"></product-description-star>
        <button class="bg-black/80 hover:bg-black/70 w-32 p-1 my-2 rounded-md text-white">
            <font-awesome-icon icon="fa fa-cart-shopping"></font-awesome-icon>
        </button>
    </div>
</template>

<script setup>
import { formatCurrency, priceDiscountPorcentage } from '@/plugins/functions.js'
import ProductDescriptionStar from '@/components/ProductDescriptionStar.vue'
defineProps({
    product: Object,
})

</script>