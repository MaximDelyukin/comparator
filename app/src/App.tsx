import logo from './logo.svg';
import './App.css';

//TODO: implement delete button icon
//TODO: refactor default context to not use defaultTHeme 2 times
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
