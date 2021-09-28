import React from 'react';
import { useSelector } from 'react-redux';

import { selectContent } from '../../selectors/root';

export const Socials = () => {
  const content = useSelector(selectContent);

  return (
    <div className="social-links-top">
      <ul>
        <li>
          <a href={content.fields?.twitter_link} >
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a href={content.fields?.linkedin_link} >
            <i className="fa fa-linkedin" />
          </a>
        </li>
        <li>
          <a href={content.fields?.instagram_link} >
            <i className="fa fa-instagram" />
          </a>
        </li>
        <li>
          <a href={content.fields?.facebook_link} >
            <i className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCRupGbMd1sUrXiYgRE9pePw/featured">
            <i className="fa fa-youtube" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
