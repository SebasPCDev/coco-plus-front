import EditCoworkSuperAdmin from '@/app/components/EditCoworkSuperAdmin';

const CoworkingsSuperAdminDetailView = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = params.id;

  return <EditCoworkSuperAdmin id={id} />;
};

export default CoworkingsSuperAdminDetailView;
