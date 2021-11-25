export interface IDepartment {
    title: string,
    id: string,
    link: string,
    subDepartments?: IDepartment[]

}

export const defaultDepartment: IDepartment = {
    title: 'default',
    id: '1',
    link: 'default',
    subDepartments: [
        {
            title: 'def2',
            id: '2',
            link: 'default/def2'
        }
    ]
}