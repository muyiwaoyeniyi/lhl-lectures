## Custom Hooks

 - Code Repo: https://github.com/muyiwaoyeniyi/lhl-lectures/tree/main/Jan-24th-2022-Cohort/flex-m07w18d2
 - Video: https://vimeo.com/714809394/218ec5bd2b

## Content
- [X] Recap: React Hooks we've seen so far
- [X] Why custom hooks? --
- [X] TODO App

## TODO App
- [X] Finish Up Index page with images
- [X] Setup routing
- [X] Implement Detail/Show page
- [X] Introduce hooks for requests (Hook in a hook!)
- [X] Introduce hook for page title
- [X] Introduce hook for local storage to store recently viewed
- [X] Add Recently viewed to every page

## React Hooks
- `useState` (managing data that may change)
- `useEffect` (side effects that occur on data change or initial load of component)

## Custom Hooks
We can break out our business logic from our component, reducing bloat in component and giving us a way to re-use functionality from component to component.

Note how much smaller are components become as we break out complex pieces into separate hooks. They get to be separate, specialized, and it gives us the opportunity to make much of our code more re-usable!

## Important to Note
- All custom hook *names* should start with the word `use`, see our `useFetch`, `useLocalStorage`, and `useLogChanges` as examples
- Always look for ways to make the custom hook as re-usable as possible, if you're careful you can use a custom hook across many components or even projects
- Any instances of `useState` and `useEffect` are unique to each calling of the custom hook, lending well to this idea of re-usability
- We are free to use `document` API, `eventListener`s, and React's very own `useState` and `useEffect` to our advantage in custom hooks☺make the most of them!

```js
// simple custom hook
const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

// inside of a component
useDocumentTitle('My New Title');
```

## Links
- [Official Documentation](https://reactjs.org/docs/hooks-custom.html)
- [O'Reilly's Learning React](https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/)
    - [Chapter 6: Creating Custom Hooks](https://learning.oreilly.com/library/view/learning-react-2nd/9781492051718/ch06.html#creating-custom-hooks)
- [Use Hooks](https://usehooks.com/)
- [Awesome React Hooks](https://github.com/rehooks/awesome-react-hooks)
- [Collection of React Hooks](https://nikgraf.github.io/react-hooks/)
- [Jest Cheat Sheet](https://devhints.io/jest)