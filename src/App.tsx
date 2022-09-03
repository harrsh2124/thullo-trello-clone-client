import { BaseProvider, DarkTheme } from 'baseui';
import { BrowserRouter } from 'react-router-dom';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import IndexRouter from './routes/IndexRouter';

const engine = new Styletron();

const App = () => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <BrowserRouter>
          <IndexRouter />
        </BrowserRouter>
      </BaseProvider>
    </StyletronProvider>
  );
};

export default App;
