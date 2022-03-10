Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `<div class="product">
        <div class="product-image">
            <img v-bind:src="image" v-bind:alt="altText"/>
            <img v-bind:src="catImage" v-bind:alt="catAltText">
        </div>

        <div class="product-info">
            <h1>{{title}}</h1>
            <h1>{{ product }}</h1>
            <p>{{sale}}</p>
            
            <p>Shipping: {{ shipping }}</p>

            <p v-if="inStock">In Stock</p>
            <p v-else :class="{outOfStock: !inStock}">Out of Stock</p>
            <a v-bind:href="link" target="_blank" >More products like this</a>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div v-for="(variant, index) in variants"
                 :key="variant.variantId"
                 class="color-box"
                 :style="{backgroundColor: variant.variantColor}"
                 @mouseover="updateProduct(index)"
            >

            </div>
            <div v-for="cat in cats" :key ="cat.catGender" >
                <p @mouseenter ="updateCat(cat.catImage)">{{cat.catName }}</p>
            </div>

            <button v-on:click="addToCart"
                    :disabled= "!inStock"
                    :class="{ disabledButton: !inStock }">Add to Cart</button>
            <button v-on:click="removeToCart">Remove to Cart</button>
            <div class="cart">
                <p>Cart({{cart}})</p>
            </div>

        </div>

    </div> `,
    data() {
        return {
            product: "Socks",
            brand: "Vue Mastery",
            selectedVariant: 0,
            onSale: true,
            link: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
            altText: 'A pair of socks',
            inventory: 0,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: 'assets/vmSocks-green-onWhite.jpeg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: 'assets/vmSocks-blue-onWhite.jpeg',
                    variantQuantity: 0
                }
            ],
            catImage: 'assets/dodam.jpeg',
            catAltText: 'cat is love',
            cats: [
                {
                    catName: "dodam",
                    catGender: "M",
                    catImage: 'assets/dodam.jpeg'

                },
                {
                    catName: "Mozzi",
                    catGender: "F",
                    catImage: 'assets/mozzi.jpeg'
                }
            ],
            cart: 0

        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)

        },
        updateCat(catImage) {
            this.catImage = catImage
        },
        removeToCart() {
            if (this.cart != 0) this.cart -= 1
        }

    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + 'are on Sale! Now'
            }
            return this.brand + ' ' + this.product + 'are not on sale'
        },
        shipping() {
            if(this.premium) {
                return "free"
            }
            return 2.99
        }
    }
})


var app = new Vue({
    el: '#app',
    data: {
        premium: false
    }
})