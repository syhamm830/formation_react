import React, {useState} from 'react'

export default function Formulaire() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handlesubmit = (event) => {
        event.preventDefault();
        alert(`valeur soumise : ${inputValue}`) ;
    };
  return (
    <form onSubmit={handlesubmit}>
      <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      />
      <button type="submit">Soumettre</button>
    </form>
  );
}
