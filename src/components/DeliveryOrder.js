const DeliveryOrder = () => {
  return (
    <form className="card tab-card">
      <p className="text-center text-muted">Most convenient option</p>
      <div class="mb-3">
        <label for="city" class="form-label float-start">
          City
        </label>
        <input
          type="text"
          name="city"
          class="form-control"
          placeholder="your city"
        />
      </div>
      <div class="mb-3">
        <label for="address" class="form-label float-start">
          Address
        </label>
        <input
          type="text"
          name="address"
          class="form-control"
          placeholder="e.g. town, estate, house no, close landmark"
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

export default DeliveryOrder;
