<template>
  <transition name="fade" mode="out-in">
      <div class='cartModal' @click="$emit('close-modal')">
      <div class='cartCard' @click.stop>
        <div class='cartHead'>
          <p style='font-size:20px; font-weight: 600; float:left;'>Your cart</p>
          
          <div class='closeCart' @click="$emit('close-modal')"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style='width:26px;'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#FFFFFF"></path> </g></svg></div>
          
        </div>
        <p style='font-size:12px; margin-bottom: 15px;'>Quantity: {{ cart.length }} pcs</p>
        <div class='orderList' v-if="cart.length != 0">
          <div class='orderElement'  v-for='cartElement in cart' :key='cartElement.id' :id='"elem"+cartElement.id'>
            <div class ='orderImage'>
              <img :src='cartElement.img' style='width:100%;'/>
            </div>
            <div class='orderTitle'>
              <p>{{ cartElement.name }}</p>
            </div>
            <div class='orderCount'>
              <div class='decreaseCount' @click='changeCount($event)'>&lt;</div>
              <p style='font-size: 24px;margin: 0 15px 0 15px;'>{{ cartElement.quantity }}</p>
              <div class='increaseCount' @click='changeCount($event)'>&gt;</div>
            </div>
            <div class='totalSum'>
              <p>{{ cartElement.totalPrice }}</p>
            </div>
          </div>
        </div>
        <p v-else>Your cart is empty! </p>
      </div>
    </div>
    </transition>
</template>

<script>
export default {
  name: 'CartCard',
  props: {
    cart: Array
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    changeCount(event) {
      let elemId = event.target.parentNode.parentNode.id.slice(4)
      let elem = this.cart.find(obj => obj.id == elemId).quantity
			if (event.target.className == "decreaseCount") {
				if (elem != 1) {
					this.cart.find(obj => obj.id == elemId).quantity--
					this.cart.find(obj => obj.id == elemId).totalPrice -= this.cart.find(obj => obj.id == elemId).cost
				}
			}
			else {
				this.cart.find(obj => obj.id == elemId).quantity++
				this.cart.find(obj => obj.id == elemId).totalPrice += this.cart.find(obj => obj.id == elemId).cost
			}
		}
  },
  mounted() {
    this.products=this.cart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cartModal {
  position: fixed;
  left:0;
  top:0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0,0,0,0.7);
  width:100%;
  height: 100%;
  z-index: 9999;
  transition: 2.5s;
}
.cartCard {
  background-color:white;
  border-radius:20px;
  margin: 0 auto;
  width:50%;
  height: auto;
  min-height: 60%;
  max-height: 70%;
  padding: 30px;
  overflow: auto;
}
.cartHead {
  display: flow-root;
}
.orderElement {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.closeCart {
  float:right;
  background-color: #42b983;
  border-radius:15px;
  height: 28px;
  padding:5px;
  cursor: pointer;
}
.orderImage {

}
.orderImage img {
  border-radius: 15px;
}
.orderList {
 
}
.orderCount {
  display: inline-flex;
  height:35px;
}
.decreaseCount, .increaseCount {
	background-color:#105f3c;
	padding:5px 7px 5px 7px;
  width: 5%;
  color:white;
  height: auto;
	border-radius: 15px;
	cursor: pointer;
	user-select: none;
  transition: 0.2s;
}
.decreaseCount:hover, .increaseCount:hover {
	filter:drop-shadow(0 0 3px #105f3c);
	transition: 0.2s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
