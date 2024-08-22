import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateStreetService } from '@domain/streets/services/CreateStreetService'

export class StreetController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body
    const createStreetService = container.resolve(CreateStreetService)
    const payload = await createStreetService.execute({ name })
    return response.json(payload)
  }
}
