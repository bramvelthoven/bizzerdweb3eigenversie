import { IProduct, defaultProduct } from '../interfaces/IProduct.interface';
import {defaultDepartment, IDepartment} from "../interfaces/IDepartment.interface";
import {departments} from "./departments";
export class DepartmentService {

  constructor() {
  //init
  }

  async getTopDepartments( amount = 15): Promise<IDepartment[]> {

    return departments.map(x =>  {return {link: x.link, id: x.id, title: x.title}});
  }
async findDepartment(link: string):Promise<IDepartment> {
    return departments.filter(x => x.link == link)[0]
}


}