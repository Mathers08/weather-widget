<template>
  <header class="header">
    <div class="logo">
      <i class="fa-solid fa-cloud fa-xl"></i>
      <p>City Weather</p>
    </div>
    <i class="fa-solid fa-gear fa-xl"></i>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    gap: 10px;
    align-items: center;

    p {
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>