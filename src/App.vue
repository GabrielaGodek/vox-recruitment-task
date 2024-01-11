<script lang="ts">
import { ref } from 'vue'
// import AddBtn from './components/AddBtn.vue'
import HeaderItem from './components/HeaderItem.vue'
import TileItem from './components/TileItem.vue'
export default {
  name: 'app',
  components: {
    // AddBtn,
    TileItem,
    HeaderItem
  },

  data() {
    return {
      color: "",
      numTiles: ref(0)
    }
  },
  methods: {
    // generateNumber() {
    //   return Math.floor(Math.random() * (255 - 0) + 0)
    // },
    // generateColor() {
    //   this.color = `rgb(${this.generateNumber()}, ${this.generateNumber()}, ${this.generateNumber()})`
    // },
    addTile() {
      // this.tiles.push()
      this.numTiles++
    }
  }

}
</script>

<template>
  <main>
    <header-item></header-item>
    <div class="wrapper">
      <tile-item v-for="tile in numTiles" :key="tile" />
    </div>
    <button @click="addTile()">
      Dodaj kafelek
    </button>
  </main>
</template>

