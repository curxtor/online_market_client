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
          cost: 3000,
          img: "https://i.ytimg.com/vi/tMEeXpPzOyw/maxresdefault.jpg",
          quantity: 1,
          totalPrice: 3000
        },
        {
          id: "3",
          name: "Второй товар",
          star: "5.0",
          allStar: "150",
          cost: 500,
          img: "https://s0.rbk.ru/v6_top_pics/media/img/6/99/756570383157996.jpg",
          quantity: 1,
          totalPrice: 500
        },
        {
          id: "14",
          name: "Третий тоже нужен товар",
          star: "3.0",
          allStar: "1662",
          cost: 25,
          img: "https://fdn.gsmarena.com/imgroot/news/23/08/apple-iphone-16-pro-pro-max-48mp-ultrawide-camera/inline/-1200w5/gsmarena_001.jpg",
          quantity: 1,
          totalPrice: 25
        },
        {
          id: "162",
          name: "Simple tovar",
          star: "4.0",
          allStar: "40",
          cost: 3000,
          img: "https://i.ytimg.com/vi/tMEeXpPzOyw/maxresdefault.jpg",
          quantity: 1,
          totalPrice: 3000
        },
        {
          id: "3",
          name: "Второй товар",
          star: "5.0",
          allStar: "150",
          cost: 500,
          img: "https://s0.rbk.ru/v6_top_pics/media/img/6/99/756570383157996.jpg",
          quantity: 1,
          totalPrice: 500
        },
        {
          id: "14",
          name: "Третий тоже нужен товар",
          star: "3.0",
          allStar: "1662",
          cost: 25,
          img: "https://fdn.gsmarena.com/imgroot/news/23/08/apple-iphone-16-pro-pro-max-48mp-ultrawide-camera/inline/-1200w5/gsmarena_001.jpg",
          quantity: 1,
          totalPrice: 25
        },
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