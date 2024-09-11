import { extendTheme } from "@chakra-ui/react";
import styles from './styles'

const overrides = extendTheme({
    ...styles
})

export default overrides;
