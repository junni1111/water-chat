import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { fid: 'Admin' },
    update: {
      email: 'test',
    },
    create: {
      fid: 'Admin',
      email: 'aa@test.com',
    },
  });

  console.log({ user });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
