import { AddOutlined, MailOutline } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quo provident perferendis hic magni modi temporibus accusamus perspiciatis. Quia velit consectetur quibusdam a magni vitae doloribus dolorum accusamus blanditiis fugiat.</Typography> */}
      <NoteView />

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  );
};
