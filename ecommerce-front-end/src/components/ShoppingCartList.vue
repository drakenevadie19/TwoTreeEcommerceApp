<template> 
    <div v-if="cartList.length > 0">
        <div v-for="product in cartList" class="product-container" :key="product.id">
            <img class="product-image" :src="product.imageUrl" />
            <div class="details-wrap">
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
            </div>

            <div class="product-amount">{{ this.map.get(product.id) }}</div>

            <!-- Button for removing item from cart  -->
            <!-- Emit an event for parent component (ShoppingCartPage) to listen when remove item from cart  -->
            <button @click="$emit('remove-from-cart', product.id)" class="remove-button">Remove item from cart</button>
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
    data() {
        return {
            map: new Map(), // Initialize a new Map
        };
    },
    watch: {
        // Watch for changes in the cartList prop
        cartList: {
        handler: function (newCartList) {
            // Update the hash map when the cartList prop changes
            this.mapItem(newCartList);
        },
        immediate: true, // Trigger the handler immediately on component creation
        },
    },
    methods: {
        mapItem(cartList) {
        // Reset the map before updating to avoid accumulation of counts
        this.map.clear();

        for (let item of cartList) {
            if (this.map.has(item.id)) {
            let temp = this.map.get(item.id);
            temp++;
            this.map.set(item.id, temp);
            } else {
            this.map.set(item.id, 1);
            }
        }
        },
    },
    created() {
        // Initialize the hash map when the component is created
        this.mapItem(this.cartList);
    },
    };
</script>
