<template>
    <h1>Your Shopping Cart</h1>

    <ShoppingCartList :cartList="cartItems" />

    <!-- Button for user to check out  -->
    <button class="checkout-button">Check out</button>
</template>

<script>
    import { cartItems } from '../temp-data';
    import ShoppingCartList from '@/components/ShoppingCartList.vue';

    export default {
        name: 'ShoppingCartPage', 
        data() {
            return {
                cartItems,
            }
        }, 
        components: {
            ShoppingCartList,
        }
    }
</script>