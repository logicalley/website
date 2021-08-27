import React from 'react';
import { screen } from '@testing-library/react';

import PrivacyPolicyPage from '../../pages/privacy-policy';
import { renderWithReactRouter } from '../../jest.helper';


const PAGE_URL = '/privacy-policy';

describe('Page: PrivacyPolicyPage', (): void => {
  test('renders an header', (): void => {
    renderWithReactRouter(PrivacyPolicyPage, {
      pathname: PAGE_URL
    });

    const h = screen.queryByTestId('annie-main-header')
    console.log(h);

    expect(screen.queryByTestId('annie-main-header')).toBeInTheDocument();
  });
});
