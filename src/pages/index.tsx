import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {TypeAnimation} from "react-type-animation";
import {Section} from "@/components/layout/Section";
import {Page} from "@/components/layout/Page";
import {frameworks, languages, misc} from "@/data/skills";
import {Skill} from "@/components/Skill";
import {Paper} from "@/components/layout/Paper";
import {Button} from "@/components/ui/button";

const descriptions = [
  'and I am writing software in php',
  'and I am writing software in typescript',
  'and I am writing software in javascript',
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Page>
        <div className={'md:h-screen'}>
          <Section className={'h-[80vh] md:h-1/2 justify-center items-center text-center'}>
            <p className={'text-xl'}>Hi, my name is</p>
            <h1>Maximilian Bethke</h1>
            <div className={'text-xl'}>
              <TypeAnimation
                sequence={descriptions.flatMap(desc => [desc, 3000])}
                speed={50}
                preRenderFirstString
                repeat={Infinity}
              />
            </div>
          </Section>
          <Section className={'h-1/2 flex-col md:flex-row gap-4 md:gap-10'}>
            {/*<h2>so, what does this mean?</h2>*/}
            <Section>
              <h3>Frameworks</h3>
              <ul>
                {frameworks.map(item => <li><Skill {...item}/></li>)}
              </ul>
            </Section>
            <Section>
              <h3>Languages</h3>
              <ul>
                {languages.map(item => <li><Skill {...item}/></li>)}
              </ul>
            </Section>
            <Section className={'h-full'}>
              <h3>Technologies</h3>
              <div className={'flex flex-col flex-wrap h-full overflow-hidden'}>
                {misc.map(item => <Skill name={item}/>)}
              </div>
            </Section>
          </Section>
        </div>
        <Section>
          <h2>Get in touch</h2>
          <div className={'h-1/2 flex-col md:flex-row gap-4 md:gap-10'}>
            <Paper>
              <Section>
                {/*<StaticImage*/}
                {/*  src={'./cvIcon.svg'} alt={'CV'}*/}
                {/*/>*/}
              </Section>
            </Paper>
            <Button>Download</Button>
          </div>
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
