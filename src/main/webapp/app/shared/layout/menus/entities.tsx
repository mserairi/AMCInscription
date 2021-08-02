import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { Translate, translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <MenuItem icon="asterisk" to="/enfant">
      <Translate contentKey="global.menu.entities.enfant" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/inscription">
      <Translate contentKey="global.menu.entities.inscription" />
    </MenuItem>
    {props.admin && (
      <MenuItem icon="asterisk" to="/category">
        <Translate contentKey="global.menu.entities.category" />
      </MenuItem>
    )}
    {props.admin && (
      <MenuItem icon="asterisk" to="/formation">
        <Translate contentKey="global.menu.entities.formation" />
      </MenuItem>
    )}
    {props.admin && (
      <MenuItem icon="asterisk" to="/user-extras">
        <Translate contentKey="global.menu.entities.userExtras" />
      </MenuItem>
    )}
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
