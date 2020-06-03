import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from './theme';
import './styles/globals';

import { Page, Section } from './layout/Layout';
import Container from './layout/Container';

import MainLogo from './components/MainLogo';
import Main from './components/Main';
import Menu from './components/Menu';

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  font-family: NotoSansCJKkr;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1.5;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Page backgroundColor="gray">
      <Container>
        <Section>
          <MainLogo />
        </Section>
        <Section>
          <Menu />
        </Section>
        <Section>
          <Main />
        </Section>

        {/* TODO
        <SearchBar />
        <Menu />
        <Divider /> */}
      </Container>
      {/*
      TODO: Add <Footer />
      */}
    </Page>
  </ThemeProvider>
)

export default App;
