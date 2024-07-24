import './index.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DS Catalog</h1>
        <div>
          <p>HOME</p>
          <p>CATÁLOGO</p>
          <p>ADMIN</p>
        </div>
      </header>

      <section className='s1'>
        <section className='s1-meio'>
          <div>
            <h1>Conheça o melhor
              catálogo de produtos</h1>

              <p>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</p>

              <button>
              INICIE AGORA A SUA BUSCA
              </button>
          </div>

          <img src='/assets/images/img.png' />

          

        </section>

      </section>
    </div>
  );
}

export default App;
