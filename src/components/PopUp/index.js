import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const PopUp = props => {
  const {logoutButton} = props
  return (
    <div>
      <Popup modal trigger={<button type="button">Logout</button>}>
        {close => (
          <>
            <p>Are you sure, you want to logout</p>

            <button type="button" onClick={() => close()}>
              Cancel
            </button>
            <button type="button" onClick={logoutButton}>
              Confirm
            </button>
          </>
        )}
      </Popup>
    </div>
  )
}

export default PopUp
