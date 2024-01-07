<template>
    <h1>Your Shopping Cart</h1>

    <ShoppingCartList :cartList="cartItems" @remove-from-cart="removeFromCart($event)" />

    <!-- Button for user to check out  -->
    
    <button class="checkout-button">Check out</button>
</template>

<script>
    import axios from 'axios';
    import ShoppingCartList from '@/components/ShoppingCartList.vue';

    export default {
        name: 'ShoppingCartPage', 
        data() {
            return {
                cartItems: [],
            }
        }, 
        components: {
            ShoppingCartList,
        }, 
        methods: {
            // Call when @remove-from-cart is trigger
            async removeFromCart(productId) {
                const response = await axios.delete(`/api/users/12345/cart/${productId}`);
                const updatedCart = response.data;
                this.cartItems = updatedCart;
            }
        },
        async created() {
            const response = await axios.get('/api/users/12345/cart');
            const shoppingCart = response.data;
            this.cartItems = shoppingCart;
        }
    }
</script>