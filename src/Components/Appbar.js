import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import SearchOffOutlinedIcon from "@mui/icons-material/SearchOffOutlined";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "../hooks/useMediaQuery";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import logo from "../assets/Sathiya.png";

function Appbar() {
  const [scrollbg, setScrollBg] = useState(false);
  const isDesktop = useMediaQuery("(min-Width : 768px)");
  const [isMenuToggled, setMenuToggled] = useState(false);

  const ChangeBackground = () => {
    if (window.scrollY >= 60) setScrollBg(true);
    else setScrollBg(false);
  };

  useEffect(() => {
    ChangeBackground();
    window.addEventListener("scroll", ChangeBackground);
  }, []);

  const navbarstyle = {
    backgroundColor: scrollbg ? "navy" : "#FCFBFA",
    color: scrollbg ? "white" : "black",
  };

  const logoStyle = {
    backgroundColor: !scrollbg ? "white" : "white",
  };

  return (
    <div>
      {isDesktop ? (
        <div className="navbar setting-navbar" style={navbarstyle}>
          <div className="ps-2 fs-5 fw-bolder">To Do</div>
          <div className="menu-items">
            {["HOME", "ABOUT", "PROJECTS"].map((element, index) => {
              return (
                <a
                  href={element}
                  key={index}
                  rel="noreferrer"
                  className="menu-links"
                >
                  {element}
                </a>
              );
            })}
          </div>
          <div className="search-bar">
            <TextField id="search-bar" variant="standard" />
            <Button variant="text">
              <SearchOffOutlinedIcon />
            </Button>
          </div>
        </div>
      ) : (
        <div className="navbar setting-navbar ps-2 pe-2" style={navbarstyle}>
          <div className="logo">
            <img
              src={logo}
              width="50"
              height="50"
              alt="logo"
              style={logoStyle}
              className="logo"
            />
          </div>
          <div className="menu-toggled">
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => {
                setMenuToggled(!isMenuToggled);
              }}
            >
              <MenuOpenOutlinedIcon />
            </Button>
          </div>
        </div>
      )}
      {!isDesktop && isMenuToggled && (
        <div className="toggled-menu">
          <Box>
            <div className="corner-button">
              <Button
                variant="outlined"
                onClick={() => {
                  setMenuToggled(!isMenuToggled);
                }}
                color="inherit"
              >
                <CloseOutlinedIcon />
              </Button>
            </div>
            <div className="toggled-menu-lists">
              {["HOME", "ABOUT", "PROJECT"].map((element, index) => {
                return (
                  <div key={index} className="menu-links">
                    <a href={element} rel="noreferrer" className="menu-links">
                      {element}
                    </a>
                  </div>
                );
              })}
            </div>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Appbar;
