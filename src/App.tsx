import { MantineProvider } from "@mantine/core";
import { Form } from "./components/Form";
import { FormElements } from "./components/Fragments/FormElements";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Form />
      <FormElements />
    </MantineProvider>
  );
}
