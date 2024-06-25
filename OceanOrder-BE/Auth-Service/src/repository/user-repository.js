import User from "../models/user.js";
import CrudRepository from "../repository/crud-repository.js";
class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    } 
    
    async findBydata(data) {
        try {
            const result = await User.findOne(data);
            return result;
        } catch (error) {   
            console.log("Something went wrong in User Repository", error);
            throw new Error(error);
        }
    }
}

export default UserRepository;