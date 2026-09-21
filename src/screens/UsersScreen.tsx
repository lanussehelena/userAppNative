<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { User } from "../types/User";
=======
import { Text, View } from "react-native/types_generated/index";
import { User } from "../types/User";
import { useEffect, useState } from "react";
>>>>>>> 7e2c61658d1d8bf01c86cde16651a3c223c648dc
import { getUsers } from "../services/userService";

export default function UsersScreen() {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError(false);

            const data = await getUsers();
<<<<<<< HEAD

            setUsers(data);
        }
        catch (error) {
            setError(true);
        }
=======
            setUsers(data);

        } catch (error) {
            setError(true);
        }

>>>>>>> 7e2c61658d1d8bf01c86cde16651a3c223c648dc
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

<<<<<<< HEAD
    return (
=======
    return (    
>>>>>>> 7e2c61658d1d8bf01c86cde16651a3c223c648dc
        <View>
            <Text>Users Screen</Text>
        </View>
    );
}