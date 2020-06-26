import React, { lazy, Suspense } from 'react';

const LazyBox = lazy(() => import('./Box'));

const Box = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBox name={""} {...props} />
  </Suspense>
);

export default Box;
