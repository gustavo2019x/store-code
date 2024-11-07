<template>
    <div class="flex items-center">
        <div v-for="star in 5" :key="star" class="text-yellow-400 ">
            <font-awesome-icon :icon="star <= product.rating.rate ? `fas fa-star` : `far fa-star`"></font-awesome-icon>
        </div>
        <span class="text-gray-500 text-sm ml-2">{{ product.rating.rate }}</span>
    </div>
</template>

<script setup>

defineProps({
    product: Object,
})

</script>