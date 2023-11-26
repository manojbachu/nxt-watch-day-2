import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import {SectionsList, Section, Icon} from './styledComponents'

const Sections = () => (
  <SectionsList>
    <Link to="/" style={{textDecoration: 'none'}}>
      <Section>
        <Icon>
          <AiFillHome />
        </Icon>
        Home
      </Section>
    </Link>
    <Link to="/" style={{textDecoration: 'none'}}>
      <Section>
        <Icon>
          <HiFire />
        </Icon>
        Trending
      </Section>
    </Link>
    <Link to="/" style={{textDecoration: 'none'}}>
      <Section>
        <Icon>
          <SiYoutubegaming />
        </Icon>
        Gaming
      </Section>
    </Link>
    <Link to="/" style={{textDecoration: 'none'}}>
      <Section>
        <Icon>
          <RiMenuAddFill />
        </Icon>
        Saved Videos
      </Section>
    </Link>
  </SectionsList>
)

export default Sections
