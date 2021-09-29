import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  blogs: state.blogs.blogs
});

const container = connect(mapStateToProps, null);

export default container;
