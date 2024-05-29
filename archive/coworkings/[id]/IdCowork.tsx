"use client";
import { useState, useEffect } from 'react';
import CoworkDetail from '@/app/components/CoworkDetail';
import getCowork from './getCowork';

interface Cowork {
  id: string;
  name: string;
  description: string;
}

export const IdCowork = ({ params } : { params: { id: string } }) => {
    const [cowork, setCowork] = useState<Cowork | null>(null);
    const [redirect, setRedirect] = useState<boolean>(false);

    useEffect(() => {
        const fetchCowork = async () => {
            try {
                const item = await getCowork(params.id);
                setCowork(item);
            } catch (error) {
                console.error('Error fetching cowork:', error);
                setCowork(null);
            }
        };

        fetchCowork();
    }, [params.id]);

    useEffect(() => {
        if (cowork === undefined) {
            setRedirect(true);
        }
    }, [cowork]);

    if (redirect) {
        window.location.href = '/404';
        return null;
    }

    return (
        <div>
            {cowork ? (
                <div className="">
                    <CoworkDetail {...cowork}/>
                </div>
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
