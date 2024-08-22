import { container } from "tsyringe";

import { DBStreetRepository } from "@domain/streets/repositories/DBStreetRepository";
import { PrismaStreetRepository } from "@infra/database/prisma/repositories/PrismaStreetRepository";

container.register<DBStreetRepository>('DBStreetRepository', PrismaStreetRepository)
