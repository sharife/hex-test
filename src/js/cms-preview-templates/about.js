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
          <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "platform", "heading"])}</h2>

          <p className="mw8">{entry.getIn(["data", "platform", "text1"])}</p>
          <p className="mw8">{entry.getIn(["data", "platform", "text2"])}</p>
        </div>
      </div>


      <div className="bg-off-white pv4">
        <div className="mw7 center ph3 pt4">
          {values.map(({text, heading, imageUrl}, i) =>
            <MediaBlock key={i} text={text} heading={heading} imageUrl={imageUrl} reverse={i % 2 === 0} />
          )}
        </div>
      </div>

    </div>;
  }
}
