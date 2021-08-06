<script>
	import { Box, Column, Row } from "./index.js";
</script>

<h1>Simple Svelte Skeleton Demo</h1>

<Column>
	<Row>
		<Column width="100px">
			<Box width="100%" height="100px" round />
		</Column>
		<Column stretch>
			<Box width="100%" height="100px" />
		</Column>
	</Row>
	<Box width="100%" height="40px" />
	<Box width="100%" height="40px" />
</Column>
