import instance from "./instance";
import { ICate } from "../type/cate";
const getAllCate = () => {
    return instance.get('/categories')
}
const getOneCate = (id: number) => {
    return instance.get('/categories/' + id)
}
const addCate = (cate: ICate) => {
    return instance.post('/categories', cate)
}
const deleteCate = (id: number) => {
    return instance.delete('/categories/' + id)
}
const updateCate = (cate: ICate) => {
    return instance.put('/categories/' + cate.id, cate)
}

export { getAllCate, getOneCate, addCate, deleteCate, updateCate }