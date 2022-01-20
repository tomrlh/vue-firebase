<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal
      :header="header"
      :text="text"
      theme="sale-not-matching"
      @close="toggleModal"
    >
      <template v-slot:links>
        <a href="#">sign up now</a>
        <br />
        <a href="#">more info</a>
      </template>

      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </Modal>
  </div>

  <div v-if="showModalTwo">
    <Modal
      :header="header"
      :text="text"
      theme="sale-not-matching"
      @close="toggleModalTwo"
    >
      <template v-slot:links>
        <p>content of second modal</p>
      </template>

      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </Modal>
  </div>

  <button @click.alt="toggleModal">open modal (alt)</button>
  <br />

  <button @click="toggleModalTwo">open second modal</button>
</template>

<script>
// challenge
// - create an extra button to open a different modal
// - use the same modal component but pass in a different template (slot)
// - use a different method (e.g. toggleModalTwo) and data (e.g. showModalTwo)

import Modal from "./components/Modal";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My First Vue App :)",
      header: "Modal Header",
      text: "Text description here",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
