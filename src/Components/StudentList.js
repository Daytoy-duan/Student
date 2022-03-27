import React, { Component } from 'react' 

class StudentList extends Component {

  rmStudent = (index,ev) => {
      ev.preventDefault()
      if(window.confirm('是否确认删除')){
        this.props.removeStudent(index)
      }
    //   console.log('rmStudentList被执行了',index)
  }
  render(){
      const { studentList } = this.props
    //   定义变量，存放平均年纪
      let average = 0
      // 定义变量存放总成绩
      let ageAll = 0
      studentList.forEach(student => {
        ageAll += Number(student.age)
      });
      average = Math.floor(ageAll / studentList.length)
    return (
        <div className="col-md-6 col-md-offset-1">
        <table className="table table-striped table-hover">
            <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>年龄</th>
                <th>爱好</th>
                <th>所属学院</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            {
                studentList.map(student => {
                    return (
                        <tr key={student.number}>
                          <td>{student.number}</td>
                          <td>{student.name}</td>
                          <td>{student.sex}</td>
                          <td>{student.age}</td>
                          <td>
                              <span>{student.hobbies}</span>
                          </td>
                          <td>{student.college}</td>
                          <td>
                              <a href="#" onClick={(ev) => {this.rmStudent(`${student.number}`,ev)}}>删除</a>
                              
                          </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        {studentList.length > 0 ? null:<p className="text-center">无学生信息</p>}
        <p>总共有{studentList.length} 个学生</p>
        <p>学生的平均年龄是 {average}</p>
    </div>
    )
  }
}

export default StudentList