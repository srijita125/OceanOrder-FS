import UserRepository from "../repository/user-repository.js";

class UserService {
    constructor()  {
        this.userRepository = new UserRepository();
    }

    async signup(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Signup error: " + error);
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await this.userRepository.findBydata({email});            
            return user;
        } catch (error) {
            console.log("getUserByEmail error: " + error);
            throw error;   
        }
    }

    async signin(data) {
        try {
            const user = await this.getUserByEmail(data.email);
            if (user) {
                const isMatch = await user.comparePassword(data.password);
                if (isMatch) {
                    const token = user.genJWT();
                    return token;
                }
                else {
                    throw new Error("Password is not valid");
                }
            }
            else {
                throw new Error("User not found");
            }
        } catch (error) {
            console.log("signin error: " + error);
            throw new error;
        }
    }

}

export default UserService;