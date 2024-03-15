<script setup>
// Extracting named exports from the Vue library
import {computed, ref} from "vue";
import Company from "./Company";
const funCount = ref(0);
console.log("What is funCount?", funCount);
const burgersNeeded = computed( () => {
  return funCount.value*3;
})
const currentTextValue = ref("");
const vipList = ref([
  "Henry",
  "Penelope",
  "Yolanda",
]);
const currentVipName = ref("");
</script>

<template>
  <header>
    <div class="wrapper">
    <br>
    <br>
    <br>
      <h1>WARNING:</h1>
      <h1>Watch out for goats!</h1>
    </div>
  </header>

  <!-- class="container" attribute on main to have semi-transparent background coloring-->
  <main>
    <br>
    <br>
    <br>
    <div class="container">
      <h2>We have {{ funCount }} funs!</h2>
      <h2>(Which totally makes sense.)</h2>
      <div>
          <button
          @click="funCount += 1"
          >Click Me To Add Some Fun!!!</button>
      </div>
      <br>
      <h4>Based off how much fun we're having, we're going to need {{ burgersNeeded }} burgers up in here....</h4>
  </div>
  <div class="container">
    <div class="block-buttons">
      <!-- V-model is bi-directional data binding -->
      <input type="text" v-model="currentTextValue">
      <button @click="currentTextValue = 'burgers';">Set to "burgers"</button>
      <button @click="currentTextValue = 'pretzels';">Set to "pretzels"</button>
      <button @click="currentTextValue = 'macaronis';">Set to "macaronis"</button>
      <button @click="currentTextValue = 'spinach leaves';">Set to "spinach leaves"</button>
    </div>
      <!-- Read binding -->
      <h3>What is currentTextValue? "{{ currentTextValue }}"</h3>
  </div>
  <div class="container">
    <h2>
      This is a section about VIPs...
    </h2>
    <ul>
      <!-- Iterates over each dude in vipList with v-for -->
      <li v-for="dude in vipList" :key="dude">{{ dude }}</li>
    </ul>
    <div>
      <input type="text" v-model="currentVipName">
      <button @click="vipList.push(currentVipName)">Add VIP!</button>
    </div>
  </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.block-buttons button{
  display:block;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
