<template>
  <div class="city-name">
    <i class="fa-solid fa-location-dot"></i>
    <p>{{ name }}, {{ country }}</p>
  </div>
  <div class="city-weather">
    <div class="city-weather__main">
      <p class="city-weather__main-temp">{{ temp.toFixed() }}&deg;C</p>
      <div class="city-weather__main-status">
        <div class="status-item">
          <i class="fa-solid fa-water"></i>
          <p>{{ humidity }}%</p>
        </div>
        <div class="status-item">
          <i class="fa-solid fa-wind"></i>
          <p>{{ windSpeed }}m/s</p>
        </div>
        <div class="status-item">
          <i class="fa-regular fa-eye"></i>
          <p>{{ (visibility / 1000).toFixed(2) }}km</p>
        </div>
        <div class="status-item">
          <i class="fa-solid fa-compass"></i>
          <p>{{ pressure }}hPa</p>
        </div>
      </div>
    </div>
    <div class="city-weather__less">
      <!--      <div v-html="weatherType(weather)"></div>-->
      <img class="city-weather__less-img" src="../assets/clouds.png" alt="">
      <p>{{ capitalizeFirstLetter(description) }}</p>
      <p>Feels like {{ feelsLike.toFixed() }}&deg;C</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { weatherType, capitalizeFirstLetter } from '@/utils';

export default defineComponent({
  name: 'CityItem',
  methods: { weatherType, capitalizeFirstLetter },
  props: {
    name: String,
    country: String,
    temp: Number,
    weather: String,
    description: String,
    feelsLike: Number,
    humidity: Number,
    visibility: Number,
    windSpeed: Number,
    pressure: Number,
  },
});
</script>

<style lang="scss" scoped>
.city-name {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;

  i {
    font-size: 30px;
  }
}

.city-weather {
  display: flex;

  &__main {
    width: 60%;

    &-temp {
      font-size: 100px;
      font-weight: 700;
    }

    &-status {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      row-gap: 15px;

      .status-item {
        display: flex;
        align-items: center;
        gap: 15px;
        font-size: 24px;
        font-weight: 700;
        width: 150px;
      }
    }
  }

  &__less {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin-top: -100px;
    font-size: 22px;
    font-weight: 700;

    &-img {
      width: 250px;
    }
  }
}
</style>