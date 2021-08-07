
 export class Employee {

   

    constructor(
        private _id: string, 
        public name: string, 
        public surname: string, 
        public birthdate: string, 
        public photoUrl: String = "/src/assets/img_avatar.png"
        )
        {}


    get id(){
        return this._id;
    }
    
    

}