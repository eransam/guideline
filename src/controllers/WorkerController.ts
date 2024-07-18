import { Request, Response } from 'express';
import { Worker } from '../models/Worker';
import { DepartmentType } from '../enums/DepartmentType';
import { WorkerType } from '../enums/WorkerType';

class WorkerController {
  private workers: Worker[];

  constructor() {
    this.workers = [
      new Worker(1, 'John', 'Doe', '123-456-7890', '123 Main St', 'Male', DepartmentType.Engineering, WorkerType.Professional),
      new Worker(2, 'Jane', 'Smith', '987-654-3210', '456 Elm St', 'Female', DepartmentType.Sales, WorkerType.TeamManager),
      new Worker(3, 'Mike', 'Johnson', '555-555-5555', '789 Oak St', 'Male', DepartmentType.Accounting, WorkerType.DepartmentManager)
    ];
  }

  public getWorkerList = (req: Request, res: Response): void => {
    res.json(this.workers);
  };
}

export const workerController = new WorkerController();
