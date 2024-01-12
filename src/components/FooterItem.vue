<template>
    <footer>
        <button @click="$emit('numOfTiles', 1)">
            Dodaj kafelek
        </button>
    </footer>
</template>

<script land="ts">
import { ref } from 'vue'
export default {
    name: 'FooterItem',
}

</script>
