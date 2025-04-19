import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create test fauna data
  const testFauna = [
    { name: "Renard roux", icon: "🦊" },
    { name: "Cerf", icon: "🦌" },
    { name: "Sanglier", icon: "🐗" },
    { name: "Écureuil", icon: "🐿️" },
  ];

  for (const fauna of testFauna) {
    await prisma.fauna.create({
      data: fauna,
    });
  }

  console.log("Seed data created successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
