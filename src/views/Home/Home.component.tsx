import {
  HeroSection,
  Introduction,
  SpecialOffers,
  CharterYatch,
  Destinations,
  YatchSlider,
  Experience,
  NewsAndBlogs,
  EnquiryForm
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
      <Experience />
      <NewsAndBlogs />
      <EnquiryForm />
    </div>
  );
}
