import { useState } from 'react';
import Hero from './components/Hero/Hero';
import Countdown from './components/Countdown/Countdown';
import Timeline from './components/Timeline/Timeline';
import Details from './components/Details/Details';
import Gifts from './components/Gifts/Gifts';
import LoveStory from './components/LoveStory/LoveStory';
import Faq from './components/Faq/Faq';
import Rsvp from './components/Rsvp/Rsvp';
import RsvpModal from './components/Rsvp/RsvpModal';
import Closing from './components/Closing/Closing';

export default function App() {
  const [rsvpOpen, setRsvpOpen] = useState(false);

  return (
    <>
      <Hero />
      <main>
        <Countdown />
        <Timeline />
        <Details />
        <Gifts />
        <LoveStory />
        <Faq />
        <Rsvp onOpen={() => setRsvpOpen(true)} />
      </main>
      <Closing />
      <RsvpModal open={rsvpOpen} onClose={() => setRsvpOpen(false)} />
    </>
  );
}
