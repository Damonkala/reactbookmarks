import {get, post} from "jquery";

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
    // delete("/api/links", deletedBookmark)
    // .done(data => ServerActions.receiveLinks(data.links));
    $.ajax({
      url: "/api/links",
      type: 'delete',
      data: {"id": deletedBookmark},
      success: function(data){
        ServerActions.receiveLinks(data.links)
      }
    })
  }
};

export default API;
