import { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Countdown from './components/Countdown/Countdown';
import Celebration from './components/Celebration/Celebration';
import DressCode from './components/DressCode/DressCode';
import Menus from './components/Menus/Menus';
import Photos from './components/Photos/Photos';
import Playlist from './components/Playlist/Playlist';
import Gifts from './components/Gifts/Gifts';
import Faq from './components/Faq/Faq';
import Rsvp from './components/Rsvp/Rsvp';
import Closing from './components/Closing/Closing';
import { initSmoothScroll } from './lib/smoothScroll';

export default function App() {
  useEffect(() => initSmoothScroll(), []);

  return (
    <>
      <a className="skip-link" href="#cuenta-regresiva">
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <Countdown />
        <Celebration />
        <DressCode />
        <Menus />
        <Photos />
        <Playlist />
        <Gifts />
        <Faq />
        <Rsvp />
      </main>
      <Closing />
    </>
  );
}
