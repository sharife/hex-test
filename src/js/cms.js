import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import AboutPreview from "./cms-preview-templates/about";
import NewsPreview from "./cms-preview-templates/news";
import TeamPreview from "./cms-preview-templates/team";
import JobsPreview from "./cms-preview-templates/careers";
import ContactPreview from "./cms-preview-templates/contact";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.registerPreviewTemplate("news", NewsPreview);
CMS.registerPreviewTemplate("team", TeamPreview);
CMS.registerPreviewTemplate("careers", CareersPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerWidget("color", ColorControl);
