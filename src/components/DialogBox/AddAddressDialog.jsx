import '../../styles.css';
import * as Dialog from '@radix-ui/react-dialog';
const AddAddressDialog = () => {
  console.log('I got called');
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
            Add your address details. Click save when you are done.
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

export default AddAddressDialog;
