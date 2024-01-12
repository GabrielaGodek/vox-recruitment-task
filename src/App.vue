<script lang="ts">
import { ref } from 'vue'
import HeaderItem from '@/components/HeaderItem.vue';
import FooterItem from '@/components/FooterItem.vue';
import TileItem from '@/components/TileItem.vue';
export default {
  name: 'app',
  components: {
    TileItem,
    HeaderItem,
    FooterItem,
  },
  setup() {
    const color = ''
    let numTiles = ref(0)

    return {
      color,
      numTiles
    }
  }
}
</script>

<template>
  <header-item></header-item>
  <main>
    <div class="wrapper">
      <tile-item v-for="tile in numTiles" :key="tile" />
    </div>
  </main>
  <footer-item @numOfTiles="(i: number) => numTiles += i"></footer-item>
</template>

