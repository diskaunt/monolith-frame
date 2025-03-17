"use server"

import { setLoaded } from "@/data-access/loaded"
import { revalidatePath } from "next/cache";

const loadUpdater = async () => {
	await setLoaded(true);
	revalidatePath("/");
}
export default loadUpdater;