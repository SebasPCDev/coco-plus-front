import { EditCompanySuperAdmin } from "@/app/components/EditCompanySuperAdmin";

const CoworkingsSuperAdminDetailView = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  return (
    <EditCompanySuperAdmin id={id} />
  );
};

export default CoworkingsSuperAdminDetailView;
