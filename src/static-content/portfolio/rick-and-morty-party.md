---
title: Rick and Morty Party
description: 'React app that interacts with a GraphQL API via Apollo Client'
tags: [react, apollo, typescript]
codeUrl: 'https://github.com/czernous/rick-and-morty-party'
image: '/ac-dev-portfolio/portfolio_images/rick_and_morty_1_pkgbpr.webp'
---

# **Rick and Morty Party**


<img class="img-fluid  w-100 my-3" src="https://res.cloudinary.com/czernous/ac-dev-portfolio/portfolio_images/rick_and_morty_1_pkgbpr.webp" />


This project was created as a take home test.

The app consists of the following elements:

1. Input
Upon entering text into the input element a request to GraphQL API is sent.
The request is sent only once per 300ms and upon entering 3 characters or more/

2. Search result
Characters fetched in step 1 are displayed here as cards. Each card has an **X** button which when clicked removes the card from search result section. When the card is clicked, the logic described below is executed.

3. Party
This section contains two cards. One is labelled "Rick" and the other one is labelled "Morty". When a card in the search result is clicked and the character's name contains "Rick" or "Morty", that card is moved from the search result to the relevant card in the Party section. If the character's name doesn't contain either of the names, nothing happens.

Mockup: [https://www.figma.com/file/pxbd8lKICEL9dJdiZzDQyT/MAKE-RICK-AND-MORTY-PARTY](https://www.figma.com/file/pxbd8lKICEL9dJdiZzDQyT/MAKE-RICK-AND-MORTY-PARTY)

API GraphQL: [https://rickandmortyapi.com](https://rickandmortyapi.com)

The stack:
 - React
 - React hooks
 - GraphQL with Apollo Client
 - TypeScript
 - Styled-components

You view the app live <a href="https://czernous.github.io/rick-and-morty-party" target="_blank">**here**</a>.
