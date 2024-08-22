import { CreateStreetDTO } from "@domain/streets/dtos/CreateStreetDTO";
import { UpdateStreetDTO } from "@domain/streets/dtos/UpdateStreetDTO";
import { Street } from "@domain/streets/models/Street";
import { DBStreetRepository } from "@domain/streets/repositories/DBStreetRepository";

const streets: Street[] = []

export class PrismaStreetRepository implements DBStreetRepository {
  public async create(data: CreateStreetDTO): Promise<Street> {
    streets.push({ id: 'asd', name: data.name, createdAt: new Date(), updatedAt: new Date })
    return streets[0]
  }

  public async update(data: UpdateStreetDTO): Promise<Street> {
    return {} as Street
  }
}
