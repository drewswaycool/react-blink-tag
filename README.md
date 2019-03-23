## React Blink Tag

>Something really important to us was taken away... but now.. it's back and can do one or two more things! What a deal!

Demo: https://codesandbox.io/s/vj29v2vpl7

### Installation
`npm i -save react-blink-tag`

### Usage
* Import the blink tag
`import Blink from 'react-blink-tag'`

* Options


fade


`<Blink fade>Geocities!</Blink>`

speed ('fast' or 'slow')


`<Blink speed="slow">Geocities!</Blink>`

* Render it with pride!
```jsx
//.......
function App() {
  return (
    <div className="App">
      <h1>
        <Blink>Geocities!</Blink>
      </h1>
    </div>
  );
}
//........  
```
