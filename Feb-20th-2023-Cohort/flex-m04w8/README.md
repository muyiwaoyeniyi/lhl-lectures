# Intro to CSS

## Resources
 - Code Repo: https://github.com/muyiwaoyeniyi/lhl-lectures/tree/main/Feb-20th-2023-Cohort/flex-m04w8
 - Video Link: https://vimeo.com/816683006/476b0be577
 - Slides (in this repo)

## Content📣

- Approach with new material
- New Project Review (see slides)
- Intro to CSS
- HTML Semantic Tags
- Box model
- CSS Layout
  - Float
  - Flexbox
- Understanding the cascade / CSS Specificity
- CSS debugging in DevTools

## Approach 🆕

- 1️⃣ As the weeks progress there is lesser emphasis on giving you all the resources, functions, tips that you need to complete an activity
- 2️⃣ You're expected to research🔍 some subjects on your own
- 3️⃣ Focus is on plain vanilla CSS for now. Bootstrap (CSS/UI grid frameworks in general) comes later
- 4️⃣ CSS can be frustrating at first🙀. Writing maintainable CSS is tough, and comes with experience. Not everyone is good at it, even at LHL. Use mentors for code reviewing your CSS.
- 4️⃣ Writing CSS that works well across all browsers used to be a nightmare, but is much less problematic now.


## New Project Review (see slides)
-  [Slides Here](./Intro_CSS.pdf)

## Intro to CSS
* Stands for `Cascading Style Sheet` and design part of websites.
* `Front-end` development consists of 3 parts as well.
* `HTML` is your structure (framing i.e. house).
* `CSS` is design (paint/colours/design ie. house).
* `JavaScript` is logic (electricity ie. house).

```markdown
1. HTML (content / structure)
2. CSS (layout / look)
3. JavaScript (interaction / functionality)
```

## HTML Semantic Tags
* `semantic` tags or elements all behave like `div` and used to describe our content.
* `semantic` avoids `div soup`

```markdown
1. `header`
2. `footer`
3. `nav`
4. `aside`
5. `section`
6. `article`
```

```html
  <!-- Regular Tags: div soup -->
  <div>
    <h1>My Awesome Webpage</h1>
  </div>
  <div>
    <div>
      <h3>Article Title</h3>
      <p>article paragraph</p>
    </div>
  </div>

  <!-- Semantic Tags -->
  <header>
    <h1>My Awesome Webpage</h1>
  </header>
  <main>
    <article>
      <h3>Article Title</h3>
      <p>article paragraph</p>
    </article>
  </main>
```

## CSS Box Model ⬜

- Every HTML element has a box around it 🔳
- 🔗[jsfiddle - box model](https://jsfiddle.net/xmj2bo9g/)
- 🔗[Interactive box-model demo](http://guyroutledge.github.io/box-model/)
- 🔗[Box-sizing property](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)

## Layout with Floats🔁

- Float is a CSS positioning property
- Initially used to wrap text around images
- Floats was being used for web layouts
- Element can be floated left or right
- Since the flow is changed, elements are not part of the normal flow
- The parent element contained floated elements can collapsed

- 🔗[Floats - jsFiddle](https://jsfiddle.net/zgpn6d2L/2/)

## Flexbox 💟

- A better way to layout elements

> The Flexbox Layout (Flexible Box) provides a more efficient way to lay out, align and distribute **space** among **items** in a **container**, even when their size is unknown and/or dynamic.

- A flex container expands items to fill available free space or shrinks them to prevent overflow.

- When working with flexbox you need to think in terms of two axes — the **main axis** and the **cross axis**. The main axis is defined by the `flex-direction` property, and the cross axis runs perpendicular to it.

- 🔗[Flexbox Layout Demo](https://jsfiddle.net/dtremblay/m70x3h6p/488/)
- 🔗[Flexbox Breakout Exercise](https://gist.github.com/DominicTremblay/83357ef5d5d006a87a5774893bb9addd)
- 🔗[Flexbox Exercise - Solution](https://jsfiddle.net/dtremblay/p71v9mwb/176/)
- 🔗[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- CSS Grid is even newer than Flexbox. It is something you can learn on your own (and it is recommended that you do so).

## Understanding The Cascade

When 2 or more conflicting style rules target the same element, the browser has to decide which CSS styles to apply, iow which style will win! 🥇

### The Cascade (Simplified)

To determine the winning style, the browser will go through a cascade. `CSS` rules are read by the browser from top to bottom (sequential).

- 1️⃣ Selector Specificity - The more specific selector wins
- 2️⃣ Source Order - if the same specificity, the source order will matter

#### CSS Specificity

📏Specificity Rules

- The more specific selector gets applied
- A score is attributed to a selector

  - nb ids x 100 pts
  - nb classes x 10 pts
  - nb of elements x 1pt

* inline-style => 1000 pts

![specificity](./specificity1.png)

- 🔗[Selectors Specificity](https://jsfiddle.net/dtremblay/xr94uLnb/100/)

#### Source Order 🎢

- The last style overwrites any preceding conflicting rule that has the same specificity.
- It also depends on how the style was added

3 ways to add styles

- 1️⃣Inline
- 2️⃣Internal
- 3️⃣External

## CSS debugging in DevTools
* `inspect` our page, right click > inspect or use shortcut `Command + Option + I`.

## CSS Games

- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Flexbox Defense](http://www.flexboxdefense.com/)
- [Flexbox Zombies](https://geddski.teachable.com/p/flexbox-zombies)
- [CSS Diner](https://flukeout.github.io/)