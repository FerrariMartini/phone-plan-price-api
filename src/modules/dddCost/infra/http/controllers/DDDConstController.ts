import { Request, Response } from "express";
import { container } from "tsyringe";
import FindAllDDDCostService from "@modules/dddCost/services/FindAllDDDCostService";
import CreateDDDCostService from "@modules/dddCost/services/CreateDDDCostService";

export default class DDDCostController {
  public async findAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    const findAllDDDCostService = container.resolve(FindAllDDDCostService);

    const findAll = await findAllDDDCostService.execute();

    return response.status(200).json(findAll);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { dddOrigin, dddDestination, priceMinute } = request.body;

    const createDDDCostService = container.resolve(CreateDDDCostService);

    const newDDDCost = await createDDDCostService.execute({
      dddOrigin,
      dddDestination,
      priceMinute,
    });

    return response.status(200).json(newDDDCost);
  }
}
