import{ useState, useEffect } from 'react'
import './App.css'

function App() {
  const [dogs, setDogs] = useState([
    { id: 1, name: 'Neron', imageUrl: '/images/Neron.jpg'},
    { id: 2, name: 'Lally', imageUrl: '/images/Lally.jpg'},
    { id: 3, name: 'Lili', imageUrl: '/images/Lili.jpg'},
    { id: 5, name: 'Susi', imageUrl: '/images/Susi.jpg'}
  ]);
const [selectedDog, setSelectedDog] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch dogs data when component mounts
    fetch('/api/dogs')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch dogs');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched dogs data:", data);
        setDogs(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching dogs:', error);
        setLoading(false);
      });
  }, []);   

  const handleDogClick = (dog) => {
    setSelectedDog(dog);
  };   

  return (
    <div>
      <h1>Barkelona</h1>
      <h2>All Dogs</h2>
      <div className="dog-list">
        {loading ? (
          <div>Loading...</div>
        ) : (
          dogs.map((dog) => (
            <div key={dog.id} className="dog-item" onClick={() => handleDogClick(dog)}>
              <img src={dog.imageUrl} alt={dog.name} />
              <p>{dog.name}</p>
            </div>
          ))
        )}
      </div>
      {selectedDog && (
        <div className="dog-details">
          <h3>{selectedDog.name}</h3>
          {/*SelectedDog contains description, owner, neighbourhood, and address */}
          <p>Description: {selectedDog.description}</p>
          <p>Owner: {selectedDog.owner}</p>
          <p>Neighbourhood: {selectedDog.neighbourhood}</p>
          <p>Address: {selectedDog.address}</p>
        </div>
      )}
    </div>
  );
}
export default App;