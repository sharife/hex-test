import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));
    let jobsimage = getAsset(entry.getIn(["data", "jobs", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    // if (image && !image.fileObj) {
    //     image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    // }

    return <div>
        <Jumbotron image={image} title={entry.getIn(["data", "title"])}/>

        <div className="bg-off-white pv4">
          <div className="ph3 mw7 center tc">
            <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "intro", "heading"])}</h2>
            <p className="mb4 mw6 center">{entry.getIn(["data", "intro", "text"])}</p>

            <div className="flex-ns mhn2-ns mb3">
              {(entry.getIn(["data", "icons"]) || []).map((icon, i) => <div className="ph3-ns w-33-ns" key={i}>
                <img src={getAsset(icon.get("image"))} alt="" className="center db mb3" style={{width: "30%"}}/>
                <p className="b tc mb1">{icon.get("heading")}</p>
                <p className="tc f6">{icon.get("text")}</p>
              </div>)}
            </div>

          </div>
        </div>

        <div className="pv4">
          <div className="ph3 mw7 center">

            <div className="flex-l mhn2-l tc">
              <div className="w-40-l ph2-l">
                <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "jobs", "heading"])}</h2>

                <p className="center">{entry.getIn(["data", "jobs", "text"])}</p>
              </div>

              <div className="w-60-l ph2-l">
                <img src={jobsimage} alt="" className="mb3"/>
              </div>
            </div>

          </div>
        </div>


    </div>
  }
}