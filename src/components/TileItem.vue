<template>
    <div class="tile" :style="{ backgroundColor: color }" v-if="show">
        <button @click="changeTile()">Zmień</button>
        <button @click="deleteTile()">Usuń</button>
    </div>
    <form @submit.prevent="handleChange()" v-if="handleInput">
        <label for="color">Wpisz kolor</label>
        <input type="text" name="color" v-model="colorCode">
        <input type="submit" value="Zmień">
    </form>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
    name: 'TileItem',
    props: {
        color: String
    },
    data() {
        return {
            color: ref(''),
            show: true,
            handleInput: false,
            colorCode: ''
        }
    },
    methods: {
        generateNumber() {
            return Math.floor(Math.random() * (255 - 0) + 0)
        },
        generateColor() {
            this.color = `rgb(${this.generateNumber()}, ${this.generateNumber()}, ${this.generateNumber()})`
        },
        changeTile() {
            this.handleInput = true
            this.color = this.colorCode
            console.log(this.colorCode)
        },
        deleteTile() {
            this.show = false
        },
        handleChange() {
            console.log(this.colorCode)
            if(this.isValid(this.colorCode)){
                this.color = this.colorCode
                this.handleInput = false
            }
        },
        isValid(code:string) {
            return code.includes('rgb')
        }
    },
    mounted() {
        this.generateColor()
    }
}
</script>
