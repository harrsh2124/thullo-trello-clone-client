import { BaseProvider, DarkTheme } from 'baseui';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';

const engine = new Styletron();

const App = () => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <p>Hello World!</p>
      </BaseProvider>
    </StyletronProvider>
  );
};

export default App;
