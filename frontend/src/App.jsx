import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';

// layout
import Footer from 'layout/Footer';

// styles
import 'styles/globals';

// components
import Category from 'components/Category';
import Main from 'components/Main';
import ThemeDetail from 'components/ThemeDetail';
import ThemeList from 'components/ThemeList';
import WebtoonDetail from 'components/WebtoonDetail';

import theme from './theme';

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
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/webtoon/:id" component={WebtoonDetail} />
				<Route path="/category" component={Category} />
				<Route path="/collections" component={ThemeList} />
				<Route path="/collection/:id" component={ThemeDetail} />
				<Redirect path="*" to="/" />
			</Switch>
		</BrowserRouter>
		<Footer />
  </ThemeProvider>
)

export default App;
