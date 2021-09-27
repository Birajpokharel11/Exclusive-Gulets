import React from 'react';
import parse from 'html-react-parser';
import axios from 'axios';

import { Banner } from '../../../components';


import { Helmet } from 'react-helmet';
import { getTitleContent } from 'utils/sharedFunctions'
import "../index.scss"
import YahtsSlider from 'components/SharedComponents/YahtsSlider/index'
import DestinationsGallerySection from 'components/SharedComponents/DestinationsGallery';
import CardSection from 'components/SharedComponents/CardSection';
import EnquireFormMobileWrapper from 'components/SharedComponents/enquireForm/EnquireFormMobileWrapper';
import ContentSection from 'components/SharedComponents/ContentSection';

export class BlogDetailed extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         activeSlide: 0,
         height: 0,
         destinations: [],
         related_experiences: [],
         showAllContent: false,
         experience: {}
      };
   }

   componentDidMount() {
      window.scrollTo(0, 0);

      axios.get(`${process.env.REACT_APP_API_URL}/experiences/${this.props.match.params.id}`)
         .then(({ data }) => this.setState({ experience: data.experience, related_experiences: data.related_experiences }))

      //destinations
      fetch(`${process.env.REACT_APP_API_URL}/destinations/random_destinations`)
         .then((response) => response.json())
         .then(({ destinations }) => this.setState({ destinations }))
         .catch(e => {
            console.log(e)
         })
   }

   getMetaDescriptionContent = (experienceId) => {
      if (!this.props.meta_descriptions) return
      for (let key in this.props.meta_descriptions) {
         if (key == experienceId) return (this.props.meta_descriptions[key]?.meta_description)
      }
   }

   toggleContentBlock = () => {
      this.setState({ showAllContent: !this.state.showAllContent })
   }

   render() {

      return (
         <>

            <Helmet>
               <meta name="description" content={this.getMetaDescriptionContent(this.props.match.params.id)} />
               <title>{getTitleContent(this.props.location.pathname)}</title>
            </Helmet>

            <Banner
               findOutSize={this.getBannerHeight}
               bgImageUrl={this.state.experience.featured_image?.featured?.url}
               bottomTitle={this.state.experience.title}
               bottomSubTitle={this.state.experience.description}
               breadcrumbName={this.state.experience.title}
            />

            {/* Second section  */}
            <ContentSection post={this.state.experience} general_content={this.state.general_content} />

            {/* Third Section  */}
            <YahtsSlider title="Perfect Yachts for this Experience" subtitle="An unforgettable holiday of your life" endpoint={`experiences/${this.state.experience.slug}`} />

            <DestinationsGallerySection destinations={this.state.destinations}
               title="Perfect Location Matches Perfect Experience"
               subtitle="Perfect location and the perfect yacht for your ultimate charter experience.
           There is no better way than chartering a luxury gulet or yacht to see more of the world.
            With two third of the Earth covered in water,
           there is always a new exciting destination to explore and a different shoreline to discover.​" />


            {/* Fourth Section  */}
            <CardSection title="Related Experiences" cardsData={this.state.related_experiences} bgColor="#F5F0E4"
               subtitle="We thought that you might also like the content below, enjoy!" />


            {/* <MobileForm /> */}
            <EnquireFormMobileWrapper smallContainerWidth={true} />
         </>
      );
   }
}

export default BlogDetailed;
