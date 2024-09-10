<template>
  <p>Product Page {{ id }}</p>
	<div class='productInfo'>
		<div class='productImage'>
			<img :src='product.img' style='width:100%;'>
		</div>
		<div class='productName'>
			<p>{{ product.name }}</p>
		</div>
		<div class='productCost'>
			<p style='font-size: 24px; margin:0;'> {{ product.cost }} $</p>
			<div class='counter'>
				<div class='decreaseCount' @click='changeCount($event)'>&lt;</div>
				<p style='font-size: 24px;margin: 0 5px 0 5px;'>{{ count }}</p>
				<div class='increaseCount' @click='changeCount($event)'>&gt;</div>
			</div>
			<div class='orderButton'>
				Add to Cart
			</div>
		</div>
		<div class='productDescription'>
			<p style='font-weight: 600;'>Описание товара</p>
			<p> {{ product.description }}</p>
		</div>
	</div>
</template>

<script>
export default {
  name: 'ProductPage',
	data() {
		return {
			id: this.$route.params.id,
			count: 1,
			product: {
          id: "162",
          name: "Simple tovar",
          star: "4.0",
          allStar: "40",
          cost: "3000",
          img: "https://i.ytimg.com/vi/tMEeXpPzOyw/maxresdefault.jpg",
					description: "Большое описание товара описание товара описание товара описание товара описание товара описание товара описание товара описание товара описание товара описание товара описание товара описание товара описание товара описание товара описание товара описание товара описание товара "
      }
		}
	},
	methods: {
		changeCount(event) {
			if (event.target.className == "decreaseCount") (this.count != 1) ? this.count-- : this.count = 1
			else this.count++
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productImage {
	/* width:300px; */
}
.productInfo {
	display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.productCost {
	justify-self: center;
	color: white;
	background-color:#42b983;
	border-radius:20px;
	width:60%;
	padding: 20px;
	height: fit-content;
}
.counter {
	display: flex;
	align-items: center;
}
.decreaseCount, .increaseCount {
	background-color:#105f3c;
	padding:5px 7px 5px 7px;
	border-radius: 15px;
	cursor: pointer;
	user-select: none;
}
.orderButton {
  background-color:#105f3c;
  color: white;
  width: 100%;
	height: 30px;
  text-align: center;
  border-radius: 565px;
  font-family: 'Roboto';
  font-size: 1.45vh;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
