import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Header from "./components/Header"
import Table from "./components/Table"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      <Header />
      <Table/>
    </QueryClientProvider>
  )
}

export default App
