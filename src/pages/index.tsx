import * as React from "react"
import type {PageProps} from "gatsby"
import {TypeAnimation} from "react-type-animation";
import {Section} from "@/components/layout/Section";
import {Page} from "@/components/layout/Page";
import {frameworks, languages, misc} from "@/data/skills";
import {Skill} from "@/components/Skill";
import {Paper} from "@/components/layout/Paper";
import {Button} from "@/components/ui/button";
import {ExternalLink, Mail} from "lucide-react";
import {InlineWidget} from "react-calendly";
import {BodyText} from "@/components/typography/BodyText";

const descriptions = [
  'and I am writing software in php',
  'and I am writing software in typescript',
  'and I am writing software in javascript',
]

const contactMethods = [
  {icon: Mail, buttonText: 'Send an E-Mail', url: 'mailto:office@maxbethke.de'},
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
            <Button size={'lg'} asChild>
              <a
                href={'https://docs.google.com/document/d/1iTbcPKkHD25vnUTUL7crH1M5fGkTj39UHgfBlhFoz9Y/edit?usp=sharing'}
                target={'_blank'}
              >
                <div className={'flex gap-2 items-center'}>
                  <ExternalLink/> Open CV
                </div>
              </a>
            </Button>
          </Section>
          <Section className={'h-1/2 flex-col md:flex-row gap-4 md:gap-10'}>
            <Section>
              <h3>Frameworks</h3>
              <ul>
                {frameworks.map((item, key) => <li key={key}><Skill {...item}/></li>)}
              </ul>
            </Section>
            <Section>
              <h3>Languages</h3>
              <ul>
                {languages.map((item, key) => <li key={key}><Skill {...item}/></li>)}
              </ul>
            </Section>
            <Section className={'h-full'}>
              <h3>Technologies</h3>
              <div className={'flex flex-col flex-wrap h-full overflow-hidden'}>
                {misc.map((item, key) => <Skill key={key} name={item}/>)}
              </div>
            </Section>
          </Section>
        </div>
        <Section className={'items-center'}>
          <h2>Get in touch</h2>
          <div className={'flex my-8 md:my-10 flex-col md:flex-row gap-4 md:gap-12'}>
            <Paper>
              <Section>
                <div>
                  <h3>Discovery Call</h3>
                  <BodyText>30min, Google Meets or Phone</BodyText>
                </div>
                <div className={'hidden md:block'}>
                  <InlineWidget
                    url="https://calendly.com/maxbethke/chat"
                    styles={{width: 340, height: 600}}
                    pageSettings={{
                      hideEventTypeDetails: true,
                    }}
                  />
                </div>
                <div className={'block md:hidden'}>
                  <a href={'http://schedule.maxbethke.de'}>
                    <Button size={'lg'} className={'w-full'}>
                      Book a call
                    </Button>
                  </a>
                </div>
              </Section>
            </Paper>
            {contactMethods.map((method, key) => {
              const IconComponent = method.icon

              return (
                <a href={method.url}>
                  <Paper key={key} className={'min-w-[200px]'}>
                    <Section className={'items-center'}>
                      <IconComponent size={96} className={'text-gray-400'}/>
                      <Button size={'lg'} className={'w-full'}>
                        {method.buttonText}
                      </Button>
                    </Section>
                  </Paper>
                </a>
              )
            })}
          </div>
        </Section>
      </Page>
    </main>
  )
}

export default IndexPage

export { Head } from '@/components/Head'
