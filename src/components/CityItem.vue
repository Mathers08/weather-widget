<template>
  <div class="city-name">
    <i v-if="!settingsFlag" class="fa-solid fa-location-dot"></i>
    <i v-else class="fa-solid fa-bars"></i>
    <p>{{ name }}, {{ country }}</p>
    <i v-if="settingsFlag" class="fa-solid fa-trash" @click="removeCity(id)"></i>
  </div>
  <div v-if="!settingsFlag" class="city-weather">
    <div class="city-weather__main">
      <p class="city-weather__main-temp">{{ temp > 0 ? `+${temp.toFixed()}` : temp.toFixed() }}&deg;C</p>
      <div class="city-weather__main-status">
        <div class="status-item">
          <i class="fa-solid fa-water" title="Humidity"></i>
          <p>{{ humidity }}%</p>
        </div>
        <div class="status-item">
          <i class="fa-solid fa-wind" title="Wind Speed"></i>
          <p>{{ windSpeed }}m/s</p>
        </div>
        <div class="status-item">
          <i class="fa-regular fa-eye" title="Visibility"></i>
          <p>{{ (visibility / 1000).toFixed(2) }}km</p>
        </div>
        <div class="status-item">
          <i class="fa-solid fa-compass" title="Pressure"></i>
          <p>{{ pressure }}hPa</p>
        </div>
      </div>
    </div>
    <div class="city-weather__less">
      <img :src="`https://openweathermap.org/img/wn/${icon}@2x.png`" alt="">
      <p>{{ capitalizeFirstLetter(description) }}</p>
      <p>Feels like {{ feelsLike.toFixed() }}&deg;C</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'city-item',
  methods: {
    capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  },
  props: {
    id: Number,
    name: String,
    country: String,
    temp: Number,
    weather: String,
    description: String,
    icon: String,
    feelsLike: Number,
    humidity: Number,
    visibility: Number,
    windSpeed: Number,
    pressure: Number,
    settingsFlag: Boolean,
    removeCity: Function
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

  .fa-bars {
    cursor: pointer;
  }

  .fa-trash {
    margin-left: auto;
    cursor: pointer;
  }
}

.city-weather {
  display: flex;

  &__main {
    width: 60%;

    @media screen and (max-width: 866px) {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &-temp {
      font-size: clamp(30px, 8vw, 80px);
      font-weight: 700;
    }

    &-status {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      row-gap: 15px;

      @media screen and (max-width: 932px) {
        column-gap: 0;
      }

      @media screen and (max-width: 866px) {
        gap: 5px;
      }

      .status-item {
        display: flex;
        align-items: center;
        gap: 15px;
        font-size: clamp(14px, 3vw, 22px);
        font-weight: 700;
        width: 150px;

        i {
          font-size: clamp(14px, 3vw, 22px);
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

    @media screen and (max-width: 932px) {
      justify-content: center;
    }
    @media screen and (max-width: 600px) {
      justify-content: end;
    }
    @media screen and (max-width: 500px) {
      margin-left: 30px;
    }
    @media screen and (max-width: 411px) {
      justify-content: center;
      margin-top: -50px;
    }

    img {
      width: clamp(100px, 30vw, 200px);
      margin-bottom: -20px;
    }

    p {
      font-size: clamp(14px, 3vw, 18px);
      text-align: center;
    }
  }
}
</style>