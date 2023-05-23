import { useState } from 'react';

export default function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [characterCountWithoutSpaces, setCharacterCountWithoutSpaces] = useState(0);

  const handleTextChange = (event: { target: { value: any; }; }) => {
    const inputText = event.target.value;
    setText(inputText);

    const words = inputText.trim().split(/\s+/);
    setWordCount(words.length);

    const characters = inputText.length;
    setCharacterCount(characters);

    const charactersWithoutSpaces = inputText.replace(/\s+/g, '').length;
    setCharacterCountWithoutSpaces(charactersWithoutSpaces);
  };

  return (
    <div className="container mx-auto p-4">
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md mb-4 text-black"
        value={text}
        onChange={handleTextChange}
        placeholder="Skriv din text här"
      />
      <div>
        <p className="text-gray-300">
          Antal ord: <span className="font-bold">{wordCount}</span>
        </p>
        <p className="text-gray-300">
          Antal bokstäver: <span className="font-bold">{characterCount}</span>
        </p>
        <p className="text-gray-300">
          Antal bokstäver utan mellanslag:{' '}
          <span className="font-bold">{characterCountWithoutSpaces}</span>
        </p>
      </div>
    </div>
  );
}
