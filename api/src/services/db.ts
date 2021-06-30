import { PrismaClient } from ".prisma/client";
const client = new PrismaClient();

// db access
class DBClient { 
  async addUser(name: string, email: string): Promise<void> {
    await client.user.create({
      data: {
        name,
        email
      }
    })
    
  }
}

export default DBClient