import React from "react"
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

export default function NewsletterEmail({ subscriberEmail }) {
  return (
    <Html>
      <Head />
      <Preview>New message</Preview>
      <Tailwind>
        <Body className="bg-gray-100 my-10 px-10 py-4 rounded-md text-black">
          <Container>
            <Section>
              <Heading>
                Hello, I will gladly share my update with you. Keep in touch!
              </Heading>
              <Text>Some new subscriber</Text>
              <Hr />
              <Text>Sender email {subscriberEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
