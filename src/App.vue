<template>
  <div class="container">
    <site-header
        :settingsFlag="settingsFlag"
        :toggleSettings="toggleSettings"
    />
    <city-list
        :cities="cities"
        :settingsFlag="settingsFlag"
        v-model:cityValue="cityValue"
        :addCity="addCity"
        :removeCity="removeCity"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { City } from "@/types/City";
import CityList from "@/components/CityList.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import axios from 'axios';

export default defineComponent({
  name: 'App',
  components: { CityList, SiteHeader },
  setup() {
    const API_URL = process.env.VUE_APP_API_URL;
    const API_KEY = process.env.VUE_APP_API_KEY;
    const cities = ref(JSON.parse(localStorage.getItem('cities') || '[]')) as Ref<City[]>;
    const settingsFlag = ref(false);
    const cityValue = ref('');

    const addCity = async (city: string) => {
      try {
        const result = await axios.get(API_URL + city + `&appid=${API_KEY}`);
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
        if (cities.value.some((obj: City) => obj.id === newCity.id)) {
          alert('Location already exist!');
        } else {
          cities.value = [...cities.value, newCity];
          localStorage.setItem('cities', JSON.stringify(cities.value));
          cityValue.value = '';
        }
      } catch (e) {
        alert('Location does not exist!');
        console.log(e);
      }
    };

    const removeCity = (id: number) => {
      cities.value = cities.value.filter((c: City) => c.id !== id);
      localStorage.setItem('cities', JSON.stringify(cities.value));
      if (cities.value.length === 0) {
        settingsFlag.value = false;
      }
    };

    const toggleSettings = () => settingsFlag.value = !settingsFlag.value;

    return {
      cities,
      settingsFlag,
      cityValue,
      addCity,
      removeCity,
      toggleSettings
    };
  }
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
