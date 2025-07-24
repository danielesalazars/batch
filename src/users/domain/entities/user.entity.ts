export class UserEntity {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password_hash: string;
  role: string;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;

  constructor(props: Partial<UserEntity>) {
    Object.assign(this, props);
  }
}
