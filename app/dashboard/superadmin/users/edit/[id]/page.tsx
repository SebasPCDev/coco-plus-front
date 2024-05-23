import EditUserSuperAdmin from "@/app/components/EditUserSuperAdmin";

const UserSuperAdminDetailView = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  return (
    <EditUserSuperAdmin id={id} />
  );
};

export default UserSuperAdminDetailView;
