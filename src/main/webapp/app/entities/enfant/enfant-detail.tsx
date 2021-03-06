import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './enfant.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEnfantDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EnfantDetail = (props: IEnfantDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { enfantEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="enfantDetailsHeading">
          <Translate contentKey="amcInscriptionApp.enfant.detail.title">Enfant</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{enfantEntity.id}</dd>
          <dt>
            <span id="nom">
              <Translate contentKey="amcInscriptionApp.enfant.nom">Nom</Translate>
            </span>
          </dt>
          <dd>{enfantEntity.nom}</dd>
          <dt>
            <span id="prenom">
              <Translate contentKey="amcInscriptionApp.enfant.prenom">Prenom</Translate>
            </span>
          </dt>
          <dd>{enfantEntity.prenom}</dd>
          <dt>
            <span id="dateNaissance">
              <Translate contentKey="amcInscriptionApp.enfant.dateNaissance">Date Naissance</Translate>
            </span>
          </dt>
          <dd>
            {enfantEntity.dateNaissance ? (
              <TextFormat value={enfantEntity.dateNaissance} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="genre">
              <Translate contentKey="amcInscriptionApp.enfant.genre">Genre</Translate>
            </span>
          </dt>
          <dd>{enfantEntity.genre}</dd>
          <dt>
            <span id="nomParent2">
              <Translate contentKey="amcInscriptionApp.enfant.nomParent2">Nom Parent 2</Translate>
            </span>
          </dt>
          <dd>{enfantEntity.nomParent2}</dd>
          <dt>
            <span id="prenomParent2">
              <Translate contentKey="amcInscriptionApp.enfant.prenomParent2">Prenom Parent 2</Translate>
            </span>
          </dt>
          <dd>{enfantEntity.prenomParent2}</dd>
          <dt>
            <span id="mobParent2">
              <Translate contentKey="amcInscriptionApp.enfant.mobParent2">Mob Parent 2</Translate>
            </span>
          </dt>
          <dd>{enfantEntity.mobParent2}</dd>
          <dt>
            <span id="emailParent2">
              <Translate contentKey="amcInscriptionApp.enfant.emailParent2">Email Parent 2</Translate>
            </span>
          </dt>
          <dd>{enfantEntity.emailParent2}</dd>
          <dt>
            <span id="infoSante">
              <Translate contentKey="amcInscriptionApp.enfant.infoSante">Info Sante</Translate>
            </span>
          </dt>
          <dd>{enfantEntity.infoSante}</dd>
          <dt>
            <span id="autorisationImage">
              <Translate contentKey="amcInscriptionApp.enfant.autorisationImage">Autorisation Image</Translate>
            </span>
          </dt>
          <dd>{enfantEntity.autorisationImage ? 'true' : 'false'}</dd>
          <dt>
            <span id="nomContact">
              <Translate contentKey="amcInscriptionApp.enfant.nomContact">Nom Contact</Translate>
            </span>
          </dt>
          <dd>{enfantEntity.nomContact}</dd>
          <dt>
            <span id="mobContact">
              <Translate contentKey="amcInscriptionApp.enfant.mobContact">Mob Contact</Translate>
            </span>
          </dt>
          <dd>{enfantEntity.mobContact}</dd>
          <dt>
            <Translate contentKey="amcInscriptionApp.enfant.parent">Parent</Translate>
          </dt>
          <dd>{enfantEntity.parent ? enfantEntity.parent.login : ''}</dd>
        </dl>
        <Button tag={Link} to="/enfant" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/enfant/${enfantEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ enfant }: IRootState) => ({
  enfantEntity: enfant.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EnfantDetail);
