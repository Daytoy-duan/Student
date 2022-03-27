import React, { Component } from 'react' 
import StudentList from './Components/StudentList'
import StudentTitle from './Components/StudentTitle'
import AddStudent from './Components/AddStudent'

class App extends Component {
  // 定义状态用于管理学院信息
  state = {
     studentList: []
  }
  
  // 定义一个方法用于添加学生信息
  addList = (student,callback) =>{
     this.setState({
       studentList:[...this.state.studentList,student]
     },()=>{
       callback()
      //  console.log(this.state.studentList)
     })
  }
  // 定义删除
  removeStudent = (number) =>{
    // console.log('执行了删除',number)
    // 深拷贝数组
    const studentList = JSON.parse(JSON.stringify(this.state.studentList))
    // 找到number
    const index = studentList.find(student => number == student.number)
    // 从拷贝后的原数据中删除
    studentList.splice(index,1)
    // 更新数据
    this.setState({
      studentList
    })
  }
  render(){
    return (
      <div className='container'>
        <h1>学生信息系统</h1>
        <StudentTitle />
        <AddStudent addList = {this.addList} />
        <StudentList studentList = {this.state.studentList} removeStudent = {this.removeStudent} />
        
      </div>
    )
  }
}

export default App