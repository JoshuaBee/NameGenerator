import {useCallback, useState} from 'react';
import {BlockStack, Button, Card, Layout, Page, Text, TextField} from '@shopify/polaris';

import {generateWord} from "./helpers";
import "./styles.css";

export default function NameGenerator() {
  const [letterCount, setLetterCount] = useState(5);
  const [name, setName] = useState(generateWord(letterCount));

  const handleChange = useCallback(
    (newValue) => setLetterCount(newValue),
    [],
  );

  const handleClick = useCallback(
    () => setName(generateWord(letterCount)),
    [letterCount],
  )

  return <div className="name-generator">
    <Page>
      <Layout>
        <Card>
          <BlockStack align="center" inlineAlign="center" gap="500">
            <TextField
              label="Letter count"
              type="number"
              value={letterCount}
              onChange={handleChange}
              autoComplete="off"
              min="3"
            />

            <Button onClick={handleClick}>
              Generate
            </Button>

            <Text variant="heading2xl" as="h1">
              {name}
            </Text>
          </BlockStack>
        </Card>
      </Layout>
    </Page>
  </div>;
}