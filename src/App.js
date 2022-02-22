import { useEffect, useState } from 'react';
import './App.css';

function App () {
  let [lista, setLista] = useState([]);
  let [novoItem, setNovoItem] = useState("");

  useEffect (() => {
    setLista([]);
  }, []);

  return (
    <div className="container">
      <div className="adicionar">
        <input value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text" placeholder="Adicione uma tarefa"></input>
      </div>
      <div className="botaoadicionar">
        <button onClick={() => adicionarNovoItem()}>Adicionar Tarefa</button>
      </div>
      <ul className="todo-list">
        {lista.map((item, index) => (
          <li key={index} className="todo-item">
            {item}
            <button onClick={() => deletarItem(index)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );

//Função para adicionar novo Item
  function adicionarNovoItem() {
    if (novoItem.length <= 0) { //If usado para não deixar adicionar tarefa vazia
      return;
    }

    setLista([...lista, novoItem]);
    setNovoItem("");
  }

//Função para deletar o item
  function deletarItem(index) {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);

    setLista(tmpArray);
  }

}

export default App;
