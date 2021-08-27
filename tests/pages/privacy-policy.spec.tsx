import React from 'react';
import { screen } from '@testing-library/react';

import PrivacyPolicyPage from '../../pages/privacy-policy';
import { renderWithReactRouter } from '../../jest.helper';


const PAGE_URL = '/privacy-policy';

describe('Page: PrivacyPolicyPage', (): void => {
  test('renders Annie\'s main header', (): void => {
    renderWithReactRouter(PrivacyPolicyPage, {
      pathname: PAGE_URL
    });

    expect(screen.queryByTestId('annie-main-header')).toBeInTheDocument();
  });

  test('renders Annie\'s main footer', (): void => {
    renderWithReactRouter(PrivacyPolicyPage, {
      pathname: PAGE_URL
    });

    expect(screen.queryByTestId('annie-main-footer')).toBeInTheDocument();
  });
});
