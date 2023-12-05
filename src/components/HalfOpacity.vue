<template>
  <div
    class="card"
    :style="{
      width: props.width,
      height: props.height,
      padding: props.padding,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  width: String,
  padding: String,
  height: String,
});
</script>

<style scoped>
.card {
  background-color: rgba(225, 225, 225, 0.5);
  border-radius: 10px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
}
</style>
