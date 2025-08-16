import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskLisk from '../TaskList/TaskLisk'

const EmployeeDashboard = () => {
  return (
    <div className='bg-gray-200 h-screen p-10'>
        <Header  />
        <TaskListNumber />
        <TaskLisk />
    </div>
  )
}

export default EmployeeDashboard