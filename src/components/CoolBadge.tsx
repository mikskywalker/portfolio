
// I can use this badge if i want a chip like component that can be included or nested inside the typograph component

import { Link } from "@mui/material";

interface BadgeTypes {
    image: string,
    title: string
}


export default function CoolBadge(props: BadgeTypes) {
    return (
        <Link
        sx={{
          width: "auto",
          display: "inline-flex",
          alignItems: 'center',
          background: "#1A1A1A",
          color: "lightgray",
          border: "1px solid lightgrey",
          borderRadius: "5px",
          verticalAlign: "middle",
          px: 1
        }}
        underline="none"
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          <img
            src={props.image}
            width="20px"
            height="auto"
            style={{ marginRight: "5px", borderRadius: 100 }}
          />
         {props.title}
        </span>
      </Link>
    )
}