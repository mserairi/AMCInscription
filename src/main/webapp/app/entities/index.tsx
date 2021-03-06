import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Enfant from './enfant';
import Category from './category';
import Formation from './formation';
import Inscription from './inscription';
import UserExtras from './user-extras';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}enfant`} component={Enfant} />
      <ErrorBoundaryRoute path={`${match.url}category`} component={Category} />
      <ErrorBoundaryRoute path={`${match.url}formation`} component={Formation} />
      <ErrorBoundaryRoute path={`${match.url}inscription`} component={Inscription} />
      <ErrorBoundaryRoute path={`${match.url}user-extras`} component={UserExtras} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
