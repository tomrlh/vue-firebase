const app = Vue.createApp({
  data() {
    return {
      url: "http://www.thenetninja.co.uk",
      showBooks: true,
      books: [
        {
          id: 1,
          title: "Book 1",
          author: "Brandon Sanderson",
          age: 45,
          img: "https://picsum.photos/id/1/100/100",
          isFav: false,
        },
        {
          id: 2,
          title: "Book 2",
          author: "Brandon Sanderson",
          age: 45,
          img: "https://picsum.photos/id/2/100/100",
          isFav: false,
        },
        {
          id: 3,
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
    toggleIsFav(bookId) {
      console.log(bookId);
      this.books.forEach((book) => {
        if (book.id === bookId) {
          book.isFav = !book.isFav;
        }
      });
    },
  },
});

app.mount("#app");

// Lesson 15: Challenge - Add to Favs
// - attach a click event to each li tag (for each book)
// - when a user clicks an li, toggle the 'isFav' property of that book
