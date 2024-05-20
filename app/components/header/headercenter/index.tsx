import HeaderUser from '../headerUser';
import HeaderMenu from '../headerMenu';
import { getSession } from '@/app/lib/session';
import { UserSession } from '@/app/lib/definitions';

const HeaderCenter = async () => {

  const session = await getSession();
  const user = session?.user as UserSession;


  return (
    <>
      {/* Desktop */}
      <div className="items-center hidden lg:flex">
        <HeaderMenu user={user} />
      </div>
      {/* Mobile */}
      <div className="items-center block lg:hidden">
        <HeaderUser />
      </div>
    </>
  )
}
export default HeaderCenter