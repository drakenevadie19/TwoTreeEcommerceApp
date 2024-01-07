<!-- Product Listing -->
<!-- Example of using reusable components-->
<template>
    <div class="grid-wrap">
        <div v-for="product in products" class="product-item" :key="product.id">
            <img :src="product.imageUrl" />
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">{{ product.price }}</p>

            <router-link :to="'/products/' + product.id">
                <button>View Details</button>
            </router-link>
        </div>
    </div>
</template>

<script>
// We will use props to pass products list (data) from parent component (ProductsPage.vue) to children component (ProductsList.vue)
    export default {
        name: "ProductsList",
        props: ['products'],
    }
</script>