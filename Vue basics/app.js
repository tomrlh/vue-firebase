const app = Vue.createApp({
  data() {
    return {
      url: "http://www.thenetninja.co.uk",
      showBooks: true,
      books: [
        {
          title: "Book 1",
          author: "Brandon Sanderson",
          age: 45,
          img: "https://picsum.photos/id/1/100/100",
          isFav: false,
        },
        {
          title: "Book 2",
          author: "Brandon Sanderson",
          age: 45,
          img: "https://picsum.photos/id/2/100/100",
          isFav: false,
        },
        {
          title: "Book 3",
          author: "Brandon Sanderson",
          age: 45,
          img: "https://picsum.photos/id/3/100/100",
          isFav: true,
        },
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
