import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [fileData, setFileData] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:8000/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: inputValue }),
    });
    if (response.ok) {
      console.log('Данные успешно отправлены');
    }
  };

  const handleFetchData = async () => {
    const response = await fetch('http://localhost:8000/api/data');
    const result = await response.json();
    setFileData(result.data);
    console.log('Данные успешно получены с сервера');
  };

  return (
    <div>
      <h1>Frontend 2.0</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Отправить</button>
      <button onClick={handleFetchData}>Получить данные</button>
      <div>Содержимое файла: {fileData}</div>
    </div>
  );
}

export default App;
