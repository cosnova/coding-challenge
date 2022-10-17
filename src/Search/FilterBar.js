import brands from './models/brands';

const FilterBar = (props) => (
  <div className="filterbar">
    <div className="filterbar__filter">
      <label className="filterbar__label" htmlFor="query">Produkttyp:</label>
      <input
        id="query"
        placeholder="Wonach suchst du?"
        className="filterbar__input"
        type="text"
        onChange={(e) => props.onQueryChange(e.target.value)}
        value={props.query}
      />
    </div>

    <div className="filterbar__filter">
      <label className="filterbar__label" htmlFor="brand">Marke:</label>
      <select
        id="brand"
        className="filterbar__select"
        onChange={(e) => props.onBrandChange(e.target.value)}
        defaultValue={props.brand}
      >

        {brands.map((brand, i) => {
          return <option key={brand}>{brand}</option>
        })}

      </select>
    </div>
  </div>
);

export default FilterBar;
