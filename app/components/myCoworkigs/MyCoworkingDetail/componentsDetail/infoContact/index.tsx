const InfoCoworking = ({ coworking }: any) => {
  return (
    <>
      <div className=" col-span-2 rounded-lg border  p-4 shadow-sm md:col-span-1">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p>
          <strong>Phone:</strong> {coworking.phone}
        </p>
        <p>
          <strong>Email:</strong> {coworking.email}
        </p>
      </div>
      <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
        <h2 className="text-xl font-semibold">Address</h2>
        <p>{coworking.address}</p>
        <p>
          {coworking.city}, {coworking.state}, {coworking.country}
        </p>
      </div>
      <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
        <h2 className="text-xl font-semibold">Operating Hours</h2>
        <p>
          <strong>Open:</strong> {coworking.open}
        </p>
        <p>
          <strong>Close:</strong> {coworking.close}
        </p>
      </div>

      <div className="col-span-2 rounded-lg border p-4 shadow-sm md:col-span-1">
        <h2 className="text-xl font-semibold">Capacity & Status</h2>
        <p>
          <strong>Capacity:</strong> {coworking.capacity}
        </p>
        <p>
          <strong>Status:</strong> {coworking.status}
        </p>
      </div>
    </>
  );
};
export default InfoCoworking;
