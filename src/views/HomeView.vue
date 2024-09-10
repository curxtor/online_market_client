<template>
  
  
  <div class="home">
    <div class='products'>
      <ProductCard v-for='product in products' v-bind:key='product'
      :product='product'
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'


// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        {
          id: "162",
          name: "Simple tovar",
          star: "4.0",
          allStar: "40",
          cost: "3000",
          img: "https://i.ytimg.com/vi/tMEeXpPzOyw/maxresdefault.jpg"
        }
      ],
      isLoading: true
    }
  }
}
</script>
<style>

.products {
  max-width:70vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
}
</style>