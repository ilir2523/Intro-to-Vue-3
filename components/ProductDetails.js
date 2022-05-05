app.component('product-details', {
    props: {
        title: {
            type: String,
            required: true,
        },
        shipping: {
            required: true,
        },
        inStock: {
            type: Number,
            required: true,
        }
    },
    template: 
      /*html*/`
        <h1>{{ title }}</h1>

        <p>Shipping: {{ shipping }}</p>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
    `,
    data() {
        return {
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
              ]
        }
    }

})
