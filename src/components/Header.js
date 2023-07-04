import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'
const Header = ({title, onAdd, addTask}) => {
  const onCli = () => {
    console.log('Click')
  }
  const location = useLocation()
  return (
    <header className='header'>
      <h1 >{title}</h1>
      {location.pathname==='/' && (<Button color ={addTask? 'red': 'green'} text={addTask? 'Close' : 'Add'} onClickprop={onAdd} />)}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
// CSS in Js
// const headingStyle = {
//   color: 'red', backgroundColor: 'black'
// }
export default Header
