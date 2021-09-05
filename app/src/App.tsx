import logo from './logo.svg';
import './App.css';

//TODO: implement delete button icon
//TODO: remove HC in DetailedItem
//TODO: refactor DetailedItems list and DetailedItem to not pass getClassName twice
//TODO: store implementation of getClassNameForDetailedItemsList in utils or in DetailedItem and import it from there
//TODO: smth > meaningful for getClassNameForDetailedItemsList and getClassName
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
