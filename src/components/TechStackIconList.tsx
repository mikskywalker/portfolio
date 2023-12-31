import { Fade, Icon, Grid } from '@mui/material';
import { ReactComponent as TypeScriptLogo } from '../assets/mikspics/icons8-typescript.svg'
import { ReactComponent as GitHubLogo } from '../assets/mikspics/icons8-github.svg'
import { ReactComponent as MuiLogo} from '../assets/mikspics/icons8-material-ui.svg'
import { ReactComponent as ReactLogo} from '../assets/mikspics/icons8-react.svg'
import { ReactComponent as SourceTreeLogo} from '../assets/mikspics/icons8-sourcetree.svg'
import { ReactComponent as VSLogo} from '../assets/mikspics/icons8-visual-studio.svg'
import { ReactComponent as WebexLogo } from '../assets/mikspics/icons8-cisco-webex-meetings.svg'
import { ReactComponent as BootstrapLogo } from '../assets/mikspics/icons8-bootstrap.svg'
import { ReactComponent as ChakraUILogo } from '../assets/mikspics/icons8-chakra-ui.svg'
import { ReactComponent as ChatGPTLogo } from '../assets/mikspics/icons8-chatgpt.svg'
import { ReactComponent as GitLabLogo } from '../assets/mikspics/icons8-gitlab.svg'
import { ReactComponent as JSLogo } from '../assets/mikspics/icons8-javascript.svg'
import { ReactComponent as JiraLogo } from '../assets/mikspics/icons8-jira.svg'
import { ReactComponent as ReduxLogo} from '../assets/mikspics/icons8-redux.svg'
import { ReactComponent as SlackLogo} from '../assets/mikspics/icons8-slack.svg'

// i'm thinking of using this someday... 

export default function TechStack() {
const logos = [
    ReactLogo,
    TypeScriptLogo,
    MuiLogo,
    GitHubLogo,
    SourceTreeLogo,
    VSLogo,
    ReduxLogo,
    ChakraUILogo,
    BootstrapLogo,
    JSLogo,
    GitLabLogo,
    SlackLogo,
    WebexLogo,
    JiraLogo,
    ChatGPTLogo,
]
//  transitionDelay: `${index * 50}ms` delays the preview of each icon :P
    return (
      <Grid container spacing={1} sx={{ fontSize: "2rem" }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <Fade in style={{transitionDelay: `${index * 300}ms`}}>
              <Icon  component={logo} fontSize="inherit" />
            </Fade>
          </Grid>
        ))}
      </Grid>
    );
}