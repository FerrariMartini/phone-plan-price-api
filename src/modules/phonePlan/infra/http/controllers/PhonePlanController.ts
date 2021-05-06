import { Request, Response } from "express";
import { container } from "tsyringe";
import FindAllPlanService from "@modules/phonePlan/services/FindAllPhonePlanService";
import CreatePlanService from "@modules/phonePlan/services/CreatePhonePlanService";

export default class PhonePlanController {
  public async findAll(
    request: Request,
    response: Response
  ): Promise<Response> {
    const findAllDDDCostService = container.resolve(FindAllPlanService);

    const findAll = await findAllDDDCostService.execute();

    return response.status(200).json(findAll);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { phonePlanCode, type, callFreeMinutes, description } = request.body;

    const createPlanService = container.resolve(CreatePlanService);

    const newPhonePla = await createPlanService.execute({
      phonePlanCode,
      type,
      callFreeMinutes,
      description,
    });

    return response.status(200).json(newPhonePla);
  }
}
