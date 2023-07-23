import { ProtectedRoute } from 'common';
import { Routes, Route } from 'react-router-dom';

import * as Styles from './styles';
import { Main } from 'pages/landing/main';

function App() {
  return (
    <Styles.Wrap>
      <Routes>
        <Route
          path="*"
          element={
            <ProtectedRoute allowed={true} redirect={'/404'}>
              <Main />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Styles.Wrap>
  );
}

export default App;
