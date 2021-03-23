# frontendmentor-profile-card-component

A profile card component (React)

![Design preview for the Profile card component coding challenge](./design/desktop-preview.jpg)

This React Profile card is based on this [Frontend Mentor visual design](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ/). My initial submission used html/css but has since been refactored into a [React](https://reactjs.org) component using [Styled Components](https://styled-components.com).

🌲 [View Component](https://frontendmentor-profile-card-component-green.vercel.app/)

🔗 [FEM Submission](https://www.frontendmentor.io/solutions/profile-card-component-with-css-tfzPpV6dO)

## Table of Contents

- [Background](#Background)
- [Install](#Install)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [License](#License)

## Background

This project has a dual purpose—to serve as a basic [React](http://reactjs.org) component for a Frontend Mentor challenge and to serve as an example of a React component for the challenge.

This component uses [Styled Components](https://styled-components.com), [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) for type checking, and [Airbnb's](https://www.npmjs.com/package/eslint-config-airbnb) [ESLint](https://eslint.org) config.

## Install

First [clone the repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

To install dependencies, you'll need [npm](https://www.npmjs.com/get-npm) (distributed with [Node.js](https://nodejs.org/)) or [yarn](https://yarnpkg.com).

```bash
cd <project directory>
npm install
```

## Usage

In the project directory, you can run the app with:

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### How to edit the CSS styles

There are a [variety of ways](https://reactjs.org/docs/faq-styling.html) to style React components. This project uses [Styled Components](https://styled-components.com). Styled Components allow you to build smaller, _styled_ components using plain CSS ("Every style is a component"). Josh Comeau's [The styled-components Happy Path](https://www.joshwcomeau.com/css/styled-components/) is an excellent introduction and the official docs are wonderful as well.

The ProfileCard component's CSS styles are found in _ProfileCard.elements.js_ and _App.js_, but the React app also has styles used to center component (_app.elements.js_).

- App.js
- app.elements.js
- ProfileCard.elements.js

#### App.js

In _App.js_, a [GlobalStyle](https://styled-components.com/docs/api#createglobalstyle) is created with a simple CSS reset, CSS variables, and a background only used when displaying the component within this app. For a bigger project, it would be better to define the GlobalStyle in another file.

```js
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :root {
    --dark-cyan: hsl(185, 75%, 39%);
    --text-color: hsl(229, 23%, 23%);
    --dark-grayish-blue: hsl(227, 10%, 46%);
    --text-color-light: hsl(0, 0%, 59%);
    --stats-border: #E8E9EC;
  }

  body {
    background: url(bg-pattern-top.svg) -250px -530px no-repeat,
                url(bg-pattern-bottom.svg) 650px 400px no-repeat,
                var(--dark-cyan);
    padding: 1.5rem;
    font-family: 'Kumbh Sans', sans-serif;
  }
`;
```

The GlobalStyle is a special type of _StyledComponent_ that does not accept children. When placed at the the top of the React tree, "the global styles will be injected when the component is 'rendered'." [docs](https://styled-components.com/docs/api#createglobalstyle)

In the _App()_ component below `<GlobalStyle />`, the standard component `<ProfileCard />` is surrounded by a _StyledComponent_ called `<StyledWrapper>`. The wrapper is simply a `<div>` with CSS styles defined in _app.elements.js_. The wrapper is used to center the component.

```js
function App() {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <ProfileCard profile={sampleProfile} />
      </StyledWrapper>
    </>
  );
}
```

#### ProfileCard.elements.js

This file contains all of the component's styles (minus CSS variables): `<div>`s, `<p>`s, `<span>`s, and an `<img>`.

Each styled HTML element is given a component name and then defined with regular CSS. You can even include media queries like in the _ProfileStats_ `<div>`.

Try experimenting with the CSS rules. When you save, the page should automatically refresh with your changes.

```js
import styled from "styled-components";

export const ProfileCardWrapper = styled.div`
  min-width: 10.375rem; /* clamp wasn't respecting it's min-width */
  width: clamp(10.375rem, 100%, 21.875rem);
  background: #fff;
  box-shadow: 0 3.125rem 6.25rem -1.25rem rgba(8, 70, 94, 0.504835);
  border-radius: 0.9375rem;
  font-family: "Kumbh Sans", sans-serif;
`;

…

export const ProfileStats = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2);
  row-gap: 0.5625rem;
  padding-top: 1.5rem;
  border-width: 0.0625rem 0px 0px 0px;
  border-style: solid;
  border-color: var(--stats-border);

  @media only screen and (max-width: 268px) {
    grid-template-columns: repeat(1, auto);
    row-gap: 1rem;
  }
`;

export const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Stat = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 0.5625rem;
`;

export const Label = styled.span`
  font-size: 0.625rem;
  letter-spacing: 0.09375rem;
  color: var(--text-color-light);
  text-align: center;
`;
```

## Contributing

If you are a member of the Frontend Mentor community, you can [comment here](https://www.frontendmentor.io/solutions/profile-card-component-with-css-tfzPpV6dO).

[Open an issue](https://github.com/RichardLitt/standard-readme/issues/new), submit PRs, or ping me on twitter [@aaron_stroud](https://twitter.com/aaron_stroud/).

## License

[MIT](https://github.com/RichardLitt/standard-readme/blob/master/LICENSE) © Aaron Stroud
