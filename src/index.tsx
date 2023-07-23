import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import isYesterday from 'dayjs/plugin/isYesterday';

import { App } from 'app';
import * as Styles from 'styles';
import { ThemeContextProvider, ThemeWrap } from 'context';

import reportWebVitals from './reportWebVitals';

dayjs.extend(isYesterday);
dayjs.extend(isToday);

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <ThemeWrap>
        <Styles.GlobalStyles />
        <App />
      </ThemeWrap>
    </ThemeContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
