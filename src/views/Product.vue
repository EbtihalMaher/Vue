<template>
  <div class="product-list">
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product._id">
        <div class="product-item">
          <div class="product-image">
            <img :src="product.img" alt="Product Image" />
          </div>
          <div class="product-details">
            <h2>{{ product.title }}</h2>
            <p>Price: {{ product.price }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Product',
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      const webId = this.$route.params.webId;
      axios
        .get(`http://localhost:8000/scraper/${webId}`)
        .then((response) => {
          this.products = Object.values(response.data.products); // Convert products to an array
		  console.log(this.products)
        })
        .catch((error) => {
          console.error('Failed to fetch products:', error);
        });
    },
  },
};
</script>

<style>
.product-list {
  max-width: 800px;
  margin: 0 auto;
}

.product-item {
  display: flex;
  margin-bottom: 20px;
}

.product-image {
  flex: 0 0 150px;
  margin-right: 20px;
}

.product-details {
  flex: 1;
}

.product-details h2 {
  margin-top: 0;
}

.product-details p {
  margin-bottom: 0;
}
</style>
