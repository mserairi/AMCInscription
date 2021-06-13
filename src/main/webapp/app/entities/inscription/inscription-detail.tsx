import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './inscription.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IInscriptionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const InscriptionDetail = (props: IInscriptionDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { inscriptionEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="inscriptionDetailsHeading">
          <Translate contentKey="amcInscriptionApp.inscription.detail.title">Inscription</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{inscriptionEntity.id}</dd>
          <dt>
            <span id="dateinscription">
              <Translate contentKey="amcInscriptionApp.inscription.dateinscription">Dateinscription</Translate>
            </span>
          </dt>
          <dd>
            {inscriptionEntity.dateinscription ? (
              <TextFormat value={inscriptionEntity.dateinscription} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="status">
              <Translate contentKey="amcInscriptionApp.inscription.status">Status</Translate>
            </span>
          </dt>
          <dd>{inscriptionEntity.status}</dd>
          <dt>
            <span id="remarques">
              <Translate contentKey="amcInscriptionApp.inscription.remarques">Remarques</Translate>
            </span>
          </dt>
          <dd>{inscriptionEntity.remarques}</dd>
          <dt>
            <span id="tarif">
              <Translate contentKey="amcInscriptionApp.inscription.tarif">Tarif</Translate>
            </span>
          </dt>
          <dd>{inscriptionEntity.tarif}</dd>
          <dt>
            <Translate contentKey="amcInscriptionApp.inscription.inscrit">Inscrit</Translate>
          </dt>
          <dd>{inscriptionEntity.inscrit ? inscriptionEntity.inscrit.prenom : ''}</dd>
          <dt>
            <Translate contentKey="amcInscriptionApp.inscription.formation">Formation</Translate>
          </dt>
          <dd>{inscriptionEntity.formation ? inscriptionEntity.formation.libille : ''}</dd>
        </dl>
        <Button tag={Link} to="/inscription" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/inscription/${inscriptionEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ inscription }: IRootState) => ({
  inscriptionEntity: inscription.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(InscriptionDetail);
