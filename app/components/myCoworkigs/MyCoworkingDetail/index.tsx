import GetCoworkingDetailForAdmin from '@/utils/gets/getCoworkingDetailForAdmisn';
import { cookies } from 'next/headers';
import InfoUsersAdmins from './componentsDetail/users';
import InfoCoworking from './componentsDetail/infoContact';
import Image from 'next/image';

export default async function MyCoworkingDetail({ id }: { id: string }) {
  const cookiesStore = cookies();
  const token = cookiesStore.get('token')?.value;

  const coworking = await GetCoworkingDetailForAdmin({ id, token });

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-center text-4xl font-bold">{coworking.name}</h1>
      <div className="flex  flex-col  md:flex-row">
        {/* contenedor 1*/}
        <div className="mt-4 max-h-[80vh] w-full overflow-y-auto rounded-lg bg-white p-4 shadow-lg md:mt-0 md:w-2/3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {<InfoCoworking coworking={coworking} />}

            <div className="col-span-2 rounded-lg border p-4 shadow-sm">
              <h2 className="text-xl font-semibold">Administratores</h2>
              {coworking.user.map((user: any) => {
                return <InfoUsersAdmins key={user.id} user={user} />;
              })}
            </div>
          </div>
        </div>
        {/* contenedor 2 */}
        <div className="max-h-[80vh] w-full overflow-y-auto rounded-lg bg-white p-4 shadow-lg md:w-1/3">
          <h2 className=" mb-2 text-xl font-semibold">imagen portada</h2>

          {coworking.thumbnail && (
            <Image
              src={coworking.thumbnail}
              alt={coworking.name}
              width={500}
              height={500}
              className=" rounded-lg shadow-sm"
            />
          )}

          <h2 className="my-4 text-xl font-semibold">Images secundarias</h2>
          <div className="flex flex-col space-y-4">
            {coworking.images.map((image) => (
              <Image
                key={image.id}
                src={image.secure_url}
                alt="Coworking space"
                className=" rounded-lg shadow-sm"
                width={500}
                height={500}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

//  return (
//    <div className="container mx-auto p-4">
//      <h1 className="mb-4 text-center text-4xl font-bold">{coworking.name}</h1>
//      <div className="flex flex-col md:flex-row md:space-x-4">
//        <img
//          src={coworking.thumbnail}
//          alt={coworking.name}
//          className="w-full rounded-lg shadow-lg md:w-1/3"
//        />
//        <div className="mt-4 w-full md:mt-0 md:w-2/3">
//          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//            <div className="rounded-lg border p-4 shadow-sm">
//              <h2 className="text-xl font-semibold">Contact Information</h2>
//              <p>
//                <strong>Phone:</strong> {coworking.phone}
//              </p>
//              <p>
//                <strong>Email:</strong> {coworking.email}
//              </p>
//            </div>
//            <div className="rounded-lg border p-4 shadow-sm">
//              <h2 className="text-xl font-semibold">Address</h2>
//              <p>{coworking.address}</p>
//              <p>
//                {coworking.city}, {coworking.state}, {coworking.country}
//              </p>
//            </div>
//            <div className="rounded-lg border p-4 shadow-sm">
//              <h2 className="text-xl font-semibold">Operating Hours</h2>
//              <p>
//                <strong>Open:</strong> {coworking.open}
//              </p>
//              <p>
//                <strong>Close:</strong> {coworking.close}
//              </p>
//            </div>
//            <div className="rounded-lg border p-4 shadow-sm">
//              <h2 className="text-xl font-semibold">Location</h2>
//              <p>
//                <strong>Latitude:</strong> {coworking.lat}
//              </p>
//              <p>
//                <strong>Longitude:</strong> {coworking.long}
//              </p>
//            </div>
//            <div className="rounded-lg border p-4 shadow-sm">
//              <h2 className="text-xl font-semibold">Capacity & Status</h2>
//              <p>
//                <strong>Capacity:</strong> {coworking.capacity}
//              </p>
//              <p>
//                <strong>Status:</strong> {coworking.status}
//              </p>
//            </div>
//            <div className="col-span-2 rounded-lg border p-4 shadow-sm">
//              <h2 className="text-xl font-semibold">Message</h2>
//              <p>{coworking.message}</p>
//            </div>
//            <div className="col-span-2 rounded-lg border p-4 shadow-sm">
//              <h2 className="text-xl font-semibold">Administrator</h2>
//              <p>
//                <strong>Name:</strong> {coworking.user[0].name}{' '}
//                {coworking.user[0].lastname}
//              </p>
//              <p>
//                <strong>Phone:</strong> {coworking.user[0].phone}
//              </p>
//              <p>
//                <strong>Email:</strong> {coworking.user[0].email}
//              </p>
//              <p>
//                <strong>Role:</strong> {coworking.user[0].role}
//              </p>
//            </div>
//          </div>
//        </div>
//      </div>
//      <div className="col-span-2 my-4 rounded-lg border p-4 shadow-sm">
//        <h2 className="text-xl font-semibold">Images</h2>
//        <div className="flex justify-between">
//          {coworking.images.map((image) => (
//            <img
//              key={image.id}
//              src={image.secure_url}
//              alt="Coworking space"
//              className="h-80  rounded-lg shadow-sm"
//            />
//          ))}
//        </div>
//      </div>
//    </div>
//  );
