import { DepartmentType } from '../enums/DepartmentType';
import { WorkerType } from '../enums/WorkerType';

export class Worker {
  public id: number;
  public name: string;
  public lastName: string;
  public phoneNumber: string;
  public address: string;
  public gender: string;
  public department: DepartmentType;
  public workerType: WorkerType;

  constructor(
    id: number,
    name: string,
    lastName: string,
    phoneNumber: string,
    address: string,
    gender: string,
    department: DepartmentType,
    workerType: WorkerType
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.gender = gender;
    this.department = department;
    this.workerType = workerType;
  }
}
