var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "assets/vmSocks-green-onWhite.jpeg",
        link: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
        altText: 'A pair of socks',
        inventory: 0,
        inStock: false,
        onSale: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: 'assets/vmSocks-green-onWhite.jpeg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: 'assets/vmSocks-blue-onWhite.jpeg'
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
        updateProduct(variantImage) {
            this.image = variantImage

        },
        updateCat(catImage) {
            this.catImage = catImage
        },
        removeToCart() {
            if(this.cart != 0) this.cart -= 1
        }
    }
})