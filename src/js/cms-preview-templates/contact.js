import React from "react";

export default class ContactPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    let mapimage = getAsset(entry.getIn(["data", "map"]));

    return <div className="ph3 mw7 center">
        <div className="w-40-l ph2-l">
          <h2 className="f2 b lh-title mb2 tc">{entry.getIn(["data", "title"])}</h2>

          <p className="mb4 mw6 center tc">{entry.getIn(["data", "intro"])}</p>

          <img src={mapimage} alt="" className="center mb3"/>

          <div className="flex-ns mb3 center">
            <div className="w-40 center">
              <h4 className="f4 b lh-title mb2 primary">Location</h4>
              <p>{entry.getIn(["data", "location"])}</p>
            </div>

            <div className="w-40 center">
              <h4 className="f4 b lh-title mb2 primary">Inquiries</h4>
              <p>{entry.getIn(["data", "inquiries"])}</p>
            </div>
          </div>


        </div>
      </div>;
  }
}
