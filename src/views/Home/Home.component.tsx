import {
  HeroSection,
  Introduction,
  SpecialOffers,
  CharterYatch,
  Destinations,
  YatchSlider,
  Experience,
  NewsAndBlogs,
  EnquiryForm,
  DestinationGallery
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
      <DestinationGallery />
      <Experience />
      <NewsAndBlogs />
      <EnquiryForm />
    </div>
  );
}
