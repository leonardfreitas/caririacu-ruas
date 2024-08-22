import { CreateStreetDTO } from "../dtos/CreateStreetDTO"
import { UpdateStreetDTO } from "../dtos/UpdateStreetDTO"

import { Street } from "../models/Street"

export interface DBStreetRepository {
  create: (data: CreateStreetDTO) => Promise<Street>
  update: (data: UpdateStreetDTO) => Promise<Street>
}
