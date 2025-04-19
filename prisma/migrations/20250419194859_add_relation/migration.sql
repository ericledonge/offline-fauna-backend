-- AddForeignKey
ALTER TABLE "Observation" ADD CONSTRAINT "Observation_faunaId_fkey" FOREIGN KEY ("faunaId") REFERENCES "Fauna"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
