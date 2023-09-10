import { Grid, Link, Stack, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";

interface BlogTypes {
    key: number;
    url: string;
    title: string
    views: number;
    readTime: number
}

export default function Blog(props: BlogTypes) {
    return (
    <>
    <Link
    key={props.key}
    variant="body1"
    underline="none"
    rel="noopener"
    target="_blank"
    href={props.url}
    >
    <Grid
        container
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
        sx={{
        // background: themes.palette.secondary.main,
        background: "#262626",
        height: "100%",
        p: '1rem 0 1rem 0',
        border: "1px solid #404040",
        borderRadius: 1,
        textTransform: "none",
        fontWeight: "bold",
        color: "lightgray",
        }}
    >
        <Grid item xs>
        <Grid container spacing={1} alignItems="center" pl={1} direction='row'>
            <Grid item xs>
            <Stack direction="column">
                <Typography
                variant="body1"
                fontWeight="bold"
                lineHeight={1.1}
                color='inherit'
                >
                {props.title}
                </Typography>
                <Typography pt={0.5} variant="body2" lineHeight={1.3}>
                {props.views} views • {props.readTime} min read
                </Typography>
            </Stack>
            </Grid>
        </Grid>
        </Grid>

        <Grid item xs='auto' pr={1} justifyContent='flex-end'>
        <CallMadeIcon />
        </Grid>
    </Grid>
    </Link>
    </>)
}