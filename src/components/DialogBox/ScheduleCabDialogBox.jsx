import '../../styles.css';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as Dialog from '@radix-ui/react-dialog';

const ScheduleCabDialogBox = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">Add Address Details</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add Address details</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Add your address details and Pickup schedule. Click save when you are done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="city">
              City
            </label>
            <input className="Input" id="city" defaultValue="Gurgaon" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="area">
              Sector/Area
            </label>
            <input className="Input" id="area" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="address">
              Address
            </label>
            <input className="Input" id="address" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="pincode">
              Pin code
            </label>
            <input className="Input" id="pincode" />
          </fieldset>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="timePicker">
                Pickup time
              </label>
              <TimePicker />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="datePicker">
                Pickup Date
              </label>
              <DatePicker />
            </fieldset>
          </LocalizationProvider>
          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <button className="Button green">Save</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close"></button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ScheduleCabDialogBox;
