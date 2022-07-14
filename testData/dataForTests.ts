export interface Member {
  userName: string;
  password: string;
}

export const credentials: Member = {
  userName: 'standard_user',
  password: 'secret_sauce',
};

export interface MemberForAPI {
  email: string;
  password: string;
}

export const credentialsForAPI: MemberForAPI = {
  email: 'eve.holt@reqres.ino',
  password: 'cityslicka',
};