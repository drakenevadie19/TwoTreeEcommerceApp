<template> 
    <div v-if="cartList.length > 0">
        <div v-for="product in cartList" class="product-container" :key="product.id">
            <img class="product-image" :src="product.imageName" />
            <div class="details-wrap">
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
            </div>

            <!-- Button for removing item from cart  -->
            <button class="remove-button">Remove item from cart</button>
        </div>
    </div>
    <div v-if="cartList.length === 0">
        Your cart is currently empty
    </div>
</template>

<script>
    export default {
        name: "ShoppingCartList", 
        props: ['cartList'],
    }
</script>