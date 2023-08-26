import {
  TextInput,
  Paper,
  Text,
  Container,
  Button,
  Textarea,
  Radio,
  Flex,
  Checkbox,
  Select,
  FileInput,
  rem,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";

export function FormElements() {
  return (
    <Container size={700} my={40}>
      <Paper withBorder shadow="xs" p={30} mt={30} radius="md">
        <>
          <Radio.Group name="MCQ" label="MCQ" withAsterisk>
            <Flex direction="column" gap="md" mt="xs">
              <Radio value="Option 1" label="Option 1" />
              <Radio value="Option 2" label="Option 2" />
              <Radio value="Option 3" label="Option 3" />
            </Flex>
          </Radio.Group>
        </>
      </Paper>
      <Paper withBorder shadow="xs" p={30} mt={30} radius="md">
        <>
          <Checkbox.Group label="Checkbox" withAsterisk>
            <Flex direction="column" gap="md" mt="xs">
              <Checkbox value="Option 1" label="Option 1" />
              <Checkbox value="Option 2" label="Option 2" />
              <Checkbox value="Option 3" label="Option 3" />
            </Flex>
          </Checkbox.Group>
        </>
      </Paper>
      <Paper withBorder shadow="xs" p={30} mt={30} radius="md">
        <TextInput
          label="Short Answer"
          placeholder="Any short text..."
          required
        />
      </Paper>
      <Paper withBorder shadow="xs" p={30} mt={30} radius="md">
        <Textarea label="Paragraph" placeholder="Any long text..." required />
      </Paper>
      <Paper withBorder shadow="xs" p={30} mt={30} radius="md">
        <Select
          label="Dropdown"
          placeholder="Choose"
          data={[
            { value: "Option 1", label: "Option 1" },
            { value: "Option 2", label: "Option 2" },
            { value: "Option 3", label: "Option 3" },
          ]}
        />
      </Paper>
      <Paper withBorder shadow="xs" p={30} mt={30} radius="md">
        <FileInput
          label="File Upload"
          placeholder="Add file"
          icon={<IconUpload size={rem(14)} />}
        />
      </Paper>
      <Paper withBorder shadow="xs" p={30} mt={30} radius="md">
        <>
          <Radio.Group name="Linear Scale" label="Linear scale" withAsterisk>
            <Flex align={"center"} justify={"center"} gap="md" mt="xs">
              <Text> 1  </Text>
              <Text> 2  </Text>
              <Text>3 </Text>
              <Text> 4</Text>
              <Text>  5</Text>
            </Flex>
            <Flex align={"center"} justify={"center"} gap="md" mt="xs">
              <Text>Worst</Text>
              <Radio value="1" />
              <Radio value="2" />
              <Radio value="3" />
              <Radio value="4" />
              <Radio value="5" />
              <Text>Best</Text>
            </Flex>
          </Radio.Group>
        </>
      </Paper>
      <Paper withBorder shadow="xs" p={30} mt={30} radius="md">
        <>
          <Radio.Group
            name="Multi choice Grid"
            label="Multi choice Grid"
            withAsterisk
          >
            <Flex align={"center"} justify={"center"} gap="md" mt="xs">
              <Text>                  1   </Text>
              <Text>2  </Text>
              <Text>3  </Text>
            </Flex>
          </Radio.Group>
          <Radio.Group name="Multi choice 1st">
            <Flex align={"center"} justify={"center"} gap="md" mt="xs">
              <Text>Option 1</Text>
              <Radio value="1" />
              <Radio value="2" />
              <Radio value="3" />
            </Flex>
          </Radio.Group>
          <Radio.Group name="Multi choice 2nd">
            <Flex align={"center"} justify={"center"} gap="md" mt="xs">
              <Text>Option 2</Text>
              <Radio value="1" />
              <Radio value="2" />
              <Radio value="3" />
            </Flex>
          </Radio.Group>
          <Radio.Group name="Multi choice 3rd">
            <Flex align={"center"} justify={"center"} gap="md" mt="xs">
              <Text>Option 3</Text>
              <Radio value="1" />
              <Radio value="2" />
              <Radio value="3" />
            </Flex>
          </Radio.Group>
        </>
      </Paper>
      <Paper withBorder shadow="xs" p={30} mt={30} radius="md">
        <>
          <Checkbox.Group label="Tick Box Grid" withAsterisk>
            <Flex align={"center"} justify={"center"} gap="md" mt="xs">
              <Text>                  1   </Text>
              <Text>2  </Text>
              <Text>3  </Text>
            </Flex>
          </Checkbox.Group>
          <Checkbox.Group>
            <Flex align={"center"} justify={"center"} gap="md" mt="xs">
              <Text>Option 1</Text>
              <Checkbox value="1" />
              <Checkbox value="2" />
              <Checkbox value="3" />
            </Flex>
          </Checkbox.Group>
          <Checkbox.Group>
            <Flex align={"center"} justify={"center"} gap="md" mt="xs">
              <Text>Option 2</Text>
              <Checkbox value="1" />
              <Checkbox value="2" />
              <Checkbox value="3" />
            </Flex>
          </Checkbox.Group>
          <Checkbox.Group>
            <Flex align={"center"} justify={"center"} gap="md" mt="xs">
              <Text>Option 3</Text>
              <Checkbox value="1" />
              <Checkbox value="2" />
              <Checkbox value="3" />
            </Flex>
          </Checkbox.Group>
        </>
      </Paper>
      <Button fullWidth mt="xl">
        Submit
      </Button>
    </Container>
  );
}
