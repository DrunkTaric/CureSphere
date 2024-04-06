import type { Component } from 'solid-js';
import { Button } from "./components/ui/button.tsx"
import Nav from "./components/blocks/nav.tsx"

const App: Component = () => {
  return (
    <div class="root">
      <div class="wrapper">
        <Nav/>
      </div>
    </div>
  );
};

export default App;
