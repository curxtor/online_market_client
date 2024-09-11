<template>
  <div class='productCard'>
    <div class='productImage' @click='routeToCard'>
      <img :src='product.img' style='width:100%; text-align: center;'>
    </div>
    <div class='productCost'>
      <p>{{ product.cost }} $</p>
    </div>
    <div class='productName'>
      <p>{{ product.name }}</p>
    </div>
    <div class='productScore'>
      <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000" width='20px'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#FFAC33" d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"></path></g></svg>
      <p style='margin-left: 5px;'>{{product.star}} • {{ product.allStar }} оценок</p>
    </div>
    <transition name='fade'>
      <div class='orderButton' v-if='onClick'>
      Succesfully added!
    </div>
    <div class='orderButton' @click='addToCart' v-else>
      Add to Cart
    </div>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  data() {
    return {
      onClick: false
    }
  },
  methods: {
    routeToCard() {
      this.$router.push(`/product/${this.product.id}`)
    },
    addToCart() {
      this.onClick = true
      this.$store.commit('addToCart', this.product)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.productCard {
  border: 1px solid #42b983;
  text-align: left;
  display: grid;
  justify-items: center;
  grid-template-rows: auto auto 40px 40px 30px;
  padding:15px;
}
.productImage {
  text-align: center;
  width:100%;
  margin-bottom: 20px;
  cursor: pointer;
}
.productImage img {
  border-radius: 10px;
}
.productCost {
  font-size: 1.5vw;
  font-weight: 700;
  font-family: 'Open Sans';
  height: 50px;
  justify-self: start;
  display: flex;
  align-items: center;
  height: 40px;
}
.productName {
  justify-self: start;
  display: flex;
  align-items: center;
  height: 40px;
}
.productScore {
  justify-self: left;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.orderButton {
  background-color:#42b983;
  color: white;
  width: 60%;
  text-align: center;
  border-radius: 565px;
  font-family: 'Roboto';
  font-size: 1.45vh;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
