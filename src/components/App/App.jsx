import { useState } from 'react'
import styles from './App.module.css'
import { Profile } from '../Profile/Profile'
import { TaskTitle } from '../TaskTitle/TaskTitle'
import { FriendList } from '../FriendList/FriendList'
import { TransactionHistory } from '../TransactionHistory/TransactionHistory'
import userData from '../../userData.json'
import friendsList from '../../friendsList.json'
import transactions from '../../transactions.json'

export const App = () => {
  return (
    <>
      <TaskTitle>Task №1</TaskTitle>
      <Profile userData={userData}/>
      <hr />
      <TaskTitle>Task №2</TaskTitle>
      <FriendList friends={friendsList} />
      <hr />
      <TaskTitle>Task №3</TaskTitle>
      <TransactionHistory transactions={transactions} />
      <hr />
    </>
  )
}


