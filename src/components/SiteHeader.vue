<template>
  <header class="header">
    <div class="logo">
      <i class="fa-solid fa-cloud fa-xl"></i>
      <p>City Weather</p>
    </div>
    <i class="fa-solid fa-gear fa-xl"></i>
  </header>
</template>

<script>

</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    gap: 15px;
    align-items: center;
    color: #fff;

    p {
      font-size: 26px;
      letter-spacing: .7px;
      font-weight: 700;
    }
  }
}
</style>