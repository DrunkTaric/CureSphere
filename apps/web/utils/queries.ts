import { User, UserType } from "@prisma/client"
import { PrismaClient } from "@prisma/client"

export async function getPatient() {
  const prisma = new PrismaClient()
  const patient: User | null = await prisma.user.findFirst({
    where: {
      userType: UserType.PATIENT
    }
  })

  return patient
}
