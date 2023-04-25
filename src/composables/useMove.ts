import { ref } from "vue"

interface Emp {
  employeeId: number,
  supervisorId: number,
}

const movingEmployees = ref<Emp>({
  employeeId: 0,
  supervisorId: 0
})

const userList = ref({})

export const useMove = () => {

  const movingItems = (employeeId: number, supervisorID: number) => {
    movingEmployees.value!.employeeId = employeeId
    movingEmployees.value!.supervisorId = supervisorID
  }

  const getMovingEmployees = () => {
    return movingEmployees.value
  }

  const setUserList = (ceo: Employee) => {
    userList.value = ceo
  }

  const getUserList = () => {
    return userList.value
  }

  return {
    movingItems,
    getMovingEmployees,
    setUserList,
    getUserList
  }
}