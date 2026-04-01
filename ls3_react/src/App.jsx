import Navbar from './components/Navbar';
import Card from './components/Card';
function App() {

  const cardData = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Description 1',
      lessons: 10,
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description 2',
      lessons: 20,
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Description 3',
      lessons: 30,
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'Description 4',
    },
  ]

  return (
    <>
      <Navbar />
      <Navbar />
      <h1>Hello MindX</h1>
      <p>Hello</p>
      <button>Click me</button>
      <Navbar />

      <h1> Card list</h1>
      <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}> 
        {
          cardData.map((card) => (
            <Card key={card.id} title={card.title} description={card.description} lessons={card.lessons} />
          ))
        }
      </div>
    </>
  )
}

export default App
