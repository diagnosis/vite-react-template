import { createFileRoute } from '@tanstack/react-router'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TanStack Router</h1>
      <div className="card">
        <p>
          This is a template with Vite, React, ESLint, and TanStack Router configured and ready to use.
        </p>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}