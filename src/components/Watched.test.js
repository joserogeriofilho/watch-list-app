import { render } from '@testing-library/react';
import Watched from './Watched';

describe('testing the Watched component', () => {

  it('renders the title', () => {
    const { getByText } = render(
      <Watched />
    );
  
    expect(getByText(/watched/i)).toBeInTheDocument();
  });

})
