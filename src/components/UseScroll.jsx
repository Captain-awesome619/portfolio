import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
/**Experience section */
export const UseScroll = (thresh = 0.2) =>{
    const controls = useAnimation();
    const [element,view] = useInView({threshold: thresh});

if (view) {
    controls.start("show");
}
else{
    controls.start("hidden");
}
return [element,controls];
};

