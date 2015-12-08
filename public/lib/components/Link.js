import React from "react";
import LinkActions from "../actions/LinkActions"

class Link extends React.Component {
  deleteBookmark(){
    LinkActions.removeBookmark(this.props.link.id)
  }
  favoriteBookmark(){
    LinkActions.favoriteBookmark(this.props.link.id)
  }
  render() {
    let {title, url, safe, faved} = this.props.link;
    return (
      <div className="link">
        <a href={url}
           style={ { color: (safe ? 'green' : 'blue')} }
          >{title}</a>
        <i onClick={this.deleteBookmark.bind(this)} className="fa fa-trash"></i>
        <i onClick={this.favoriteBookmark.bind(this)} className="fa fa-heart"></i>
      </div>
    );
  }
}

export default Link;
