import { defineStore } from "pinia";
import { ref } from "vue";

export const useWeatherStore = defineStore("weather", () => {
  const inputFindValue = ref("");
  const weatherIcon = ref("");
  const isOpen = ref(false);
  const data = ref();
  const err = ref(false);
  async function getWeather() {
    isOpen.value = false;
    try {
      err.value = false;
      isOpen.value = false;
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputFindValue.value}&appid=apikey`
      ).then((res) => res.json());
      weatherIcon.value = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
      data.value = result;
      isOpen.value = true;
      console.log(data.value);
    } catch (error) {
      err.value = true;
    }
  }
  return { getWeather, inputFindValue, isOpen, weatherIcon, data, err };
});
