<template>
   <div class="relative">
        <img :src="product.image" class="w-20 h-20 rounded-md" alt="Produto" />
        <button class="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-all">
          <font-awesome-icon icon="far fa-heart"></font-awesome-icon>
        </button>
      </div>
</template>

<script setup>

defineProps({
    product: Object,
})

</script>