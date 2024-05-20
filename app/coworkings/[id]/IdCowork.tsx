import CoworkDetail from '@/app/components/CoworkDetail';
import getCowork from './getCowork';
import Header from '@/app/components/header';

// interface Cowork {
//     id: string;
//     name: string;
//     description: string;
// }

export const IdCowork = async ({ params }: { params: { id: string } }) => {

    const cowork = await getCowork(params.id);
    return (
        <div>
            {cowork ? (<>
                <Header />
                <div className="">
                    <CoworkDetail {...cowork} />
                </div>
            </>
            ) : (
                <div className="flex h-[40rem] w-full items-center justify-center">
                    <div className="flex-col gap-4 w-full flex items-center justify-center">
                        <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-green-600 rounded-full">
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IdCowork;
