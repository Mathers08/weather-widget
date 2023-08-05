<template>
  <div class="container">
    <site-header />
    <!--    <EmptyList />-->
    <city-list :cities="cities" :addCity="addCity" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CityList, SiteHeader } from "@/components";
import axios from 'axios';
import { City } from "@/types/City";

const apiKey = '0cfd9b45e713356b5c256194459d602b';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

export default defineComponent({
  name: 'App',
  components: { CityList, SiteHeader },
  data() {
    return {
      cities: [] as City[],
    };
  },
  methods: {
    async addCity(city: string) {
      const result = await axios.get(apiUrl + city + `&appid=${apiKey}`);
      const newCity: City = {
        id: result.data.id,
        name: result.data.name,
      };
      this.cities.push(newCity);
    }
  },
});
</script>

<style lang="scss">
.container {
  max-width: 720px;
  margin: 50px auto;
  padding: 40px 30px;
  background: linear-gradient(rgba(65, 61, 234, 1), rgba(155, 153, 239, 0.5781));
  border-radius: 25px;

  i {
    font-size: 40px;
  }
}
</style>
