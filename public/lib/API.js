import {get, post, put, ajax} from "jquery";

import ServerActions from "./actions/ServerActions";

let API = {
  saveBookmark(newBookmark) {
    post("/api/links", newBookmark)
      .done(data => ServerActions.receiveOneLink(data));
  },
  fetchAllBookmarks() {
    console.log("2. In the API.fetchAllBookmarks()")
    get("/api/links").done(data => ServerActions.receiveLinks(data.links));
  },
  removeBookmark(deletedBookmark) {
    ajax({
      url: "/api/links",
      type: 'delete',
      data: {"id": deletedBookmark},
      success: function(data){
        ServerActions.receiveLinks(data.links)
      }
    })
  },
  favoriteBookmark(favedBookmark) {
    console.log(favedBookmark)
    ajax({
      url: "/api/links/fave",
      type: 'post',
      data: {"id": favedBookmark},
      success: function(data){
        ServerActions.receiveLinks(data.links)
      }
    })
  }
}

export default API;
