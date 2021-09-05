import logo from './logo.svg';
import './App.css';

//TODO: implement delete button icon
//TODO: remove HC in DetailedItem
//TODO: refactor DetailedItems list and DetailedItem to not pass getClassName twice
//TODO: store implementation of getClassNameForDetailedItemsList, getFieldsWhichAreDifferent in utils or in DetailedItem and import it from there and remove closure dependancies
//TODO: smth > meaningful for getClassNameForDetailedItemsList and getClassName
//TODO: fix any types
//TODO: unit tests for getClassName and other utility methods
//TODO: comment every step of getFieldsWhichAreDifferent
//TODO: refactor DeleteButton to export styled(DeleteButton)
//TODO: refactor DeleteButton to have reference transparency
//TODO how to type check that certain component can render a specific component or typecheck renderProps
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
