import React from "react";
import format from "date-fns/format";

export default class NewsPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <div className="mw6 center ph3 pv4">
      <h1 className="f2 lh-title b mb3 tc">{ entry.getIn(["data", "title"])}</h1>
      <div className="flex justify-between">
        <div style={{
          width: "80px",
          height: "20px"
        }}></div>
        <p className="tc center">{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</p>
      </div>
      <div className="cms mw6">
        <p>{ entry.getIn(["data", "description"]) }</p>
        { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
      </div>
    </div>;
  }
}
