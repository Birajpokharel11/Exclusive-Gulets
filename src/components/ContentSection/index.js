import React, { Component } from 'react'
import parse from 'html-react-parser';

import vectorblog1 from '../../../assets/images/Blog_single/wheel-vector.svg';
import vector3 from '../../../assets/images/Blog_single/fish-vector.svg';
import vtr1 from '../../../assets/images/Blog_single/Vector2.svg';
import vctr2 from '../../../assets/images/Blog_single/vector3.svg';
import Facebook from '../../../assets/images/Blog_single/Facebook.svg';
import Instagram from '../../../assets/images/Blog_single/Instagram.svg';
import Twitter from '../../../assets/images/Blog_single/Twitter.svg';
import Linkedin from '../../../assets/images/Blog_single/LinkedIn.svg';
import YouTube from '../../../assets/images/Blog_single/YouTube.svg';
import EnquireFormWrapper from '../enquireForm/EnquireFormWrapper';
import EnquireForm from '../enquireForm';

class ContentSection extends Component {
   constructor(props) {
      super(props)

      this.state = {
         showAllContent: false,
         contentHeight: 0
      }
      this.contentRef = React.createRef()
   }

   toggleContentBlock = () => {
      this.setState({ showAllContent: !this.state.showAllContent })
   }

   componentDidUpdate() {
      if (this.state.contentHeight === this.contentRef.current.scrollHeight) return
      this.setState({ contentHeight: this.contentRef.current.scrollHeight })
   }
   render() {
      return (
         <section style={{ paddingTop: "40px" }}
            id="singleblog-page" className="section singleblog-page wow slideInUp" data-wow-duration="1s">
            <div className="row">
               <div className="banner-bottom-description" />
            </div>
            <div className="background-vector">
               <img src={vectorblog1} className="img-responsive" alt="vector blog1" />
            </div>
            <div className="container-lg">
               <div className="background-vector other-grms-vector">
                  <img src={vtr1} className="img-responsive" alt="Blog vector4" />
               </div>
               <div
                  className="row mtp wow slideInUp"
                  data-wow-duration="1s"
                  id="padding_mobtopbtm">
                  <div className={(this.state.showAllContent) ? "col-lg-8 col-md-12 main_content_container" :
                     "col-lg-8 col-md-12 main_content_container main_content_container_hide_not_fit"}>
                     <p ref={this.contentRef}>
                        {this.props.post && this.props.post.content && parse(this.props.post.content)}
                     </p>
                     <div style={(this.state.showAllContent || this.state.contentHeight <= 910) ? { display: 'none' } : null}
                        className="read_more">
                        <button onClick={this.toggleContentBlock}>Read More</button>
                     </div>
                  </div>

                  <EnquireFormWrapper smallContainerWidth={true} />
                  {/* <EnquireForm windowWidth={1500} /> */}

               </div>
               <div className="background-vector2">
                  <img src={vctr2} className="img-responsive" alt="vector2" />
               </div>
               <div className="col-lg-8 col-12 row mtp article-footer align-items-center">
                  <div className="col-6 p-0">
                     <div className="published-date">
                        <p>
                           {this.props.post && new Date(this.props.post.created_at).getDate()} / {new Date(this.props.post.created_at).getMonth() + 1} / {new Date(this.props.post.created_at).getFullYear()}
                        </p>
                     </div>
                  </div>
                  <div className="col-6 p-0">
                     <div className="social-share">
                        <ul>
                           <li>
                              <a
                                 target="_blank"
                                 href='https://www.facebook.com/exclusiveguletsandyachts'><img
                                    src={Facebook} className="img-responsive" alt="Facebook icon" /></a>
                           </li>
                           <li>
                              <a
                                 target="_blank"
                                 href="https://www.instagram.com/exclusive_gulets/"><img
                                    src={Instagram} className="img-responsive" alt="Instagram icon" /></a>
                           </li>
                           <li>
                              <a
                                 target="_blank"
                                 href='https://www.linkedin.com/company/exclusive-gulets-ltd/?viewAsMember=true'><img
                                    src={Linkedin} className="img-responsive" alt="Linkedin icon" /></a>
                           </li>
                           <li>
                              <a
                                 target="_blank"
                                 href='https://twitter.com/exclusivegulets'><img
                                    src={Twitter} className="img-responsive" alt="Twitter icon" /></a>
                           </li>
                           <li>
                              <a target="_blank"
                                 href="https://www.youtube.com/channel/UCRupGbMd1sUrXiYgRE9pePw/featured">
                                 <img src={YouTube} className="img-responsive" alt="Facebook icon" />
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>

            <div className="background-vector3">
               <img
                  src={vector3}
                  className="img-responsive" alt="vector"
               />
            </div>
         </section>
      )
   }

}

export default ContentSection