interface Role {
  role: number;
  roleName: string;
}
interface User {
  id: number;
  nickName: string;
  role: Role[];
  userName: string;
}

class UserInitData {
    select
    list:User[] = [],
    
}

export {Role,User}