import { Fauna, Observation } from "@prisma/client";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

import styles from "./FaunaList.module.css";
import DeleteButton from "./DeleteButton";

type FaunaListProps = {
  fauna: Fauna[];
  observations: Observation[];
};

export default function FaunaList({ fauna, observations }: FaunaListProps) {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>📝 Dernières Observations</h2>
          <DeleteButton />
        </div>
        <div className={styles.observationsList}>
          {observations.map((obs) => {
            const animal = fauna.find((f) => f.id === obs.faunaId);
            return (
              <div key={obs.id} className={styles.observationCard}>
                <div className={styles.observationHeader}>
                  <div className={styles.observationHeaderLeft}>
                    <div className={styles.observationAvatar}>
                      {animal?.icon}
                    </div>
                    <div>
                      <h3 className={styles.observationTitle}>
                        {animal?.name}
                      </h3>
                      <time className={styles.observationDate}>
                        {format(
                          new Date(obs.createdAt),
                          "d MMMM yyyy 'à' HH:mm",
                          {
                            locale: fr,
                          }
                        )}
                      </time>
                    </div>
                  </div>
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
