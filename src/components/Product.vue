<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ProductModal from '@/components/Modal.vue';
import { useModal } from 'vue-final-modal'
import { IProduct } from '../interfaces/product.interface';

export default defineComponent({
	name: 'Product',
	props: {
		product: {
			type: Object as PropType<IProduct>,
			required: true,
		},
	},
	components: {
		ProductModal,
	},
	setup(props) {
		const { open, close } = useModal({
			component: ProductModal,
			attrs: {
				title: 'Hello World!',
				product: props.product,
				onConfirm() {
					close()
				}
			},
			slots: {
				default: '<p>The content of the modal</p>',
			},
		})

		return { open }
	}
});
</script>

<template>
	<div class="product">
		<img :src="product.image" alt="example image">
		<p>{{ product.title }}</p>
		<button @click="open">Купить</button>
	</div>
</template>

<style scoped>
.product{
	max-height: 480px;
	max-width: 380px;
}

.product img {
	width: 380px;
	height: 380px;
	object-fit: cover;
	margin-bottom: 16px;
}

.product p {
	font-size: 24px;
	line-height: 1.15;
	font-weight: 500;
	color: #275742;
	margin: 0;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}

.product button {
	margin-top: 16px;
	padding: 12px 0;

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 20px;
	line-height: 1;
	font-weight: 500;
	color: #275742;

	border: 2px solid #275742;
	border-radius: 2px;

	transition: all .3s ease 0s;

	background-color: #fff;
	width: 100%;
	height: 44px;
	cursor: pointer;
}

.product button:hover {
	background-color: #275742;
	color: #fff;
}
@media (max-width: 768px) {
  .product {
    max-width: 90%;
    margin: 16px auto;
  }

  .product img {
    max-width: 100%; 
  }

  .product p {
    font-size: 20px;
    white-space: normal;
    text-align: center;
  }

  .product button {
    font-size: 18px; 
    padding: 10px 0;
    max-width: 100%; 
  }
}
</style>