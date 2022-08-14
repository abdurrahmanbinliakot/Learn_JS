class Faculty{
    constructor(fac_name, fac_stablished){
        this.fac_name=fac_name;
        this.fac_stablished=fac_stablished;
    }
    get showFacultyName(){
        return this.fac_name
    }

    set changeStablishedDate(y){
        this.fac_stablished=y;
    }
}
// class Department{
//     constructor(dept_name,dept_stablished){ 
//     }
// }
class Department extends Faculty{
    constructor(fac_name,fac_stablished,dept_name,dept_stablished){
        super()

    }
}

faculty_1=new Faculty('Faculty of Theology and Islamic Studies',1980)
faculty_2=new Faculty('Faculty of Arts',1981)
faculty_3=new Faculty('Faculty of Social Sciences',1982)
faculty_4=new Faculty('Faculty of Law:',1983)
faculty_5=new Faculty('Faculty of Business Administration',1984)


console.log(faculty_3.showFacultyName)