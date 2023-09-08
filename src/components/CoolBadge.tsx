
// I can use this badge if i want a chip like component that can be included or nested inside the typograph component

import { Icon, Link } from "@mui/material";
import { FunctionComponent, SVGProps } from "react";



interface BadgeTypes {
    image?: string;
    icon?: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined; }>;
    title: string;
    url?: string;
    size: 'default' | 'large' 
}

// choose one only, either image or icon

export default function CoolBadge(props: BadgeTypes) {
    return (
        <Link
        href={props.url}
        target="_blank"
        rel="noopener"
        sx={{
          width: "auto",
          display: "inline-flex",
          alignItems: 'center',
          background: "#1A1A1A",
          color: "lightgray",
          border: "1px solid #404040",
          borderRadius: "5px",
          verticalAlign: "middle",
          px: 1,
          height: props.size === 'large' ? '3rem' : undefined
          // pt: .3
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
          {props.image && 
          <img
            alt='logo'
            src={props.image}
            width="20px"
            height="auto"
            style={{ marginRight: "5px", borderRadius: 100 }}
          />}
          
             {props.icon && 
             <Icon  
             component={props.icon} 
             fontSize="inherit" 
             style={{ marginRight: "5px", borderRadius: 100 }}
             />}

         {props.title}
        </span>
      </Link>
    )
}