import React, { useState } from 'react';

function AddContactModal({ handleNewContact }) {
  const [contactName, setContactName] = useState('');

  const handleSubmit = () => {
    if (contactName.trim() !== '') {
      handleNewContact(contactName);
      setContactName('');
    }
  };

  return (
    <div className="modal" id="addModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add new contact</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name or Phone number"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContactModal;
