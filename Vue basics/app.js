const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: "Book 1", author: "Brandon Sanderson", age: 45 },
        { title: "Book 2", author: "Brandon Sanderson", age: 45 },
        { title: "Book 3", author: "Brandon Sanderson", age: 45 },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle() {
      title = "something";
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) console.log(data);
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
