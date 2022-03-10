var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: "Vue Mastery",
        selectedVariant: 0,
        link: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
        altText: 'A pair of socks',
        inventory: 0,
        // inStock: false,
        onSale: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants:[
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
        cats:[
            {
                catName: "dodam",
                catGender: "M",
                catImage:'assets/dodam.jpeg'

            },
            {
                catName: "Mozzi",
                catGender: "F",
                catImage: 'assets/mozzi.jpeg'
            }
        ],
        cart: 0

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
            if(this.cart != 0) this.cart -= 1
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})