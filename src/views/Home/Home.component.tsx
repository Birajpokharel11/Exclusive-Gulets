import {
  HeroSection,
  Introduction,
  SpecialOffers,
  CharterYatch
} from './components';

export default function Home() {
  const message: string = 'Hello World!';

  return (
    <div>
      <HeroSection />
      <Introduction />
      <SpecialOffers />
      <CharterYatch />
    </div>
  );
}
