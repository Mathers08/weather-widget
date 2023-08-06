<template>
  <main class="main">
    <div v-if="cities.length" class="main__list">
      <div :key="city.id" v-for="city in cities" class="main__list-item">
        <city-item v-bind="city" />
      </div>
    </div>
    <div v-else class="main__empty">
      <div class="main__empty-info">
        <i class="fa-solid fa-city"></i>
        <p>You have not added any cities yet</p>
      </div>
    </div>
    <div class="main__add">
      <input v-model="cityValue" type="text" placeholder="Add your first city...">
      <button @click="addCity(cityValue)">Add City</button>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import CityItem from '@/components/CityItem.vue';

export default defineComponent({
  name: 'CityList',
  components: { CityItem },
  props: {
    cities: {
      type: Array,
      required: true
    },
    addCity: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      cityValue: 'London'
    };
  }
});
</script>

<style lang="scss" scoped>
.main {
  &__list {
    margin: 40px;

    &-item {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-bottom: 35px;
    }

  }

  &__empty {
    margin: 80px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    &-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      color: #f5f5f5;

      i {
        font-size: 150px;
      }

      p {
        font-size: 20px;
      }
    }

  }

  &__add {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    input {
      width: 255px;
      padding: 13px 15px;
      border-radius: 20px;
      border: none;
      outline: none;
      font-size: 14px;
      background-color: #f5f5f5;
      color: #6e6d6d;
      letter-spacing: .7px;
    }

    button {
      padding: 12px 15px;
      border-radius: 25px;
      border: none;
      color: #fff;
      background-color: #1d50ce;
      cursor: pointer;

      &:hover {
        opacity: .85;
      }
    }
  }
}
</style>