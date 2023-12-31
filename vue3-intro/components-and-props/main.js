const app = Vue.createApp({
   data() {
     return {
       cart: 0,
       premium: true,
       details: "fdsgfhuaifds"
     }
   },
   methods: {
      addToCart() {
         this.cart += 1
      },
      updateVariant(index) {
         this.selectedVariant = index
      }
   },
   computed: {
      title() {
         return this.brand + ' ' + this.product
      },
      image() {
         return this.variants[this.selectedVariant].image
      },
      inStock() {
         return this.variants[this.selectedVariant].quantity
      },
   }
})
