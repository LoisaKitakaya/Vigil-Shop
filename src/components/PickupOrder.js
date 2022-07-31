const PickupOrder = () => {
  return (
    <form className="card tab-card">
      <p className="text-center text-muted">We love visitors</p>
      <div class="mb-3">
        <label for="pin" class="form-label float-start">
          Personal identification
        </label>
        <input
          type="text"
          name="pin"
          class="form-control"
          placeholder="e.g. National ID no or Passport no"
        />
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label float-start">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          class="form-control"
          placeholder="e.g. +254 725 131 828"
        />
      </div>
      <div class="mb-3">
        <label for="misc" class="form-label float-start">
          Message for the seller
        </label>
        <textarea
          class="form-control"
          rows="8"
          placeholder="Comments/extra voluntary information"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-outline-dark container-fluid">
        Register
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
