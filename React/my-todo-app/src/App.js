import React, { useCallback, useState } from 'react'
import './App.css';
import Form from './components/Form';
import Lists from "./components/Lists.js"
// render() method가 존재하지 않음
// JSX return

export default function App() {

  console.log("app component 실행");
  
  const [todoData, setTodoData] = useState(
    [
      {
        id : "1",
        title : '운동하기',
        completed : false,
        edited : false
      }, 
    ]
  );

  const [value, setValue] = useState("");
 
  const deleteClick =useCallback((id) => {
    const newTodoData = todoData.filter(data=>data.id !== id)
    setTodoData(newTodoData)
  }, [todoData]) 

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg: max-w-lg">
            <div className="flex justify-between mb-3">
                <h1>오늘의 할 일</h1>
            </div>


            <Lists todoData={todoData} 
              setTodoData={setTodoData} 
              deleteClick={deleteClick}/>

            <Form todoData={todoData} 
              setTodoData={setTodoData}  
              value={value} setValue={setValue} />

        </div>
    </div>
)


}
