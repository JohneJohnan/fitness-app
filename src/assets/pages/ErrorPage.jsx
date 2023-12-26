import { Sheet, Typography } from "@mui/joy";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Sheet sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Typography level="h1">ارور داریم چه اروری!</Typography>
      <Typography level="h3">{error.statusText || error.message}</Typography>
    </Sheet>
  );
}
