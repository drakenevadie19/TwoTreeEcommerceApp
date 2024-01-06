<template>
    <h1>Your Shopping Cart</h1>

    <div v-if="cartItems.length > 0">
        <div v-for="product in cartItems" class="product-container" :key="product.id">
            <img class="product-image" :src="product.imageName" />
            <div class="details-wrap">
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
            </div>

            <!-- Button for removing item from cart  -->
            <button class="remove-button">Remove item from cart</button>
        </div>
    </div>
    <div v-if="cartItems.length === 0">
        Your cart is currently empty
    </div>

    

    <!-- Button for user to check out  -->
    <button class="checkout-button">Check out</button>
</template>

<script>
    import { cartItems } from '../temp-data';

    export default {
        name: 'ShoppingCartPage', 
        data() {
            return {
                cartItems,
            }
        }
    }
</script>