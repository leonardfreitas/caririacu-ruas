import { inject, injectable } from "tsyringe";

import { CreateStreetDTO } from "../dtos/CreateStreetDTO";

import { Street } from "../models/Street";
import { DBStreetRepository } from "../repositories/DBStreetRepository";

@injectable()
export class CreateStreetService {

  constructor(
    @inject('DBStreetRepository')
    private readonly dbStreetRepository: DBStreetRepository
  ) {}

  public async execute(data: CreateStreetDTO): Promise<Street> {
    const street = await this.dbStreetRepository.create(data)
    return street
  }
}
