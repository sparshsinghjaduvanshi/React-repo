import { useState } from 'react'
import AddTodo from './components/AddTodos'
import Todos from './components/Todos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React ReduxToolKit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App




// Redux toolkit ki notes
// 1. Create Store - single source of truth
// it has configureStore
// introduce reducer

// 2. Create Slice(functions) method(createSlice)
// Slice has name, initialState, reducers :{key: function}
// Access of two things (State, action)
// state = state value in the store
// action = action.payload 
// export individual functionality 
// export main source export

// 3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
//  dispatch(addTodo())

// 4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
// variable me values lelo ek baar aagaie uske baad pure JS concept hai 

// Note: Todo's Project basic nai hote xD  :)