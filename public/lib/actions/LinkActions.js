import API from "../API";

let LinkActions = {
  saveBookmark(newBookmark) {
    API.saveBookmark(newBookmark);
  },
  getAllBookmarks() {
    API.fetchAllBookmarks();
  },
  removeBookmark(id) {
    API.removeBookmark(id)
  }
};

export default LinkActions;
