<script>
	import Box, { Column, Row } from "./index.js";
</script>

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
