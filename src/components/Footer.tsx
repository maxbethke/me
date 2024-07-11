import React from "react";
import {Button} from "@/components/ui/button";
import {EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon} from '@radix-ui/react-icons'
import {Link} from "gatsby";

export const Footer: React.FC = () => (
  <div className={'flex w-full justify-evenly text-gray-500'}>
      <Button variant={'ghost'} asChild>
        <a
          href={'https://youtu.be/UF8uR6Z6KLc'}
          target={'_blank'}
        >
          Stay hungry, stay foolish 🔥
        </a>
      </Button>
      <Link to={'/impress'}>Impress</Link>
    <div>
      <Button variant={'ghost'} asChild>
        <a
          href={'https://www.linkedin.com/in/maximilian-bethke-8521a918b/'}
          target={'_blank'}
        >
          <LinkedInLogoIcon/>
        </a>
      </Button>
      <Button variant={'ghost'} asChild>
        <a
          href={'https://twitter.com/maxbethke_'}
          target={'_blank'}
        >
          <TwitterLogoIcon/>
        </a>
      </Button>
      <Button variant={'ghost'} asChild>
        <a
          href={'https://github.com/maxbethke'}
          target={'_blank'}
        >
          <GitHubLogoIcon/>
        </a>
      </Button>
      <Button variant={'ghost'} asChild>
        <a
          href={'mailto:office@maxbethke.de'}
        >
          <EnvelopeClosedIcon/>
        </a>
      </Button>
    </div>
  </div>
)
