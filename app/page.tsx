import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const prisma = new PrismaClient();

async function getFauna() {
  return await prisma.fauna.findMany();
}

async function getObservations() {
  return await prisma.observation.findMany({
    include: {
      fauna: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export default async function Home() {
  const [fauna, observations] = await Promise.all([
    getFauna(),
    getObservations(),
  ]);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Observations de Faune</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Espèces Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {fauna.map((animal) => (
            <div key={animal.id} className="p-4 border rounded-lg shadow">
              <div className="text-4xl mb-2">{animal.icon}</div>
              <h3 className="text-xl font-medium">{animal.name}</h3>
              <p className="text-sm text-gray-500">ID: {animal.id}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Dernières Observations</h2>
        <div className="space-y-4">
          {observations.map((observation) => (
            <div key={observation.id} className="p-4 border rounded-lg shadow">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{observation.fauna.icon}</span>
                <h3 className="text-xl font-medium">
                  {observation.fauna.name}
                </h3>
              </div>
              <p className="text-gray-700 mb-2">{observation.description}</p>
              <p className="text-sm text-gray-500">
                Observé le{" "}
                {format(observation.createdAt, "PPP", { locale: fr })}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
