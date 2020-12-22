This project was bootstrapped with , using the and template.

# Stack

- [Create React App](https://github.com/facebook/create-react-app)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [axios](https://github.com/axios/axios)
- [bootstrap](https://getbootstrap.com/)
- [dayjs](https://github.com/iamkun/dayjs)
- [formik](https://github.com/formium/formik)
- [swr](https://swr.vercel.app/)
- [yup](https://github.com/jquense/yup)

# features

[x] Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city.

- [x] Display reminders on the calendar view in the correct time order.
- [ x ] Allow the user to select color when creating a reminder and display it appropriately.
- [ x ] Ability to edit reminders – including changing text, city, day, time and color.
- [ x ] Add a weather service call from a free API such as Open Weather Map, and get the weather forecast (ex. Rain) for the date of the calendar reminder based on the city. --- **Atention:** I did not do this feature because the free api plan does not support search over 16 days away. Instead, I show the weather of just the present moment---
- [ x ] Unit test the functionality: Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city.

## Bonus (Optional)

- [ x ] Expand the calendar to support more than the current month.
- [ x ] Properly handle overflow when multiple reminders appear on the same date.
- [ x ] Functionality to delete one reminder
- [ x ] Functionality to delete ALL the reminders for a specific day

# scripts

## `yarn start`

Runs the app in the development mode.

- I used swr because if there are several reminders for the same city, only one request is made.
- I used inline css for some elements because the test focus was not CSS, so I didn't bother to do something better or more advanced (modules or styled component).

## `yarn test`

Launches the test runner in the interactive watch mode.

I just created the test for adding reminders: `src/components/reminderModal/reminderModal.spec.tsx`
I created an integration test, because in the trophy model it is more recommended for frontend tests, with the integration test it is possible to better test all the desired flow and not just a single component.
I also only tested a few flows, but enough to show that I know how to represent the desired scenarios.

## `yarn build`

Builds the app for production to the `build` folder.
