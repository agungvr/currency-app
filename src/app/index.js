import { compose } from './helpers/hoc'

import strictMode from './hocs/strictMode';
import errorBoundary from './hocs/errorBoundary';
import redux from './hocs/redux';
import reduxPersist from './hocs/reduxPersist';
import router from './hocs/router';
import suspense from './hocs/suspense';

const AppKernel = compose(
  strictMode,
  errorBoundary,
  reduxPersist,
  redux,
  router,
  suspense,
);

export default AppKernel;
