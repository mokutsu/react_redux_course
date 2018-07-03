# overview from chapter 1 and 2

### class vs functional components
- use functional components for simple items that only uses properties, that returns static JSX (ie doesn't need state)
- use class based components where state is required

- in class baesd components, we set the state directly in the constructor
- once the state is initialized, we use state handlers (eg setState) to update the state for a component
- use the props to pass down change handlers down from parents to children, to call back and update state from children as required

- store state at the highest shared level that needs to know about a state
