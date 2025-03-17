import { useTheme } from "@mui/material/styles";
import { motion, useInView, useAnimation} from "framer-motion"
import { ReactNode, useEffect, useRef  } from "react";
import { SxProps, Theme } from "@mui/material/styles";
import { Box } from "@mui/material";

interface Props{
    children: ReactNode;
    width?: "100%" | "fit-content";
    height?:"100%" | "fit-content"
    SelectionSlidAnimation?:boolean;
    delay?: number;
    sx?: SxProps<Theme>;
}

export const Reveal = ({ children, width="fit-content",height="fit-content", SelectionSlidAnimation=false, delay, sx}: Props)=>{


    const ref = useRef(null);
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const isInView = useInView(ref, {once:true});
    const theme = useTheme();

    // Check if the child is an <img> element
//   const isImage = React.Children.toArray(children).some(
//     (child) => (child as ReactElement)?.type === "img",
//   );


    useEffect(()=>{
        if(isInView)
        {
            mainControls.start("visible")
            slideControls.start("visible")

        }
    }, [isInView])

    return (
        <Box ref={ref} sx={{...sx, position:"relative", width, height}}>
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <motion.div
                    variants={{
                        hidden:{opacity:0, y:75},
                        visible:{opacity:1, y:0}
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{duration:0.5, delay: delay || 0.25}}
                    style={{ position: 'relative', width: '100%', height: '100%', display: "flex", justifyContent: "center", alignItems: "center", }}
                >
                    {children}
                </motion.div>

                {SelectionSlidAnimation && (
                    <motion.div
                        variants={{
                            hidden:{left:0},
                            visible:{left:"100%"}
                        }}
                        initial="hidden"
                        animate={slideControls}
                        transition={{duration:0.5, ease:"easeIn"}}
                        style={{
                            position:"absolute",
                            top:0,
                            bottom:0,
                            left:0,
                            right:0,
                            zIndex:20,
                            background:theme.palette.primaryBlue.main,
                        }}
                    />
                )}
            </Box>
        </Box>
    )
}