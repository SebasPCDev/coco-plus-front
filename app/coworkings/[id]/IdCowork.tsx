import CoworkDetail from '@/app/components/CoworkDetail';
import Header from '@/app/components/header';

export const IdCowork = async ({ params }: { params: { id: string } }) => {

    return (
        <div>
            <Header />
            {/* <div className='pt-[65px] lg:pt-0'> */}
            <CoworkDetail id={params.id} />
            {/* </div> */}
        </div >
    );
};

export default IdCowork;
