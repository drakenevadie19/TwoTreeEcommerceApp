<template>
    <div class="nav-bar">
        <router-link to="/products" class="products-link"> 
            <div class="logo-wrap ">
                <img :src="logo" alt="Logo" />
            </div>
        </router-link>

        <div class="nav-buttons-wrap">
            <button @click="signOutNow" v-if="user">Log Out</button>
            <router-link to="/cart">
                <button>Shopping Cart</button>
            </router-link>
        </div>

        
    </div>
</template>

<script>
    //@ = ..
    import logo from '../assets/products/logo-hexagon.svg';

    import { getAuth, signOut } from 'firebase/auth';

    export default {
        name: "NavBar",
        data() {
            return {
                logo,
            }
        }, 
        props: ['user'],
        methods: {
            signOutNow() {
                const auth = getAuth();
                signOut(auth);
            }
        }
    }
</script>