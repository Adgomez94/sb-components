import './mylabel.css'
import { AllCaps } from '../stories/components/MyLabel.stories';

export interface MyLabelProps {
  /**
   * Este es el texto
   */
  label:string
  /**
   * Este es el tamaño por defecto 'Normal'
   */
  size: 'normal'|'h1'|'h2'|'h3'
  /**
   * Capitalizar texto
   */
  allcaps?:boolean
  /**
   * Capitalizar texto
   */
  color?: 'primary'|'secondary' | 'tertiary'
  /**
  * Color personalizado
  */
  fontColor?:string
}

const MyLabel = ({
  label = 'No Label',
  size= 'normal',
  color = 'primary',
  allcaps = false,
  fontColor = ''
}:MyLabelProps ) => {
  return (
    <span
      style={{color: fontColor}} 
      className={`label ${size} text-${color}`}>
      { allcaps ? label.toUpperCase() : label }
    </span>
  )
}

export default MyLabel