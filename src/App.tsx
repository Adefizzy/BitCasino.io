import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';


import theme from './Theme';
import device from './utils/breakpoints';


import Header from './components/Header';
import Footer from './components/Footer';
import SingleCoin from './components/SingleCoin';
import LeftSection from './components/LeftSection';
import Form from './components/Form';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <StyledSection>
          <Header />
          <div>
            <LeftSection>
              <ul>
                <SingleCoin />
              </ul>
            </LeftSection>
            <Form/>
          </div>
        </StyledSection>
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  );
}

const StyledLayout = styled.main`
  background-color: ${(props) => props.theme.primary};
  min-height: 100vh;
  color: ${(props) => props.theme.white};
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 10vh;

  background-image: url(${'/assets/bg.png'});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 200%;
  background-position: -20% 0%;
  @media ${device.laptop} {
    background-position: 68vw -3vw;
    background-size: 80%;
  }
`;



const StyledSection = styled.section`
  grid-row: 1/4;
  @media ${device.laptop} {
    background-image: url(${'/assets/figure.png'});
    background-repeat: no-repeat;
    background-origin: padding-box;
    background-position: center bottom;
    background-size: 30%;

    & > div {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  }
`;












export default App;
