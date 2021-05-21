import "../styles/globals.scss";
import { StatesWrapper } from "../context/StatesContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <StatesWrapper>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </StatesWrapper>
  );
}

export default MyApp;
