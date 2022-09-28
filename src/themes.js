import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  cardBackground: "#fff",
  footBackground: "./icons/powered-by-tomorrow/dark.svg",
};

export const darkTheme = {
  body: "#282c34",
  fontColor: "#fff",
  cardBackground: "#181c24",
  footBackground: "./icons/powered-by-tomorrow/light.svg",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
  dia-card {
    background: ${(props) => props.theme.cardBackground};
  }
  .ImagFoot {
    content:url(${(props) => props.theme.footBackground});
  }
  
  
`;
