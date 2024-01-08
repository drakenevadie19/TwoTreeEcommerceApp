<template>
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product.imageUrl" />
        </div>

        <div class="product-details">
            <h1>{{ product.name }}</h1>
            <h3 class="price">{{ product.price }}</h3>

            <!-- Button to allow user to add item into shopping cart -->
            <button @click="addToCart" class="add-to-cart" v-if="user && !itemIsInCart">Add to cart</button>
            <button class="grey-button" v-if="user && itemIsInCart">Item is already in cart</button>

            <!-- Button for signing in to add item to cart => This button will only appear when user did not log in-->
            <button class="sign-in" @click="signIn" v-if="!user">Sign in to add this item to cart</button>

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

    import {getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';

    export default {
        name: 'ProductDetailPage', 
        data() {
            return {
                product: {}, 
                cartItems: [],
            }
        },
        props: ['user'],
        computed: {
            itemIsInCart() {
                return this.cartItems.some(item => item.id === this.$route.params.productId);
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
        methods: {
            async addToCart() {
                // instead of using dummy user id, get it from current user 
                await axios.post(`/api/users/${this.user.uid}/cart`, { id: this.$route.params.productId });
                alert('Successfully added item to Cart');
            }, 
            async signIn() {
                const email = prompt('Please enter your email to sign in: ');
                const auth = getAuth();
                const actionCodeSettings = {
                    url: `http://localhost:8080/products/${this.$route.params.productId}`,
                    handleCodeInApp: true,
                }
                await sendSignInLinkToEmail(auth, email, actionCodeSettings);
                alert("Please check email for login link");
                window.localStorage.setItem('emailForSignIn', email);
            }
        },
        components: {
            NotFoundPage,
        },
        async created() { 
            const auth = getAuth();
            if (isSignInWithEmailLink(auth, window.location.href)) {
                const email = window.localStorage.getItem('emailForSignIn');
                await signInWithEmailLink(auth, email, window.location.href);
                alert('Successfully signed in');
                window.localStorage.removeItem('emailForSignIn');
            }

            const response = await axios.get(`/api/products/${this.$route.params.productId}`);
            const product = response.data;
            this.product = product;

            // const cartResponse = await axios.get(`/api/users/12345/cart`);
            // const cartItems = cartResponse.data;
            // this.cartItems = cartItems;
            if (this.user) {
                const cartResponse = await axios.get(`/api/users/${this.user.uid}/cart`);
                const cartItems = cartResponse.data;
                this.cartItems = cartItems;
            }
        }
    }
</script>