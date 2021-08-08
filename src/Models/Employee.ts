
 export class Employee {

    public name: string 
    public surname: string
    public birthdate: Date
    public photoUrl: string = "/src/assets/img_avatar.png"

    constructor(
        private _id: string, name: string, surname: string, inputBirthdate: String, photoUrl: string){

            this.name = name;
            this.surname = surname;
            this.birthdate = new Date((Number)(inputBirthdate.slice(0, 4)), (Number)(inputBirthdate.slice(6,7) +1), (Number)(inputBirthdate.slice(8,10)));
            this.photoUrl = photoUrl;

        }


    get id(){
        return this._id;
    }

    
    
    

}
