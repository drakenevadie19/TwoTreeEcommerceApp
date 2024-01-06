<template>
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product.imageName" />
        </div>

        <div class="product-details">
            <h1>{{ product.name }}</h1>
            <h3 class="price">{{ product.price }}</h3>

            <!-- Button to allow user to add item into shopping cart -->
            <button class="add-to-cart">Add to Cart</button>
        </div>
    </div>

    <!-- Display when we could not find product => w-else v-if="!product"-->
    <div v-else>
        <NotFoundPage />
    </div>
</template>

<script>
    import { products } from '@/temp-data';
    import NotFoundPage from './NotFoundPage.vue';

    export default {
        name: 'ProductDetailPage', 
        data() {
            return {
                product: products.find(product => product.id === this.$route.params.productId) 
            }
        },
        components: {
            NotFoundPage,
        }
    }
</script>