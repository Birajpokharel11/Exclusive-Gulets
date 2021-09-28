import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  blogs: state.blogs
});
console.log('hello', mapStateToProps);
const container = connect(mapStateToProps, null);

export default container;
