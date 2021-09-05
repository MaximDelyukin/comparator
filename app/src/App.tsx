import logo from './logo.svg';
import './App.css';

//TODO: implement delete button icon
//TODO: refactor default context to not use defaultTHeme 2 times
import { ThemeProvider } from 'styled-components';
import { Main } from './Main';
import { defaultTheme } from './ThemeProvider';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Main></Main>
      </ThemeProvider>
    </div>
  );
}

export default App;
