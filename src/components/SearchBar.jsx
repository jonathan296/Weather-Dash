export default function SearchBar({city, setCity}){
    return (
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="p-2 border border-gray-300 rounded"
        />
      );

}