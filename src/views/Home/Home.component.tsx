import { HeroSection, Introduction, SpecialOffers } from './components';

export default function Home() {
  const message: string = 'Hello World!';

  return (
    <div>
      <HeroSection />
      <Introduction />
      <SpecialOffers />
    </div>
  );
}
