import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { StyledLayout, StyledSection } from './styles';

import theme from './Theme';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftSection from './components/LeftSection';
import Form from './components/Form';
import UseCoins from './hooks/useCoins';
import TextField from './components/TextField';
import Button from './components/Button';
import Coinlist from './components/CoinList';

function App() {
  const { coins, addCoin, deleteCoin, isLoading } = UseCoins();
  const [coinCode, setCoinCode] = useState('');

  const fetchCoin = async () => {
    await addCoin(coinCode?.trim()?.toUpperCase());
    setCoinCode('');
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <StyledSection>
          <Header />
          <div>
            <LeftSection>
              <Coinlist coins={coins} onClick={deleteCoin} />
            </LeftSection>
            <Form>
              <TextField
                value={coinCode}
                onChange={(value) => {
                  setCoinCode(value.trim());
                }}
              />
              <Button
                isAdd
                onClick={fetchCoin}
                loading={isLoading}
                disabled={isLoading || !Boolean(coinCode)}
              >
                Add
              </Button>
            </Form>
          </div>
        </StyledSection>
        <Footer />
        <ToastContainer />
      </StyledLayout>
    </ThemeProvider>
  );
}

export default App;
