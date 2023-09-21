import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from './requests'

const App = () => {
  const queryClient = useQueryClient();

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
  })

  const updateAnecMutation = useMutation(updateAnecdote, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] });
    }
  })

  const anecdotes = result.data;

  const handleVote = (anecdote) => {
    updateAnecMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
  }

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {result.isLoading
        ? <div>loading</div>
        : result.isSuccess
          ? anecdotes.map(anecdote =>
              <div key={anecdote.id}>
                <div>
                  {anecdote.content}
                </div>
                <div>
                  has {anecdote.votes}
                  <button onClick={() => handleVote(anecdote)}>vote</button>
                </div>
              </div>
            )
          : <div>anecdotes service not available due to server issues</div>
      }
    </div>
  )
}

export default App
