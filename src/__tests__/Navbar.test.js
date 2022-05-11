import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

it('Check if Navbar renders correctly', () => {
  const tree = TestRenderer.create(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
