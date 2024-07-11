import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {Page} from "@/components/layout/Page";
import {Section} from "@/components/layout/Section";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Page className={'min-h-screen'}>
        <Section className={'flex-grow'}>
          <h1>Impressum</h1>
        </Section>
      </Page>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <>
  <title>Home Page</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com"/>
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
    rel="stylesheet"
  />
</>
