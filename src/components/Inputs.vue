<template>
  <div>
    <label>Ingrese texto</label>
    <input class="form-control" type="text" id="text" name="text" v-model="text">
    {{ textLength }} caracteres
    <br>
    <p><b>1) Codificado:</b> {{ text | toLowerCase | encoded }}</p>
    <p><b>2) Mayúscula:</b> {{ text | toUpperCase }}</p>
    <p><b>3) Minúscula:</b> {{ text | toLowerCase }}</p>
    <p><b>4) Minúsculas y mayúsculas intercaladas, empezando por mayúscula:</b>
      {{ text | toLowerCase | interspersedUpper }}</p>
    <p><b>5) Minúsculas y mayúsculas intercaladas, empezando por minúscula:</b>
      {{ text | toLowerCase | interspersedLower }}</p>
    <br>
    <p><b>Respuestas:</b></p>
    <ol>
      <li>b</li>
      <li>b</li>
      <li>c</li>
      <li>b</li>
      <li>b,c</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Inputs",
  data() {
    return {
      text: ''
    }
  },
  computed: {
    textLength() {
      return this.text.length
    }
  }
}
</script>

<style scoped>
div {
  margin-left: 1rem;
}

input {
  margin-bottom: 1rem;
  width: 50%;
}
</style>