<<<<<<< HEAD
import { User } from "../types/User";
import { api } from "./api";
=======
import { api } from "./api";
import { User } from "../types/User";
>>>>>>> 7e2c61658d1d8bf01c86cde16651a3c223c648dc

export async function getUsers() {
    const response = await api.get<User[]>("/users");
    return response.data;
<<<<<<< HEAD
=======

>>>>>>> 7e2c61658d1d8bf01c86cde16651a3c223c648dc
}