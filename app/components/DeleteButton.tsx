"use client";

import { deleteAllObservations } from "../actions";
import styles from "./FaunaList.module.css";

export default function DeleteButton() {
  const handleDeleteAll = async () => {
    await deleteAllObservations();
    window.location.reload();
  };

  return (
    <button onClick={handleDeleteAll} className={styles.deleteButton}>
      🗑️ Supprimer toutes les observations
    </button>
  );
}
