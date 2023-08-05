<template>
  <div v-if="cities.length" class="city-list">
    <div :key="city.id" v-for="city in cities" class="info">
      <i class="fa-solid fa-city"></i>
      <p>{{ city.name }}</p>
    </div>
  </div>
  <div v-else class="empty-list">
    <div class="info">
      <i class="fa-solid fa-city"></i>
      <p>You have not added any cities yet</p>
    </div>
    <input v-model="cityValue" type="text" placeholder="Add your first city...">
    <button @click="addCity(cityValue)">Add City</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CityList',
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
      cityValue: ''
    };
  }
});
</script>

<style lang="scss" scoped>
.empty-list {
  margin: 80px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  .info {
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

.city-list {
  margin: 40px;

  .info {
    display: flex;
    gap: 15px;

    i {
      font-size: 30px;
    }

    p {
      font-size: 20px;
      font-weight: 700;
    }
  }
}

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
</style>