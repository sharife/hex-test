import React from "react";
import { List } from 'immutable';

import Jumbotron from "./components/jumbotron";

const MediaBlock = ({heading, text, imageUrl, reverse}) => {
  const imageContainerClassName = reverse
    ? "ph3-m w-50-m"
    : "ph3-m w-50-m order-last-m";
  return <div className="flex-m mhn3-m mb4">
    <div className={imageContainerClassName}>
      <img src={imageUrl} alt="" className="db mb2" />
    </div>
    <div className="ph3-m w-50-m">
      <h3 className="f3 b lh-title mb1">{heading}</h3>
      <p>{text}</p>
    </div>
  </div>;
};

export default class AboutPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }
    
    const entryValues = entry.getIn(["data", "values"]);
    const values = entryValues ? entryValues.toJS() : [];
    
    return <div>
      <Jumbotron title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])} intro={entry.getIn(["data", "intro"])} />
      
      <div className="ph3 mw7 center">
        <div className="w-40-l ph2-l">
          <h2 className="f2 b lh-title mb2 tc">{entry.getIn(["data", "process", "heading"])}</h2>

          <p className="mb4 mw6 center tc">{entry.getIn(["data", "process", "text"])}</p>
        </div>
      </div>

      <div className="flex-ns mhn2-ns mb3 mw6 center">
        {(entry.getIn(["data", "icons"]) || []).map((icon, i) => <div className="ph3-ns w-50-ns" key={i}>
          <img src={getAsset(icon.get("image"))} alt="" className="center db mb3" style={{width: "30%"}}/>
          <p className="b tc mb1">{icon.get("heading")}</p>
          <p className="tc f6">{icon.get("text")}</p>
        </div>)}
      </div>

      <div className="pv2 ph3 mw6 center">
        <div className="flex-m mhn2-l tr">
          <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "pubs", "heading"])}</h2>
          
          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {(entry.getIn(["data", "pubs", "items"]) || []).map((paper, index) => <div className="ph2-ns mb4" key={index}>
              <p className="b mb1">{paper.get("title")}</p>
              <p className="f6 i mb1">{paper.get("pub")}</p>
              <p className="f6 mb1">{paper.get("description")}</p>
            </div>)}
          </div>
        </div>
      </div>

      <div className="pv2 ph3 mw6 center">
        <div className="flex-m mhn2-l tc">
          <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "partners", "heading"])}</h2>

          <p className="mw8">{entry.getIn(["data", "partners", "text1"])}</p>
          <p className="mw8">{entry.getIn(["data", "partners", "text2"])}</p>
        </div>
      </div>



    </div>;
  }
}
