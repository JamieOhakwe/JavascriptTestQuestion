// Arrow function = Compact alternative to a traditional function expression
let grades = [100, 70, 70, 80, 60]

const descendingSort = (grades)=>{
  return   grades.sort((a, b)=> b - a)
}

descendingSort(grades)

const print = (element)=>{
    console.log(element)
    }
    grades.forEach(print)
