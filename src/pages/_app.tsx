import { AppProps } from 'next/app';
import '@/styles/globals.css';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from '@/app/components/AlertTemplate';

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: '20px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div className="font-poppins">
        <Component {...pageProps} />
      </div>
    </AlertProvider>
  );
}

export default MyApp;
