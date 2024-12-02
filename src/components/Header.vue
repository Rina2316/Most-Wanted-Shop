<template>
	<header class="header">
	  <h3>Штуки</h3>
 
	  <nav class="header__links">
		 <router-link :to="{ name: 'Main' }">
			<a :class="{ active: $route.name === 'Main' }">Главная</a>
		 </router-link>
		 <a>Магазин</a>
	  </nav>
 
	  <div class="header__img">
		 <router-link :to="{ name: 'ProductPage', params: { id: 1 } }">
			<img src="@/assets/images/shopping_cart.svg" alt="shopping cart" />
		 </router-link>
		 <div class="count" v-if="cartStore.totalQuantity > 0">{{ cartStore.totalQuantity }}</div>
	  </div>
	</header>
 </template>
 

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '../store/cart';

export default defineComponent({
	name: 'Header',
	setup() {
		const cartStore = useCartStore();
		return { cartStore };
	},
});
</script>

<style scoped>
.header {
	width: 100%;
	height: 64px;
	border: 2px solid #275742;
	padding: 14px 24px;
	

	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header h3 {
	font-size: 32px;
	line-height: 1.15;
	font-weight: 700;
	color: #275742;
}

.header__links {
	display: flex;
	column-gap: 32px;
	align-items: center;
}

.header__links a {
	font-size: 20px;
	color: #275742;
	line-height: 1.15;
	font-weight: 500;
	transition: all .3s ease 0s;
	text-decoration: none; 
}

.header__links a:hover {
	color: #132e22;
}

.header__links a.active {
  text-decoration: underline;
  font-weight: 700; 
}


.header__img {
	position: relative;
}

.header__img img {
	width: 32px;
	height: 32px;
	object-fit: cover;
}

.header__img .count {
	position: absolute;
	top: 0;
	right: 0;

	background-color: #C95103;
	border-radius: 50%;

	display: flex;
	justify-content: center;
	align-items: center;

	width: 16px;
	height: 16px;

	font-size: 10px;
	line-height: 1.2;
	font-weight: 500;
	color: #fff;
}
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 20px;
    gap: 16px;
  }

  .header h3 {
    font-size: 28px;
    text-align: center;
  }

  .header__links {
    flex-direction: column;
    row-gap: 12px;
    column-gap: 0;
    align-items: center;
  }

  .header__links a {
    font-size: 22px;
  }

  .header__img {
    margin-top: 8px;
  }
}
</style>