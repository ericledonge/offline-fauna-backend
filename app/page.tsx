export const dynamic = "force-dynamic";
export const revalidate = 0;

import { prisma } from "@/lib/prisma";

import FaunaList from "./components/FaunaList";
import styles from "./page.module.css";

export default async function Home() {
  const fauna = await prisma.fauna.findMany();

  const observations = await prisma.observation.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
  });

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Observations de Faune</h1>
      <FaunaList fauna={fauna} observations={observations} />
    </main>
  );
}
