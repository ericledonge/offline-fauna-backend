import { Fauna, Observation } from "@prisma/client";
import styles from "./FaunaList.module.css";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface FaunaListProps {
  fauna: Fauna[];
  observations: Observation[];
}

export default function FaunaList({ fauna, observations }: FaunaListProps) {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🦊 Espèces Disponibles</h2>
        <div className={styles.grid}>
          {fauna.map((animal) => (
            <div key={animal.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.animalName}>{animal.name}</h3>
                <p className={styles.animalId}>ID: {animal.id}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>📝 Dernières Observations</h2>
        <div className={styles.observationsList}>
          {observations.map((obs) => {
            const animal = fauna.find((f) => f.id === obs.faunaId);
            return (
              <div key={obs.id} className={styles.observationCard}>
                <div className={styles.observationHeader}>
                  <h3 className={styles.observationTitle}>{animal?.name}</h3>
                  <time className={styles.observationDate}>
                    {format(new Date(obs.createdAt), "d MMMM yyyy 'à' HH:mm", {
                      locale: fr,
                    })}
                  </time>
                </div>
                <p className={styles.observationDescription}>
                  {obs.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
