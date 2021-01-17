import React, { ReactNode } from 'react';
import { Route } from 'react-router-dom';

type Props = {
  children: ReactNode;
  exact?: boolean;
  path?: string | string[];
};

export default function PublicRoute({ children, ...rest }: Props) {
  return <Route {...rest} render={() => children} />;
}
