import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { NextPage } from 'next';


const useRouter = jest.spyOn(require('next/router'), 'useRouter');

export const renderWithReactRouter = (
  ComponentToBeMounted: NextPage | React.FC,
  routerObject: Record<string, any> = {}
): RenderResult => {
  useRouter.mockImplementation(() => routerObject);

  return render(<ComponentToBeMounted />);
};
