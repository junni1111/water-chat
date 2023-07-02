import { prisma } from '@/lib/prisma';

export default async function Home() {
  let users = await prisma.user.findMany();
  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: 20,
        }}
      >
        {users.map((user: any) => (
          <div
            key={user.id}
            style={{ border: '1px solid #ccc', textAlign: 'center' }}
          >
            <h3>{user.fid}</h3>
            <h3>{user.email}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
