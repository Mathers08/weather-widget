<template>
  <div class="container">
    <site-header />
    <city-list :cities="cities" :addCity="addCity" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { City } from "@/types/City";
import CityList from "@/components/CityList.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import axios from 'axios';

export default defineComponent({
  name: 'App',
  components: { CityList, SiteHeader },
  data() {
    return {
      API_URL: process.env.VUE_APP_API_URL,
      API_KEY: process.env.VUE_APP_API_KEY,
      cities: [] as City[],
    };
  },

  methods: {
    async addCity(city: string) {
      const result = await axios.get(this.API_URL + city + `&appid=${this.API_KEY}`);
      const newCity: City = {
        id: result.data.id,
        name: result.data.name,
        country: result.data.sys.country,
        temp: result.data.main.temp,
        weather: result.data.weather[0].main,
        description: result.data.weather[0].description,
        feelsLike: result.data.main.feels_like,
        humidity: result.data.main.humidity,
        visibility: result.data.visibility,
        windSpeed: result.data.wind.speed,
        pressure: result.data.main.pressure,
      };
      this.cities.push(newCity);
    }
  },
});
</script>

<style lang="scss">
.container {
  padding: 30px;
  background: linear-gradient(rgba(65, 61, 234, 1), rgba(155, 153, 239, 0.5781));
  border-radius: 25px;
  height: calc(100vh - 80px);
  overflow: auto;

  i {
    font-size: 40px;
  }
}
</style>
