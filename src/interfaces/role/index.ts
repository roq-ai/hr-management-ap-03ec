import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RoleInterface {
  id?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface RoleGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
