import WithLayout from '@components/WithLayout';
import Main from '@layouts/Main';

export default function NewsBlogs() {
  return <WithLayout component={() => <h1>News & Blogs</h1>} layout={Main} />;
}
