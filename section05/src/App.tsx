import Button from "./components/Button";

function App() {
  return (
    <>
      <Button
        handleClick={(message: string) => alert(message)}
        message="Playing!"
      >
        Play Movie
      </Button>
      <Button
        handleClick={(message: string) => alert(message)}
        message="Uploading!"
      >
        Upload Image
      </Button>
    </>
  );
}

export default App;
