'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function ChangeStatusCoworking({
  id,
  token,
}: {
  id: string;
  token?: string;
}) {
  const response = await fetch(`http://localhost:3000/coworkings/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status: 'inactive' }),
  });
  const data = await response.json();

  revalidatePath('/dashboard/superadmin/coworkings');
  redirect('/dashboard/superadmin/coworkings');
}
