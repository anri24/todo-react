import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddTodo from "./pages/AddTodo"
import EditTodo from "./pages/EditTodo"
import PageNotFount from "./pages/PageNotFount"
import AppLayout from './ui/AppLayout';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="add/Todo" element={<AddTodo />} />
        <Route path="edit/todo/:todoId" element={<EditTodo />} />
        <Route path="*" element={<PageNotFount />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
