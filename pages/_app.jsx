import { useEffect } from 'react'
import Template from '../Template/Template'
import AOS from 'aos';

import 'aos/dist/aos.css'; // You can also use <link> for styles
import '../styles/bootstrap-grid.min.css'
import '../styles/styles.main.css'
import '../styles/styles.modifier.css'
import '../styles/styles.components.css'
import '../styles/components/navbar.css'
import '../styles/components/index.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 0,
      delay: 0,
      duration: 400,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  )
}
