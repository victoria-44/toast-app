function App() {
  return (
    <>
      <div className="ch-toast-viewport ch-toast-viewport--bottom md:ch-toast-viewport--bottom-right ">
        <div className="ch-toast ch-toast--success ch-toast--icon">
          <p>Alternate toast message</p>
          <button>
            <span className="ch-reader">Close</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
