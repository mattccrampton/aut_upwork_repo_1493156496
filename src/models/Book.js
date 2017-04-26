class Book {
  constructor(book_data) {
    this.book_data = book_data;
  }

  get(key) {
    return this.book_data[key];
  }

  set(key,value) {
    return this.book_data[key] = value;
  }

  getTruncatedTitle(maxLen) {
    if(this.get("title").length < maxLen){
      return this.get("title")
    } else {
      return this.get("title").substring(0, (maxLen-3)) + "...";
    }
  }

}
export default Book;
