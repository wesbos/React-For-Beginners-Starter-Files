###Day 22: Animating React Components
Animations are a fun way to inject movement into our webpage. This can be done via the traditional method of css (like the GIF below) or some more interactive React animations that we will explore further.

![CSS Animation]()


######NPM Scripts & CSS Preprocessors

Today's lesson touched on a few new concepts including the use of [styl](https://github.com/tj/styl) as a CSS preprocessor. We also explored how this can be integrated in the npm scripts to enable hot reloading during development.

Using the npm scripts in the `package.json` we are able to call `$ npm run watch` in the terminal. It will then concurrently run `start` & `styles:watch`. Then if one of them breaks it's going to kill the other one and show an error in the terminal. This makes development really easy.

This is what the npm scripts look like at this point:

![npm scripts]()

Note: In our development environment at work we don't use external CSS or CSS preprocessors as we have opted for [styled components](https://github.com/styled-components/styled-components) (I talked more about this in [Day 4](https://stef.ninja/learning-react-week-1/)).

######Animations

Now that we have our styling options sorted out we can get into the meat of animating React Components.

Our aim today is to animate our order with some subtle movements:

- When a new fish is added to the order it should animate in.
- When a fish is removed from an order is should animate out.
- When the number of lbs of a fish increases the number should animate up.

These are only small movements and we will do a lot of work to make them happen but the polished finish that they give the website is a nice touch.

The first step we need to do is open up our HTML to include classes that we can hook into for our animations. You can do this using the CSSTransitionGroup.

We modified the `ul` component to be a `CSSTransitionGroup` component instead. This looks like this in the code:

![CSSTransitionGroup]()

Note: By adding the `component="ul"` this tells React that we want the component to render a unordered list component in HTML but maintain it as a ReactCSSTransitionGroup in React.

The additional attributes on the `CSSTransitionGroup` component control temporary classes on the `ul` HTML component. You can see how these classes display via the developer tools:

![Temporary classes rendered by the CSSTransitionGroup]()

These temporary classes can then be hooked into via CSS. We are able to use [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) because there is an initial state (class `order-enter`/`order-leave`) and a final state (class `order-enter-active`/`order-leave-active`) that we can reference.

These can then be styled like this:

![Styles]()

**Note: the lack of `{}, : or ;` in the `.styl` documents**

This renders out animations that look great:

![Animations first step]()

The final task in todays lesson is to animate the count of the lbs for each fish in the order. The animation that we are aiming for looks like the previous number is being pushed out by the new number. This requires a duplication of the element that will let us animate the 'old' version of the element out whilst simultaniously animating the 'new' version of the element in.

This animation style requires us to duplicate the `{count}` span. To do this we will add a `key` attribute with the value `{count}` as well as wrap the `{count}` in a `CSSTransitionGroup` and additional `span`. The code looks like this:

![Count code]()

This results in two spans being created - a new one with an updated `{count}` and a `order-enter-active` class and the original `{count}` that now has a `order-leave-active` class on it.

![Count CSSTransitionGroup in Action]()

Now all that is left is to add the animation styles in:

![Count Animation styles]()

######To Do:

* Import CssTransitionGroup from 'react-addons-css-transition-group' into `Order.js`
* Modify the `ul` to be a `CSSTransitionGroup` & add the required attributes.
* Modify the `{count}` to be wrapped in a `CSSTransitionGroup` & set the attribute `key` to `{count}` (so we have a unique reference available).
* Add animation using CSS transitions in the `_animations.styl` document.

######Today the app looks like:
![App on Day 22 of the React for Beginners Course]()

*[Video 22: Animating React Components]*

###Day 23:


######To Do:

######Today the app looks like:
![App on Day 23 of the React for Beginners Course]()

*[Video 23: Component Validation with PropTypes]*

###Day 24:


######To Do:

######Today the app looks like:
![App on Day 24 of the React for Beginners Course]()

*[Video 24: Authentication]*

###Day 25:


######To Do:

######Today the app looks like:
![App on Day 25 of the React for Beginners Course]()

*[Video 25: Building React for Production]*

###Day 26:


######To Do:

######Today the app looks like:
![App on Day 26 of the React for Beginners Course]()

*[Video 26: Deploying to now.sh]*

###Day 27:


######To Do:

######Today the app looks like:
![App on Day 27 of the React for Beginners Course]()

*[Video 27: Deploying to GitHub Pages]*

###Day 28:


######To Do:

######Today the app looks like:
![App on Day 28 of the React for Beginners Course]()

*[Video 28: Deploying to an Apache Server]*

###Day 29:


######To Do:

######Today the app looks like:
![App on Day 29 of the React for Beginners Course]()

*[Video 29: Future React Today - Propery Initializers and getting rid of .bind()]*

###Day 30:


######To Do:

######Today the app looks like:
![App on Day 30 of the React for Beginners Course]()

*[Video 30: Ejecting from create-react-app]*

###Day 31:


######To Do:

######Today the app looks like:
![App on Day 31 of the React for Beginners Course]()

*[Video 31: ]*
