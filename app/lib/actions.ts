'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function ChangeStatusCoworking({
  id,
  token,
  currentStatus,
}: {
  id: string;
  token?: string;
  currentStatus?: string;
}) {
  console.log(currentStatus);
  const response = await fetch(`http://localhost:3000/coworkings/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(
      currentStatus === 'active'
        ? { status: 'inactive' }
        : { status: 'active' },
    ),
  });
  const data = await response.json();
  console.log(data);

  revalidatePath('/dashboard/superadmin/coworkings');
  redirect('/dashboard/superadmin/coworkings');
}

export async function ChangeStatusCompany({
  id,
  token,
}: {
  id: string;
  token?: string;
}) {
  const response = await fetch(`http://localhost:3000/companies/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status: 'inactive' }),
  });
  const data = await response.json();
  console.log(data);

  revalidatePath('/dashboard/superadmin/companies');
  redirect('/dashboard/superadmin/companies');
}
