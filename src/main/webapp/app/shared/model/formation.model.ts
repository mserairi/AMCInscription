import dayjs from 'dayjs';
import { ICategory } from 'app/shared/model/category.model';

export interface IFormation {
  id?: number;
  libille?: string;
  description?: string;
  ouvertureInscription?: string | null;
  fermetureInscription?: string | null;
  seuilInscrits?: number | null;
  tarif?: number | null;
  instoLAT?: boolean | null;
  insIsOpen?: boolean | null;
  inscriptionOuverte?: boolean | null;
  category?: ICategory;
}

export const defaultValue: Readonly<IFormation> = {
  instoLAT: false,
  insIsOpen: false,
  inscriptionOuverte: false,
};
