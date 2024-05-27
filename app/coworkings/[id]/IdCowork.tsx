import CoworkDetail from '@/app/components/CoworkDetail';
import Header from '@/app/components/header';

export const IdCowork = async ({ params }: { params: { id: string } }) => {

    return (
        <div>
            <Header />
            <CoworkDetail id={params.id} />
        </div >
    );
};

export default IdCowork;
