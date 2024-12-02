<template>
  <div class="wrapper">
    <Header />
    <section class="main">
      <img class="main__image" src="@/assets/images/content.png" alt="content" />
      <img class="main__overlay" src="@/assets/images/content-overlay.png" alt="content overlay" />
    </section>

    <h2 class="section-title">Новинки</h2>
    <section class="products">
      <div v-if="loading || error" class="empty-cart">
        <div v-if="loading" class="loader"></div>
        <p v-else-if="error" class="error-message">
          Извините, произошла ошибка при загрузке товаров. Пожалуйста, попробуйте позже.
        </p>
      </div>

      <Product 
        v-for="product in products" 
        :key="product.id" 
        :product="product"
      />
    </section>

    <Footer />
  </div>
</template>



<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Product from '@/components/Product.vue';
import { IProduct } from '../interfaces/product.interface';

export default defineComponent({
  name: 'HomeView',
  components: { Header, Product, Footer },
  
  setup() {
    const products = ref<IProduct[]>([]);
    const loading = ref(true);
    const error = ref(false);

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Ошибка сети');
        const data: IProduct[] = await response.json();
        products.value = data;
        loading.value = false;
      } catch (err) {
        console.error('Ошибка при загрузке продуктов:', err);
        error.value = true;
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      products,
      loading,
      error,
    };
  }
});
</script>
<style scoped>
.wrapper {
  padding: 24px 40px;
}

.main {
  max-width: 1200px;
  max-height: 573px;
  position: relative;
  margin: 0 auto;
  margin-top: 12px;
  margin-bottom: 84px;
}

.main__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main__overlay {
  position: absolute;
  bottom: 0;
  right: 35px;
}

.section-title {
  font-size: 48px;
  line-height: 1.15;
  color: #275742;
  font-weight: 500;
  text-align: center;
  margin-bottom: 40px;
}

.products {
  margin-top: 40px;
  display: grid;
  column-gap: 30px;
  row-gap: 32px;
  grid-template-columns: repeat(3, 380px);
  justify-content: center;
  margin-bottom: 100px;
  align-items: center;
  text-align: center;
  position: relative; 
  
}
.empty-cart {
  height: 300px;
  transition: opacity 0.3s ease-out;
  opacity: 1;
}

.empty-cart[style*="display: none"] {
  opacity: 0;
}

 .loader,
.error-message {
  position: absolute;
  top: 50%;
  left: 47%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: #275742;
  margin: 0;
  display: inline-block;
  text-align: center;
}
.loader {
  width: 60px;
  height: 60px;
  border: 6px solid #275742;
  border-top: 6px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}



@media (max-width: 768px) {
  .main {
display: none;
  }


  .products {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;
  }

  .section-title {
    font-size: 36px;
    margin: 20px 0;
  }

  .loader {
    left: 40%;
  }
}
</style>
