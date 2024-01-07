<template>
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product.imageUrl" />
        </div>

        <div class="product-details">
            <h1>{{ product.name }}</h1>
            <h3 class="price">{{ product.price }}</h3>

            <!-- Button to allow user to add item into shopping cart -->
            <button @click="addToCart" class="add-to-cart">Add to Cart</button>
        </div>
    </div>

    <!-- Display when we could not find product => w-else v-if="!product"-->
    <div v-else>
        <NotFoundPage />
    </div>
</template>

<script>
    import NotFoundPage from './NotFoundPage.vue';
    import axios from 'axios';

    export default {
        name: 'ProductDetailPage', 
        data() {
            return {
                product: {}, 
            }
        },
        methods: {
            async addToCart() {
                await axios.post('/api/users/12345/cart', { id: this.$route.params.productId });
                alert('Successfully added item to Cart');
            }
        },
        components: {
            NotFoundPage,
        },
        async created() {
            const response = await axios.get(`/api/products/${this.$route.params.productId}`);
            const product = response.data;
            this.product = product;
        }
    }
</script>