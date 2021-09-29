import { connect } from 'react-redux';
import NewsBlogs from 'src/pages/blogs/[slug]';
import { fetchBlogStart } from '../../store/blogs/blog.actions';
const mapStateToProps = (state, props) => ({
  blogs: state.blogs.blogs
});

const mapDispatchToProps = (dispatch) => ({
  fetchBlogStart: (blogs) => dispatch(fetchBlogStart(blogs))
});

const container = connect(null, mapDispatchToProps);

export default container;
