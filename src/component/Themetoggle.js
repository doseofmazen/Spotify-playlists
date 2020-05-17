import React from "react";
import "../App.css";
import ToggleTheme from "react-toggle-theme";

function Themetoggle() {
  const [currentTheme, setCurrentTheme] = React.useState("light");
  React.useEffect(() => {
    const themeMap = {
      dark: "dark",
      light: "light"
    };

    var tmp;
    const theme =
      localStorage.getItem("theme") ||
      ((tmp = Object.keys(themeMap)[0]),
      localStorage.setItem("theme", tmp),
      tmp);

    const bodyClass = document.body.classList;
    bodyClass.add(theme);

    const trans = () => {
      document.documentElement.classList.add("transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 1000);
    };

    (function () {
      const current = localStorage.getItem("theme");
      const next = themeMap[currentTheme];
      bodyClass.replace(current, next);
      trans();
      localStorage.setItem("theme", next);
    })();
  }, [currentTheme]);
  return (
    <div
      className={"app-container"}
      style={{
        top: "0",
        right: "0",
        margin: "0em 1.5em",
        padding: ".5em .5em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        zindex: "999",
        transition: "top .3s ease",
        position: "absolute"
        // transform: "rotate(90deg)"
      }}
    >
      <ToggleTheme selectedTheme={currentTheme} onChange={setCurrentTheme} />
      <span style={{ margin: "auto", paddingLeft: "7px" }}>Theme</span>
    </div>
  );
}

export default Themetoggle;
