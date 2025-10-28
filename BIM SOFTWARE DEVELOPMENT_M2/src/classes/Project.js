export class Project {
    name
    description
    status
    userRole
    finishDate

    constructor(data) {
        this.name = data.name
        this.description = data.description
        this.status = data.status
        this.userRole = data.role
        this.finishDate = data.finishDate
    }
}