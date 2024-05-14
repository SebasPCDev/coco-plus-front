const redirectionByRole = (role: string) => {
  if (role === 'superadmin') {
    return '/dashboard/superadmin';
  } else if (role === 'adminCoworking') {
    return '/dashboard/adminCoworking';
  } else if (role === 'adminCompany') {
    return '/dashboard/adminCompany';
  } else {
    return '/';
  }
};

export default redirectionByRole;
