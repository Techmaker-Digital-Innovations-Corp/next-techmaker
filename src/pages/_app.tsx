import { AppProps } from 'next/app';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-poppins">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
