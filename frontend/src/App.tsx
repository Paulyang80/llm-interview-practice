import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// http://localhost:5173

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSub() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>我的第一個 Vite 網頁</h1>
      <p>接下來我會在這裡做介面。</p>
      <ActionButton onClick={handleAdd}>點我加 1</ActionButton>
      <p>count: {count}</p>
      <ActionButton onClick={handleSub}>點我減 1</ActionButton>
      <ActionButton onClick={reset}>重設</ActionButton>
      <p>
        {count % 2 === 0 ? '偶數 ✨' : '奇數 🔥'}
      </p>
      <Card>
        <h2>這是卡片標題</h2>
        <p>這是卡片內容。</p>
      </Card>
    </main>
  )
}

function ActionButton({onClick, children}: { onClick: () => void, children: React.ReactNode }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function Card({children}: { children: React.ReactNode }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// function AddButton({ onClick }: { onClick: () => void }) {
//   return (
//     <button onClick={onClick}>
//       點我加 1
//     </button>
//   );
// }

// function SubButton({ onClick }: { onClick: () => void }) {
//   return (
//     <button onClick={onClick}>
//       點我減 1
//     </button>
//   );
// }

export default App
