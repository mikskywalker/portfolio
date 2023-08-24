import { Chip } from "@mui/material";

interface CoolChipTypes {
    logo?: string,
    title?: string,
    altText?: string,
    size?: 'default' | 'large'
    variant?: 'logo' ,
    imgWidth?: string | number,
    imgHeight?: string | number
}
// note: cannot not use this inside <Typography />
export default function CoolChip(props: CoolChipTypes) {
    return (
        <Chip
        avatar={
          <img
            src={props.logo}
            alt={props.altText}
            style={{
                // makes photo circular only if logo by default
              borderRadius: props.variant === 'logo' ? undefined : 100,
              // if variant is logo, use custom width and height
              // this makes the photo bigger
              width:  props.imgWidth ? props.imgWidth :"20px",
              height:   props.imgHeight ? props.imgHeight  :"20px",
            }}
          />
        }
        label={props.title}
        sx={{
          background: "#1A1A1A",
          color: "lightgray",
          border: "1px solid lightgrey",
          borderRadius: "5px",
          height: props.size === 'large' ? '3rem' : undefined,
        }}
      />
    )
}