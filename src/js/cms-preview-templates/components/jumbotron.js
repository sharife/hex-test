import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title} = this.props;
    return <div>
    <img src="{{.image}}" className="header-image">
      <div className="pv5 pv6-l ph3 header-text">
        <div className="mw8 center ph4">
          <div className="db mb3">
            <div className="mw7 relative bg-fix-primary mb3 intro1">
              <h1 className="f3 f1-l f2-m f1-ns di lh-title mb3">
                { title }
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}

