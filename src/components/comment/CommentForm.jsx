import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { SEND_COMMENT } from "../../graphql/mutations";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: { name, text, email, slug },
  });

  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
      toast.success("کامنت ارسال شد و منتطر تایید میباشد", {
        position: "top-center",
      });
      setName("");
      setEmail("");
      setText("");
    } else {
      toast.warn("تمام فیلد هارو پرکن", { position: "top-center" });
    }
  };

  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", py: 1, mt: 5 }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          value={name}
          variant="outlined"
          label="نام کابری"
          sx={{ width: "100%" }}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          value={email}
          variant="outlined"
          label="ایمیل"
          sx={{ width: "100%" }}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          value={text}
          variant="outlined"
          label="متن کامنت"
          sx={{ width: "100%" }}
          onChange={(e) => setText(e.target.value)}
          minRows={4}
          multiline
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
      
    </Grid>
  );
}

export default CommentForm;
