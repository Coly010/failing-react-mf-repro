import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Myremote1 = React.lazy(() => import('myremote1/Module'));

const Myremote2 = React.lazy(() => import('myremote2/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/myremote1">Myremote1</Link>
        </li>

        <li>
          <Link to="/myremote2">Myremote2</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="myhost" />} />

        <Route path="/myremote1" element={<Myremote1 />} />

        <Route path="/myremote2" element={<Myremote2 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
