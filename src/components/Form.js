export const Form = () => {
  return (
    <>
      <form>
        <label>
          search here:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <section className="dropdown">
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">
            Coconut
          </option>
          <option value="mango">Mango</option>
        </select>
      </section>
    </>
  );
};
