<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { useCartStore } from '@/store/cart';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeView',
  components: { Header, Footer },
  setup() {
    const cartStore = useCartStore();
    const router = useRouter();

    const removeItem = (id: number) => {
      cartStore.removeFromCart(id);
    }

    const goToHome = () => {
      router.push('/'); 
    }

    return { cartStore, removeItem, goToHome };
  }
});
</script>
<template>
	<div class="wrapper">
	  <Header />
	  <h1>Корзина</h1>
 
	  <div v-if="cartStore.items.length === 0" class="empty-cart">
		 <p>Ваша корзина пуста. Добавьте товары в корзину!</p>
	  </div>
 
	  <table class="info" v-if="cartStore.items.length">
		 <thead>
			<tr>
			  <th>Товар</th>
			  <th>Цена, руб</th>
			  <th>Кол-во</th>
			  <th>Сумма, руб</th>
			  <th>Удалить</th>
			</tr>
		 </thead>
		 <tbody>
			<tr v-for="item in cartStore.items" :key="item.id">
			  <td>{{ item.title }}</td>
			  <td>{{ item.price }}</td>
			  <td>{{ item.quantity }}</td>
			  <td>{{ (item.price * item.quantity).toFixed(2) }}</td>
			  <td>
				 <img @click="removeItem(item.id)" src="@/assets/images/remove.svg" alt="remove icon" />
			  </td>
			</tr>
			<tr>
			  <td>Итог</td>
			  <td></td>
			  <td>{{ cartStore.totalQuantity }}</td>
			  <td>{{ cartStore.totalAmount.toFixed(2) }}</td>
			  <td></td>
			</tr>
		 </tbody>
	  </table>

	  <button v-if="cartStore.items.length" class="buyAll">Плачу за всё!</button>
	  <button v-else class="buyAll" @click="goToHome">Набрать товары</button>
 
	  <Footer />
	</div>
 </template>
 
<style scoped>.wrapper {
	padding: 24px 40px;
 }
 
 h1 {
	margin: 40px 0;
	text-align: center;
	font-size: 48px;
	line-height: 1.15;
	color: #275742;
	font-weight: 500;
 }
 
 .empty-cart {
	text-align: center;
	font-size: 24px;
	color: #275742;
	margin-top: 100px;
	height: 260px;
 }
 
 .go-to-home {
	padding: 10px 20px;
	font-size: 20px;
	background-color: #275742;
	color: white;
	border: none;
	cursor: pointer;
	transition: background-color 0.3s;
 }
 
 .go-to-home:hover {
	background-color: #214436;
 }
 
 .info {
	width: 100%;
	border: 2px solid #1E4534;
	border-collapse: collapse;
	margin-bottom: 60px;
 }
 
 .info thead tr th,
 .info tbody tr td {
	font-size: 22px;
	line-height: 1.15;
	color: #275742;
	font-weight: 500;
 }
 
 .info tbody tr td {
	padding: 20px 16px;
 }
 
 .info thead tr {
	border-bottom: 2px solid #1E4534;
 }
 
 .info tbody tr img {
	cursor: pointer;
 }
 
 .info thead tr th {
	padding: 20px 16px;
 }
 
 .info tbody tr {
	border-bottom: 2px solid #1E4534;
 }
 
 .buyAll {
	width: 332px;
	height: 52px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 142px;
	background-color: #275742;
	color: #fff;
	font-size: 24px;
	line-height: 1;
	font-weight: 500;
	transition: all .3s ease 0s;
	cursor: pointer;
	margin-left: auto;
	margin-right: 0;
 }
 
 .buyAll:hover {
	background-color: #214436;
 }
 
 @media (max-width: 768px) {
	.wrapper {
	  padding: 24px 16px;
	}
 
	h1 {
	  font-size: 32px;
	}
 
	.info {
	  margin-bottom: 40px;
	  width: 100%; 
	  display: block; 
	}
 
	.info thead {
	  display: none; 
	}
 
	.info tbody tr {
	  display: block;
	  margin-bottom: 20px;
	  padding: 10px;
	  border: none;
	  border-top:2px solid #275742 ;
	}
 
	.info tbody tr td {
	  display: block;
	  text-align: center;
	  font-size: 18px;
	  padding: 8px;
	}
 
	.info tbody tr td:first-child {
	  font-weight: 600;
	}
 
	.info tbody tr td:nth-child(odd) {
	  font-weight: 500;
	}
 
	.buyAll {
	  width: 100%;
	  font-size: 20px;
	  margin: 20px 0;
	}
 
	.empty-cart {
	  font-size: 20px;
	  margin: 20px 0;
	  height: 80px;
	}
 
	.go-to-home {
	  width: 100%;
	  margin-top: 20px;
	}
 }
 
 
</style>
