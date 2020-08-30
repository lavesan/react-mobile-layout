## Mobile view layout

A component to be used when you need to show some information inside a mobile design layout

## Instaling

`npm i react-mobile-layout`

## Sample

```javascript
import MobileViewLayout from 'react-mobile-layout'

const MyComponent = () => (
  <MobileViewLayout>
    <h1>Title</h1>
    <p>Some description</p>
  </MobileViewLayout>
)
```

## Props

|name    |type           |default|required|description|
|--------|---------------|-------|--------|-----------|
|children|React.ReactNode|null   |true    |The component that's render on screen|
|colors  |object         |{ primary: '#000', secondary: '#aaa', cam: '#aaa', screen: '#fff' }     |false   |The colors of the 'mobile'|
|width   |number         |100    |false   |The mobile width|
|height  |number         |230    |false   |The mobile height|
