import './App.css';

import { ThemeProvider } from 'styled-components';
import { Main } from './Main';
import { defaultTheme } from './ThemeProvider';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        {/*put ErrorBoundary inside ThemeProvider because one may want to have error messages stylized as the rest of the app*/}
        <ErrorBoundary>
          <Main></Main>
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
}

export default App;
