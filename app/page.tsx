export const dynamic = "force-dynamic";
export const revalidate = 0;

import { prisma } from "@/lib/prisma";
import FaunaList from "./components/FaunaList";
import styles from "./page.module.css";

export default async function Home() {
  console.log("Page rendering at:", new Date().toISOString());

  const fauna = await prisma.fauna.findMany();
  console.log("Fauna fetched:", fauna.length, "items");

  const observations = await prisma.observation.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
  });
  console.log("Observations fetched:", observations.length, "items");
  console.log("Latest observation:", observations[0]);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Observations de Faune</h1>
      <FaunaList fauna={fauna} observations={observations} />
    </main>
  );
}
