const SearchBar = (props) => {
  const { handleChangeName, handleSearch } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <label className="form-label">Nama Mobil</label>
          <input
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type Cars Name..."
            onChange={(e) => handleChangeName(e)}
          />
          <datalist id="datalistOptions"></datalist>
        </div>
        <div className="col-3">
          <label for="exampleDataList" class="form-label">
            Kategori
          </label>
          <div className="input-group ">
            <select
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option selected>Choose...</option>
              <option value="1">True</option>
              <option value="2">False</option>
            </select>
          </div>
        </div>
        <div className="col-3">
          <label for="exampleDataList" class="form-label">
            Harga
          </label>
          <div className="input-group">
            <select
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option selected>Choose...</option>
              <option value="1">Tersedia</option>
              <option value="2">Disewa</option>
            </select>
          </div>
        </div>
        <div className="col-3">
          <label for="exampleDataList" class="form-label">
            Status
          </label>
          <div className="input-group">
            <select
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option selected>Choose...</option>
              <option value="1">Tersedia</option>
              <option value="2">Disewa</option>
            </select>
          </div>
          <button onClick={handleSearch} class="btn btn-success" type="button">
            Pilih Mobil
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
