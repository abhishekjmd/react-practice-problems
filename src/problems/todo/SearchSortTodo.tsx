// ✅ Problem 4: Search & Sort Todos

// Problem Statement:
// Enhance the Todo app to support searching and sorting.

// Requirements:
// Add a search bar that filters todos dynamically by text.

// Add a dropdown to sort todos:
// Newest first
// Oldest first
// Keep all previous features.

// Bonus:
// Persist the search query and sorting preference in localStorage.




import { useEffect, useState } from "react"

type todo = {
  id: number,
  text: string
}

export default function SearchSortTodo() {
  const [todo, setTodo] = useState<todo[]>([]);
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [filter,setFilter] = useState('filter todos')

  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem('todo')) || [];
    setTodo(savedTodo)
  }, [])

  const handleAddTodo = () => {
    if (!text.trim()) return;
    const time = new Date().toISOString();
    const todoObject = {
      id: Date.now(),
      text,
      createdAt: time
    }

    localStorage.setItem('todo', JSON.stringify([...todo, todoObject]));
    setTodo([...todo, todoObject])

  }

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todo.filter(val => val.id !== id);
    localStorage.setItem('todo', JSON.stringify(updatedTodos));
    setTodo(updatedTodos)


  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      if (text.length > 0) {
        handleAddTodo();
        setText('')
      }

      console.log('enter is pressed')
    }
  }


  const filteredData = todo.filter(val => val.text.toLowerCase().includes(searchText.toLowerCase()))



  return (
    <div>
      <div style={{ display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center' }}>
        <input
          placeholder="enter your task" style={{ borderWidth: 1, padding: '0px 20px' }}
          value={text}
          type="text"
          onChange={(e) => setText(e.
            target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          style={{ backgroundColor: 'lightBlue', width: 60, height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          onClick={handleAddTodo}
        >
          ADD
        </button>
      </div>

      {filteredData.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: 10 }}>
          <input value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="search todos" style={{ borderWidth: 1, padding: '0px 20px', }} />
          <select value={filter}>
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
        </div>
      )}

      <div>
        {filteredData && (filteredData.map((item: todo) => (
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 5 }}>
            <p>
              {item.text}
            </p>
            <button
              style={{ backgroundColor: 'red', color: 'white', width: 80, borderWidth: 1 }}
              onClick={() => handleDeleteTodo(item.id)}
            >
              DELETE
            </button>
          </div>

        )))}
      </div>


    </div>
  )
}