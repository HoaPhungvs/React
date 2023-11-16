import instance from "./instance";
import { IUser } from "../type/user";
const getAllUser = () => {
    return instance.get('/users')
}
const getOneUser = (id: number) => {
    return instance.get('/users/' + id)
}
const addUser = (user: IUser) => {
    return instance.post('/users', user)
}
const deleteUser = (id: number) => {
    return instance.delete('/users/' + id)
}
const updateUser = (user: IUser) => {
    return instance.put('/users/' + user.id, user)
}

export { getAllUser, getOneUser, addUser, deleteUser, updateUser }