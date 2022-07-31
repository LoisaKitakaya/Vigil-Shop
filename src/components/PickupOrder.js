const PickupOrder = () => {
  return (
    <form className="card tab-card">
      <p className="text-center text-muted">We love visitors</p>
      <div className="mb-3">
        <label for="pin" className="form-label float-start">
          Personal identification
        </label>
        <input
          type="text"
          name="pin"
          className="form-control"
          placeholder="e.g. National ID no or Passport no"
        />
      </div>
      <div className="mb-3">
        <label for="phone" className="form-label float-start">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          className="form-control"
          placeholder="e.g. +254 725 131 828"
        />
      </div>
      <div className="mb-3">
        <label for="misc" className="form-label float-start">
          Message for the seller
        </label>
        <textarea
          className="form-control"
          rows="8"
          placeholder="Comments/extra voluntary information"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-outline-dark container-fluid">
        Create order
      </button>
      <br />
      <div className="form-text text-center">
        <em>
          We'll never share your information with anyone else. Your privacy is
          our priority.
        </em>
      </div>
    </form>
  );
};

export default PickupOrder;
