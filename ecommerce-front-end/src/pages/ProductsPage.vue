<template>
    <h1>Products</h1>
    <!-- Pass products array to ProductsList (child component) via props (defined in child component) -->
    <ProductsList :products="products"/>
</template>

<script>
import {products } from '../temp-data';
import ProductsList from '@/components/ProductsList.vue';

    export default {
        name: "ProductsPage", 
        data() {
            return {
                products,
            }
        }, 
        components: {
            ProductsList, 

        }
    }
</script>