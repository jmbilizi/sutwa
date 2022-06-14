import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
} from "@mui/icons-material";

export const drawerContent = (menuIconAndLogo) => (
  <div>
    {menuIconAndLogo}
    <Divider />
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {["All mail", "Trash", "Spam"].map((Text, Index) => (
        <ListItem button key={Text}>
          <ListItemIcon>
            {Index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={Text} />
        </ListItem>
      ))}
    </List>
  </div>
);
