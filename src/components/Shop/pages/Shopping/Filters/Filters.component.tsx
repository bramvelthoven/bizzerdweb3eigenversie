import React, { Component } from 'react'
import FilterMenu from './FilterMenu/FilterMenu.component';
import { RouteComponentProps, withRouter} from 'react-router-dom';
import { DepartmentService } from '../../../../../services/Department/Department.service';
import {IDepartment} from "../../../../../services/interfaces/IDepartment.interface";

type filterState = {
    departments: IDepartment[],
    department?: IDepartment,
    subDepartmentsSelected: string[]
}

class Filters extends Component<RouteComponentProps, filterState>{

    departmentService: DepartmentService;
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            departments: [],
            department: undefined,
            subDepartmentsSelected: []
        }
        this.departmentService = new DepartmentService();

        this.departmentService.getTopDepartments().then((departments => this.setState({departments})));
        this.renderDepartments = this.renderDepartments.bind(this);
        this.clickDepartment = this.clickDepartment.bind(this);

    }

    async componentDidMount() {
       await this.selectDepartment();
       await this.selectSubDepartments();
    }

    async selectDepartment() {
        const searchParams = new URLSearchParams(this.props.history.location.search);
        const department = searchParams.get('category');
        if(department !== null){
            const departmentObject = await this.departmentService.findDepartment(department)
            this.setState({
                department: departmentObject

            })
        } else {
            this.departmentService.getTopDepartments().then((departments => this.setState({departments})));
        }
    }
    selectSubDepartments() {
        const searchParams = new URLSearchParams(this.props.history.location.search);
        const subDepartmentsString = searchParams.get('subDepartmentsSelected');
        if(subDepartmentsString) {
            const subDepartmentsSelected = subDepartmentsString.split(',');
            this.setState({subDepartmentsSelected})
        }
    }
    clickSubDepartment(departmentLink: string, checked: boolean) {
        console.log(departmentLink)

        if(checked) {
            this.state.subDepartmentsSelected.push(departmentLink)
        } else {
            const index = this.state.subDepartmentsSelected.indexOf(departmentLink)
            if (index >= 0) {
                this.state.subDepartmentsSelected.splice(index,1)
            }
        }
        const params = new URLSearchParams(this.props.history.location.search)
        params.set('subDepartmentsSelected',this.state.subDepartmentsSelected.join(','));
        this.props.history.push({
            pathname:`${this.props.location.pathname}`,
            search: params.toString()
        })
        this.selectSubDepartments();
    }
    isSelected(link: string) {
        return this.state.subDepartmentsSelected.findIndex(x =>  x === link) >= 0;
    }
    clickDepartment(link: string) {
        const params = new URLSearchParams(this.props.history.location.search)
        params.set('category',link);


        this.props.history.push({
            pathname:`${this.props.location.pathname}`,
            search: params.toString()
        })
        this.selectDepartment();
        console.log(this.props.location);
        console.log(this.props.history)
    }

    renderDepartments(): JSX.Element {
        if (this.state.department != undefined) {
            const subDepartments = this.state.department.subDepartments
            if (subDepartments && subDepartments.length > 0) {
                return <ul>
                    {subDepartments.map((department: IDepartment) => {
                        return <li key={department.title}>
                            <label>
                            <input
                                type="checkbox"
                                value={department.link}
                                onChange={event => this.clickSubDepartment(department.link, event.target.checked)}
                                checked={this.isSelected(department.link)}
                            />
                            {department.title}
                            </label>
                        </li>
                    })
                    }
                </ul>
            } else {
                return <ul>bedenk hier iets voor</ul>
            }
        } else
            return <ul>
                {this.state.departments.map((department) => {
                    return <li key={department.title}
                               onClick={() => this.clickDepartment(department.link)}>{department.title}
                        <span>count</span></li>
                })}
            </ul>
    }
    render() : JSX.Element {
        return (
            <div className="filterContainer">
               <section>

                    <FilterMenu title={'Populair'}>
                        <ul>
                            <li>Meest gekozen <span>count</span></li>
                            <li>Nieuwst toegevoegd <span>count</span></li>
                        </ul>
                    </FilterMenu>
                   <FilterMenu title={'Branches'} open>
                       {this.renderDepartments()}
                   </FilterMenu>
                   <FilterMenu title={'Afbeelding'}>
                       <ul>
                           <li>Meest gekozen <span>count</span></li>
                           <li>Nieuwst toegevoegd <span>count</span></li>
                       </ul>
                   </FilterMenu>
               </section>
            </div>
        )
    }

}

export default withRouter(Filters);