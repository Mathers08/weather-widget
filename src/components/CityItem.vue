<template>
  <div class="city-name">
    <i v-if="!settingsFlag" class="fa-solid fa-location-dot"></i>
    <i v-else class="fa-solid fa-bars"></i>
    <p>{{ name }}, {{ country }}</p>
  </div>
  <div v-if="!settingsFlag" class="city-weather">
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
    settingsFlag: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.city-name {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  font-weight: 700;
  margin-left: -25px;
  color: #aefff4;
  i {
    font-size: 30px;
  }
}

.city-weather {
  display: flex;

  &__main {
    width: 60%;

    &-temp {
      font-size: 80px;
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
        font-size: 22px;
        font-weight: 700;
        width: 150px;

        i {
          font-size: 24px;
        }
      }
    }
  }

  &__less {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin-top: -80px;
    font-size: 22px;
    font-weight: 700;

    &-img {
      width: 200px;
    }

    p {
      font-size: 18px;
    }
  }
}
</style>