import React from "react";
const RED = "red";
const BLUE = "blue";
const GRAY = "#678c89";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.submitThemeColor = this.submitThemeColor.bind(this);
  }
  submitThemeColor(color) {
    if (color) {
      console.log("handleChangeTheme");
      this.props.saveColorTheme(color);
    }
  }

  componentWillReceiveProps(nextprops) {
    console.log(
      "UNSAFE_componentWillReceiveProps: " + JSON.stringify(nextprops)
    );
    document.documentElement.style.setProperty(
      "--main-color",
      nextprops.themeColor.color
    );
  }

  render() {
    return (
      <div className="footer">
        <div className="vertical-center">
          <span>Choose Theme</span>
          <button
            onClick={() => this.submitThemeColor(RED)}
            className="dot red"
          ></button>
          <button
            onClick={() => this.submitThemeColor(BLUE)}
            className="dot blue"
          ></button>
          <button
            onClick={() => this.submitThemeColor(GRAY)}
            className="dot gray"
          ></button>
        </div>
      </div>
    );
  }
}

export default Footer;
