import {
  HeroSection,
  Introduction,
  SpecialOffers,
  CharterYatch,
  Destinations,
  YatchSlider
} from './components';

export default function Home() {
  const message: string = 'Hello World!';

  return (
    <div>
      <HeroSection />
      <Introduction />
      <SpecialOffers />
      <CharterYatch />
      <YatchSlider />
      <Destinations />
    </div>
  );
}
