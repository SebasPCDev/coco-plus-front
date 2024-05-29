'use server';

const url = process.env.NEXT_PUBLIC_API_URL;

import { axiosApi } from '@/utils/api/api';
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
  const response = await fetch(`${url}/coworkings/${id}`, {
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
  const response = await fetch(`${url}/companies/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status: 'inactive' }),
  });
  const data = await response.json();

  revalidatePath('/dashboard/superadmin/companies');
  redirect('/dashboard/superadmin/companies');
}

export async function putDataCoworking({
  token,
  modifiedData,
  id,
}: {
  id: string;
  token?: string;
  modifiedData: {};
}) {
  const response = await fetch(`${url}/coworkings/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(modifiedData),
  });
  const data = await response.json();

  revalidatePath('/dashboard/superadmin/coworkings');
  redirect('/dashboard/superadmin/coworkings');
}

export async function checkInBookingUser({ id }: { id: string }) {
  try {
    const response = await axiosApi.put(`/users/checkIn/${id}`);
    revalidatePath('/dashboard/employee/bookingsHistory');
  } catch (error: any) {
    let message = '';
    if (error.response && error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    throw message;
  }
}

export async function cancelBookingUser({ id }: { id: string }) {
  try {
    const response = await axiosApi.put(`/bookings/cancel/${id}`);
    revalidatePath('/dashboard/employee/bookingsHistory');
  } catch (error: any) {
    let message = '';
    if (error.response && error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    throw message;
  }
}

export async function checkInBookingCoworking({ id }: { id: string }) {
  try {
    const response = await axiosApi.put(`/coworkings/checkIn/${id}`);
    revalidatePath('/dashboard/coworkings/bookingsList');
  } catch (error: any) {
    let message = '';
    if (error.response && error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    throw message;
  }
}

export async function cancelBookingCoworking({ id }: { id: string }) {
  try {
    const response = await axiosApi.put(`/bookings/cancel/${id}`);
    revalidatePath('/dashboard/coworkings/bookingsList');
  } catch (error: any) {
    let message = '';
    if (error.response && error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    throw message;
  }
}

export async function approveBookingCoworking({
  coworkId,
  bookingId,
}: {
  coworkId: string;
  bookingId: string;
}) {
  try {
    const response = await axiosApi.put(
      `/coworkings/${coworkId}/booking/${bookingId}`,
      { status: 'active' },
    );
    revalidatePath('/dashboard/coworking/bookingsList');
  } catch (error: any) {
    let message = '';
    if (error.response && error.response.data.message) {
      message = error.response.data.message;
    } else {
      message = error.message;
    }
    throw message;
  }
}
