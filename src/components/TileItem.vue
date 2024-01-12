<template>
    <div class="tile" :style="{ backgroundColor: color }" v-if="show">
        <div class="tile__buttons" v-if="!handleInput">
            <button class="tile__button tile__button--change" @click="changeTile">Zmień</button>
            <button class="tile__button tile__button--delete" @click="deleteTile">Usuń</button>
        </div>
        <form class="tile__form" @submit.prevent="handleChange" v-else>
            <label class="tile__label" for="color">Wpisz kolor</label>
            <input class="tile__input" type="text" name="color" v-model="colorCode" />
            <div class="tile__form__error-msg">{{ errorMsg }}</div>
            <input class="tile__submit" type="submit" value="Zmień" />
        </form>
    </div>

</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { isValid } from '../includes/validation.ts'

export default {
    name: 'TileItem',
    props: {
        color: String
    },
    setup() {
        const color = ref('')
        const show = ref(true)
        const handleInput = ref(false)
        const colorCode = ref('')
        const errorMsg = ref('')

        function generateNumber() {
            return Math.floor(Math.random() * (255 - 0) + 0)
        }

        function generateColor() {
            color.value = `rgb(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`
        }

        function changeTile() {
            handleInput.value = true
            color.value = colorCode.value
        }

        function deleteTile() {
            show.value = false
        }

        function handleChange() {
            errorMsg.value = ''
            if (isValid(colorCode.value)) {
                color.value = colorCode.value
                handleInput.value = false
            } else {
                errorMsg.value = 'Nieprawidłowy kod koloru'
            }
        }

        onMounted(generateColor)

        return {
            color,
            show,
            handleInput,
            errorMsg,
            colorCode,
            changeTile,
            deleteTile,
            handleChange
        }
    }
}
</script>
