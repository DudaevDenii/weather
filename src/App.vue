<template>
  <div class="bg">
    <form class="submitting" @submit.prevent="weatherStore.getWeather">
      <input
        class="weatherInput"
        placeholder="write the name of the city"
        required
        v-model="weatherStore.inputFindValue"
      />
      <button class="btnFind">Find</button>
    </form>
    <br />
    <div v-if="weatherStore.isOpen">
      <HalfOpacity padding="20px">
        <div class="weatherContainer">
          <div>
            <div class="temp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-globe-americas"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"
                />
              </svg>
              <h2>
                {{ weatherStore.data?.name }} -
                {{ weatherStore.data?.sys.country }}
              </h2>
            </div>
            <div>
              <img :src="weatherStore.weatherIcon" alt="Weather" />
            </div>
          </div>
          <div>
            <div class="temp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-thermometer-sun"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5"
                />
                <path
                  d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1m5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0M8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5M12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5m-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708M8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5"
                />
              </svg>
              <h3>Temperature</h3>
            </div>
            <div class="temps">
              <div>Temp: {{ weatherStore.data.main.temp }}K</div>
              <div>Min: {{ weatherStore.data.main.temp_min }}K</div>
              <div>Max: {{ weatherStore.data.main.temp_max }}K</div>
              <div>Feels like: {{ weatherStore.data.main.feels_like }}K</div>
            </div>
          </div>
          <div>
            <div class="temp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-tornado"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1.125 2.45A.892.892 0 0 1 1 2c0-.26.116-.474.258-.634a1.9 1.9 0 0 1 .513-.389c.387-.21.913-.385 1.52-.525C4.514.17 6.18 0 8 0c1.821 0 3.486.17 4.709.452.607.14 1.133.314 1.52.525.193.106.374.233.513.389.141.16.258.374.258.634 0 1.011-.35 1.612-.634 2.102-.04.07-.08.137-.116.203a2.55 2.55 0 0 0-.313.809 2.938 2.938 0 0 0-.011.891.5.5 0 0 1 .428.849c-.06.06-.133.126-.215.195.204 1.116.088 1.99-.3 2.711-.453.84-1.231 1.383-2.02 1.856-.204.123-.412.243-.62.364-1.444.832-2.928 1.689-3.735 3.706a.5.5 0 0 1-.748.226l-.001-.001-.002-.001-.004-.003-.01-.008a2.142 2.142 0 0 1-.147-.115 4.095 4.095 0 0 1-1.179-1.656 3.786 3.786 0 0 1-.247-1.296A.498.498 0 0 1 5 12.5v-.018a.62.62 0 0 1 .008-.079.728.728 0 0 1 .188-.386c.09-.489.272-1.014.573-1.574a.5.5 0 0 1 .073-.918 3.29 3.29 0 0 1 .617-.144l.15-.193c.285-.356.404-.639.437-.861a.948.948 0 0 0-.122-.619c-.249-.455-.815-.903-1.613-1.43-.193-.127-.398-.258-.609-.394l-.119-.076a12.307 12.307 0 0 1-1.241-.334.5.5 0 0 1-.285-.707l-.23-.18C2.117 4.01 1.463 3.32 1.125 2.45m1.973 1.051c.113.104.233.207.358.308.472.381.99.722 1.515 1.06 1.54.317 3.632.5 5.43.14a.5.5 0 0 1 .197.981c-1.216.244-2.537.26-3.759.157.399.326.744.682.963 1.081.203.373.302.79.233 1.247-.05.33-.182.657-.39.985.075.017.148.035.22.053l.006.002c.481.12.863.213 1.47.01a.5.5 0 1 1 .317.95c-.888.295-1.505.141-2.023.012l-.006-.002a3.894 3.894 0 0 0-.644-.123c-.37.55-.598 1.05-.726 1.497.142.045.296.11.465.194a.5.5 0 1 1-.448.894 3.11 3.11 0 0 0-.148-.07c.012.345.084.643.18.895.14.369.342.666.528.886.992-1.903 2.583-2.814 3.885-3.56.203-.116.399-.228.584-.34.775-.464 1.34-.89 1.653-1.472.212-.393.33-.9.26-1.617A6.74 6.74 0 0 1 10 8.5a.5.5 0 0 1 0-1 5.76 5.76 0 0 0 3.017-.872.515.515 0 0 1-.007-.03c-.135-.673-.14-1.207-.056-1.665.084-.46.253-.81.421-1.113l.131-.23c.065-.112.126-.22.182-.327-.29.107-.62.202-.98.285C11.487 3.83 9.822 4 8 4c-1.821 0-3.486-.17-4.709-.452-.065-.015-.13-.03-.193-.047zM13.964 2a1.12 1.12 0 0 0-.214-.145c-.272-.148-.697-.297-1.266-.428C11.354 1.166 9.769 1 8 1c-1.769 0-3.354.166-4.484.427-.569.13-.994.28-1.266.428A1.12 1.12 0 0 0 2.036 2c.04.038.109.087.214.145.272.148.697.297 1.266.428C4.646 2.834 6.231 3 8 3c1.769 0 3.354-.166 4.484-.427.569-.13.994-.28 1.266-.428A1.12 1.12 0 0 0 13.964 2z"
                />
              </svg>
              <h3>Wind</h3>
            </div>
            <div class="temps">
              <div>Speed: {{ weatherStore.data.wind.speed }}m/s</div>
            </div>
          </div>
          <div>
            <div class="temp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-cloud"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
                />
              </svg>
              <h3>Clouds</h3>
            </div>
            <div class="temps">
              <div>All: {{ weatherStore.data.clouds.all }}%</div>
            </div>
          </div>
          <div>
            <div class="temp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                />
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                />
              </svg>
              <h3>Visibility</h3>
            </div>
            <div class="temps">
              <div>visibility: {{ weatherStore.data.visibility }}m</div>
            </div>
          </div>
        </div>
      </HalfOpacity>
    </div>
    <HalfOpacity v-if="weatherStore.err" padding="20px">
      <h1>Enter the correct city name</h1>
    </HalfOpacity>
  </div>
</template>

<script setup lang="ts">
import HalfOpacity from "./components/HalfOpacity.vue";
import { useWeatherStore } from "./store/weather";
const weatherStore = useWeatherStore();
</script>

<style>
.bg {
  background-image: url("./assets/sunset.jpeg");
  min-height: 100vh;
  min-width: 100vw;
  background-size: cover;
  padding: 30px;
}
.weatherInput {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  font-size: 24px;
}
.weatherInput:focus {
  outline: none;
}
.submitting {
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 20px;
}
.btnFind {
  background-color: rgb(255, 85, 0);
  border: 0;
  border-radius: 10px;
  color: #fff;
  font-size: 24px;
  transition: 0.2s;
  padding: 5px 10px;
}
.btnFind:hover {
  background-color: rgb(255, 104, 28);
}
.weatherContainer {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}
.temp {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.temps {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
