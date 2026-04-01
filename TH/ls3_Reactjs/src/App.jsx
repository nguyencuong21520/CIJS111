import Card from './components/Card';

const App = () =>{
  const cardData = [
    {
      name: 'Nguyen Van A',
      class: 'MindX',
      goal: 'Become a super hero',
    },
    {
      name: 'Nguyen Van B',
      class: 'MindX',
      goal: 'Become a super hero',
    },
    {
      name: 'Nguyen Van C',
      class: 'MindX',
      goal: 'Become a super hero',
    },
    {
      name: 'Nguyen Van D',
      class: 'MindX',
      goal: 'Become a super hero',
    },
    {
      name: 'Nguyen Van E',
      class: 'MindX',
      goal: 'Become a super hero',
    }
  ]
  return (
    <div>
      <h1>Hello World</h1>
      {
        cardData.map((card, index) => {
          return <Card key={index + card.name} name={card.name} classN={card.class} goal={card.goal} />
        })
      }
    </div>
  )
}

export default App;