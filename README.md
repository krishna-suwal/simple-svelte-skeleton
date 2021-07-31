# Simple Svelte Skeleton

Simple components for skeleton to use in svelte 😎

## Usage Example

Demo

![Demo 1](.github/Screenshot_1.png)

Import skeleton comonents

```javascript
import { Box, Column, Row } from "./index.js";
```

Use the components

```html
<Column>
	<Row>
		<Column width="100px">
			<Box width="100%" height="100px" border-radius="100%" />
		</Column>
		<Column stretch>
			<Box width="100%" height="100px" />
		</Column>
	</Row>
	<Box width="100%" height="40px" />
	<Box width="100%" height="40px" />
</Column>
```

## Install

Using `npm`:

````sh
npm install simple-svelte-skeleton
````

Using `yarn`:`

````sh
yarn add simple-svelte-skeleton
````

## API
For all the components `Column`, `Row` and `Box`, you can pass CSS properties and values as props.

### `<Column>`

Stack components vertically and add spaces in-between. Currently it adds `8px` margin.

Props:

- All CSS properties
- *`stretch`* (boolean): Stretches the component so that it takes all the remaining space by adding inline CSS `flex-grow: 1`.

### `<Row>`

Stack components vertically and add spaces in-between. Currently it adds `8px` margin.

Props:

- All CSS properties
- *`stretch`* (boolean): Stretches the component so that it takes all the remaining space by adding inline CSS `flex-grow: 1`.

### `<Box>`

Stack components vertically and add spaces in-between. Currently it adds `8px` margin.

Props:

- All CSS properties
- *`stretch`* (boolean): Stretches the component so that it takes all the remaining space by adding inline CSS `flex-grow: 1`.

## Development

### Skeleton components
The skeleton components are located in `src/Skeleton` directory. You can view the components working by running:

```sh
yarn dev
```
then go to the localhost URL.
