"use server";

import { prisma } from "@/lib/prisma";

export async function deleteAllObservations() {
  await prisma.observation.deleteMany();
  return true;
}
