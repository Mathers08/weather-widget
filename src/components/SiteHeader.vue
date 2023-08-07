<template>
  <header>
    <div v-if="!settingsFlag" class="header">
      <div class="logo">
        <i class="fa-solid fa-cloud fa-xl"></i>
        <h1 class="header__text">City Weather</h1>
      </div>
      <i class="fa-solid fa-gear fa-xl" @click="toggleSettings"></i>
    </div>
    <div v-else class="header">
      <h1 class="header__text">Settings</h1>
      <i class="fa-solid fa-close fa-xl" @click="toggleSettings"></i>
    </div>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'site-header',
  props: {
    settingsFlag: {
      type: Boolean,
      required: true
    },
    toggleSettings: {
      type: Function,
      required: true
    }
  },
});
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
  }

  i {
    cursor: pointer;
  }

  &__text {
    font-size: clamp(20px, 4vw, 26px);
    letter-spacing: .7px;
    font-weight: 700;

    @media screen and (max-width: 425px) {
      letter-spacing: 0;
    }
  }
}
</style>