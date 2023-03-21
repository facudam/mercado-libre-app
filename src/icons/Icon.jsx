import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const Icon = ({ styles, icon }) => {
  return (
    <FontAwesomeIcon classname={ styles }  icon={ icon } />
  )
}
