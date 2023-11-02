class personInfo {
    private readonly name: string;
    private readonly age: number;
    private readonly office: string;
    constructor(name: string, age: number, office: string) {
        this.name = name;
        this.age = age;
        this.office = office;
    }

    greeting(){
        console.log("Hello, "+this.name)
    }


}

const info:string|null = window.prompt("enter your information");

if(info!==null){
    const yourInfo:string[] = info.split(",");
    const information: personInfo = new personInfo(yourInfo[0],Number(yourInfo[1]), yourInfo[2])
    information.greeting()
}else{
    console.log("You didn't enter any information.");
}


