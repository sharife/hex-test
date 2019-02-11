import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class TeamPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
      <Jumbotron title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])} />

      <div className="pv4">
        <div className="ph3 mw7 center">
          <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "intro", "heading"])}</h2>
          <p className="mb4 mw6">{entry.getIn(["data", "intro", "description"])}</p>

          <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "leaders", "heading"])}</h2>

          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {(entry.getIn(["data", "leaders", "bios"]) || []).map((founder, index) => <div className="ph2-ns w-50-ns mb4" key={index}>
              <img src={founder.get("image") && getAsset(founder.get("image"))} alt="" className="db mb3" style={{width: "240px"}}/>
              <p className="f4 b mb1">{founder.get("name")}</p>
              <p className="f6 mb1">{founder.get("title")}</p>
              <p>{founder.get("text")}</p>
            </div>)}
          </div>
        </div>
      </div>

      <div className="mw8 center">
        <div className="mw8 ph3 mb3">
          <h3 className="f3 b lh-title mb2">{entry.getIn(["data", "advisors", "heading"])}</h3>
          
          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {(entry.getIn(["data", "advisors", "items"]) || []).map((advisor, index) => <div className="ph2-ns w-33-ns mb4" key={index}>
              <p className="b mb1">{advisor.get("name")}</p>
              <p className="f6 mb1">{advisor.get("title")}</p>
            </div>)}
          </div>
        </div>
      </div>


      <div className="mw8 center">
        <div className="mw8 ph3 mb3">
          <h3 className="f3 b lh-title mb2">{entry.getIn(["data", "investors", "heading"])}</h3>
          
          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {(entry.getIn(["data", "investors", "items"]) || []).map((investor, index) => <div className="ph2-ns w-33-ns mb4" key={index}>
              <img src={investor.get("image") && getAsset(investor.get("image"))} alt="" className="db mb3" style={{width: "240px"}}/>
            </div>)}
          </div>
        </div>
      </div>

    </div>;
  }
}
