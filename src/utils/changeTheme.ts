'use server';
import { setTheme } from '@/data-access/nav-therne';
import { revalidatePath } from 'next/cache';

export default async function changeTheme(theme: 'dark' | 'light') {
  await	theme === 'light' ? setTheme(theme as 'light') : setTheme(theme as 'dark');
}
