# Problem Set 8.2
### Working with the `useEffect` Hook

## Directions
Create a `UserCard` component.
* The component should render a styled user card.
* The component should take a `userId` as props.
* Upon mounting, the component should make a fetch request to `https://reqres.in/api/users/{userId}`. Then it should display the following user data:
  * email
  * first_name
  * last_name
  * avatar
* While waiting for a response, (as in, when the component first mounts) the card should display `"Loading..."` for each of these fields.

### Extra Credit
* Experiment with [Material UI](https://material-ui.com/) for some out-of-the-box styling on your components.
* [reqres.in](https://reqres.in) gives us twelve mock user profiles. Add in a search feature to render a card by User ID.

[**Demo Project**](https://evening-plains-85867.herokuapp.com/)

## Due Date
Submit via Pull Request by Monday, April 27 @ 9AM

Run **npx serve** if you want to view 