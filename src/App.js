import React, { useEffect, useState } from "react";
import "./App.css";
import { Principal } from "./components/Principal";
import { Dia } from "./components/Dia";
import { Loading } from "./components/Loading";
import { Footer } from "./components/Footer";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
const Card = styled.div`
  background: ${(props) => props.theme.cardBackground};
`;

const Pie = styled.div`
  content: url(${(props) => props.theme.footBackground});

  height: 20vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  var d = new Date();
  const startDate = d.toUTCString();
  d.setDate(d.getDate() + 6);
  var sd = new Date(startDate);

  const field = [
    "weatherCodeFullDay",
    "cloudCeiling",
    "cloudBase",
    "cloudCover",
    "temperatureApparent",
    "windDirection",
    "windGust",
    "windSpeed",
    "precipitationType",
    "temperatureAvg",
    "temperatureMax",
    "temperatureMin",
    "humidity",
  ];
  const url =
    "https://api.tomorrow.io/v4/timelines?location=20.38494,-99.957922&fields=" +
    field +
    "&startTime=" +
    sd.toISOString() +
    "&endTime=" +
    d.toISOString() +
    "&timesteps=1d&units=metric&apikey=PHSZp4KfI8kyB6HlcMnOxANvtMARDFFX";

  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON.data.timelines[0].intervals);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="App">
          <header className="App-header">
            <div className="Claro-Oscuro">
              <label className="switch">
                <input type="checkbox" onClick={() => themeToggler()} />
                <span className="slider"></span>
              </label>
            </div>
            {!todos ? <Loading /> : <Principal {...todos[0]} />}
            <div className="App-Dia">
              {!todos
                ? ""
                : todos.map((todo, index) => {
                    return (
                      <div className="dia" key={index}>
                        <Card>
                          <Dia {...todo} />
                        </Card>
                      </div>
                    );
                  })}
            </div>
          </header>
          <Pie>{!todos ? <Footer /> : <Footer />}</Pie>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
