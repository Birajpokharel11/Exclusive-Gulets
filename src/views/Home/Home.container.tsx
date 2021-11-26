import { connect } from 'react-redux';
import { fetchExperiencesStart } from 'src/store/experiences/experiences.actions';
import { fetchPostsStart } from '@store/posts/posts.actions';
import { submitEnquiryStart } from '@store/home/home.actions';

const mapStateToProps = (state, props) => ({
  destination: state.destination,
  posts: state.posts,
  offer: state.offer,
  experience: state.experience,
  home: state.home,
  siteCoordinator: state.siteCoordinator
});

const mapDispatchToProps = (dispatch) => ({
  onFetchExperiencesStart: (id) => dispatch(fetchExperiencesStart(id)),
  fetchPostsStart: (id) => dispatch(fetchPostsStart(id)),
  submitEnquiryStart: (formdata) => dispatch(submitEnquiryStart(formdata))
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
