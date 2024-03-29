import { useState } from 'react';
import './main.css';

// Manual Data
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },

  {
    id: 2,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    id: 3,
    text: "The world's largest food market is in France",
    source: "https://en.wikipedia.org/wiki/World_Food_Market",
    category: "society",
    votesInteresting: 7,
    votesMindblowing: 2,
    votesFalse: 1,
    createdIn: 2015,
  }
];

// < !----------------  main app component start ---------------->
function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState(initialFacts);

  return (
    // JSX fragment
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />

      {showForm ? <NewFactForm setFacts={setFacts} /> : null}

      <main className='main'>
        <CategoryFilter />
        <FactList facts={facts} />
      </main>
    </>
  );
}
// <!---------------- main end---------------->

// <!---------------- components start ----------------
function Header({ showForm, setShowForm }) {
  return (
    <header className="header" >
      <div className="logo">
        <img
          src="/logo.png"
          alt="logo"
        />
        <h1>Today's Facts 📌</h1>
      </div>

      <button
        id="btn__open"
        className="btn btn-large"
        onClick={() => setShowForm((isShowing) => !isShowing)}>
        {showForm ? 'Close' : 'Share a fact'}
      </button>
    </header>
  )
}

function NewFactForm({ setFacts }) {
  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');

  const textInputLimit = text.length;

  // fn to handle submit
  function handleSubmit(e) {
    e.preventDefault();
    function isValidHttpsURL(text) { // Check if source is a valid URL
      let url;
      try {
        url = new URL(text);
      } catch (_) {
        return false;
      }
      return url.protocol === 'https:' || url.protocol === 'http:';
    }

    //input validation
    if (text && isValidHttpsURL(source) && category && textInputLimit <= 200) {

      // create a new fact object
      const newFact = {
        id: Math.round(Math.random() * 1000000),
        text,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      }

      // update facts list state
      setFacts((facts) => [...facts, newFact]);
    }
  }

  return (
    <form className='fact-form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span>{200 - textInputLimit}</span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <select value={category} onChange={e => setCategory(e.target.category)}>
        <option value="">Choose category:</option>
        {CATEGORIES.map((category) =>
          <option key={category.name} value={category.name}>{category.name}</option>
        )}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  )
}

function CategoryFilter() {
  return <aside>
    <ul>
      <li className="category">
        <button className="btn btn__all-categories">All</button>
      </li>
      {CATEGORIES.map((cat) => (
        <li key={cat.name} className="category" >
          <button
            className="btn btn__category"
            style={{ backgroundColor: cat.color }}>{cat.name}
          </button>
        </li>
      ))}
    </ul>
  </aside >;
}

function FactList({ facts }) {
  return (
    <section>
      <ul className='facts-list'>
        {facts.map((fact) =>
          <Fact key={fact.id} fact={fact} />
        )}
      </ul>
      <p>
        There are {facts.length} facts in the database. Add your own!
      </p>
    </section >
  );

}

// Fact List Props
function Fact({ fact }) {
  return (
    <li key={fact.id} className='fact'>
      <p>
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel='noreferrer'>(source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find(
            cat => cat.name === fact.category).color
        }}>
        {fact.category}
      </span>
      <div className="vote-btn">
        <button>👍 {fact.votesInteresting}</button>
        <button>🤯 {fact.votesMindblowing}</button>
        <button>⛔️ {fact.votesFalse}</button>
      </div>
    </li>
  )
};
export default App;
