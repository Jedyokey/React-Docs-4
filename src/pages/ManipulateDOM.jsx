import React from 'react'
import Form from '../components/ManipulatingDOM/Form'
import CatFriends from '../components/ManipulatingDOM/CatFriends'
import MyForm from '../components/ManipulatingDOM/MyForm'
import TodoList from '../components/ManipulatingDOM/TodoList'
import MyCounter from '../components/ManipulatingDOM/MyCounter'
import VideoPlayer from '../components/ManipulatingDOM/Challenge1'
import Page from '../components/ManipulatingDOM/Challenge2'
import Challenge3 from '../components/ManipulatingDOM/Challenge3'

const ManipulateDOM = () => {
  return (
    <div>
        <h1>Manipulating the DOM with Refs</h1>
        <Form />
        <CatFriends />
        <MyForm />
        <TodoList />
        <MyCounter />
        <VideoPlayer />
        <Page />
        <Challenge3 />
    </div>
  )
}

export default ManipulateDOM
