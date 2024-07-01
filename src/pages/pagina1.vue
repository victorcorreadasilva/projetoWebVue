<template>
  <p id="teste">Página 1</p>
</template>
<style>
#teste {
  color: red;
}
</style>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

setTimeout(() => {
  let elemento = document.getElementById('teste')

  if (elemento) {
    elemento.addEventListener('click', () => {
      router.push('./2.Protocolos_Cardiologia_completo')
    })
  }
}, 500)
</script>
