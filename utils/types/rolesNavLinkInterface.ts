export interface RoleItem {
  name: string;
  href: string;
  icon: React.ComponentType;
}

export interface Roles {
  [key: string]: RoleItem[];
}

