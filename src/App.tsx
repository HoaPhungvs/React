import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { addProduct, deleteProduct, getAllProduct, getOneProduct, updateProduct } from './api/product'

import AdminPage from './layout/Admin'

import { addCate, deleteCate, getAllCate, updateCate } from './api/cate'

import UserPage from './layout/User'

import { IProduct } from './type/product'
import { ICate } from './type/cate'
import HomePage from './page/HomePage'
import ProductPage from './page/Product'
import DetailProduct from './page/ProductDetail'
import ProductManagementPage from './page/Admin/Product/List'
import AddProductPage from './page/Admin/Product/Add'
import UpdateProductPage from './page/Admin/Product/Update'
import CateManagementPage from './page/Admin/Cate/List'
import AddCatePage from './page/Admin/Cate/Add'
import UpdateCatePage from './page/Admin/Cate/Update'


function App() {


  // Products
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data))
  }, [])


  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProducts(products.filter((item: IProduct) => item.id !== id)))
  }

  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }
  const onHandleDetailProduct = (id: number) => {
    getOneProduct(id).then(() => setProducts(products.filter((item: IProduct) => item.id !== id)))

  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }


  // cate 
  const [cates, setCates] = useState<ICate[]>([])
  useEffect(() => {
    getAllCate().then(({ data }) => setCates(data))
  }, [])


  const onHandleRemoveCate = (id: number) => {
    deleteCate(id).then(() => setCates(products.filter((item: ICate) => item.id !== id)))
  }

  const onHandleAddCate = (cate: ICate) => {
    addCate(cate).then(() => getAllCate().then(({ data }) => setCates(data)))
  }

  const onHandleUpdateCate = (cate: ICate) => {
    updateCate(cate).then(() => getAllCate().then(({ data }) => setCates(data)))
  }

  // User
  // const [users, setUsers] = useState<IUser[]>([])
  // useEffect(() => {
  //   getAllUser().then(({ data }) => setUsers(data))
  // }, [])
  // const onHandleRemoveUser = (id: number) => {
  //   deleteUser(id).then(() => setUsers(users.filter((item: IUser) => item.id !== id)))
  // }
  // const onHandleAddUser = (user: IUser) => {
  //   addUser(user).then(() => getAllUser().then(({ data }) => setUsers(data)))
  // }
  // const onHandleUpdateUser = (user: IUser) => {
  //   updateUser(user).then(() => getAllUser().then(({ data }) => setUsers(data)))
  // }




  return (

    <Routes>
      <Route path='/' element={<UserPage />} >
        <Route index element={<HomePage products={products} />} />
        <Route path='products' element={<ProductPage products={products} cate={cates} />} />
        <Route path='products/:id' element={<DetailProduct products={products} onDetail={onHandleDetailProduct} />} />

        {/* <Route path='register' element={<RegisterPage onAdd={onHandleAddUser} />} />
        <Route path='login' element={<LoginPage />} /> */}
      </Route>
      <Route path='/admin' element={<AdminPage />} >

        {/* Product */}
        <Route path='products'>
          <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
          <Route path='add' element={<AddProductPage categories={cates} onAdd={onHandleAdd} />} />
          <Route path=':id/update' element={<UpdateProductPage categories={cates} onUpdate={onHandleUpdate} products={products} />} />
        </Route>

        {/* Cate */}
        <Route path='cate'>
          <Route index element={<CateManagementPage categories={cates} onRemove={onHandleRemoveCate} />} />
          <Route path='add' element={<AddCatePage onAdd={onHandleAddCate} />} />
          <Route path=':id/update' element={<UpdateCatePage onUpdate={onHandleUpdateCate} cates={cates} />} />
        </Route>

        {/* User */}
        {/* <Route path='user'>
            <Route index element={<UserManagementPage users={users} onRemove={onHandleRemoveUser} />} />
            <Route path='add' element={<AddUserPage  onAdd={onHandleAddUser} />} />
            <Route path=':id/update' element={<UpdateUserPage users={users}  onUpdate={onHandleUpdateUser}  />} />
          </Route> */}

      </Route>
    </Routes>

  )
}

export default App