import React from "react";
import LinkActions from "../actions/LinkActions"

class Link extends React.Component {
  deleteBookmark(){

    LinkActions.removeBookmark(this.props.link.id)
  }
  favoriteBookmark(title){
    console.log(title)
  }
  render() {
    let {title, url, safe, faved} = this.props.link;
    return (
      <div className="link">
        <a href={url}
           style={ { color: (safe ? 'green' : 'black') } }
          >{title}</a>
        <i onClick={this.deleteBookmark.bind(this)} className="fa fa-trash"></i>
        <i onClick={this.favoriteBookmark.bind(title)} className="fa fa-heart"></i>
      </div>
    );
  }
}

export default Link;
