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
        props: ['user'], 
        data() {
            return {
                cartItems: [],
            }
        }, 
        watch: {
            // watch when user prop changes
            async user(newUserValue) {
                if (newUserValue) {
                    const cartResponse = await axios.get(`/api/users/${newUserValue.uid}/cart`);
                    const cartItems = cartResponse.data;
                    this.cartItems = cartItems;
                }
            }
        },
        components: {
            ShoppingCartList,
        }, 
        methods: {
            // Call when @remove-from-cart is trigger
            async removeFromCart(productId) {
                const response = await axios.delete(`/api/users/${this.user.uid}/cart/${productId}`);
                const updatedCart = response.data;
                this.cartItems = updatedCart;
            }
        },
        async created() {
            if (this.user) {
                const response = await axios.get(`/api/users/${this.user.uid}/cart`);
                const shoppingCart = response.data;
                this.cartItems = shoppingCart;
            }
        }
    }
</script>